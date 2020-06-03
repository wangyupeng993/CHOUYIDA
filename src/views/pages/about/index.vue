<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC">
        <div>
            <img width="100%" :style="`min-height:${isPC?'':(590/46.875)}rem;`"
                 :class="`${isPC?'':'object-fit-cover'}`"
                 src="@/assets/images/banner/about_banner.png" alt="" />
        </div>

        <div class="relative padding-bottom-xl hidden">
            <img class="absolute absolute-l absolute-b margin-right-sm"
                 style="width:727px;height:663px;"
                 src="@/assets/images/about_1848.png" alt="" />
            <img class="absolute absolute-r absolute-t margin-right-sm"
                 style="width:1191px;height:873px;"
                 src="@/assets/images/about_1849.png" alt="" />

            <div :class="`${isPC?'center-1200 relative padding-bottom-xl':''}`">
                <div class="padding-tb-df margin-lr-sm">
                    <div :class="`text-black ${isPC?'text-sm':'text-df'}`">首页 > {{$route.meta.title}}</div>
                </div>

                <div class="padding-df">
                    <h2 class="text-center text-lg text-inkblue padding-bottom-df">企业简介</h2>
                    <p class="text-xs text-inkblue text-justify margin-lr-xl padding-lr-xl">
                        是一家具有广义云计算服务能力的平台级混合云 ICT 厂商和服务商，以软件定义为核心，致力于为企业用户提供自主可控、中立可靠、性能卓越、灵活开放的云计算产品与服务。<br /><br />
                        经过多年发展，已经具备了全维度的云产品与云服务交付能力：在技术层次上，自主研发形成跨越智能广域网、IaaS 和 PaaS 的云网一体技术架构体系，拥有全面的 ICT 服务能力；在交付形态上，以统一技术架构形成云产品、云服务两大标准化业务模块，根据客户需要满足私有云、公有云和混合云的部署需求，并针对多个行业形成了完善的行业云计算解决方案；在场景纵深上，正着力布局发展集云、网、边、端于一体化的综合服务能力，实现更广义的数据互联。
                    </p>
                </div>

                <div class="padding-lr-xl padding-top-df padding-bottom-xl margin-bottom-xl">
                    <el-carousel v-if="isPC" :interval="4000" height="350px"
                                 class="radius-lg margin-lr-xl padding-lr-xl">
                        <el-carousel-item v-for="item in 6" :key="item" class="radius-lg hidden">
                            <img class="app-main"
                                 src="@/assets/images/banner/information_banner.png" alt="">
                        </el-carousel-item>
                    </el-carousel>
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
export default class About extends Vue {
    isPC = ObjectDetection.isPCBroswer();

    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }
}
</script>
