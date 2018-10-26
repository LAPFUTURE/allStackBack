<template>
    <div class="register">
        <div class="form_container">
                <div class="title">Manage System</div>
                    <el-form :model="registerUser" :rules="rules" ref="registerUser" label-width="80px" class="demo-ruleForm">
                        <el-form-item label="用户名" prop="name"><el-input v-model="registerUser.name" aria-placeholder="请输入用户名"></el-input></el-form-item>
                        <el-form-item label="邮箱" prop="email"><el-input v-model="registerUser.email"></el-input></el-form-item>
                        <el-form-item label="密码" prop="password"><el-input v-model="registerUser.password" type="password"></el-input></el-form-item>
                        <el-form-item label="确认密码" prop="password2"><el-input v-model="registerUser.password2" type="password"></el-input></el-form-item>
                        <el-form-item label="选择身份">
                            <el-select v-model="registerUser.identity" placeholder="请选择身份">
                                <el-option label="用户" value="user">用户</el-option>
                                <el-option label="管理员" value="manage">管理员</el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('registerUser')">注册</el-button>
                            <el-button type="warning" @click="resetForm('registerUser')">重置</el-button>
                            <el-button type="success"><router-link to="/login">登录</router-link></el-button>
                        </el-form-item>
                    </el-form>
        </div>
    </div>
</template>

<script>
    export default{
        name:'register',
        components:{},
        data(){
            let validatePass = (rule,value,callback)=>{
                if(value !==this.registerUser.password){
                    callback(new Error("两次密码输入不一致"));
                }else{
                    callback();
                }
            };
            return {
                registerUser:{
                    name:"",
                    email:"",
                    password:"",
                    password2:"",
                    identity:""
                },
                rules:{
                    name:[{
                            required:true,
                            message:"用户名不能为空",
                            trigger:"blur"
                        },{
                            min:3,
                            max:20,
                            message:"长度在3-20个字符之间",
                            trigger:'blur'
                        }],
                    email:[{
                            type:"email",
                            required:true,
                            message:"邮箱格式不正确",
                            trigger:"blur"
                        }],
                    password:[{
                            required:true,
                            message:"密码不能为空",
                            trigger:"blur"
                        },{
                            min:6,
                            max:30,
                            message:"长度在6-20个字符之间",
                            trigger:"blur"
                        }],
                    password2:[{
                            required:true,
                            message:"确认密码不能为空",
                            trigger:"blur"
                        },{
                            min:6,
                            max:30,
                            message:"长度在6-20个字符之间",
                            trigger:"blur"
                        },{
                            validator: validatePass,
                            trigger:"blur"
                        }],
                    identity:[]
                }
            }
        },
        methods:{
            submitForm(formName){
                this.$refs[formName].validate((valid) => {
                    if(valid){
                        this.$axios.post('/api/users/register',this.registerUser)
                        .then((res) => {
                            this.$message({
                                message:'账号注册成功',
                                type:'success'
                            });
                            this.$router.push('/login');
                        })
                    }
                })
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    .register{
        position: absolute;
        width: 100%;
        height: 100%;
        background: url(../assets/bg.jpg) no-repeat center center;
        background-size: 100% 100%;
    }
    
    .form_container{
        background-color: rgb(244,244,244);
        opacity: 0.95;
        width: 675px;
        height: 450px;
        margin:3.5% auto;
        padding: 50px;
        border-radius: 5px;
        text-align: center;
    }
    .form_container .title {
       text-align: center;
       margin: 0 auto;
       margin-bottom: 50px;
       padding: 15px;
       font-family: 'Microsoft YaHei';
       font-weight: 600;
       font-size: 26px;
       color: #888888;

       white-space: nowrap;
    }
    a{
        text-decoration: none;
        color: white;
    }

    
</style>