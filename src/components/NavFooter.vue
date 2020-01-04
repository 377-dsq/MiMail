<template>
    <div class="footer">
      <div class="footer-logo">
        <img src="/imgs/logo-footer.png" alt="">
        <p>小米商城</p>
      </div>
      <div class="footer-link">
        <a href="https://www.mi.com/" target="_blank">小米商城</a><span>|</span>
        <a href="https://www.miui.com/" target="_blank">MIUI</a><span>|</span>
        <a href="http://www.miliao.com/" target="_blank">米聊</a><span>|</span>
        <a href="https://www.duokan.com/" target="_blank">多看</a><span>|</span>
        <a href="https://xiaomi.tmall.com/" target="_blank">小米天猫店</a><span>|</span>
        <a href="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ded8d0e4a77d.html" target="_blank">小米商城用户协议</a>
      </div>
      <div class="copyright">
        Copyright ©2020 <span>mi.com</span> All Rights Reserved
      </div>
    </div>
</template>
<script>
    export default{
      name:'nav-footer'
    }
</script>
<style lang="scss">
.footer{
  height:234px;
  border-top:4px solid #f60;
  background-color: #333;
  color: #999;
  font-size: 16px;
  text-align: center;
  .footer-logo{
    margin:46px auto 31px auto;
    img{
      width:bottom 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link{
    a{
      color:#999;
      display: inline-block;
      margin:0 10px;
    }
  }
  .copyright{
    margin-top: 13px;
    span{
      color:#f60;
    }
  }
}
</style>