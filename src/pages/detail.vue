<template>
    <div class="detail">
        <product-parameters :title=product.name></product-parameters>
        <div class="detail-body ">    
            <div class="container clearfix">
                <div class="product-picture fl">
                    <swiper :options="swiperOption">
                        <swiper-slide v-for="(item,index) in phonePictures" :key='index'><img :src="'/imgs/detail/'+item" alt=""></swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                </div>
                <div class="buy-info fr">
                    <div class="introduction">
                        <div class="product-name">{{product.name}}</div>
                        <div class="selling-point">
                            <span>相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</span>
                        </div>
                        <div>小米自营</div>
                        <div class="price">{{product.price}}</div>
                    </div>
                    <div class="address">
                        <div class="address-top">
                        <span>北京 北京市 朝阳区 安定门街道</span><a href="javascript:;">修改</a>
                        </div>
                        <div class="address-bottom">有现货</div>
                    </div>
                    <div class="version-color clearfix">
                        <div>选择版本</div>
                        <div class="select-box fl" :class="{select:isSelected}" @click="isSelected=!isSelected"><span>6GB+64GB 全网通 </span><span class="product-price">{{product.price}}</span></div>
                        <div class="select-box fr" :class="{select:!isSelected}" @click="isSelected=!isSelected"><span>4GB+64GB 全网通 </span><span class="product-price">{{product.price}}</span></div>
                        <div>选择颜色</div>
                        <div class="select-box" :class="{select:selected}" @click="selected=!selected"><span class="color-icon"></span><span>深空灰</span></div>
                    </div>
                    <div class="total">
                        <div class="select-product"><span>{{product.name}} {{isSelected?'6GB+64GB 全网通':'4GB+64GB 全网通'}} 深灰色</span><span>{{product.price}}</span></div>
                        <div>总计：{{product.price}}</div>
                    </div>
                    <div class="add-cart">
                        <span class="btn-huge" @click="addCart">加入购物车</span><span class="like"><span class="like-icon"></span>喜欢</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="detail-footer">
            <div class="container">
                <div class="price-title">价格说明</div>
                <div class="price-description"><img src="/imgs/detail/item-price.jpeg" alt=""></div>
            </div>
        </div>
        <service-bar></service-bar>
    </div>  
</template>
<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import productParameters from './../components/productParameters'
import serviceBar from './../components/serviceBar'
export default {
    name:'detail',
    components:{
        swiper,
        swiperSlide,
        productParameters,
        serviceBar
    },
    data(){
        return {
            id:this.$route.params.id,
            product:{},
            phonePictures:['phone-1.jpg','phone-2.jpg','phone-3.jpg','phone-4.jpg'],
            isSelected:true,
            selected:false,
            swiperOption:{
                pagination:{
                    el:'.swiper-pagination',
                    clickable:true,
                },
                navigation:{
                    nextEl:'.swiper-button-next',
                    prevEl:'.swiper-button-prev'
                }
            },
        }
    },
    mounted(){
        this.getProductInfo();
    },
    methods:{
        getProductInfo(){
            this.axios.get(`/products/${this.id}`).then((res)=>{
                this.product=res;
            })
        },       
        addCart(){
            this.axios.post('/carts',{
                productId:this.id,
                selected:true,
            }).then((res)=>{
                this.$store.dispatch('saveCartCount',res.cartTotalQuantity);
                this.$router.push('/cart');
            })
            
        }
    }
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/button.scss';
.detail{
    .detail-body{
        z-index: 1;
        .container{
            display: block;
            .product-picture{
                height: 620px;
                width: 640px;
                margin-top: 5px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .buy-info{
                width: 586px;
                .introduction{
                    font-weight: bold;
                    color: #f60;
                    font-size: 16px;
                    padding: 30px auto 25px;
                    border-bottom: 1px solid #e5e5e5;
                    .product-name{
                        font-size: 28px;
                        color: #333;
                        margin:30px auto 16px;
                    }
                    .selling-point{
                        font-size: 14px;
                        color: #999;
                        margin:16px auto 26px;
                    }
                    .price{
                        font-size: 20px;
                        margin:14px auto 25px;
                    }
                }
                .address{
                    margin:28px auto 30px;
                    background-color: #fafafa;
                    border:1px solid #e5e5e5;
                    width: 100%;
                    height: 106px;
                    font-size: 14px;
                    color: #f60;
                    font-weight: bold;
                    padding: 31px 0 34px 64px;
                    line-height: 14px;
                    box-sizing: border-box;
                    position: relative;
                    &:before{
                        content: '';
                        @include posImg(absolute,27px,530px,20px,22px,'/imgs/icon-loc.png')
                    }
                    .address-top{
                        margin-bottom:15px;
                        color: #666;
                        a{
                            color: #f60;
                            margin-left: 20px;
                        }
                    }
                }
                .version-color{
                    font-size: 18px;
                    color: #333;
                    font-weight: bold;
                    .select-box{
                        display: inline-block;
                        margin:20px auto 30px;
                        width: 285px;
                        height: 50px;
                        border: 1px solid #e5e5e5;
                        text-align: center;
                        line-height: 52px;
                        font-size: 16px;
                        color: #333;
                        font-weight: normal;
                        cursor: pointer;
                        .product-price{
                            color:#333;
                        }
                        .color-icon{
                            display: inline-block;
                            width: 14px;
                            height: 16px;
                            background-color: #666;
                            margin-right: 9px;
                            vertical-align: middle;
                        }
                    }
                    .select{
                        border-color:#f60;
                        color: #f60;
                        font-weight: bold;
                    }
                }
                .total{
                    width:100%;
                    height:108px;
                    margin:10px auto 30px;
                    box-sizing:border-box;
                    background-color:#fafafa;
                    padding-top: 24px;
                    padding-left: 30px;
                    padding-right: 30px;
                    color:#f60;
                    font-size: 24px;
                    line-height: 23px;
                    font-weight: bold;
                    .select-product{
                        @include flex();
                        color:#333;
                        font-size: 14px;
                        line-height: 14px; 
                        margin-bottom: 18px;
                    }
                    
                }
                .add-cart{
                    margin-bottom:50px;
                    &>span{
                        display: inline-block;
                        text-align: center;
                        color: #fff;
                        background-color: #f60;
                        font-size: 16px;
                        font-weight: bold;
                        margin-right: 20px;
                    }
                    .like{
                        width: 142px;
                        height: 54px;
                        background-color: #bbb;
                        line-height: 54px;
                        cursor: pointer;
                        .like-icon{
                            @include bgImg(18px,16px,'/imgs/detail/like.png');
                            vertical-align: middle;
                            margin-right: 7px;
                        }
                    }
                }
            }
        }
    }
    .detail-footer{
        height: 340px;
        background-color: #f3f3f3;
        .container{
            display: block;
            .price-title{
                font-size: 24px;
                color: #333;
                font-weight: bold;
                padding: 38px 0 30px;
            }
        }
    }
}
    
</style>