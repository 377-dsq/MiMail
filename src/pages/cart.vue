<template>
    <div class="cart">
        <order-header :title="'我的购物车'" :username="username">
            <template slot='tip'>
                    <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
            </template>
        </order-header>
        <div class="cart-body">
            <div class="container">
                <div class="product-list">
                    <div class="list-title">
                        <div class="select-button" :class="{select: selectedAll}" @click="toggleAll"></div>
                        <span class="select-all">全选</span><span class="product-name">商品名称</span><span class="product-price">单价</span><span class="product-number">数量</span><span class="money">小计</span><span class="operation">操作</span>
                    </div>
                    <ul>
                        <li class="list-item" v-for="(item,index) in productList" :key="index">
                            <div class="select-button" :class="{select: item.productSelected}" @click="updateCart(item)"></div>
                            <img :src="item.productMainImage">
                            <span class="product-name">{{item.productName+'，'+item.productSubtitle}}</span>
                            <span class="product-price">{{item.productPrice}}</span>
                            <div class="product-number clearfix"><span class="sub fl" @click="updateCart(item,'-')">-</span>{{item.quantity}}<span class="add fr" @click="updateCart(item,'+')">+</span></div>
                            <span class="money">{{item.productTotalPrice}}</span>
                            <span class="operation" @click="deleteProduct(item)">×</span>
                        </li>
                    </ul>
                </div>
                <div class="cart-footer clearfix">
                    <div class="fl">
                        <a href="./index">继续购物</a>
                        <span>共<span class="product-number">{{productList.length}}</span>件商品，已选择<span class="product-number">{{selectedNumber}}</span>件</span>
                    </div>
                    <div class="btn-large fr" @click="order">去结算</div>
                    <div class="fr">
                        <span class="total-cost">合计：<span class="large-number">{{cartTotalPrice}}</span>元</span>
                    </div>
                    
                </div>
            </div>  
        </div>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import orderHeader from "./../components/OrderHeader";
import navFooter from "./../components/NavFooter";
import serviceBar from "./../components/serviceBar";
export default {
    name: 'cart',
    components:{
        orderHeader,
        navFooter,
        serviceBar
    },
    data(){
        return {
            productList:[],
            selectedAll:false,
            cartTotalPrice:0,
            cartTotalQuantity:0,
            selectedNumber:0
        }
    },
    computed:{
        username(){
          return this.$store.state.username;
        }
    },
    mounted(){
        this.getCartListInfo();
    },
    methods:{
        //获取购物车列表
        getCartListInfo(){
            this.axios.get('/carts').then((res)=>{
                this.renderData(res);
            })
        },
        //点击+或—更新商品数量，以及商品的选择或者去掉
        updateCart(item,type){
            let quantity=item.quantity,
                selected=item.productSelected;
            if(type=='+'){
                ++quantity;
                if(quantity>item.productStock){
                    this.$essage.warning('购买的商品数量已超过库存');
                    return;
                }
            }else if(type=='-'){
                --quantity;
                if(quantity<1){
                    this.$essage.warning('至少购买一件商品');
                    return;
                }
            }else{
                selected=!selected;
            }
            this.axios.put(`/carts/+${item.productId}`,{
                    quantity,
                    selected,
                }).then((res)=>{
                    this.renderData(res);
                })
        },
        //删除某一种商品
        deleteProduct(item){
            this.axios.delete(`/carts/${item.productId}`).then((res)=>{
                this.renderData(res);
                this.$message.success('删除成功');
            })
        },
        //全选或者取消全选
        toggleAll(){
            let url=this.selectedAll?'/carts/unSelectAll':'/carts/selectAll';
            this.axios.put(url).then((res)=>{
                this.renderData(res);
            })
        },
        //进行某种操作后更新数据
        renderData(res){
            this.productList=res.cartProductVoList;
            this.selectedAll=res.selectedAll;
            this.cartTotalPrice=res.cartTotalPrice;
            this.cartTotalQuantity=res.cartTotalQuantity;
            this.selectedNumber=this.productList.filter(item=>item.productSelected).length;
        },
        //下单
        order(){
            let noSelectedProduct=this.productList.every(item=>!item.productSelected);
            if (noSelectedProduct){
                this.$message.warning('至少选择一件商品');
                return;
            }else{
                this.$router.push('/orderConfirm');
            }
        }
        
    }
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/button.scss';
.cart{
    .cart-body{
        background:#f5f5f5;
        padding-top: 30px;
        .container{
            display: block;
            .product-list{
                background: #fff;
                padding: 0 43px;
                .list-title{
                    height: 80px;
                    color: #666;
                    font-size:14px;
                    font-weight: bold;
                    line-height: 80px;
                    span{
                        display: inline-block;
                        vertical-align: middle;
                    }
                    
                }
                ul{
                    li{
                        height: 125px;
                        border-top: 1px solid #f5f5f5;
                        line-height: 125px;
                        color:#333;
                        font-weight: bold;
                        font-size: 16px;
                        img{
                            width: 80px;
                            vertical-align: middle;
                            margin-left: 74px;
                            margin-right: 30px;
                        }
                        .money{
                            color: #f60;
                        }
                        .product-number{
                            display: inline-block;
                            border: 1px solid #e5e5e5;
                            height: 40px;
                            vertical-align: middle;
                            line-height: 40px;
                            font-size: 14px;
                            font-weight: normal;
                            span{
                                width: 40px;
                                cursor: pointer;
                            }
                        }
                        .operation{
                            color:#666;
                            font-weight: normal;
                            cursor: pointer;
                        }
                    }
                }
                .select-button{
                    display: inline-block;
                    height: 22px;
                    width: 22px;
                    border:1px solid #e5e5e5;
                    vertical-align: middle;
                    margin-left: 17px;
                    cursor: pointer;
                    &.select{
                        
                        background: url('/imgs/icon-gou.png') no-repeat center;
                        background-size: contain;
                        background-color: #f60;
                        
                    }
                }
                .select-all{
                    width:167px;
                    margin-left: 17px;
                }
                .product-name{
                    display: inline-block;
                    width: 420px;
                }
                .product-price{
                    display: inline-block;
                    width: 80px;
                    text-align: center;
                }
                .product-number{
                    margin:0 42px;
                    width: 150px;
                    text-align: center;
                }
                .money{
                    display: inline-block;
                    width: 72px;
                    text-align: center;
                }
                .operation{
                    display: inline-block;
                    width: 46px;
                    margin-left: 50px;
                    text-align: center;
                }
            }
            .cart-footer{
                height: 50px;
                margin-top: 20px;
                padding-bottom: 114px;
                font-size: 14px;
                font-weight: bold;
                color: #666;
                .fl,.fr{
                    height: 50px;
                    line-height: 50px;
                }
                a{
                    color: #666;
                    margin-right: 37px;
                }
                .product-number{
                    color: #f60;
                    margin: 0 5px;
                }
                .total-cost{
                    color: #f60;
                    margin-right: 30px;
                    .large-number{
                        font-size: 24px;
                    }
                }
                .btn-large{
                    text-align: center;
                    display: inline-block;
                    background: #f60;
                    color: #fff;
                    font-size: 18px;
                    vertical-align: middle;
                }
            }
        }
        
    }
}
</style>