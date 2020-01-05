<template>
    <div class="index">
      <div class="container">
        <div class="swiper-box">
          <div class="nav-menu">
            <ul class="menu-wrap">
              <li class="menu-item">
                <a href="javascript:;">手机 电话卡</a>
                <div class="children">
                  <ul v-for="(item,index) in menuList" :key="index">
                    <li v-for="(sub,index) in item" :key="index">
                      <a :href="sub?'/#/product/'+sub.id:''">
                        <img :src="sub?sub.img:'imgs/item-box-1.png'" alt="">
                        {{sub?sub.name:'小米9'}}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="menu-item">
                <a href="javascript:;">电视 盒子</a>
                <div class="children">
                  <ul v-for="(item,index) in menuList" :key="index">
                    <li v-for="(sub,index) in item" :key="index">
                      <a :href="sub?'/#/product/'+sub.id:''">
                        <img :src="sub?sub.img:'imgs/item-box-1.png'" alt="">
                        {{sub?sub.name:'小米9'}}
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li class="menu-item">
                <a href="javascript:;">笔记本 显示器 平板</a>
                <div class="children"></div>
              </li>
              <li class="menu-item">
                <a href="javascript:;">家电 插线板</a>
                <div class="children"></div>
              </li>
              <li class="menu-item">
                <a href="javascript:;">出行 穿戴</a>
                <div class="children"></div>
              </li>
              <li class="menu-item">
                <a href="javascript:;">智能 路由器</a>
                <div class="children"></div>
              </li>
              <li class="menu-item">
                <a href="javascript:;">电源 配件</a>
                <div class="children"></div>
              </li>
              <li class="menu-item">
                <a href="javascript:;">健康 儿童</a>
                <div class="children"></div>
              </li>
              <li class="menu-item">
                <a href="javascript:;">耳机 音箱</a>
                <div class="children"></div>
              </li>
              <li class="menu-item">
                <a href="javascript:;">生活 箱包</a>
                <div class="children"></div>
              </li>
            </ul>
          </div>
          <swiper v-bind:options="swiperOption">
            <swiper-slide v-for="(item,index) in slideList" :key="index">  <!--key是必须的-->
            <a v-bind:href="'/#/product'+item.id"><img v-bind:src="item.img" alt=""></a>
            </swiper-slide>
            <!-- optional control -->
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
          </swiper>
        </div>
        <div class="ads-box">
          <a :href="'/#/product/'+item.id" v-for="(item,index) in adsList" :key="index">
            <img v-lazy="item.img" alt="">
          </a>
        </div>
        <div class="banner">
          <a href="/#/product/30"><img v-lazy="'/imgs/banner-1.png'" alt=""></a>
        </div>
      </div>
      <div class="product-box">
        <div class="container">
          <div class="title">手机</div>
          <div class="wrapper">
            <div class="banner-left">
              <a href="/#/product/35">
                <img v-lazy="'/imgs/mix-alpha.jpg'" alt="">
              </a>
            </div>
            <div class="list-box">
              <div class="list" v-for="(item,index) in phoneList" :key="index">
                <div class="item" v-for="(sub,i) in item" :key="i">
                  <span :class="{'tag new-pro':i%2==0}">{{i%2==0?'新品':''}}</span>
                  <span :class="{'tag kill-pro':i%2==1}">{{i%2==1?'秒杀':''}}</span>
                  <div class="item-img">
                    <img v-lazy="sub.mainImage" alt="">
                  </div>
                  <div class="item-info">
                    <h3>{{sub.name}}</h3>
                    <p>{{sub.subtitle}}</p>
                    <p class="price" @click="addCart(item.id)">{{sub.price|currency}}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <service-bar></service-bar>
    <modal title="提示" confirmText="查看购物车" btnType=1 modal='middel' v-bind:showModal="showModal" v-on:submit="gotoCart" v-on:cancel="showModal=false">
      <template v-slot:body>商品添加成功！</template>
    </modal>
    </div>
