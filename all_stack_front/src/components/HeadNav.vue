<template>
    <header class="head-nav">
        <img :src="user.avatar" class="avatar">
        <el-row>
            <el-col :span="3" class="logo-containner">
               <img src="../assets/bg.jpg" class="logo">
            </el-col>
            <el-col :span="18" class="center">
               <div class="title">LAP ManageSystem</div>
            </el-col>
            <el-col :span="3" class="right">
                    <div class="welcome">
                        <p>Welcome,{{ user.name }}</p>
                    </div>
                    <div class="dropdown">
                        <el-dropdown @command="handleCommand" trigger="click">
                            <span class="el-dropdown-link">
                            <i class="el-icon-arrow-down el-icon--right"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="info">Personal</el-dropdown-item>
                                <el-dropdown-item command="logout">Logout</el-dropdown-item>
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
        height: 10vh;
        min-width: 600px;
        margin-right: 10vh;
        background: #409EFF;
    }
    .avatar{
        height:10vh;
        position: absolute;
        right: 0px;
        float: right;
        background-color: black;
    }
    .logo-containner{
        height:10vh;
        padding-left:20px; 
        line-height: 10vh;
        text-align: center;
    }
    .logo{
        width: 10vh;
        height: 10vh;
        border-radius: 50%;
    }
    .title{
        display: inline-block;
        white-space: nowrap;
        height:10vh;
        line-height: 10vh;
    }
    .welcome{
        display: inline-block;
        height:10vh;
        line-height: 10vh;
        font-size: 16px;
    }
    .dropdown{
        display:inline-block;
        height:10vh;
        line-height: 10vh;
    }
    .right{
        text-align: right;
    }
    .center{
        text-align: center;
        font-size: 20px;
    }
</style>