<template>
    <div class="fundlist">
        <div>
            <el-form :inline="true" ref="add_data">
                <el-date-picker v-model="begin" type="datetime" placeholder="选择开始时间"></el-date-picker>&nbsp;&nbsp;
                <el-date-picker v-model="end" type="datetime" placeholder="选择结束时间"></el-date-picker>&nbsp;&nbsp;
                <el-form-item>
                        <el-button type="primary"  v-on:click="filters()">筛选</el-button>                    </el-button>
                    </el-form-item>
                <el-form-item class="add" v-if="user.identity == 'admin'">
                    <el-button type="primary" size="mini" v-on:click="handleAdd()">添加</el-button>                    </el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table :data="tableData" style="width: 100%" v-if="tableData.length>0" class="opacity" height="520">
            <el-table-column fixed type="index" label="Num" width="75" align="center"></el-table-column>
            <el-table-column prop="date" label="Date" width="225" align="center">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="type" label="Type" width="125" align="center"></el-table-column>
            <el-table-column prop="describe" label="Describe" width="200" align="center"></el-table-column>
            <el-table-column prop="income" label="Income(+)" width="100" align="center">
                <template slot-scope="scope">
                    <span style="color:#009933;">{{ scope.row.income }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="expend" label="Expend(-)" width="100" align="center">
                <template slot-scope="scope">
                    <span style="color:#ff4400;">{{ scope.row.expend }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="cash" label="Now" width="100" align="center">
                <template slot-scope="scope">
                    <span style="color:rgb(64, 158, 255);">{{ scope.row.cash }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="remark" label="Remark" width="150" align="center"></el-table-column>
            <el-table-column prop="operation" label="Operation" fixed="right" align="center" v-if="user.identity == 'admin'">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-row :span="24">
             <div class="pagination">
                 <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="paginations.page_index" :page-sizes="paginations.page_sizes" :page-size="paginations.page_size" :layout="paginations.layout" :total="paginations.total">
                </el-pagination>
             </div>
        </el-row>
        <dialogs :lap="dialogs" v-on:update="getProfile" :formData="formData"></dialogs>
    </div>
</template>

<script>
    import Dialogs from '../components/Dialogs.vue'
    
    export default {
        name: 'fundlist',
        components: {
            dialogs:Dialogs
        },
        created() {
            this.getProfile();
        },
        computed(){
            user:this.$store.getters.user;
        },
        data() {
            return {
                formData: {
                    type:'',
                    describe:'',
                    income:'',
                    expend:'',
                    now:'',
                    remark:'',
                    id:''
                },
                begin:'',
                end:'',
                filterTableData:[],
                paginations:{
                    page_index:1,
                    total:0,
                    page_size:5,
                    page_sizes:[5,10,15,20],
                    layout:"total,sizes,prev,pager,next,jumper"
                },
                tableData: [],
                allTableData:[],
                dialogs:{"show":false,
                         "title":"",
                        "option":"edit"
                }
            }
        },
        methods: {
            filters(){
                if(!this.begin || !this.end){
                    this.$message({
                        type:"warning",
                        message:'请检查时间输入框'
                    })
                    this.getProfile();
                    return;
                };
                let begin = this.begin.getTime();
                let end = this.end.getTime();
                this.allTableData = this.filterTableData.filter( (item)=>{
                    let date = new Date(item.date);
                    let time = date.getTime();
                    return time >= begin && time<= end;
                });
                this.setPagination();
            },
            getProfile(){
                this.$axios.get("/api/profile/allProfile")
                    .then((res) => {
                        this.allTableData = res.data.profile;
                        this.filterTableData = res.data.profile;
                        this.setPagination();
                    })
                    .catch((err) => {
                        alert("页面发生错误，请刷新页面!");
                    })
            },
            handleAdd(){
                this.dialogs = {
                    "show" : true,
                    "title": "Add",
                    "option":"add"
                },
                this.formData = {};
            },
            handleEdit(index,row){
                this.dialogs = {
                    "show" : true,
                    "title": "Edit",
                    "option":"edit"
                };
                this.formData = {
                    type:row.type,
                    describe:row.describe,
                    income:row.income,
                    expend:row.expend,
                    now:row.now,
                    remark:row.remark,
                    id:row._id
                }
            },
            handleDelete(index,row){
                this.$axios.delete(`/api/profile/delete/${row._id}`)
                .then(res=>{
                    this.$message({
                        message:"删除成功",
                        type:"success"
                    });
                    this.getProfile();
                })
                .catch((err)=>{
                    this.$message({
                        message:"请重试",
                        type:"warning"
                    });
                })
            },
            handleCurrentChange(page){
                let index = this.paginations.page_size*(page - 1);
                let nums = this.paginations.page_size * page;
                let tables = [];
                for(let i = index;i<nums;i++){
                    if(this.allTableData[i]){
                        tables.push(this.allTableData[i]);
                    }
                    this.tableData = tables;
                }
            },
            handleSizeChange(page_size){
                this.paginations.page_index = 1;
                this.paginations.page_size = page_size;
                this.tableData = this.allTableData.filter((item,index)=>{
                    return index<page_size;
                })
            },
            setPagination(page){
                this.paginations.total = this.allTableData.length;
                this.paginations.page_index = 1;
                this.paginations.page_size = 5;
                this.tableData = this.allTableData.filter((item,index)=>{
                    return index < this.paginations.page_size;
                })
            }
        },

        computed: {
            user() {
                return this.$store.getters.user;
            }
        }
    }
</script>
<style scoped>
    .fundlist {
        padding: 20px;
    }
    .add{
        float: right;
        opacity: 0.75;
    }
    .opacity {
        opacity: 0.9;
    }
    .income{
        color: green;
    }
    .expend{
        color:red;
    }
    .pagination{
        text-align: right;
        background-color: rgb(64, 158, 255);
    }
</style>