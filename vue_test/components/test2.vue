<template lang="html">
    <div class="test2">
        <div class="editbox">
            <input type="text" name="" value=""
                v-model="edittext"
            >
        </div>
        <p>{{ edittext }}</p>
    </div>
</template>

<script>

export default {
    data () {
        return {
            edittext: 'Edit me',
        }
    },
    methods: {
        
    }
}
</script>

<style lang="scss" scoped>
.test2 {
    height: 300px;
    position: relative;
    padding-top: 150px;
    p{
            font-size: 22px;
            font-weight: bold;
            color: #6d8088;
            height: 30px;
            cursor: default;
            text-align: center;
            cursor: pointer;
            &:before{
                    content: '✎';
                    display: inline-block;
                    margin-right: 5px;
                    font-weight: normal;
                    vertical-align: text-bottom;
            }
    }
    .editbox{
        background-image: -webkit-linear-gradient(top, #5c9bb7, #5392ad);
        background-color: #5c9bb7;
        box-shadow: 0 1px 1px #ccc;
        border-radius: 3px;
        width: 290px;
        padding: 10px;
        position: absolute;
        left: 50%;
        margin-left: -150px;
        top: 80px;
        input{
            border: none;
            width: 100%;
            line-height: 34px;
            border-radius: 3px;
            box-shadow: 0 2px 6px #bbb inset;
            text-align: center;
            font-size: 16px;
            font-family: inherit;
            color: #8d9395;
            font-weight: bold;
            outline: none;
        }
        &:after{
            content: '';
            position: absolute;
            border: 6px solid #5190ac;
            border-color: #5190ac transparent transparent;
            width: 0;
            height: 0;
            bottom: -12px;
            left: 50%;
            margin-left: -6px;
        }
    }
}
</style>