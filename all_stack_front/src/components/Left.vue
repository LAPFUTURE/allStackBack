<template>
    <el-row class="tac">
        <el-col :span="2">
            <el-menu default-active="2" class="el-menu-vertical-demo" 
                background-color="#409EFF" text-color="#ffffff" active-text-color="#ffffff">
                <el-menu-item index="0">
                        <i class="el-icon-menu"></i>
                        <span slot="title"></span><router-link to="/home" class="ahref">Home</router-link></span>
                </el-menu-item>
                <el-menu-item index="1">
                        <i class="el-icon-bell"></i>
                        <span slot="title"></span><router-link to="/foodselector" class="ahref">Eating</router-link></span>
                </el-menu-item>
                <template v-for="item in items">
                    <el-submenu v-if="item.children" :index="item.path" :key="item.path" background-color="#409EFF" active-text-color="#ffffff">
                        <template slot="title">
                            <i :class="item.icon" style="margin-right:5px;"></i>
                            <span solt="title">{{ item.name }}</span>
                        </template>
                        <router-link v-for="(citem,cindex) in item.children" :to="citem.path" :key="cindex">
                            <el-menu-item :index="citem.path">
                                <span slot="title" style="margin-left:60px;">{{ citem.name }}</span>
                            </el-menu-item>
                        </router-link>
                    </el-submenu>
                </template>
            </el-menu>
        </el-col>
    </el-row>
</template>
<script>
    export default {
        name:"left",
        data(){
            return {
                items:[
                    {   
                        icon:'el-icon-edit',
                        name:'Fundus',
                        path:'fund',
                        children:[{
                            path:'/fundlist',name:'Control'
                        }]
                    },
                    {   
                        icon:'el-icon-info',
                        name:'Infos',
                        path:'info',
                        children:[{
                            path:'/infoshow',name:'Personal'
                        }]
                    }
                ]
            }
        },
    }
</script>
<style scoped>
    .el-menu-vertical-demo{
        width: 200px;
        position: absolute;
        
        min-height: 720px;
        text-align: center;
        

        border-right: 0px;
    }
    .ahref{
        height: 17.6px;
        line-height: 17.6px;
        text-decoration: none;
        color: rgb(240,240,240);
    }
    a{
        text-decoration: none;
    }
</style>