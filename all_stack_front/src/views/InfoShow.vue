<template>
    <div class="infoshow">
              
        <el-row type="flex" class="row-bg" justify="center">
            <el-col :span="8" class="left">
                    <div class="avatar-container"> 
                        <img v-bind:src="user.avatar" class="avatar">
                    </div>
            </el-col>
            <el-col :span="16" class="right">
                {{ user.name }}
                {{ user.identity }}
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
        background-image: url(../assets/sea.jpg);
        background-size: 100% 100%;
        height: 100%;
        width: 100%;
        min-height: 720px;
        overflow: hidden;
        min-width: 1280;
    }
    .avatar-container{
        text-align: center;
    }
    .left{
        border:1px solid black;
        opacity: 0.4;
        background-color: rgb(240,240,240);
        min-height: 720px;
    }
    .right{
        border:1px solid black;
        opacity: 0.1;
        background-color: rgb(240,240,240);
    }
</style>