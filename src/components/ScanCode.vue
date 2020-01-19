<template>
    <div class="scan-QRcode">
        <div class="mask"></div>
        <div class="scan">
            <div class="wechat"><img src="/imgs/pay/icon-scan.png" alt=""></div>
            <div class="qr-code">
                <div class="head"><span>微信支付</span><span class="close" @click="close"></span></div>
                <div class="body">
                    <div><img :src="img" alt=""></div>
                    <div class="explain">请使用<em>微信</em>扫一扫二维码完成支付</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'scan-code',
    props:['img'],
    methods: {
        close(){
            this.$emit('close');
        }
    }
}
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
.scan-QRcode{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 99;
    .mask{
        width: 100%;
        height: 100%;
        background-color: rgba($color: #000000, $alpha: 0.5);
        position: absolute;
        z-index: 0;
    }
    .scan{
        margin-top: 100px;
        text-align: center;
        position: relative;
        .wechat{
            height: 485px;
            width: 296px;
            display: inline-block;
            vertical-align: middle;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .qr-code{
            display: inline-block;
            width: 370px;
            height: 440px;
            vertical-align: middle;
            .head{
                background-color: #e5e5e5;
                height: 60px;
                line-height: 60px;
                font-size: 20px;
                color: #333;
                font-weight: bold;
                padding-left: 18px;
                text-align: left;
                .close{
                    @include bgImg(13px,13px,'/imgs/icon-close.png');
                    float: right;
                    margin: 23px;
                    cursor: pointer;
                }
            }
            .body{
                background-color: #fff;
                padding: 44px 66px 34px 66px;
                img{
                    height: 240px;
                    margin-bottom: 26px;
                }
                .explain{
                    width: 120px;
                    font-size: 14px;
                    line-height: 22px;
                    color: #333;
                    margin: 0 auto;
                    em{
                        font-style: normal;
                        color: #f60;
                    }
                }
            }
        }
    }
}
</style>