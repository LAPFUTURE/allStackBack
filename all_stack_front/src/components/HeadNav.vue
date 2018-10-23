<template>
    <header class="head-nav">
        <el-row>
            <el-col :span="6" class="logo-containner">
               <img src="../assets/github.jpg" class="logo">
               <span class="title">LAP ManageSystem</span>
            </el-col>
            <el-col :span="6" class="user">
                    <img src="user.avatar" class="avator">
            </el-col>
        </el-row>
    </header>
</template>

<script>
    export default{
        name:'head-nav',
        components:{}
    }
</script>

<style scoped>
    .head-nav{
        width:100%;
        height: 60px;
        min-width: 600px;
        /* padding:5px; */
        background: rgb(64, 158, 255);
    }
    .logo-containner{
        height:60px;

    }
    .logo{
        width: 60px;
        height: 60px;
    }
    .title{
        display: inline-block;
        line-height: 30px;
        height: 30px;
    }
</style>