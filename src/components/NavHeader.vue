<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米出行</a>  <!-- //javascript:;页面不会刷新 -->
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">IoT</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;" v-if="username">{{username}}</a>
           <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;">消息通知</a>
          <a href="javascript:;" class="myCart" @click="gotoCart"><span class="icon-cart"></span>购物车({{cartCount}})</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a v-bind:href="'/#/product/'+item.id" target="_blank">
                    <div class="productImg">
                      <img v-lazy="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="productName">{{item.name}}</div>
                    <div class="productPrice">{{item.price|currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>Redmi红米</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product" >
                  <a  target="_blank">
                    <div class="productImg">
                      <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'">
                    </div>
                    <div class="productName">小米壁画电视 65英寸</div>
                    <div class="productPrice">6999元</div>
                  </a>
                </li>
                <li class="product" >
                  <a  target="_blank">
                    <div class="productImg">
                      <img v-lazy="'/imgs/nav-img/nav-3-2.jpg'">
                    </div>
                    <div class="productName">小米全面屏电视E55A</div>
                    <div class="productPrice">1899元</div>
                  </a>
                </li>
                <li class="product" >
                  <a  target="_blank">
                    <div class="productImg">
                      <img v-lazy="'/imgs/nav-img/nav-3-3.png'">
                    </div>
                    <div class="productName">小米电视4A 32英寸</div>
                    <div class="productPrice">699元</div>
                  </a>
                </li>
                <li class="product" >
                  <a  target="_blank">
                    <div class="productImg">
                      <img v-lazy="'/imgs/nav-img/nav-3-4.jpg'">
                    </div>
                    <div class="productName">小米电视4A 55英寸</div>
                    <div class="productPrice">1799元</div>
                  </a>
                </li>
                <li class="product" >
                  <a  target="_blank">
                    <div class="productImg">
                      <img v-lazy="'/imgs/nav-img/nav-3-5.jpg'">
                    </div>
                    <div class="productName">小米电视4A 65英寸</div>
                    <div class="productPrice">2699元</div>
                  </a>
                </li>
                <li class="product" >
                  <a  target="_blank">
                    <div class="productImg">
                      <img v-lazy="'/imgs/nav-img/nav-3-6.png'">
                    </div>
                    <div class="productName">查看全部</div>
                    <div class="productPrice">查看全部</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="search">
          <div class="wrapper">
            <input type="text" name="rearch">
            <a href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    export default{
      name:'nav-header',
      data(){
        return {
          phoneList:[]
        }
      },
      computed:{
        username(){
          return this.$store.state.username;
        },
        cartCount(){
          return this.$store.state.cartCount;
        }
      },
      filters:{
        currency(val){
          if(!val) return '0.00';
          return '￥'+val.toFixed(2)+'元';

        }
      },
      mounted(){
        this.getProductList();
      },
      methods:{
        login(){
          this.$router.push('/login');
        },
        getProductList(){
          this.axios.get('/products',{
            params:{
              categoryId:'100012',
              //pageSize:6
            }
          }).then((res)=>{
            if(res.list.length>=6){
              this.phoneList=res.list.slice(0,6);
            }
          })
        },
        gotoCart(){
          this.$router.push('/cart');
        }
      }    
    }
</script>
<style lang="scss">
@import './../../resource/scss/config.scss';
@import './../../resource/scss/base.scss';
@import './../../resource/scss/mixin.scss';
  .header{
    .nav-topbar{
      background: #333;
      height: 39px;
      line-height: 39px;
      font-size: 12px;
      color: #b0b0b0;
      .container{
        a{
          display: inline-block;
          color: #b0b0b0;
          margin-right: 17px;
          height: 100%;
        }
        .myCart{
          width: 110px;
          text-align: center;
          background: #666;
          margin: 0;
          .icon-cart{
            @include bgImg(16px,12px,'/imgs/icon-cart.png')
            margin-right: 4px;
            vertical-align:middle;
          }
        }
      } 
    }
    .nav-header{
      .container{
        height: 112px;
        position: relative;
        .header-menu{
          display: inline-block;
          padding-left: 209px;
          width: 650px;
          .item-menu{
            display: inline-block;
            color: #333;
            font-weight: bold;
            font-size: 16px;
            line-height: 112px;
            margin-right: 20px;
            span{
              cursor: pointer;
            }
            .children{
              position: absolute;
              top: 112px;
              left: 0;
              width: 1226px;
              border: 1px solid #e5e5e5;
              box-shadow: 0px 7px 6px 0px rgba($color: #000000, $alpha: 0.11);
              background: #fff;
              z-index: 10;
              height: 0;
              opacity: 0;
              overflow: hidden;
              transition: height 0.5s;
              .product{
                float: left;
                width:16.6%;
                height: 220px;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                position: relative;
                &:before{
                  content: '';
                  position: absolute;
                  top: 28px;
                  right: 0;
                  border-left: 1px solid $colorF;
                  height: 100px;
                  width: 1px;
                }
                &:last-child:before{
                  display: none;
                }
                a{
                  display: inline-block;
                  img{
                    width: auto;
                    height: 110px;
                    margin-top: 26px;
                  }
                  .productName{
                    font-weight: bold;
                    margin: 19px auto;
                    color: $colorB;

                  }
                  .productPrice{
                    color: $colorA;

                  }
                }
                
              }
            }
            &:hover{
              color:$colorA;
              .children{
                height: 220px;
                opacity: 1;
            }
            } 
          }
        }
        .search{
          .wrapper{
            width: 318px;
            height: 50px;
            border: 1px solid #e0e0e0;
            display: flex;
            align-items:center;
            input{
              box-sizing: border-box;
              width: 264px;
              height: 50px;
              padding-left: 14px;
              border:none;
              border-right: 1px solid #e0e0e0;
            }
            a{
              @include bgImg(18px,18px,'/imgs/icon-search.png');
              margin-left: 18px;

            }
          }
        }
      }
    }
    
  }
</style>
