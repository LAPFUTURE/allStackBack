<template>
    <div class="foodselector">
        <!-- <p>{{ nowTime }}</p> -->
        <button @click="addfood()">addfood</button>
        <form ref="fileform">
            <input type="file" name="file"/>
            <input type="submit" @click="uploadFile" value="提交"/>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'foodselector',
        components: {},
        data(){
            return {
               nowTime:new Date(),
            }
        },
        created(){
            let timer = setInterval(function(){
                    this.nowTime = new Date();
                },1000);
        },
        methods: {
            addfood(){
                this.$axios.post("/api/food/addshop",{"shop":"小米家",times:5,"which":"dinner"})
                .then((res)=>{
                    console.log(res.data);
                })
                .catch((err)=>{
                    console.log("err:",err);
                })
            },
            uploadFile(ev){
                let formData = new FormData(this.$refs['fileform']);
                // console.log(formData.get('file'));
                this.$fileAxios.post("http://www.connectyoume.top:5001/api/food/fileupload",formData).
                then((response)=>{
                    console.log(response);
                });
                ev.preventDefault();
                return false;
            },

        },
        computed:{
        }
    }
</script>
<style>
    .foodselector {
        border: 1px solid black;
        padding: 10px;
        margin: 10px;
    }
</style>