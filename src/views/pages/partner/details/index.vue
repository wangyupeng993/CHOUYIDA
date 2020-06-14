<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC">
        <div class="relative padding-bottom-xl">
            <img width="100%" height="630px" :style="`min-height:${isPC?'':(590/46.875)}rem;`"
                 :class="`object-fit-cover absolute absolute-t absolute-l`"
                 src="@/assets/images/banner/partner_banner.png" alt="" />

            <div :class="`padding-tb-xl ${isPC?'center-1200':'padding-lr-sm'} relative`">
                <div :class="`padding-tb-xl margin-tb-sm ${isPC?'margin-lr-sm':''}`">
                    <div :class="`text-white ${isPC?'text-sm':'text-lg'}`">首页 > {{$route.meta.title}}</div>
                </div>

                <div class="text-white">
                    <h1 :class="`padding-bottom-sm ${isPC?'':'text-lg text-bold'}`">助力招商银行构建开发测试与生产环境</h1>
                    <p class="text-justify line-height-sm text-df padding-bottom-xl">
                        一套成熟、开放和标准的资源管理与调度平台，不仅能够提供自动化的、可快速部署的、可管理的、安全高效的开发测试环境，还能够与当前已有的系统无缝集成，在保护现有IT资产的同时，为企业软件产品的大规模快速迭代提供捷径，进一步满足市场对创新能力的需求。
                    </p>
                </div>

                <div :class="`${isPC?'padding-top-xl margin-top-sm flex':''}`">
                    <div class="basis-lg margin-right-df">
                        <div :class="`${isPC?'padding-top-xl':'padding-bottom-df'}`">
                            <h4 :class="`text-black ${isPC?'text-df':'text-xl'} padding-tb-df`">关于</h4>
                            <p :class="`${isPC?'text-sm':'text-df'} text-black text-justify line-height-sm`">
                                招商银行1987年成立于中国改革开放的最前沿——深圳蛇口，是中国境内第一家完全由企业法人持股的股份制商业银行，也是国家从体制外推动银行业改革的第一家试点银行。成立29年来，招商银行坚持“因您而变”的经营理念，发展成为沪港两地上市的国内第六大商业银行。
                                在英国《银行家》2015年“全球1,000家大银行”榜单中位列第28位，在《财富》杂志2015年世界500强榜单中列第235位。截至2016年末，招商银行境内外分支机构逾1,900家，在中国大陆的130余个城市设立了服务网点，拥有6家境外分行和3家境外代表处，员工近7万人。
                            </p>
                        </div>
                    </div>

                    <div class="basis-sm padding-sm radius-lg shadow bg-white">
                        <div class="text-center margin-lr-df margin-bottom-xl">
                            <img width="100%" src="@/assets/images/home/swiper_img.png" alt="">
                        </div>
                        <p :class="`text-black ${isPC?'':'text-lg'} padding-tb-df`">公司
                            <span class="margin-lr-sm text-gray">招商银行</span>
                        </p>
                        <p :class="`text-black ${isPC?'':'text-lg'} padding-bottom-df`">行业
                            <span class="margin-lr-sm text-gray">金融-银行</span>
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
    export default class PartnerDetails extends Vue {
        isPC = ObjectDetection.isPCBroswer();
        mousewheel = (ev: Element) => {
            this.$store.commit('getScrollTop',ev.scrollTop);
        }
    }
</script>
