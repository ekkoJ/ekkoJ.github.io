<template lang="html">
    <div class="container">
        <test1 class="disnone"></test1>
        <test2 class="disnone"></test2>
        <test3 class="disnone"></test3>
        <test4 class="disnone"></test4>
        <test5 class="disnone"></test5>
        <FilterCom class="disnone"></FilterCom>
        <r29></r29>
    </div>
</template>

<script>
import test1 from './components/test1.vue';
import test2 from './components/test2.vue';
import test3 from './components/test3.vue';
import test4 from './components/test4.vue';
import test5 from './components/test5.vue';
import FilterCom from './components/FilterCom.vue';
import r29 from './components/main.vue';

export default {
    data () {
        return {
            // msg: 'Hello from vue-loader!'
        }
    },
    components: {
        test1,
        test2,
        test3,
        test4,
        test5,
        FilterCom,
        r29,
    }
}
</script>

<style lang="scss">
@import "./style/reset";
@import "./style/mixin";

*{
    margin: 0;
    padding: 0;
    font-size: 0;
}
body, html {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
body {
    background-color: #fcf3f4;
}
#main{
    width: 100%;
    height: 100%;
    .container{
        width: 100%;
        height: 100%;
    }
}
.disnone{
    display: none !important;
}
</style>