</template>
<script>
  import serviceBar from './../components/serviceBar'
  import {swiper,swiperSlide} from 'vue-awesome-swiper'
  import modal from './../components/modal'
  import 'swiper/dist/css/swiper.css'
    export default{
      name:'index',
      components:{
        swiper,
        swiperSlide,
        serviceBar,
        modal
      },
      data(){
        return {
          swiperOption:{
            autoplay:true,
            loop:true,
            effect:'cube',
            cubeEffect:{
              //slideShadows:true, 
              //shadow:true,
              shadowOffset:100,
              shadowScale:0.6
            },
            pagination:{
              el:'.swiper-pagination',
              clickable:true
            },
            navigation:{
              nextEl:'.swiper-button-next',
              prevEl:'.swiper-button-prev'
            },
          },
          slideList:[
            {
              id:'42',
              img:'/imgs/slider/slide-1.jpg'
            },
            {
              id:'43',
              img:'/imgs/slider/slide-2.jpg'
            },
            {
              id:'45',
              img:'/imgs/slider/slide-3.jpg'
            },
            {
              id:'',
              img:'/imgs/slider/slide-4.jpg'
            },
            {
              id:'',
              img:'/imgs/slider/slide-5.jpg'
            }
          ],
          menuList:[
            [
              {
                id:30,
                img:'imgs/item-box-1.png',
                name:'小米CC9'
              },{
                id:31,
                img:'imgs/item-box-2.png',
                name:'小米8青春版'
              },{
                id:32,
                img:'imgs/item-box-3.jpg',
                name:'Redmi K20 Pro'
              },{
                id:33,
                img:'imgs/item-box-4.jpg',
                name:'移动4G专区'
              }
            ],[
              {
                id:30,
                img:'imgs/item-box-1.png',
                name:'小米CC9'
              },{
                id:31,
                img:'imgs/item-box-2.png',
                name:'小米8青春版'
              },{
                id:32,
                img:'imgs/item-box-3.jpg',
                name:'Redmi K20 Pro'
              },{
                id:33,
                img:'imgs/item-box-4.jpg',
                name:'移动4G专区'
              }
            ],[
              {
                id:30,
                img:'imgs/item-box-1.png',
                name:'小米CC9'
              },{
                id:31,
                img:'imgs/item-box-2.png',
                name:'小米8青春版'
              },{
                id:32,
                img:'imgs/item-box-3.jpg',
                name:'Redmi K20 Pro'
              },{
                id:33,
                img:'imgs/item-box-4.jpg',
                name:'移动4G专区'
              }
            ],[
              {
                id:30,
                img:'imgs/item-box-1.png',
                name:'小米CC9'
              },{
                id:31,
                img:'imgs/item-box-2.png',
                name:'小米8青春版'
              },{
                id:32,
                img:'imgs/item-box-3.jpg',
                name:'Redmi K20 Pro'
              },{
                id:33,
                img:'imgs/item-box-4.jpg',
                name:'移动4G专区'
              }
            ],[0,0,0,0],[0,0,0,0]
          ],
          adsList:[
            {
              id:33,
              img:'/imgs/ads/ads-1.png',
            },
            {
              id:48,
              img:'/imgs/ads/ads-2.jpg',
            },
            {
              id:45,
              img:'/imgs/ads/ads-3.png',
            },{
              id:47,
              img:'/imgs/ads/ads-4.jpg',
            }
          ],
          phoneList:[],
          showModal:false
        }
      },
      filters:{
        currency(val){
          if(!val) return 0.00;
          return '￥'+val.toFixed(2)+'元';
        }
      },
      mounted(){
        this.init();
      },
      methods:{
        init(){
          this.axios.get('/products',{
            params:{
              categoryId:100012,
              pageSize:14
            }
          }).then((res)=>{
            res.list=res.list.slice(6,14);
            this.phoneList=[res.list.slice(0,4),res.list.slice(4,8)]
          })
        },
        addCart(){
          this.showModal=true;
          return;
          // this.axios.post('/carts',{
          //   productId:id,
          //   selected:true
          // }).then(()=>{

          // }).catch(()=>{
          //   this.showModal=true;
          // })
        },
        gotoCart(){
          this.$router.push('/cart')
        }
      }
    }
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
@import './../assets/scss/base.scss';
.index{
  .container{
    display: block;
    .swiper-box{
      .nav-menu{
        position: absolute;
        box-sizing: border-box;
        width: 264px;
        height: 451px;
        z-index: 9;
        padding: 26px 0;
        background: #55585a7a;
        .menu-wrap{
          .menu-item{
            height: 40px;
            line-height: 40px;
            &:hover{
              background: #f60;
              .children{
                display: block;
              }
            }
            a{
              display: block;
              width: 100%;
              color: #fff;
              padding-left: 30px;
              box-sizing: border-box;
              position: relative;
              &:after{
                content:'';
                @include bgImg(10px,15px,'/imgs/icon-arrow.png');
                position: absolute;
                right: 30px;
                top: 12.5px;
              }
            }
            .children{
              width: 962px;
              height: 451px;
              position: absolute;
              background: #fff;
              left: 264px;;
              top: 0;
              border: 1px solid #e5e5e5;
              display: none;
              ul{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 75px;
                li{
                  display: inline-block;
                  height: 75px;
                  line-height: 75px;
                  flex:1;
                  padding-left: 23px;
                }
                a{
                  color: #333;
                  img{
                    width: 42px;
                    height: 35px;
                    vertical-align: middle;
                    margin-right: 15px;
                  }
                }
              }
            }
          }
        }
      }
      .swiper-container{
        height: 451px;
        .swiper-button-prev{
          left: 274px;
        }
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .ads-box{
      @include flex();
      margin-top: 14px;
      margin-bottom: 31px;
      a{
        width: 296px;
        height: 167px;
        display:inline-block;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
    .banner{
      margin-bottom: 50px;
      a{
        display: block;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .product-box{
    background: $colorJ;
    padding-top: 30px;
    padding-bottom: 50px;
    .title{
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      font-weight: bolder;
      margin-bottom: 20px;
    }
    .wrapper{
      display: flex;
      .banner-left{
        margin-right: 16px;
        img{
          width: 224px;
          height: 619px;
        }
      }
      .list-box{
        .list{
          @include flex();
          margin-bottom: 14px;
          width: 986px;
          &:last-child{
            margin-bottom: 0;
          }
          .item{
            width: 236px;
            height: 302px;
            background: $colorG;
            text-align: center;
            .tag{
              display: inline-block;
              color: #fff;
              width: 67px;
              height: 24px;
              font-size: 14px;
              line-height: 24px;
              &.new-pro{
                background: #7ecf68;
              }
              &.kill-pro{
                background: #e82626;
              }
            }
            .item-img{
              height: 195px;
              img{
                height: 195px;
                width: 100%;
              }
            }
            .item-info{
              h3{
                color: $colorB;
                line-height: $fontJ;
                font-size: $fontJ;
                font-weight: bold;
              }
              p{
                color: $colorD;
                line-height: 13px;
                margin: 6px auto 13px;
                font-size: $fontK;
              }
              .price{
                color: #f20a0a;
                font-size: $fontJ;
                font-weight: bold;
                &:after{
                  content: '';
                  margin-left: 5px;
                  vertical-align: middle;
                  @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>