<template>
    <div class="index">
      <div class="container">
        <div class="swiper-box">
          <div class="nav-menu">
            <ul class="menu-wrap">
              <li class="menu-item">
                <a href="javascript:;">手机 电话卡</a>
                <div class="children"></div>
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
        <div class="ads-box"></div>
        <div class="banner"></div>
        <div class="product-box"></div>
      </div>
    <service-bar></service-bar>
    </div>
</template>
<script>
import serviceBar from './../components/serviceBar'
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
    export default{
      name:'index',
      components:{
        swiper,
        swiperSlide,
        serviceBar
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
          ]
        }
      }
    }
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
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
  }
}
</style>