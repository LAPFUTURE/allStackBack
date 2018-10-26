<template>
    <div>
        <HeadNav></HeadNav>
        <left></left>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import HeadNav from "../components/HeadNav"
    import Left from '../components/Left.vue'
    export default{
        name:'index',
        components:{
            HeadNav:HeadNav,
            left:Left
        }
    }
</script>
<style>
    .content{
        background-image: url(../assets/sea.jpg);
        background-size: 100% 100%;
        height: 100%;
        min-height: 720px;
        overflow: hidden;
        max-width: 300;
        margin-left: 200px;
    }
</style>

