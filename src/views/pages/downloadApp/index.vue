<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC">
        <div>
            <img width="100%" :style="`min-height:${isPC?'':(590/46.875)}rem;`"
                 :class="`${isPC?'':'object-fit-cover'}`"
                 src="@/assets/images/banner/downloadApp_banner.png" alt="" />
        </div>
        <div :class="`${isPC?'center-1200 relative padding-bottom-xl':''}`">
            <div class="padding-tb-df margin-lr-sm">
                <div :class="`text-black ${isPC?'text-sm':'text-df'}`">首页 > {{$route.meta.title}}</div>
            </div>

            <div class="padding-df bg-grayLight relative flex justify-end">
                <img :style="`width:${isPC?'':'100%'};`"
                     src="@/assets/images/downloadApp_mobile.png" alt="" />
                <div class="absolute absolute-l absolute-t">
                    <div :class="[
                    'text-black text-xxl padding-left-sm',
                    `${isPC?'margin-top-df margin-left-xl padding-top-xl':'padding-top-df'}`
                    ]">
                        我痴酒廊
                    </div>
                    <p :class="[
                    ' text-black text-df padding-left-sm',
                    `${isPC?'margin-left-xl padding-top-df':'padding-top-sm'}`
                    ]">
                        安全 简易  界面美观
                    </p>
                    <img :class="[
                    'padding-left-sm',
                    `${isPC?'margin-top-xl margin-left-xl padding-top-xl':' padding-top-sm'}`
                    ]" :style="`width:${isPC?'112px':(112/46.875)+'rem'};height: ${isPC?'112px':(112/46.875)+'rem'};`"
                         src="@/assets/images/footer/code.png" alt="">
                </div>
            </div>
        </div>
        <Footer />
    </scroll-view>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import Footer from "@/components/Footer/index.vue";
import Pagination from "@/components/pagination/index.vue";
@Component({
    components:{Footer}
})
export default class About extends Vue {
    isPC = ObjectDetection.isPCBroswer();

    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }
}
</script>
