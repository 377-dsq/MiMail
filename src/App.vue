<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
//import storage from './storage/index'
export default {
  name: 'app',
  component:{

  },
  data(){
    return {
     
    }
  },
  mounted(){
    if (this.$cookie.get('useId')){
      this.getUser();
      this.getCartCount();
    }
    //本地加载请求静态json文件的形式
    //this.axios.get('/mock/user/login.json').then((res)=>{
    // this.res=res;
   //s });
    //本地集成mockjs实现数据mock
    //this.axios.get('/user/login').then((res)=>{
    //  this.res=res;
   // });
  },
  methods:{
    getUser(){
      this.axios.get('/user').then((res={})=>{
        this.$store.dispatch('saveUserName',res.username)
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res=0)=>{
        this.$store.dispatch('saveCartCount',res)
      })
    }
  }
}

</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/mixin.scss';
@import './assets/scss/button.scss';
@import './assets/scss/modal.scss';
</style>
