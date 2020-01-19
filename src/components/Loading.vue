<template>
    <div class="loading">
        <img src="/imgs/loading-svg/loading-bars.svg" alt="">
    </div>
</template>
<script>
export default {
    name: 'loading'
}
</script>
<style lang="scss">
.loading{
    height: 100px;
    text-align: center;
    line-height: 120px; 
    padding: 30px 0;
    img{
        height: 100%;
    }
}
</style>