<template>
    <div class="product">
        <product-parameters>
            <template v-slot:buy>
                <button class="btn">立即购买</button>
            </template>
        </product-parameters>
        <div class="item-video">
            <h2>60帧超慢动作摄影<br/>>慢慢回味每一瞬间的精彩</h2>
            <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br/>>更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
            <div class="video-bg"></div>
            <div class="video-box">
                <div class="overlay"></div>
                <div class="video">
                    <span class="icon-close"></span>
                    <video src="/imgs/product/video.mp4" autoplay muted controls></video>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import productParameters from "./../components/productParameters";
export default {
    name:'product',
    components:{
        productParameters
    }
}
</script>
<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/button.scss';
@import './../assets/scss/mixin.scss';
.product{
    .item-video{
        .video-box{
            .overlay{
                @include position(fixed);
                background-color: $colorB;
                opacity: 0.4;
                z-index: 10;
            }
            .video{
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                z-index: 10;
                width: 1000px;
                height: 536px;
                .icon-close{
                    @include bgImg(20px,20px,'/imgs/icon-close.png');
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    cursor: pointer;
                    z-index: 11;
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