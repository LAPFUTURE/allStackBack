<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
<script>
  import jwt_decode from 'jwt-decode'

  export default {
      name: 'app',
      components: {},
      created(){
        if(localStorage.eleToken){
          let decoded = jwt_decode(localStorage.eleToken);
          this.$store.dispatch('setAuthenticated',!this.isEmpty(decoded)); 
          this.$store.dispatch('setUser',decoded);
        }
      },
      methods: {
          isEmpty(value){
              return(
                  value === undefined || 
                  value === null ||
                  (typeof value === "object" && Object.keys(value).length === 0) ||
                  (typeof value === "string" && value.trim().length === 0)
              )
          }
      }
  }
</script>
<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
