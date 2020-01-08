<template>
<div class="nav-bar" :class="{'isFixed':isFixed}">
    <div class="container">
        <div class="pro-title">{{title}}</div>
        <div class="pro-para">
            <a href="javascript:;">概述</a><span>|</span>
            <a href="javascript:;">参数</a><span>|</span>
            <a href="javascript:;">用户评价</a>
            <slot name="buy"></slot>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:'nav-bar',
    props:{
        title:String
    },
    data(){
        return {
            isFixed:false
        }
    },
    mounted(){
        window.addEventListener('scroll',this.initHeight,false)
    },
    methods:{
        initHeight(){
            let scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
            this.isFixed= scrollTop>152?true:false;
        }
    },
    destroyed(){
        window.removeEventListener('scroll',this.initHeight,false)
    }
}
</script>
<style lang="scss">
.nav-bar{
    height: 70px;
    line-height: 70px;
    border-top: 1px solid #e5e5e5;
    background-color: #fff;
    width: 100%;
    z-index: 10;
    &.isFixed{
        position: fixed;
        top: 0px;
        box-shadow: 0 5px 5px #ccc;
    }
    .pro-title{
        font-size: 18px;
        color: #333;
        font-weight: bold;
    }
    .pro-para{
        a{
            font-size: 14px;
            color: #666;
            margin:0 10px;
            vertical-align: middle;
        }
    }
}
</style>