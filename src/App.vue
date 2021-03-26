<template>
  <div id="app">
    <div class="custom">
        <div class="main-component">
          <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components:{},
  methods:{
    componentRegister: function(){
      if (this.$route.name != "Register"){
        let username = localStorage.getItem("current_username");
        this.$route.push({name: "Register"});
      }
    }
  }
}
</script>

<style>
</style>
