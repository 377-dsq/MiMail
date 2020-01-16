<template>
    <div class="order">
        <order-header :title="title" >
            <template slot="tip"><span>{{tip}}</span></template>
        </order-header>
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'
import ServiceBar from './../components/serviceBar'
import NavFooter from './../components/NavFooter'
export default {
    components:{
        OrderHeader,
        ServiceBar,
        NavFooter
    },
    data(){
        return {
            title:'',
            tip:''
        }
    },
    mounted(){
        let adr = this.$route.path;
        if(adr == '/order/confirm'){
            this.title = "确认订单";
            this.tip = '请确认收货地址';
        }else if(adr == '/order/list'){
            this.title = '订单列表';
            this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>';
        }else{
            this.title = '订单支付';
            this.tip = '请谨防钓鱼链接或诈骗电话，了解更多';
        }
    }
}
</script>