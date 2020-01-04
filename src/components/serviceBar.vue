<template>
    <div class="service">
        <div class="container">
            <ul>
                <li>
                    <span class="icon-setting"></span><span>预约维修服务</span>
                </li>
                <li>
                    <span class="icon-7d"></span><span>7天无理由退货</span>
                </li>
                <li>
                    <span class="icon-15d"></span><span>15天免费换货</span>
                </li>
                <li>
                    <span class="icon-deliver"></span><span>满150元包邮</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'service-bar'
}
</script>
<style lang="scss">
@import './../assets/scss/mixin.scss';
.service{
    padding-top: 33px;
    padding-bottom: 32px;
    color: #666;
    font-size: 16px;
    ul{
        width: 100%;
        li{
            display: inline-block;
            width: 24.9%;
            text-align: center;
            border-right: 1px solid #e5e5e5;
            span{
                margin-right: 7px;
                vertical-align: middle;
            }
            .icon-setting{
                @include bgImg(20px,19px,'/imgs/icon-setting.png' )
            }
            .icon-7d{
                @include bgImg(20px,19px,'/imgs/icon-7day.png' )
            }
            .icon-15d{
                @include bgImg(20px,19px,'/imgs/icon-15day.png' )
            }
            .icon-deliver{
                @include bgImg(20px,19px,'/imgs/icon-post.png' )
            }
        }
    }
    

}
</style>