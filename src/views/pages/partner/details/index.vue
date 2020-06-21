<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC" v-loading="Loading">
        <div>
            <img width="100%" :style="`min-height:${isPC?'':(590/46.875)}rem;`"
                 :class="`${isPC?'':'object-fit-cover'}`"
                 src="@/assets/images/banner/partner_banner.png" alt="" />
        </div>
        <div :class="`padding-bottom-xl ${isPC?'center-1200':'padding-lr-sm'} relative`">
            <!--<div class="text-white">
                <h1 :class="`padding-bottom-sm ${isPC?'':'text-lg text-bold'}`">助力招商银行构建开发测试与生产环境</h1>
                <p class="text-justify line-height-sm text-df padding-bottom-xl">
                    {{partner.introduction}}
                </p>
            </div>-->

            <div :class="`${isPC?'flex':''}`">
                <div class="basis-lg margin-right-df">
                    <div :class="`margin-tb-sm`">
                        <div :class="`text-black ${isPC?'text-sm':'text-lg'}`">首页 > {{$route.meta.title}}</div>
                    </div>

                    <div :class="`${isPC?'padding-top-df':'padding-bottom-df'}`">
                        <h4 :class="`text-black ${isPC?'text-df':'text-xl'} padding-tb-df`">关于</h4>
                        <p :class="`${isPC?'text-sm':'text-df'} text-black text-justify line-height-sm`">
                            {{partner.detail}}
                        </p>
                    </div>
                </div>

                <div class="basis-sm padding-sm radius-lg shadow bg-white" :style="`margin-top:${isPC?'-56px':''};`">
                    <div class="text-center margin-lr-df margin-bottom-xl">
                        <img width="100%" :src="partner.headimage" alt="" />
                    </div>
                    <p :class="`text-black ${isPC?'':'text-lg'} padding-tb-df`">公司
                        <span class="margin-lr-sm text-gray">{{partner.name}}</span>
                    </p>
                    <p :class="`text-black ${isPC?'':'text-lg'} padding-bottom-df`">行业
                        <span class="margin-lr-sm text-gray">{{partner.industry}}</span>
                    </p>
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
import service from "@/api/request";
@Component({
    components:{Footer}
})
export default class PartnerDetails extends Vue {
    private isPC: boolean;
    private partner: ServicePartnerDetail;
    private Loading: boolean;
    constructor () {
        super();
        this.isPC = ObjectDetection.isPCBroswer();
        this.partner = {name: '',introduction:'',headimage: '',detail: '',industry: ''};
        this.Loading = false;
    }

    getPartnerDetails () {
        const {id} = this.$route.query;
        this.Loading = true;
        service.getPartnerDetails({id:Number(id)}).then(response => {
            const {data} = response;
            this.partner = data;
            this.Loading = false;
        }).catch(error => {this.Loading = false;});
    }

    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }

    mounted(): void {
        this.getPartnerDetails();
    }
}
</script>
