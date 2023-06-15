<template >
    <div class="layout">
        <Header></Header>
        <Cotnent></Cotnent>
        <Footer></Footer>
    </div>
</template>
<script setup>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import Cotnent from "./components/Cotnent.vue"

</script>
<style lang="less" scoped>
.header {
    font-size: 30px;
}
</style>