<template>
    <div class="order-header">
      <div class="container clearfix">
        <div class="header-logo fl">
          <a href="/#/index"></a>
        </div>
        <div class="title fl">
          {{title}}
          <slot name="tip"></slot>
        </div>
        <div class="username fr">{{username}}</div>
      </div>
      
    </div>
</template>
<script>
    export default{
      name:'order-header',
      props:{
        title: String,
        username: String
      }
    }
</script>
<style lang="scss">
.order-header{
  border-bottom: 1px solid #f60;
  height: 112px;
  padding-top: 30px;
  background-color: #fff;
  box-sizing: border-box;
  .container{
    display:block;
    .title{
      display: inline-block;
      font-size:28px;
      color: #333;
      height: 55px;
      line-height: 55px;
      margin-left: 54px;
      font-weight: bold;
      span{
        font-size: 14px;
        color: #999;
        margin-left: 17px;
        font-weight: 200;
      }
    }
    .username{
      font-size: 16px;
      color: #666;
      font-weight: bold;
      height: 55px;
      line-height: 55px;
    }
  }
}
</style>