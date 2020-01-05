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
    //本地加载请求静态json文件的形式
    //this.axios.get('/mock/user/login.json').then((res)=>{
    // this.res=res;
   //s });
    //本地集成mockjs实现数据mock
    //this.axios.get('/user/login').then((res)=>{
    //  this.res=res;
   // });
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
