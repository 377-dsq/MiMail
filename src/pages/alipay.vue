<template>
    <div class="alipay">
        <div class="content" v-html="content"></div>
        <loading v-if="loading"></loading>
    </div>
</template>
<script>
import Loading from "./../components/Loading"
export default {
    name: 'alipay',
    components:{
        Loading
    },
    data(){
        return {
            orderId: this.$route.query.orderId,
            content: "",
            loading: true
        }
    },
    mounted(){
        this.paySubmit();
    },
    methods: {
        paySubmit(){
            this.axios.post('/pay',{
                orderId: this.orderId,
                orderName: 'de',
                amount: "0.01",
                payType: 1
            }).then((res)=>{
                this.content=res.content;
                setTimeout(()=>{document.forms[0].submit()}, 100)
            })
        }
    }
}
</script>
<style lang="scss">

</style>