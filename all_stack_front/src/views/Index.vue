<template>
    <div class="index">
        <HeadNav></HeadNav>
        <left></left>  
        <router-view></router-view>
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

