<template>
    <div class="home">
        <p class="title"> Vue3+Vite 移动端框架</p>
        <div class="sign">Sign：THyo</div>
    </div>
</template>
<script setup>

</script>
<style lang="less" scoped>
.home {
    height: 100%;

    .title {
        text-align: center;
        font-weight: 700;
        font-size: 24px;
        line-height: 300px;
        color: #3eaf7c;
    }

    .sign {
        position: absolute;
        right: 50px;
        bottom: 100px;
        color: cornflowerblue;
        font-size: 18px;
    }
}
</style>