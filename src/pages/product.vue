<template>
    <div class="product">
        <product-parameters :title="product.name">
            <template v-slot:buy>
                <button class="btn" @click="buy">立即购买</button>
            </template>
        </product-parameters>
        <div class="description">
            <div class="USP">
                <div class="productName">{{product.name}}</div>
                <div class="subtitle">{{product.subtitle}}</div>
                <div class="productSellingPoint">
                    <span>全球首款双频 GP</span><span class="space">|</span>
                    <span>骁龙845</span><span class="space">|</span>
                    <span>AI 变焦双摄</span><span class="space">|</span>
                    <span>红外人脸识别</span>
                </div>
                <div class="price"><span class="symbol">￥</span>{{product.price}}</div>
            </div>
            <div class="feature"></div>
            <div class="sellingPoint"></div>
        </div>
        <div class="swiper">
            <swiper v-bind:options="swiperOption">
                <swiper-slide v-for="(item,index) in slideList" :key="index">
                    <img :src="'/imgs/product/gallery-'+item" alt="">
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <p>{{product.name}} AI变焦双摄拍摄</p>
        </div>
        <div class="item-video">
            <h2>60帧超慢动作摄影<br/>慢慢回味每一瞬间的精彩</h2>
            <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br/>更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
            <div class="video-bg" @click="startPlay"></div>
            <div class="video-box" v-show="showSlide">
                <div class="overlay"></div>
                <div class="video" v-bind:class="showSlide">
                    <span class="icon-close" @click="closeVideo"></span>
                    <video src="/imgs/product/video.mp4" autoplay muted controls ref='video'></video>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import productParameters from "./../components/productParameters"
import {swiper, swiperSlide} from 'vue-awesome-swiper'

export default {
    name:'product',
    components:{
        swiper,
        swiperSlide,
        productParameters
    },
    data(){
        return {
            showSlide:'',
            product:{},
            swiperOption:{
                autoplay:true,
                slidesPerView:3,
                spaceBetween: 30,
                freeMode: true,
                pagination:{
                    el:'.swiper-pagination',
                    clickable:true,
                }
            },
            slideList:['2.png','3.png','4.png','5.jpg','6.jpg']
        }
    },
    mounted(){
        this.getProductInfo();
    },
    methods:{
        getProductInfo(){
            let id=this.$route.params.id;
            this.axios.get(`/products/${id}`).then((res)=>{
                this.product=res;
            })
        },
        buy (){
            let id = this.$route.params.id;
            this.$router.push(`/detail/${id}`);
        },
        closeVideo(){
            this.showSlide="slideUp";
            setTimeout(()=>{this.showSlide=''},600)
        },
        startPlay(){
            this.showSlide='slideDown';
            this.$refs.video.currentTime=0;
        }
    }
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/button.scss';
@import './../assets/scss/mixin.scss';
.product{
    .description{
        margin:0 auto;
        .USP{
            height: 718px;
            padding-top: 55px;
            box-sizing: border-box;
            background: url('/imgs/product/product-bg-1.png') no-repeat center;
            color:#333;
            text-align: center;
            .productName{
                font-size: 80px;
                height: 75px;
                line-height: 75px;
                font-weight: bold;
            }
            .subtitle{
                margin-top: 13px;
                margin-bottom: 20px;
                font-size: 24px;
                font-weight: bold;
                letter-spacing: 0.5em;
            }
            .productSellingPoint{
                font-size: 16px;
                vertical-align: middle;
                margin-bottom: 40px;
                .space{
                    margin:0 13px;
                }
            }
            .price{
                font-size: 38px;
                vertical-align: top;
                .symbol{
                    font-size: 30px;
                }
            }
        }
        .feature{
            height: 400px;
            margin: 38px auto 45px auto;
            background: url('/imgs/product/product-bg-2.png') no-repeat center;
            background-size: contain;
        }
        .sellingPoint{
            height: 638px;
            background: url('/imgs/product/product-bg-3.png') no-repeat center;
            background-size: cover;
        }
    }
    .swiper{
        margin: 36px auto 52px;
        img{
            width: 100%;
        }
        p{
            font-size: 18px;
            text-align: center;
            color: #333;
            margin: 15px auto 55px;
            font-weight: bold;
        }
    }
    .item-video{
        background-color: #000;
        height: 1045px;
        text-align: center;
        color: #fff;
        font-weight: bold;
        margin:10px auto 80px;
        h2{
            font-size: 60px;
            line-height: 80px;
            padding: 82px 0 47px 0;
        }
        p{
            font-size: 24px;
            line-height: 36px;
        }
        .video-bg{
            height: 540px;
            background: url('/imgs/product/gallery-1.png') no-repeat center;
            background-size: contain;
            margin-top: 58px;
        }
        .video-box{
            .overlay{
                @include position(fixed);
                background-color: $colorB;
                opacity: 0.4;
                z-index: 10;
            }
            @keyframes slideDown {
                from{
                    top:-50%;
                    opacity: 0;
                }
                to{
                    top: 50%;
                    opacity: 1;
                }
            }
            @keyframes slideUp{
                from{
                    top: 50%;
                    opacity: 1;
                }
                to{
                    top: -50%;
                    opacity: 0;
                }
            }
            .video{
                position: fixed;
                top: -50%;
                left: 50%;
                transform: translate(-50%,-50%);
                z-index: 10;
                width: 1000px;
                height: 536px;
                opacity: 1;
                &.slideDown{
                    animation: slideDown .6s linear;
                    top: 50%;
                }
                &.slideUp{
                    animation: slideUp .6s linear;
                }
                .icon-close{
                    @include bgImg(20px,20px,'/imgs/icon-close.png');
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    cursor: pointer;
                    z-index: 12;
                }
                video{
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    outline: none;

                }
            }
        }
    }
}
</style>