<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC" v-loading="Loading">
        <div>
            <img width="100%" :style="`min-height:${isPC?'':(590/46.875)}rem;`"
                 :class="`${isPC?'':'object-fit-cover'}`"
                 src="@/assets/images/banner/information_banner.png" alt="" />
        </div>

        <div :class="`${isPC?'center-1200 padding-bottom-xl':''}`">
            <div class="padding-tb-df margin-lr-sm">
                <div :class="`text-black ${isPC?'text-sm':'text-df'}`">首页 > {{$route.meta.title}}</div>
            </div>

            <div class="padding-tb-df padding-lr-lg">
                <h2 :class="`${isPC?'':'text-df'} text-inkblue`">{{newsDetails.title}}</h2>
                <p class="text-sm text-gray padding-tb-xs">{{newsDetails.createtime}}</p>
            </div>

            <div class="padding-bottom-xl padding-lr-lg text-justify text-sm text-inkblue line-height-sm">
                {{newsDetails.detail}}
            </div>

        </div>
        <Footer />
    </scroll-view>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import Footer from "@/components/Footer/index.vue";
import service from "@/api/request";
import {formatTime} from "@/api/methods/common";

@Component({
    components:{Footer}
})
export default class Details extends Vue {
    private isPC: boolean;
    private newsDetails: ServiceNewDetails;
    private Loading: boolean;
    constructor () {
        super();
        this.isPC = ObjectDetection.isPCBroswer();
        this.newsDetails = {id: 0,createtime: ''};
        this.Loading = false;
    }
    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }

    getNewsDetails () {
        const {id} = this.$route.query;
        this.Loading = true;
            service.getNewsDetails({id: Number(id)}).then(response => {
            const {data} = response;
            // this.Loading = false;
            this.newsDetails = {...data,createtime: formatTime(new Date(Number(data.createtime)))};
        }).catch(error => {this.Loading = false;});
    }

    mounted(): void {
        this.getNewsDetails()
    }
}
</script>
