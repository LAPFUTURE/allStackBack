<template>
    <header class="head-nav">
        <img :src="user.avatar" class="avatar">
        <el-row>
            <el-col :span="2" class="logo-containner">
               <img src="../assets/bg.jpg" class="logo">
            </el-col>
            <el-col :span="19" class="center">
               <div class="title">LAP ManageSystem</div>
            </el-col>
            <el-col :span="3" class="right">
                    <div class="welcome">
                        <p>欢迎您,{{ user.name }}</p>
                    </div>
                    <div class="dropdown">
                        <el-dropdown @command="handleCommand" trigger="click">
                            <span class="el-dropdown-link">
                            <i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="info">个人信息</el-dropdown-item>
                                <el-dropdown-item command="logout">退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
            </el-col>
        </el-row>
        
    </header>
</template>

<script>
    export default{
        name:'head-nav',
        components:{},
        methods:{
            handleCommand(item){
                if(item === "info"){
                   this.showInfoList();
                }else if(item === "logout"){
                   this.logout();
                }
            },
            showInfoList(){
                this.$router.push("/infoshow");
            },
            logout(){
                localStorage.removeItem("eleTOken");
                this.$store.dispatch("clearCurrentState");
                this.$router.push("/login");
            }
        },
        computed:{
            user(){
                return this.$store.getters.user;
            }
        }
    }
</script>

<style scoped>
    .head-nav{
        /* width:100%; */
        height: 60px;
        min-width: 600px;
        margin-right: 60px;
        background: rgb(64, 158, 255);
    }
    .avatar{
        height:60px;
        position: absolute;
        right: 0px;
        float: right;
        background-color: black;
    }
    .logo-containner{
        height:60px;
        line-height: 60px;
    }
    .logo{
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    .title{
        display: inline-block;
        white-space: nowrap;
        height:60px;
        line-height: 60px;
    }
    .welcome{
        display: inline-block;
        height:60px;
        line-height: 60px;
        font-size: 16px;
    }
    .dropdown{
        display:inline-block;
        height:60px;
        line-height: 60px;
    }
    .right{
        text-align: right;
    }
    .center{
        text-align: center;
        font-size: 20px;
    }
</style>