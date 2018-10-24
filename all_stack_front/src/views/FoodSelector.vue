<template>
        <div class="index">
            <el-form :model="loginUser" :rules="rules" ref="loginUser" label-width="80px" class="demo-ruleForm">
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="loginUser.email"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginUser.password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('loginUser')">登录</el-button>
                    <el-button @click="resetForm('loginUser')">重置</el-button>
                </el-form-item>
                <div class="bottom">
                    <p>还没有账号?现在<router-link to="/register">注册=></router-link>
                    </p>
                </div>
            </el-form>
        </div>
    </template>
    
    <script>
        export default{
            name:'foodselector',
            components:{},
            data(){
                return {
                loginUser: {
                    email: "",
                    password: "",
                },
                rules: {
                    email: [{
                        type: "email",
                        required: true,
                        message: "邮箱格式不正确",
                        trigger: "blur"
                    }],
                    password: [{
                        required: true,
                        message: "密码不能为空",
                        trigger: "blur"
                    }, {
                        min: 6,
                        max: 30,
                        message: "长度在6-20个字符之间",
                        trigger: "blur"
                    }],
                }
            }
            },
            methods:{
                submitForm(formName) {
                }
            }
        }
    </script>
    
    