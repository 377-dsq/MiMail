<template>
    <div class="order-list">
        <order-header title="订单列表" >
            <template slot="tip"><span>请谨防钓鱼链接或诈骗电话，了解更多</span></template>
        </order-header>
        <div class="container">
            <loading v-if="loading"></loading>
            <div class="orders" v-for="(order,index) in orderList" :key="index">
                <div class="head clearfix">
                    <div class="fl">
                        {{order.createTime}}<span class="space">|</span>
                        {{order.receiverName}}<span class="space">|</span>
                        <span>订单号：{{order.orderNo}}</span><span class="space">|</span>
                        {{order.paymentTypeDesc}}
                    </div>
                    <div class="fr">应付金额：<span class="payment">{{order.payment}}</span>元</div>
                </div>
                <div class="products clearfix">
                    <div class="fl">
                        <div class="product-items" v-for="(item, i) in order.orderItemVoList" :key="i">
                            <div class="img"><img v-lazy="item.productImage" alt=""></div>
                            <div class="prduct-info">
                                {{item.productName}}<br>
                                {{item.currentUnitPrice}}元 × {{item.quantity}}
                            </div>
                        </div>
                    </div>
                    <div class="fr">
                        <a href="javscript:;" v-if="order.status==10" @click="payOrder(order.orderNo)">去付款</a>
                        <a href="javscript:;" v-else>{{order.statusDesc}}</a>
                    </div>
                </div>
            </div>
            <el-pagination class='pagination' background  layout="prev, pager, next" :pageSize= "pageSize" :total = "total" @current-change = 'handleChange'></el-pagination>
            <no-data v-if="!loading && orderList.length ==0"></no-data>
        </div>
    </div>
</template>
<script>
import { Pagination } from 'element-ui'
import OrderHeader from './../components/OrderHeader'
import Loading from './../components/Loading'
import NoData from './../components/NoData'
export default {
    name: 'order-list',
    components:{
        OrderHeader,
        Loading,
        NoData,
        [Pagination.name] : Pagination
    },
    data(){
        return {
            orderList: [],
            loading: true,
            total: 0,
            pageSize: 5, //每一页显示多少个订单
            pageNum: 1, //当前是第几页订单，默认显示第一页
        }
    },
    mounted(){
        this.getOrderInfo();
    },
    methods: {
        getOrderInfo(){
            this.axios.get('/orders',{
                params:{
                    pageNum: this.pageNum,
                    pageSize: this.pageSize,
                }
            }).then((res)=>{
                this.loading = false;
                this.orderList=res.list;
                this.total = res.total;
            }).catch(()=>{
                this.loading=false;
            })
        },
        payOrder(orderNo){
            this.$router.push({
                path: '/order/pay',
                query: {
                    orderNo
                }
            })
        },
        handleChange(pageNum){
            this.pageNum = pageNum;
            this.getOrderInfo();
        }
    }
}
</script>
<style lang="scss">
.order-list{
    background: #e5e5e5;
    padding-bottom: 110px;
    &>.container{
        display: block;
        .orders{
            border: 1px solid #d7d7d7;
            margin: 32px auto;
            .head{
                height: 74px;
                line-height: 74px;
                background-color: #fffaf7;
                padding: 0 45px;
                color: #666;
                font-size: 16px;
                .space{
                    margin:0 10px;
                }
                .payment{
                    font-size: 26px;
                    color: #333;
                    font-weight: bold;
                }
            }
            .products{
                background-color: #fff;
                padding: 0 45px 0 35px;
                font-size: 20px;
                .fl{
                    width: 90%;
                    .product-items{
                        height: 146px;
                        line-height: 30px;
                        .img{
                            height: 146px;
                            line-height: 146px;
                            display: inline-block;
                            img{
                                width: 80px;
                                vertical-align: middle;
                            }
                        }
                        .prduct-info{
                            display: inline-block;
                            vertical-align: middle;
                        }
                    }
                }
                .fr{
                    height: 146px;
                    line-height: 146px;
                    a{
                        color: #f60;
                    }
                }
            }
        }
        .pagination{
            text-align: center;
            
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active{
            background-color: #f60;
            color: #fff;
        }
    }
}
</style>