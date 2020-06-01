<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC">

    </scroll-view>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import Footer from "@/components/Footer/index.vue";
import Pagination from "@/components/pagination/index.vue";
@Component({
    components:{Footer,Pagination}
})
export default class Partner extends Vue {
    isPC = ObjectDetection.isPCBroswer();
    switchType = [{
        name:'创始',
        className: `${this.isPC?'text-sm':'text-df'}`,
        isSlash: true
    },{
        name:'创意团队',
        className: `${this.isPC?'text-sm':'text-df'}`,
        isSlash: true
    },{
        name:'项目经理',
        className: `${this.isPC?'text-sm':'text-df'}`,
        isSlash: true
    },{
        name:'风险控制',
        className: `${this.isPC?'text-sm':'text-df'}`,
        isSlash: true
    },{
        name:'网络技术',
        className: `${this.isPC?'text-sm':'text-df'}`,
        isSlash: true
    },{
        name:'顾问团队',
        className: `${this.isPC?'text-sm':'text-df'}`,
        isSlash: false
    }];
    designer = [{
        name: '王利军',
        skill: '创始人   CEO',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容......',
        imgWidth: `${this.isPC?'130px':(130/46.875)+'rem'}`,
        isPC: this.isPC
    },{
        name: '王利军',
        skill: '创始人   CEO',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容......',
        imgWidth: `${this.isPC?'130px':(130/46.875)+'rem'}`,
        isPC: this.isPC
    },{
        name: '王利军',
        skill: '创始人   CEO',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容......',
        imgWidth: `${this.isPC?'130px':(130/46.875)+'rem'}`,
        isPC: this.isPC
    },{
        name: '王利军',
        skill: '创始人   CEO',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容......',
        imgWidth: `${this.isPC?'130px':(130/46.875)+'rem'}`,
        isPC: this.isPC
    }];
    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }
}
</script>
