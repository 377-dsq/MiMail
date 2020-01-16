<template>
    <div class="order-pay">
        <div class="container">
            <div class="order-info">
                <div class="pay-info">
                    <div class="pay-logo"></div>
                    <div class="info clearfix">
                        <div class="fl">
                            <div class="head">订单提交成功，请确认付款信息</div>
                            <div class="time">请在<span>30分0秒</span>内完成支付, 超时后将取消订单</div>
                            <div class="receiver-info">收货信息：{{addressInfo}}</div>
                        </div>
                        <div class="fr">
                            <div class="total-price">应付总额：<span>{{totalPrice}}元</span></div>
                            <div class="order-detail">订单详情<span class="icon-detail" :class="{'expand':showDetail}" @click="showDetail=!showDetail"></span></div>
                        </div>
                    </div>
                </div>
                <div class="detail-order" v-show="showDetail">
                    <div><span class="title">订单号：</span><span class="order-no">{{orderNo}}</span></div>
                    <div><span class="title">收货信息：</span><span class="address">{{addressInfo}}</span></div>
                    <div>
                        <span class="title">商品名称：</span>
                        <span class="product">
                            <ul>
                                <li v-for="(item, index) in product" :key='index'>
                                    <img v-lazy="item.productImage" alt=""><span>{{item.productName}}</span>
                                </li>
                            </ul>
                        </span>
                    </div>
                    <div><span class="title">发票信息：</span><span>电子发票 个人</span></div>
                </div>
            </div>
            <div class="pay-methods">
                <div class="title">请选择以下支付方式</div>
                <div class="plateform">支付平台</div>
                <div class="pay">
                    <span class="alipay"></span><span class="wechat"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'order-pay',
    data(){
        return {
            addressInfo:"",
            totalPrice:0,
            orderNo: this.$route.query.orderNo,
            product:[],
            showDetail:false
        }
    },
    mounted(){
        this.getOrderDetail();
    },
    methods:{
        getOrderDetail(){
            this.axios.get(`/orders/${this.orderNo}`).then((res)=>{
                this.totalPrice=res.payment;
                let adr=res.shippingVo;
                this.addressInfo=adr.receiverName+' '+adr.receiverMobile+' '+adr.receiverProvince+' '+adr.receiverCity+' '+adr.receiverDistrict+' '+adr.receiverZip;
                this.product=res.orderItemVoList;
            })
        }
    }
}
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
.order-pay{
    background-color: #e5e5e5;
    padding-top: 32px;
    padding-bottom: 130px;
    .container{
        display: block;
        .order-info{
            background-color: #fff;
            padding: 53px;
            .pay-info{
                padding-bottom: 45px;
                .pay-logo{
                    margin-top: 10px;
                    margin-right: 40px;
                    @include bgImg(90px, 90px, '/imgs/pay/success.svg');
                }
                .info{
                    margin-top:30px;
                    color: #666;
                    font-size: 14px;
                    display: inline-block;
                    width: 900px;
                    .head{
                        color: #333;
                        font-size: 24px;
                        height: 23px;
                        line-height: 23px;
                        margin-bottom: 20px;
                        font-weight: bold;
                    }
                    .time{
                        margin-bottom: 5px;
                        span{
                            color: #f60;
                        }
                    }
                    .total-price{
                        margin-bottom: 30px;
                        span{
                            color: #f60;
                            font-size: 24px;
                            font-weight: bold;
                        }
                    }
                    .order-detail{
                        text-align: right;
                        .icon-detail{
                            @include bgImg(14px,10px,'/imgs/icon-down.png');
                            margin-left: 10px;
                            cursor: pointer;
                            transition: all 0.5s;
                            &.expand{
                                transform: rotate(180deg);
                            }
                        }
                    }
                }
            }
            .detail-order{
                border-top: 1px solid #d7d7d7;
                padding: 50px 130px;
                &>div{
                    margin-bottom: 20px;
                    color: #333;
                    font-size: 14px;
                    line-height: 14px;
                    .title{
                        display: inline-block;
                        width: 88px;
                    }
                    .product{
                        ul{
                            display: inline-block;
                            vertical-align: top;
                            li{
                                display: block;
                                img{
                                    height: 25px;
                                    vertical-align: middle;
                                    margin-right: 10px;
                                }
                            }
                        }  
                    }
                }
            }
        }
        .pay-methods{
            background-color: #fff;
            margin-top: 30px;
            padding: 0 52px;
            height: 270px;
            color: #333;
            font-weight: bold;
            .title{
                font-size: 20px;
                line-height: 70px;
                border-bottom: 1px solid #d7d7d7;
            }
            .plateform{
                font-size: 18px;
                margin:25px 0 20px 0;
            }
            .pay{
                span{
                    display: inline-block;
                    width: 188px;
                    height: 64px;
                    border: 1px solid #d7d7d7;
                    margin-right: 20px;
                    cursor: pointer;
                }
                .alipay{
                    background: url('/imgs/pay/icon-ali.png') no-repeat center;
                    background-size: 103px 38px;
                }
                .wechat{
                    background: url('/imgs/pay/icon-wechat.png') no-repeat center;
                    background-size: 111px 33px;
                }
            }
        }
    }
}
</style>