<template lang="html">
    <div class="test3">
        <div id="main" class="main">
            <h1>Services</h1>
            <ul>
                <li v-for="(item, index) in projectData"
                    :class="{active: selectData.includes(index)}"
                    @click="selected(index)"
                    key="index"
                >
                    {{ item.texts }}
                    <span>${{ item.price.toFixed(2) }}</span>
                </li>
            </ul>
            <div class="total">
                Total: <span>${{ sum.toFixed(2) }}</span>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            projectData: [
                {
                    texts: 'Web Development',
                    price: 300
                },
                {
                    texts: 'Design',
                    price: 400
                },
                {
                    texts: 'Integration',
                    price: 250
                },
                {
                    texts: 'Training',
                    price: 220
                },
            ],
            selectData: [],
            sum: 0,
            
        }
    },
    methods: {
        selected(index) {
            if (this.selectData.includes(index)) {
                  this.selectData.forEach((item, num)=> {
                        if(item === index) this.selectData.splice(num,1)
                  }) 
                  return;
            };
            this.selectData.push(index);
        },
    },
    watch: {
        selectData: function() {
            this.sum = 0;
            this.selectData.forEach((item, index) => {
                this.sum = this.sum + this.projectData[item].price;
            })
             
        }
    },
    created() {
        this.selectData = [0];
        this.selectData.forEach((item, index) => {
            this.sum = this.sum + this.projectData[item].price;
        })
    },
}
</script>

<style lang="scss" scoped>
.test3 {
    .main{
            background-color: #61a1bc;
            border-radius: 2px;
            box-shadow: 0 1px 1px #ccc;
            width: 400px;
            padding: 35px 60px;
            margin: 50px auto;
            box-sizing: content-box;
            h1{
                color: #fff;
                font-size: 64px;
                font-family: 'Cookie', cursive;
                font-weight: normal;
                line-height: 1;
                text-shadow: 0 3px 0 rgba(0,0,0,0.1);
            }
            ul{
                list-style: none;
                
                margin: 20px 0 15px;
                li{
                    padding: 20px 30px;
                    background-color: #e35885;
                    margin-bottom: 8px;
                    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
                    cursor: pointer;
                    color: #fff;
                    font-size: 20px;
                    font-weight: bold;
                    text-align: left;
                    span{
                        color: #fff;
                        font-size: 20px;
                        font-weight: bold;
                        float: right;
                    }
                    &.active{
                        background-color: #8ec16d;
                    }
                }
            }
            .total{
                border-top: 1px solid rgba(255,255,255,0.5);
                padding: 15px 30px;
                font-size: 20px;
                font-weight: bold;
                text-align: left;
                color: #fff;
                span{
                    float: right;
                    font-size: 20px;
                    font-weight: bold;
                }
            }
    }
}
</style>