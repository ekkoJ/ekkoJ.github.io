<template lang="html">
    <div class="test4">
        <div class="bar">
            <input type="text" 
                v-model="enterTexts" 
                placeholder="Enter your search terms"
                @input="enterfun()"
            >
        </div>
        <ul>
            <li v-for="(item, index) in showConfig"
                key="index"
            >
                <a href=""><img :src="item.imgSrc"></a>
                <p>{{ item.text }}</p>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data () {
        return {
            configs: [
                {
                    imgSrc: "./image/01.jpg",
                    text: "What You Need To Know About CSS Variables"
                },
                {
                    imgSrc: "./image/02.jpg",
                    text: "Freebie: 4 Great Looking Pricing Tables"
                },
                {
                    imgSrc: "./image/03.jpg",
                    text: "20 Interesting JavaScript and CSS Libraries for February 2016"
                },
                {
                    imgSrc: "./image/04.jpg",
                    text: "Quick Tip: The Easiest Way To Make Responsive Headers"
                },
                {
                    imgSrc: "./image/05.jpg",
                    text: "Learn SQL In 20 Minutes"
                },
                {
                    imgSrc: "./image/06.jpg",
                    text: "Creating Your First Desktop App With HTML, JS and Electron"
                }
            ],
            showConfig: [],
            enterTexts: ''
        }
    },
    methods: {
        enterfun() {
            this.showConfig = [];
            this.configs.forEach((item, index) => {
                if(item.text.toLowerCase().includes(this.enterTexts.toLowerCase()))
                this.showConfig.push(item)
            })
        }
    },
    created() {
        this.showConfig = this.configs;
    }
}
</script>

<style lang="scss" scoped>
.test4 {
    .bar{
        background-color: #5c9bb7;
        background-image: -webkit-linear-gradient(top, #5c9bb7, #5392ad);
        box-shadow: 0 1px 1px #ccc;
        border-radius: 2px;
        width: 400px;
        padding: 14px;
        margin: 45px auto 20px;
        position: relative;
        input{
            background: #fff no-repeat 13px 13px;
            border: none;
            width: 100%;
            line-height: 19px;
            padding: 11px 0;
            border-radius: 2px;
            box-shadow: 0 2px 8px #c4c4c4 inset;
            text-align: left;
            font-size: 14px;
            font-family: inherit;
            color: #738289;
            font-weight: bold;
            outline: none;
            text-indent: 10px;
        }
    }
    ul{
        list-style: none;
        width: 428px;
        margin: 0 auto;
        text-align: left;
        li{
            border-bottom: 1px solid #ddd;
            padding: 10px;
            overflow: hidden;
            img{
                width: 60px;
                height: 60px;
                float: left;
                border: none;
            }
            a{
                outline: none;
                color: #389dc1;
            }
            p{
                margin-left: 75px;
                font-weight: bold;
                padding-top: 12px;
                color: #6e7a7f;
                font-size: 15px;
            }
        }
    }
}
</style>