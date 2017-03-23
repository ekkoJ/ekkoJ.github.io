<template lang="html">
    <div class="frame1">
        <div class="content-wrapper">
            <div class="logo">
                <img src="image/r29/image/logo.png" alt="">
            </div>
            <div class="title">
                <img src="image/r29/image/entrance.gif" alt="">
            </div>
            <div class="desc">THE PERFECT PRESENT IS RIGHT THIS WAY</div>
            <div class="btn-start" @click="changeFrame()">
                <span class="text">begin</span>
                <span class="symbol">l</span>
            </div>
            <div class="check-out">
                <a href="http://www.refinery29.com/best-gifts" target="_blank">OR GO STRAIGHT TO GIFT GUIDES</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {

        }
    },
    methods: {
        changeFrame() {
            this.$emit('cilckEvent',1)
        }
    }
}
</script>

<style lang="scss" scoped>
.frame1 {
    position: relative;
    width: 100%;
    height: 100%;
    img{
        display: block;
        width: 100%;
    }
    .content-wrapper{
        position: absolute;
        top: 50%;
        left: 50%;
        text-align: center;
        transform: translateX(-50%) translateY(-50%);
        .logo{
            width: 130px;
            margin: 5% auto 0;
        }
        .title{
            width: 620px;
            margin: 1% auto 0;
        }
        .desc{
            text-align: center;
            color: #ce912c;
            font-family: BrownStd-Bold;
            font-size: 14px;
            letter-spacing: 2px;
            text-transform: uppercase;
        }
        .btn-start{
            padding: 13px 36px 12px;
            margin-top: 5%;
            display: inline-block;
            text-align: center;
            color: #ce912c;
            border: 2px solid #ce912c;
            cursor: pointer;
            border-radius: 40px;
            transition: color .3s ease,background-color .3s ease;
            &:hover{
                color: #fff;
                background-color: #ce912c;
            }
            .text{
                font-family: BrownStd-Bold;
                font-size: 14px;
                letter-spacing: 2px;
                text-transform: uppercase;
            }
        }
        .check-out{
            margin-top: 6%;
            a{
                color: #ce912c;
                opacity: .5;
                font-family: BrownStd-Bold;
                font-size: 12px;
                letter-spacing: 1px;
                text-transform: uppercase;
                &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>