<template>
    <div class="fundlist">
        <div>
            <el-form :inline="true" ref="add_data">
                <el-form-item class="add">
                    <el-button type="primary" size="mini" v-on:click="handleAdd()">添加</el-button>                    </el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-table :data="tableData" style="width: 100%" v-if="tableData.length>0" class="opacity" max-height="450">
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
            <el-table-column prop="operation" label="操作" fixed="right" align="center">
                <template slot-scope="scope">
                    <el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <dialogs :dialogs="dialogs"></dialogs>
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
        data() {
            return {
                tableData: [],
                dialogs:{"show":false}
            }
        },
        methods: {
            getProfile(){
                this.$axios.get("/api/profile/allProfile")
                    .then((res) => {
                        this.tableData = res.data.profile;
                    })
                    .catch((err) => {
                        alert("页面发生错误，请刷新页面!");
                    })
            },
            handleAdd(){
console.log(this.dialogs.show);
                this.dialogs.show = true;
console.log(this.dialogs.show);

            },
            handleEdit(index,row){
                console.log(`index:${index},row:`,row);
            },
            handleDelete(index,row){
                console.log(`index:${index},row:`,row);
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
        opacity: 0.75;
    }
    .income{
        color: green;
    }
    .expend{
        color:red;
    }
</style>