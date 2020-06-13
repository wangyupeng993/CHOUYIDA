<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC">
        <div class="relative padding-bottom-xl">
            <img width="100%" height="630px" :style="`min-height:${isPC?'':(590/46.875)}rem;`"
                 :class="`object-fit-cover absolute absolute-t absolute-l`"
                 src="@/assets/images/banner/operation_banner.png" alt="" />
            <div :class="`padding-tb-xl ${isPC?'center-1200':'padding-lr-sm'} relative`">
                <div :class="`padding-tb-xl margin-tb-sm ${isPC?'margin-lr-sm':''}`">
                    <div :class="`text-white ${isPC?'text-sm':'text-lg'}`">首页 > {{$route.meta.title}}</div>
                </div>

                <div class="text-white">
                    <h1 :class="`padding-bottom-sm ${isPC?'':'text-lg text-bold'}`">简约创意纸杯</h1>
                    <p class="text-justify line-height-sm text-df padding-bottom-xl">
                        案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍案例介绍
                        案例介绍案例介绍案例介绍案例介绍案例介绍
                    </p>
                </div>

                <div class="bg-white shadow padding-df margin-top-df">
                    <div class="text-center padding-tb-df">
                        <img :style="`width:${isPC?'679px':'100%'};height:${isPC?'456px':''};`"
                             src="@/assets/images/147.png" alt="" />
                    </div>

                    <div :style="`width:${isPC?'679px':''};margin:0 auto;`">
                        <div :class="`flex text-darkGrey padding-bottom-sm ${isPC?'text-sm':'text-df'}`">
                            <div class="basis-df">支持
                                <span class="text-darkGreen">8600人</span>
                            </div>
                            <div class="basis-df text-center">已筹
                                <span class="text-darkGreen">38745元</span>
                            </div>
                            <div class="basis-df text-right">达成
                                <span class="text-darkGreen">378%</span>
                            </div>
                        </div>

                        <div class="relative bg-grayLight radius-sm" style="height:10px;">
                            <div class="absolute absolute-t absolute-l bg-gradualYellow radius-sm transition-sm"
                                 style="width:50%;height:100%;"></div>
                        </div>

                        <div class="text-center padding-top-df">
                            <img :style="`width:${isPC?'152px':(152/46.875)+'rem'};`"
                                 src="@/assets/images/footer/code.png" alt="" />
                            <p :class="`text-black ${isPC?'text-sm':'text-df'} padding-tb-sm`">扫描二维码下载</p>
                        </div>
                    </div>

                    <div class="text-black">
                        <h2 :class="`${isPC?'':'text-lg'} padding-tb-sm`">项目名称</h2>
                        <p :class="`${isPC?'text-sm':'text-df'} text-justify line-height-sm`">
                            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
                            内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内
                        </p>
                    </div>
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
@Component({
    components:{Footer}
})
export default class OperationDetails extends Vue {
    isPC = ObjectDetection.isPCBroswer();
    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }
}
</script>
