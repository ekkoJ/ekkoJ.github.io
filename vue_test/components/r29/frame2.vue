<template lang="html">
    <div class="frame2">
        <div class="content-wrapper">
            <div class="title">Who are you shopping for?</div>
            <ul class="grid-wrapper">
                <li v-for="(item, index) in personData"
                    @click="handleClickLi(index)"
                    :class="['person', {active : selectIndex === index}]"
                    key="index"
                >
                    <div class="cover-wrapper">
                        <img :src="'image/r29/image/' + item.imgsrc + '.svg'" alt="" class="normal">
                        <img :src="'image/r29/image/' + item.imgsrc + '_hover.svg'" alt="" class="hover">
                    </div>
                    <div class="name">{{item.name === '' ? 'surprise' : item.name }}</div>
                </li>

            </ul>
            <div :class="['btn-next', {disable : selectIndex === -1}]" @click="changeFrame()">
                <span class="text">ONWARD</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            personData: [
               {
                   name: 'MOM',
                   imgsrc: 'mom',
               },
               {
                   name: 'DAD',
                   imgsrc: 'dad',
               },
               {
                   name: 'S.O.',
                   imgsrc: 'so',
               },
               {
                   name: 'BFF',
                   imgsrc: 'bff',
               },
               {
                   name: 'WORK SPOUSE',
                   imgsrc: 'ws',
               },
               {
                   name: '',
                   imgsrc: 'surprise',
               },
            ],
            selectIndex: -1,
        }
    },
    methods: {
        changeFrame() {
            if (this.selectIndex === -1) reurn;
            this.$emit('cilckEvent',2);
            this.$emit('listenPerson',this.personData[this.selectIndex].name)
        },
        handleClickLi(index) {
            this.selectIndex = index;
        }
    },
}
</script>

<style lang="scss" scoped>
img{
    -webkit-user-drag: none;
}
.frame2 {
    .content-wrapper{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 90%;
        max-width: 850px;
        text-align: center;
        transform: translateX(-50%) translateY(-50%);
        .title{
            font-family: BrownStd-Bold;
            font-size: 22px;
            letter-spacing: 2px;
            text-align: center;
            color: #ce912c;
            transform: translate3d(0,0,0);
            
        }
        
    }
    .grid-wrapper{
        margin-top: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        
        li{
            position: relative;
            width: 23%;
            margin: 1.4%;
            cursor: pointer;
            text-align: center;
            .cover-wrapper{
                position: relative;
                .normal{
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    opacity: 1;
                }
                .hover{
                    position: relative;
                    opacity: 0;
                    transition: opacity .2s linear;
                }
                &:hover{
                    .hover{
                        opacity: 1;
                    }
                }
                
            }
            &.active{
                .cover-wrapper{
                    .hover{
                        opacity: 1;
                    }
                }
            }
            .name{
                font-family: BrownStd-Bold;
                display: inline-block;
                text-transform: uppercase;
                font-size: 20px;
                letter-spacing: 3px;
                color: #ce912c;
                padding-bottom: 12px;
                border-bottom: 3px solid transparent;
            }
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
</style>