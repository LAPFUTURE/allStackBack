<template>
    <el-row class="tac">
        <el-col :span="2">
            <el-menu default-active="2" class="el-menu-vertical-demo"
                background-color="#409EFF" text-color="#fff" active-text-color="#eeeeee">
                <el-menu-item index="0">
                    <i class="el-icon-menu"></i>
                    <span slot="title">Home</span>
                </el-menu-item>
                <template v-for="item in items">
                    <el-submenu v-if="item.children" :index="item.path" :key="item.path">
                        <template slot="title">
                            <i :class="'fa fa-margin '+item.icon"></i>
                            <span solt="title">{{ item.name }}</span>
                        </template>
                        <router-link v-for="(citem,cindex) in item.children" :to="citem.path" :key="cindex">
                            <el-menu-item :index="citem.path">
                                <span slot="title">{{ citem.name }}</span>
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
                        icon:'fa-money',
                        name:'资金管理',
                        path:'fund',
                        children:[{
                            path:'fundlist',name:'资金流水'
                        }]
                    },
                    {   
                        icon:'fa-asterisk',
                        name:'信息管理',
                        path:'info',
                        children:[{
                            path:'infoshow',name:'个人信息'
                        }]
                    },
                ]
            }
        },
    }
</script>