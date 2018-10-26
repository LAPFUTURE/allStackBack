<template>
    <div class="register">
        <div class="form_container">
            <div class="title">Manage System</div>
                <el-form :model="loginUser" :rules="rules" ref="loginUser" label-width="80px" class="demo-ruleForm">
                    <el-form-item label="邮箱" prop="email">
                        <el-input v-model="loginUser.email"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="loginUser.password" type="password"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submitForm('loginUser')">登录</el-button>
                        <el-button type="warning" @click="resetForm('loginUser')">重置</el-button>
                    </el-form-item>
                    <div class="bottom">
                        <p>还没有账号?现在<router-link to="/register">注册=></router-link>
                        </p>
                    </div>
                </el-form>
        </div>
    </div>
</template>

<script>
    import jwt_decode from 'jwt-decode'

    export default {
        name: 'register',
        components: {},
        data() {
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
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.$axios.post('/api/users/login', this.loginUser)
                            .then((res) => {
                                let { token } = res.data;
                                localStorage.setItem('eleToken', token);//存储token
                                let decoded = jwt_decode(token);//解析token
                                this.$store.dispatch('setAuthenticated',!this.isEmpty(decoded)); 
                                this.$store.dispatch('setUser',decoded);
                                
                                this.$message({
                                    message: '登录成功',
                                    type: 'success'
                                });
                                this.$router.push('/index');
                            })
                    }
                })
            },
            resetForm(formName){
                this.$refs[formName].resetFields();
            },
            isEmpty(value){
                return(
                    value === undefined || 
                    value === null ||
                    (typeof value === "object" && Object.keys(value).length === 0) ||
                    (typeof value === "string" && value.trim().length === 0)
                )
            }
        }
    }
</script>

<style scoped>
    .register {
        position: absolute;
        width: 100%;
        height: 100%;
        background: url(../assets/bg.jpg) no-repeat center center;
        background-size: 100% 100%;
    }
    .form_container {
        background-color: rgb(244,244,244);
        opacity: 0.95;
        width: 450px;
        height: 300px;
        margin: 7% auto;
        padding: 40px;
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

    .form_container .content {
        background-color: rgb(245, 245, 245);
        border-radius: 5px;
        padding: 40px 35px 20px 25px;
    }

    .bottom {
        text-align: right;
    }

    .bottom a {
        text-decoration: none;
        color: rgb(64, 158, 255);
    }
</style>