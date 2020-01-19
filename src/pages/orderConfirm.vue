<template>
<div class="confirm">
    <order-header title="订单确认" >
        <template slot="tip"><span>请确认收货地址</span></template>
    </order-header>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
      <defs>
        <symbol id="icon-add" viewBox="0 0 31 32">
          <title>add</title>
          <path d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z" class="path1"></path>
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z" class="path1"></path>
        </symbol>
        <symbol id="icon-del" viewBox="0 0 32 32">
          <title>delete</title>
          <path d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z" class="path1"></path>
          <path d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path2"></path>
          <path d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path3"></path>
          <path d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z" class="path4"></path>
        </symbol>
      </defs>
    </svg>
    <div class="container">
        <div class="address">
            <div class="title">收件地址</div>
            <ul>
                <li class="recordedAddress"  v-for="(item, index) in addressList" :key="index" :class="{'checked':checkedIndex==index}" @click="checkedIndex=index">
                    <div class="name">{{item.receiverName}}</div>
                    <div class="mobile">{{item.receiverMobile}}</div>
                    <div class="address-detail">
                        <span class="province">{{item.receiverProvince}}</span>
                        <span class="city">{{item.receiverCity}}</span>
                        <span class="district">{{item.receiverDistrict}}</span>
                        <span class="detail">{{item.receiverAddress}}</span>
                    </div>
                    <div class="post">{{item.receiverZip}}</div>
                    <div class="clearfix action">
                        <a href="javascript:;" class="fl" @click="delAddress(item)">
                            <svg class="icon icon-delete">
                                <use xlink:href='#icon-del'></use>
                            </svg>
                        </a>
                        <a href="javascript:;" class="fr" @click="editAddress((item))">
                            <svg class="icon icon-edit">
                                <use xlink:href='#icon-edit'></use>
                            </svg>
                        </a>
                    </div>
                </li>
                <li class="addNewAddress">
                    <a href="javascript:;" class="icon-add" @click="addAddresss"></a>
                    <div class="text">添加新地址</div>
                </li>
            </ul>
        </div>
        <div class="product">
            <div class="title">商品</div>
            <div class="product-detail">
                <ul>
                    <li class="product-item" v-for="(item,index) in cartList" :key="index">
                        <div class="product-name">
                            <img v-lazy="item.productMainImage"><span>{{item.productName + ' ' + item.productSubtitle}}</span>
                        </div>
                        <div class="product-price">{{item.productPrice}} 元 × {{item.quantity}}</div>
                        <div class="product-total">{{item.productTotalPrice}} 元</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="deliver">
            <div class="deliver-type"><span class="title">配送方式</span><span>包邮</span></div>
            <div class="receipt"><span class="title">发票</span><span>电子发票</span><span>个人</span><span>商品明细</span></div>
        </div>
        <div class="order-detail">
            <div><span class="title">商品件数</span><span>{{productCount}}件</span></div>
            <div><span class="title">商品总价</span><span>{{totalPrice}} 元</span></div>
            <div><span class="title">优惠活动</span><span>0元</span></div>
            <div><span class="title">运费</span><span>0元</span></div>
            <div class="money"><span class="title">应付金额</span><span>{{totalPrice}} 元</span></div>
        </div>
        <div class="goToOrder">
            <a href="/#/cart" class="btn-large">返回购物车</a><a href="javascript:;" class="btn-large" @click="submitOrder">去结算</a>
        </div>
        <modal title="删除地址" btnType=3 :showModal="showDelModal" @cancel="showDelModal=false" @submit="submitAddress">
            <template v-slot:body>
                <P>你确定要删除此地址吗？</P>
            </template>
        </modal>
        <modal title="添加地址" btnType=3 confirmText="保存" :showModal="showAddModal" @cancel="showAddModal=false" @submit="submitAddress">
            <template v-slot:body>
               <div class="edit-wrap">
                   <div class="item">
                       <input type="text" placeholder="姓名" v-model="checkedItem.receiverName">
                       <input type="text" placeholder="手机号码" v-model="checkedItem.receiverMobile">
                   </div>
                   <div class="item">
                       <select name="province" id="" v-model="checkedItem.receiverProvince">
                           <option value="北京">北京</option>
                           <option value="上海">上海</option>
                           <option value="湖北">湖北</option>
                           <option value="广东">广东</option>
                       </select>
                       <select name="city" id=""  v-model="checkedItem.receiverCity">
                           <option value="北京">北京</option>
                           <option value="上海">上海</option>
                           <option value="武汉">武汉</option>
                           <option value="深圳">深圳</option>
                       </select>
                       <select name="distric" id=""  v-model="checkedItem.receiverDistrict">
                           <option value="昌平区">昌平区</option>
                           <option value="海淀区">海淀区</option>
                           <option value="朝阳区">朝阳区</option>
                           <option value="东城区">东城区</option>
                           <option value="西城区">西城区</option>
                       </select>
                   </div>
                   <div class="item">
                       <textarea name="stree" id="" v-model="checkedItem.receiverAddress"></textarea>
                   </div>
                   <div class="item">
                       <input type="text" placeholder="邮编" v-model="checkedItem.receiverZip">
                   </div>
               </div>
            </template>
        </modal>
        <modal title="编辑地址" btnType=3 confirmText="保存" :showModal="showEditModal" @cancel="showEditModal=false" @submit="submitAddress">
            <template v-slot:body>
               <div class="edit-wrap">
                   <div class="item">
                       <input type="text" placeholder="姓名" v-model="checkedItem.receiverName">
                       <input type="text" placeholder="手机号码" v-model="checkedItem.receiverMobile">
                   </div>
                   <div class="item">
                       <select name="province" id="" v-model="checkedItem.receiverProvince">
                           <option value="北京">北京</option>
                           <option value="上海">上海</option>
                           <option value="湖北">湖北</option>
                           <option value="广东">广东</option>
                       </select>
                       <select name="city" id=""  v-model="checkedItem.receiverCity">
                           <option value="北京">北京</option>
                           <option value="上海">上海</option>
                           <option value="武汉">武汉</option>
                           <option value="深圳">深圳</option>
                       </select>
                       <select name="distric" id=""  v-model="checkedItem.receiverDistrict">
                           <option value="昌平区">昌平区</option>
                           <option value="海淀区">海淀区</option>
                           <option value="朝阳区">朝阳区</option>
                           <option value="东城区">东城区</option>
                           <option value="西城区">西城区</option>
                       </select>
                   </div>
                   <div class="item">
                       <textarea name="stree" id="" v-model="checkedItem.receiverAddress"></textarea>
                   </div>
                   <div class="item">
                       <input type="text" placeholder="邮编" v-model="checkedItem.receiverZip">
                   </div>
               </div>
            </template>
        </modal>
    </div>
