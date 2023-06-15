<template>
    <div class="cotnent">
        <router-view></router-view>
    </div>
</template>

<style lang="less" scoped>
.cotnent {
    height: calc(~"100% - 46px"); // 除去顶部内容高度
    box-sizing: border-box;
    padding-bottom: 50px;
    //苹果兼容处理
    padding-bottom: calc(50px + constant(safe-area-inset-bottom));
    padding-bottom: calc(50px + env(safe-area-inset-bottom));
}
</style>