<template>
    <div class="fundlist">
        <el-table :data="tableData" style="width: 100%" v-if="tableData.length>0" class="opacity" max-height="450">
            <el-table-column fixed type="index" label="Num" width="75" align="center"></el-table-column>
            <el-table-column prop="date" label="Date" width="250" align="center"></el-table-column>
            <el-table-column prop="type" label="Type" width="150" align="center"></el-table-column>
            <el-table-column prop="describe" label="Describe" width="250" align="center"></el-table-column>
            <el-table-column prop="income" label="Income(+)" width="150" align="center"></el-table-column>
            <el-table-column prop="expend" label="Expend(-)" width="150" align="center"></el-table-column>
            <el-table-column prop="cash" label="Cash" width="100" align="center"></el-table-column>
            <el-table-column prop="remark" label="Remark" width="150" align="center" fixed="right"></el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: 'fundlist',
        components: {},
        created(){
            this.getProfile();
        },
        data(){
            return{
                tableData:[]
            }
        },
        methods:{
            getProfile(){
               this.$axios.get("/api/profile/allProfile")
               .then((res)=>{
                  this.tableData = res.data.profile;
                  console.log(this.tableData);
               })
               .catch((err)=>{
                   console.log(err);
               })
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
    .fundlist {
        padding: 20px;
    }
    .opacity{
        opacity: 0.75;
    }
    
    
</style>