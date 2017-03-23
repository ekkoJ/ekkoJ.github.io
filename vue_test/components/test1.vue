<template lang="html">
    <div class="test1">
        <ul>
            <li v-for="(item, index) in type"
                :class="{active: selindex === index}"
                key="index"
                @click="chooseFun(index)"
            > {{item}} </li>
        </ul>
        <p>You choose <span> {{ type[selindex] }} </span> </p>
    </div>
</template>

<script>

export default {
    data () {
        return {
            type: [
                'HOME',
                'PROJECT',
                'SERVICE',
                'CONTACT'
            ],
            selindex: 0,
        }
    },
    methods: {
        chooseFun(chooseindex) {
            this.selindex = chooseindex;
        }
    }
}
</script>

<style lang="scss" scoped>
.test1 {
    width: 100%;
    text-align: center;
    ul{
        display: inline-block;
        margin: 60px auto 45px;
        background-color: #5597b4;
        box-shadow: 0 1px 1px #ccc;
        border-radius: 2px;
        li{
            border-radius: 2px 0 0 2px;
            display: inline-block;
            padding: 18px 30px;
            color: #fff !important;
            font-weight: bold;
            font-size: 16px;
            text-decoration: none !important;
            line-height: 1;
            text-transform: uppercase;
            cursor: pointer;
            &.active{
                background: #e35885;
            }
        }
    }
    p{
        font-size: 22px;
        font-weight: bold;
        color: #7d9098;
        span{
            color: #ffffff;
            display: inline-block;
            padding: 5px 10px;
            background-color: #c4d7e0;
            border-radius: 2px;
            text-transform: uppercase;
            font-size: 18px;
        }
    }
}
</style>