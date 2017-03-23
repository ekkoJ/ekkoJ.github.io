<template lang="html">
    <div class="Filter">
        <div class="btns">
            <li v-for="(item, index) in btns"
                key="index"
                @click="filterFun(item.type, index)"
            >
                {{ item.text }}
            </li>
        </div>
        <div class="img-grid">
            <transition-group name="list-complete" tag="p">
                <li v-for="(item, index) in showGrid"
                    key="index"
                >
                    <img :src="item.imgSrc" alt="">
                </li>
            </transition-group>
        </div>
    </div>
</template>

<script>
import lodash from 'lodash';
export default {
    data () {
        return {
            config: [
                {
                    imgSrc: './image/filter/a1.jpg',
                    type: 'a'
                },
                {
                    imgSrc: './image/filter/a2.jpg',
                    type: 'a'
                },
                {
                    imgSrc: './image/filter/a3.jpg',
                    type: 'a'
                },
                {
                    imgSrc: './image/filter/a4.jpg',
                    type: 'a'
                },
                {
                    imgSrc: './image/filter/a5.jpg',
                    type: 'a'
                },
                {
                    imgSrc: './image/filter/a6.jpg',
                    type: 'a'
                },
                {
                    imgSrc: './image/filter/a7.jpg',
                    type: 'a'
                },
                {
                    imgSrc: './image/filter/b1.jpg',
                    type: 'b'
                },
                {
                    imgSrc: './image/filter/b2.jpg',
                    type: 'b'
                },
                {
                    imgSrc: './image/filter/b3.jpg',
                    type: 'b'
                },
                {
                    imgSrc: './image/filter/b4.jpg',
                    type: 'b'
                },
                {
                    imgSrc: './image/filter/b5.jpg',
                    type: 'b'
                },
                {
                    imgSrc: './image/filter/b6.jpg',
                    type: 'b'
                },
                {
                    imgSrc: './image/filter/b7.jpg',
                    type: 'b'
                },
                {
                    imgSrc: './image/filter/b8.jpg',
                    type: 'b'
                },
                {
                    imgSrc: './image/filter/b9.jpg',
                    type: 'b'
                },
                {
                    imgSrc: './image/filter/c1.jpg',
                    type: 'c'
                },
                {
                    imgSrc: './image/filter/c2.jpg',
                    type: 'c'
                },
                {
                    imgSrc: './image/filter/c3.jpg',
                    type: 'c'
                },
                {
                    imgSrc: './image/filter/c4.jpg',
                    type: 'c'
                },
                {
                    imgSrc: './image/filter/c5.jpg',
                    type: 'c'
                },
                {
                    imgSrc: './image/filter/c6.jpg',
                    type: 'c'
                },
                {
                    imgSrc: './image/filter/c7.jpg',
                    type: 'c'
                },
                {
                    imgSrc: './image/filter/c8.jpg',
                    type: 'c'
                },
                {
                    imgSrc: './image/filter/c9.jpg',
                    type: 'c'
                },
                {
                    imgSrc: './image/filter/c10.jpg',
                    type: 'c'
                },
                {
                    imgSrc: './image/filter/c11.jpg',
                    type: 'c'
                },
            ],
            btns: [
                {
                    text: 'a',
                    type: ['a']
                },
                {
                    text: 'b',
                    type: ['b']
                },
                {
                    text: 'c',
                    type: ['c']
                },
                {
                    text: 'a+b',
                    type: ['a','b']
                },
                {
                    text: 'a+c',
                    type: ['a','c']
                },
                {
                    text: 'b+c',
                    type: ['b','c']
                },
                {
                    text: 'all',
                    type: ['a','b','c']
                },
            ],
            showGrid: [],
            lastIndex: '',
        }
    },
    methods: {
        filterFun(types, index) {
            if (this.lastIndex === index) return;
            this.showGrid = [];
            this.config.forEach((item, indexNum) => {
                if (types.includes(item.type)) this.showGrid.push(item);
                this.showGrid = _.shuffle(this.showGrid);
            })
            this.lastIndex = index;
        }
    },
    created() {
        this.showGrid = _.shuffle(this.config);
    }
}
</script>

<style lang="scss" scoped>
.Filter {
    .btns{
        li{
            font-size: 16px;
            color: #000;
            padding:5px 10px;
            border:1px solid #000;
            display: inline-block;
            margin: 10px;
            cursor: pointer;
            font-weight: bold;
            
            &.active{
                background: #000;
                color: #fff;
            }
            &:hover{
                background: #000;
                color: #fff;
            }
        }
    }
    .img-grid{
        width: 90%;
        margin: 0 auto;
        li{
            transition: all 1s;
            width: 25%;
            display: inline-block;
            img{
                width: 100%;
            }
        }
    }
}
</style>