<template lang="html">
    <div class="lastframe">
        <div class="content-wrapper">
            <img class="title loaded" src="image/r29/image/picks.png">
            <ul class="product-list">
                <li v-for="(item, index) in getFinalData"
                    key="index"
                    class="product"
                >
                    <a :href="item.gsx$clickouturl.$t" class="product-container" target="_blank">
                        <div class="left">
                            <img :src="item.gsx$image.$t" alt="">
                        </div>
                        <div class="right">
                            <span class="name">{{item.gsx$itemname.$t}}</span>
                            <span class="desc">{{item.gsx$description70charactersmax.$t}}</span>
                            <span class="price">{{item.gsx$price.$t}}</span>
                            <a :href="item.gsx$clickouturl.$t" class="btn-buy" target="_blank">shop this</a>
                        </div>
                    </a>
                </li>
            </ul>
            <div class="global-controller">
                <div class="content-wrapper">
                    <div class="choose choose-person">
                        <span class="text">person</span>
                    </div>
                    <div class="choose choose-trait">
                        <span class="text" style="display: none;">personalities</span>
                        <span class="text">traits</span>
                    </div>
                    <div class="divider"></div>
                </div>
             </div>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            person: '',
        }
    },
    props: ['selectType','selectName','finalData'],
    methods: {

    },
    computed: {
        getFinalData: function() {
            var finalData = [];
            var self = this;
            this.finalData.forEach(function(item, index){
                if (item.gsx$person.$t.toLowerCase() === self.selectName.toLowerCase() && self.selectType.includes(item.gsx$trait.$t.toLowerCase())) {
                     finalData.push(item)
                }
            })
            console.log(finalData)
            return finalData;
        }
    }
}
</script>

<style lang="scss" scoped>
.lastframe {
    font-size: 16px;
    .content-wrapper{
        margin: 0 auto;
        padding: 30px 0 50px;
        max-width: 1520px;
        .title{
            width: 100px;
            margin: 0 auto;
            display: block;
        }
        .product-list{
            width: 90%;
            margin: 30px auto 0;
            .product{
                background-color: #fff;
                transition: all .2s ease;
                margin-bottom: 20px;
                cursor: pointer;
                .product-container{
                    display: block;
                    padding: 25px;
                    .left{
                        display: inline-block;
                        vertical-align: middle;
                        width: 35%;
                        img{
                            display: block;
                            width: 100%;
                        }
                    }
                    .right{
                        display: inline-block;
                        vertical-align: middle;
                        width: 65%;
                        padding-left: 30px;
                        .name{
                            color: #000;
                            font-size: 20px;
                            display: block;
                            font-family: BrownStd-Bold;
                            letter-spacing: 2px;
                            text-transform: uppercase;
                        }
                        .desc{
                            color: #000;
                            font-family: BrownStd-Regular;
                            font-size: 20px;
                            display: block;
                            margin-top: 20px;
                        }
                        .price{
                            color: #000;
                            font-family: BrownStd-Light;
                            font-size: 25px;
                            display: block;
                            margin-top: 20px;
                        }
                        .btn-buy{
                            color: #ce912c;
                            letter-spacing: 1px;
                            margin-top: 20px;
                            padding: 14px 18px;
                            border: 2px solid #ce912c;
                            border-radius: 40px;
                            transition: color .3s ease,background-color .3s ease;
                            display: inline-block;
                            font-size: 16px;
                            font-family: BrownStd-Bold;
                            text-transform: uppercase;
                        }
                    }
                }
                &:hover{
                    .product-container{
                        .right{
                            .btn-buy{
                                background-color: #ce912c;
                                color: #fff;
                            }
                        }
                    }
                }
            }
            
        }
    }
    .global-controller {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        min-width: 768px;
        z-index: 2;
        .content-wrapper {
            position: relative;
            max-width: 1520px;
            margin: 0 auto;
            padding: 0;
            .choose{
                padding: 20px 0;
                display: inline-block;
                width: 50%;
                text-align: center;
                background-color: #ce912c;
                cursor: pointer;
                transition: background-color .3s ease;
                position: relative;
                span{
                    font-family: BrownStd-Bold;
                    font-size: 14px;
                    color: #fff;
                    display: inline-block;
                    vertical-align: middle;
                }
                .text{
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-right: 30px;
                }
            }
            .divider{
                position: absolute;
                top: 0;
                left: 50%;
                width: 1px;
                height: 100%;
                background-color: #fff;
            }
        }
    }
}
</style>