</div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'
import modal from './../components/modal'
export default {
    name: 'order-confirm',
    components:{
        OrderHeader,
        modal
    },
    data(){
        return{
            addressList:[],
            cartList:[],
            totalPrice:0,
            productCount:0,
            checkedItem:{}, //记录选中的商品信息
            showAddModal:false, //显示添加地址弹框
            showDelModal:false, //显示删除弹框
            showEditModal:false, //显示编辑地址弹框
            operateType:'', //0:添加地址 1:删除地址 2：编辑地址
            checkedIndex:0  //保存选中的地址的索引
        }
    },
    mounted(){
        this.getAddress();
        this.getCart();
    },
    methods:{
        getAddress(){
            this.axios.get('/shippings').then((res)=>{
                this.addressList=res.list;
            });
        },
        getCart(){
            this.axios.get('/carts').then((res)=>{
                this.cartList=res.cartProductVoList.filter(item=>item.productSelected);
                this.totalPrice=res.cartTotalPrice;
                this.cartList.map((item)=>{
                    this.productCount+=item.quantity;
                })
            })
        },
        addAddresss(){
            this.checkedItem={};
            this.showAddModal=true;
            this.operateType=0;
        },
        delAddress(item){
            this.checkedItem=item;
            this.showDelModal=true;
            this.operateType=1;
        },
        editAddress(item){
            this.checkedItem=item;
            this.showEditModal=true;
            this.operateType=2;
        },
        submitAddress(){
            let method,url,params={};
            switch (this.operateType) {
                case 0: 
                method='post';
                url='/shippings';
                break;
                case 1: 
                method='delete';
                url=`/shippings/${this.checkedItem.id}`;
                break;
                case 2: 
                method='put';
                url=`/shippings/${this.checkedItem.id}`;
                break;
            }
            if(this.operateType==0 || this.operateType == 2){
                let {receiverName,receiverMobile,receiverProvince,receiverCity,receiverDistrict,receiverAddress,receiverZip} = this.checkedItem;
                let msg='';
                if(!receiverName){
                    msg='请输入收件人名称';
                }else if(!receiverMobile || !/\d{11}/.test(receiverMobile)){
                    msg="请输入11位手机号码";
                }else if(!receiverProvince || !receiverCity || !receiverDistrict || !receiverAddress){
                    msg="请输入完整的收货地址";
                }else if(!receiverZip || !/\d{6}/.test(receiverZip)){
                    msg='请输入六位邮编';
                }
                if (msg){
                    this.$message.error(msg);
                    return;
                }
                params={
                    receiverName,
                    receiverMobile,
                    receiverProvince,
                    receiverCity,
                    receiverDistrict,
                    receiverAddress,
                    receiverZip,
                };
            }
            this.axios[method](url,params).then(()=>{
                this.closeModal();
                this.getAddress();
                this.$message.success('操作成功');
            })

        },
        closeModal(){
            this.showDelModal=false;
            this.showEditModal=false;
            this.showAddModal=false;
            this.useAction="";
            this.checkedItem={};
        },
        submitOrder(){
            let checkedAdr = this.addressList[this.checkedIndex];
            if(!checkedAdr){
                this.$message.error('请选择收货地址');
                return;
            }
            this.axios.post('/orders',{
                shippingId: checkedAdr.id
            }).then((res)=>{
                this.$router.push({
                    path: "/order/pay",
                    query: {
                        orderNo: res.orderNo
                    }
                })
            })
        }
    }
}
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
.confirm{
    background: #e5e5e5;
    padding-bottom: 204px;
    &>.container{
        display: block;
        background:#fff;
        padding: 0 63px;
        box-sizing: border-box;
        margin-top: 32px;
        .address{
            .title{
                height: 20px;
                padding: 38px 0 21px;
            }
            ul{
                li{
                    width: 270px;
                    height: 180px;
                    border: 1px solid #e5e5e5;
                    margin:0 35px 64px 0;
                    padding: 20px 25px;
                    box-sizing: border-box;
                    vertical-align: top;
                    font-size: 14px;
                    color: #999;
                    display: inline-block;
                }
            }
            .recordedAddress{
                &.checked{
                    border-color: #f60;
                }
                cursor: pointer;
                div{
                    margin-bottom: 5px;
                }
                .name{
                    color: #333;
                    font-size: 18px;
                    margin-bottom: 10px;
                }
                .address-detail{
                    span{
                        margin-right: 5px;
                    }
                }
                .action{
                    a{
                        line-height: 50px;
                        width: 20px;
                        svg{
                            height: 20px;
                            width: 20px;
                            fill: #666;
                            vertical-align: bottom;
                            &:hover{
                                fill:#f60;
                            }
                        }
                    }
                }
            }
            .addNewAddress{
                text-align: center;
                .icon-add{
                    display: block;
                    width: 30px;
                    height: 30px;
                    background: url('/imgs/icon-add.png') no-repeat center;
                    background-size: 20px 20px;
                    background-color: #e5e5e5;
                    margin:44px auto auto auto;
                    cursor: pointer;
                }
            }
        }
        .product{
            .product-detail{
                margin: 10px 0;
                border: 1px solid #e5e5e5;
                border-left: none;
                border-right: none;
                li{
                    height: 40px;
                    margin-top: 10px;
                    display: flex;
                    align-items: center;
                    line-height: 40px;
                    font-size: 16px;
                    color: #333;
                    .product-name{
                        flex:5;
                        img{
                            width:30px;
                            height: 30px;
                            vertical-align: middle;
                        }
                    }
                    .product-price{
                        flex:2
                    }
                    .product-total{
                        margin-right: 40px;
                        color: #f60;
                    }

                }
            }
        }
        .deliver{
            padding-top: 30px;
            color: #f60;
            font-size: 16px;
            font-weight: bold;
            div{
                margin-bottom: 48px;
            }
            span{
                margin-right: 23px;
            }
            .title{
                display: inline-block;
                width: 127px;
            }
        }
        .order-detail{
            border-bottom: 1px solid #e5e5e5;
            text-align: right;
            color: #f60;
            font-size: 16px;
            div{
                margin-bottom: 12px;
                span{
                    display: inline-block;
                    width: 120px;
                }
            }
            .money{
                margin-top: 20px;
                margin-bottom: 33px;
                font-weight: bold;
            }
            .title{
                color: #666;
                font-size: 16px;
            }
        }
        .goToOrder{
            margin-top:37px;
            padding-bottom:90px;
            text-align: right;
            .btn-large{
                display: inline-block;
                text-align: center;
                border: 1px solid #D7d7d7;
                color: #999;
                margin-right: 20px;
                &:last-child{
                    margin-right: 0;
                    background-color: #f60;
                    color: #fff;
                    border-color: #f60;
                }
            }
        }
        .title{
            color: #333;
            font-size: 20px;
            font-weight: bold;
        }
        .edit-wrap{
            font-size: 14px;
            .item{
                margin-bottom: 15px;
                input{
                    display: inline-block;
                    width: 280px;
                    height: 40px;
                    line-height: 40px;
                    padding-left: 15px;
                    border: 1px solid #e5e5e5;
                    box-sizing: border-box;
                    &+input{
                        margin-left: 15px;
                    }
                }
                select{
                    height: 40px;
                    line-height: 40px;
                    border: 1px solid #e5e5e5;
                    margin-right: 20px;
                    padding: 0 5px;
                }
                textarea{
                    height: 62px;
                    width: 100%;
                    padding: 13px 15px;
                    box-sizing: border-box;
                    border:solid 1px #e5e5e5;
                }
            }
        }
    }
}
</style>