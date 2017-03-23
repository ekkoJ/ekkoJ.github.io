<template lang="html">
    <div class="frame3">
        <div class="back-container" @click="backFrame">
            <span class="back">
                back
            </span>
        </div>
        <div class="content-wrapper">
            <h3 class="title">
                What is your
                <span class="person-name">{{ selectName }}</span>
                like?
            </h3>
            <h3 class="title">
                Choose {{ total }} <span v-if="total === 1">trait</span><span v-if="total != 1">traits</span>.
            </h3>
            <ul class="trait-list">
                <li v-for="(item, index) in traits"
                    key="index"
                >
                    <label>
                        <input type="checkbox"
                            :disabled=" total === 0 && !item.selected? true : false"
                            @click = 'listenChecked(index)'
                        >
                        <div class="flag-box">
                            <div class="circle-container">
                                <div class="circle"></div>
                                <img class="circle-hover" src="image/r29/image/circle_hover.png">
                            </div>
                            <span class="trait">{{ item.typename }}</span>
                        </div>
                    </label>
                </li>
            </ul>
            <div :class="['btn-next', {disable : total != 0}]" @click="changeFrame()">
                <span class="text">SEE GIFTS</span>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jQuery';
export default {
    data () {
        return {
            traits: [
                {
                    typename: 'CHILL',
                    selected: false,
                },
                {
                    typename: 'CHIC AESTHETE',
                    selected: false,
                },
                {
                    typename: 'EMO',
                    selected: false,
                },
                {
                    typename: 'TYPE A',
                    selected: false,
                },
                {
                    typename: 'EARLY ADOPTER',
                    selected: false,
                },
                {
                    typename: 'FANCY',
                    selected: false,
                },
            ],
            total: 3,
            traitArr:[],
        }
    },
    props: ['selectName'],
    methods: {
        backFrame() {
            this.$emit('cilckEvent',1);
        },
        listenChecked(index) {
            var Arr = [];
            this.traits[index].selected = !this.traits[index].selected;
            this.total = this.traits[index].selected ? this.total - 1 : this.total + 1;
            this.traits.forEach(function(item,index){
                if (item.selected) Arr.push(item.typename.toLowerCase());
            })
            this.traitArr = Arr;
        },
        changeFrame() {
            if (this.total != 0) return;
            
            this.$emit('cilckEvent',3);
            this.$emit('listenType',this.traitArr)
        }
    }
}
</script>

<style lang="scss" scoped>
.frame3 {
    .back-container{
        position: absolute;
        left: 24px;
        top: 20px;
        cursor: pointer;
        .back{
            font-family: BrownStd-Bold;
            font-size: 20px;
            line-height: 44px;
            color: #ce912c;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-left: 10px;
            transition: color .2s ease;
        }
        &:hover{
            .back{
                color: #f00;
            }
        }
    }
    .content-wrapper{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 70%;
        text-align: center;
        transform: translateX(-50%) translateY(-50%);
        .title{
            width: 571px;
            margin: 0 auto;
            text-align: center;
            color: #ce912c;
            font-family: BrownStd-Bold;
            font-size: 22px;
            line-height: 44px;
            letter-spacing: 2px;
            span{
                font-family: BrownStd-Bold;
                font-size: 20px;
                line-height: 44px;
                &.person-name{
                    text-transform: uppercase;
                }
            }
        }
        .trait-list{
            margin-top: 40px;
            li{
                padding: 15px 0;
                cursor: pointer;
                &:hover{
                   .trait{
                       color: #f00;
                   }
                }
            }
            label{
                width: 100%;
                height: 100%;
                cursor: pointer;
            }
            input[type=checkbox] {
                display: none;
            }
            input[type=checkbox] {
                -webkit-appearance: checkbox;
                box-sizing: border-box;
                background-color: initial;
                margin: 3px 0.5ex;
                padding: initial;
                border: initial;
                -webkit-rtl-ordering: logical;
                user-select: text;
                cursor: auto;
                &:checked+.flag-box{
                   .circle-hover{
                       opacity: 1;
                   }
                   .trait{
                       color: #f00;
                   }
                }
            }
            .flag-box{
                width: 378px;
                display: inline-block;
                text-align: left;
            }
            .circle-container{
                position: relative;
                display: inline-block;
                vertical-align: middle;
                .circle{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 30px;
                    height: 30px;
                    border: 2px solid #ce912c;
                    border-radius: 50%;
                }
                .circle-hover{
                    position: relative;
                    width: 30px;
                    opacity: 0;
                }
            }
            .trait{
                font-family: BrownStd-Bold;
                margin-left: 50px;
                padding: 5px 0;
                font-size: 26px;
                letter-spacing: 6px;
                color: #ce912c;
                display: inline-block;
                vertical-align: middle;
                text-transform: uppercase;
                border-bottom: 3px solid;
                border-bottom-color: transparent;
            }
        }
         .btn-next{
            padding: 14px 30px 12px;
            margin-top: 5%;
            display: inline-block;
            text-align: center;
            color: #ce912c;
            border-radius: 40px;
            transition: color .3s ease,background-color .3s ease;
            border: 2px solid #ce912c;
            cursor: pointer;
            .text{
                font-family: BrownStd-Bold;
                font-size: 16px;
                letter-spacing: 2px;
                text-transform: uppercase;
            }
            &.disable{
                opacity: 0.5;
                cursor: default;
            }
            &:not(.disable) {
                &:hover{
                    background: #ce912c;
                    color: #fff;
                }
            }
            
        }
    }
}
</style>