<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC">
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
                <h2 :class="`${isPC?'':'text-df'} text-inkblue`">WICC 高峰对话：一场 5G+通信云行业发展的华山论剑</h2>
                <p class="text-sm text-gray padding-tb-xs">2020-04-30 16:06  未知    阅读：167</p>
            </div>

            <div class="padding-bottom-xl padding-lr-lg text-justify text-sm text-inkblue line-height-sm">
                雅加达区日前正式开放对象存储服务。此次对象存储服务在雅加达区的开放，将为出海及海外企业提供面向海量非结构化数据的通用数据平台，提供安全可靠、低成本的云存储服务，进一步满足中国企业国际化业务的开展、国际化企业全球市场的开拓，以及海外本地企业对云能力的需求。这是青云QingCloud 自 2019 年 12 月正式开放雅加达区提供公有云服务以来，又一次重要的能力输出。
                <div class="margin-lr-df margin-tb-lg">
                    <img width="100%" src="@/assets/images/information_details.png" alt="" />
                </div>

                是青云QingCloud 旗下自主研发的企业级分布式存储产品线，依托于青云QingCloud 公有云近 7 年的技术迭代和规模化应用，已经形成了一个开放多元的软件定义存储生态，能够提供全形态软件定义存储产品的私有化部署，包括QingStor®NeonSAN、QingStor®对象存储、QingStor®文件存储与 QingStor®融合存储四大产品。其中，QingStor®对象存储是青云QingCloud 自主研发的企业级通用数据存储平台，自 2016 年正式商用以来，持续为用户提供安全、稳定、可靠的高品质数据存储服务，数据持久性达 99.999999999%，服务可用性达 99.99%。

                同时，QingStor® 对象存储服务还能提供完整的原生 Restful API 接口，兼容 AWS S3 API，并提供覆盖所有主流开发语言的 SDK，帮助用户便捷完成业务系统的整合对接，享受对象存储带来的海量、安全、低成本的云存储服务。早在 2018 年，QingStor®对象存储就通过了可信云认证，更在 IDC 2018 年 SDS 报告中，位列中国对象存储市场占有率第六名，并连续两年成为 SDS 核心厂商。

                青云 QingCloud 雅加达区于 2019 年 12 月正式开放，依托印度尼西亚特殊的地缘、经济优势和优质的网络资源，旨在为拓展海外市场的中国企业及海外本地企业提供云、网、边、端一体化的全维云平台。在雅加达区，青云QingCloud 提供功能丰富、性能优越的公有云服务，不仅可以满足大型企业的业务需求，还可支撑互联网金融、电商、移动互联网等行业客户对云计算的需求，为国内企业拓展东南亚市场提供有力保障。在产品及服务的覆盖上，青云QingCloud 雅加达区采用公有云先行的模式。此次正式开放的对象存储服务，正是遵循此前的规划，逐步完善全维云平台的本地化落地。

                为响应“一带一路”倡议，青云QingCloud 积极投身于海外市场的拓展，开放雅加达区就是青云QingCloud 出海战略的第一站。未来，青云QingCloud 将开辟更多出海新航线，将领先的全维云技术、专业的产品服务能力输出到更多“一带一路”国家，助力全球数字经济蓬勃发展

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
export default class Details extends Vue {
    isPC = ObjectDetection.isPCBroswer();
    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }
}
</script>
