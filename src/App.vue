<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage/index'
export default {
  name: 'app',
  component:{

  },
  data(){
    return {}
  },
  mounted(){
    storage.setItem('a',1);
    //storage.setItem('user',{a:1});
    storage.setItem('abc',{a:1},'user');
    storage.clear('abc','user');
  }
}

</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
