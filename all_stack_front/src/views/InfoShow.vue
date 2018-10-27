<template>
    <div class="infoshow">
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="8" class="left">
                <div class="avatar-container">
                    <img v-bind:src="user.avatar" class="avatar">
                </div>
            </el-col>
            <el-col :span="16" class="right">
                <div class="name"><i class="el-icon-edit"> {{ user.name }}</i></div>
                
                <div class="identity"><i class="el-icon-setting"></i> {{ user.identity }}</div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'infoshow',
        components: {
            
        },
        computed:{
            user(){
                return this.$store.getters.user;
            }
        }
    }
</script>
<style scoped>
    .infoshow {
    }
    .avatar-container{
        text-align: center;
        margin-top:50%;
    }
    .avatar{
        border-radius: 50%;
    }
    .left{
        opacity: 0.50;
        background-color:  rgb(240,240,240);
        min-height: 720px;
    }
    .right{
        opacity: 0.75;
        background-color: transparent;
    }
    .name{
        font-size: 20px;
        margin-left: 5%;
        margin-top: 35%;
        color:#000;
    }
    .identity{
        font-size:20px;
        margin-left: 5%;
        margin-top:3%; 
        color:#000;
    }
</style>