<template>
    <div class="dialogs">
        <el-dialog width="72%" top="18vh" :title="lap.title" :visible.sync="lap.show" :show-close="true">
            <!-- <el-table :data="formData">
                <el-table-column property="date" label="Type" width="150"></el-table-column>
                <el-table-column property="name" label="Describe" width="200"></el-table-column>
                <el-table-column property="income" label="Income"></el-table-column>
                <el-table-column property="expend" label="Expend"></el-table-column>
                <el-table-column property="now" label="Now"></el-table-column>
                <el-table-column property="remark" label="Remark"></el-table-column>
            </el-table> -->
            <el-form :model="formData" ref="form" :rules="form_rules" label-width="120px">
                <el-form-item label="Type">
                    <el-select v-model="formData.type">
                        <el-option v-for="(formtype,index) in form_type_list" :key="index" :value="formtype">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="describe" label="Describe">
                    <el-input type="describe" v-model="formData.describe">
                    </el-input>
                </el-form-item>
                <el-form-item prop="income" label="Income">
                    <el-input type="income" v-model="formData.income">
                    </el-input>
                </el-form-item>
                <el-form-item prop="expend" label="Expend">
                    <el-input type="expend" v-model="formData.expend">
                    </el-input>
                </el-form-item>
                <el-form-item prop="now" label="Now">
                    <el-input type="now" v-model="formData.now">
                    </el-input>
                </el-form-item>
                <el-form-item prop="remark" label="Remark">
                    <el-input type="remark" v-model="formData.remark">
                    </el-input>
                </el-form-item>
            </el-form>

            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="submitForm('form')">确 定</el-button>
                <el-button @click="lap.show = false">取 消</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "dialogs",
        props: {
            lap: Object,
            formData:Object
        },
        data() {
            return {
                form_type_list:[
                    'Expend',
                    'Income'
                ],
                form_rules:{
                    describe:[{required:true,message:"描述不能为空",trigger:"blur"}],
                    income:[{required:false,}],
                    expend:[{required:false,}],
                    now:[{required:true,message:"余额不能为空",trigger:"blur"}],
                    remark:[{required:false}]
                }
            }
        },
        methods: {
            submitForm(form){
                this.$refs[form].validate((valid)=>{
                    if(valid){
                        const url = this.lap.option === 'add'?'add':`edit/${this.formData.id}`;
                        this.$axios.post("/api/profile/"+url,this.formData)
                        .then((res)=>{
                            if(res){
                                if(res.data.msg === 1){
                                    this.$message({
                                        message:"添加成功",
                                        type:"success"
                                    });
                                }else if(res.data.status === 1){
                                    this.$message({
                                        message:"修改成功",
                                        type:"success"
                                    });
                                }else{
                                    this.$message({
                                        message:"请重试",
                                        type:"warning"
                                    });
                                }
                                this.lap.show = false;
                                this.$emit("update");
                            }
                        })
                    }
                });
                
            }
        }
    }
</script>

<style scoped>
    .dialogs {
     
    }
</style>