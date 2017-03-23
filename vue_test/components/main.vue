<template lang="html">
    <div class="main">
        <transition name="fade">
            <frame1  @cilckEvent="changeFrame" v-if="showFrame === 0"></frame1>
            <frame2 @cilckEvent="changeFrame"
                v-if="showFrame === 1" 
                @listenPerson="personChange"
            >
            </frame2>
            <frame3 @cilckEvent="changeFrame"
                v-if="showFrame === 2"
                @listenType="typeChange"
                :select-name="selectname"
            >
            </frame3>
            <lastFrame v-if="showFrame === 3"
                :select-name="selectname"
                :select-type="selectarr"
                :final-data="baseData"
            >
            </lastFrame>
        </transition>
    </div>
</template>

<script>
import frame1 from './r29/frame1.vue';
import frame2 from './r29/frame2.vue';
import frame3 from './r29/frame3.vue';
import lastFrame from './r29/lastFrame.vue';

export default {
    data () {
        return {
            showFrame: 0,
            selectname: '',
            selectarr: [],
            baseData:''
        }
    },
    created: function() {
            var baseUrl = 'https://cdn.contentful.com/spaces/gju6m3ezaxar/entries?content_type=jsonFull&include=10&limit=200&access_token=e887c7cd3298dd5e14cce7cd22523670abea9de380aef548efcbcb4b3a612ee9';
            var self = this;
            fetch(baseUrl).then(function(res) {
                return res.json()
            }).then(function(content){
                return self.baseData = content.items[0].fields.jsonFull.feed.entry;
            })
    },
    components: {
        frame1,
        frame2,
        frame3,
        lastFrame
    },
    methods: {
        changeFrame(frame) {
            this.showFrame = frame;
        },
        personChange(name) {
            this.selectname = name;
        },
        typeChange(arr) {
            this.selectarr = arr;
        }
    }
}
</script>

<style lang="scss" scoped>

.main {
    width: 100%;
    height: 100%;
    overflow: auto;
    
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>