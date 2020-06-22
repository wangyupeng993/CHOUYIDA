<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar"
                 :pullUpLoad="{threshold: 10}" :pullDownRefresh="{threshold: 50}"
                 @onPullingUp="onPullingUp" @onPullingDown="onPullingDown"
                 :scroll-y="!isPC" v-loading="Loading">
        <div>
            <img width="100%" :style="`min-height:${isPC?'':(590/46.875)}rem;`"
                 :class="`${isPC?'':'object-fit-cover'}`"
                 src="@/assets/images/banner/partner_banner.png" alt="" />
        </div>
        <div :class="`${isPC?'center-1200':''}`">
            <div class="padding-tb-df margin-lr-sm">
                <div :class="`text-black ${isPC?'text-sm':'text-df'}`">首页 > {{$route.meta.title}}</div>
            </div>

            <div class="padding-tb-df">
                <ul :class="`flex justify-center ${isPC?'':'text-center'}`">
                    <li v-for="(item) in Nav" :key="item.id" :class="[
                    'radius-round-sm padding-xs pointer white-nowrap',
                    `${item.className} ${navActive == item.id?'bg-darkGreen text-white':'text-grey'}`
                    ]" @click="switchPartner(item.id)">{{item.name}}</li>
                </ul>
            </div>

            <div class="flex padding-bottom-df flex-wrap-wrap">
                <div :class="[
                `${isPC?'basis-30 margin-lr-xs margin-bottom-df':'basis-df margin-bottom-sm'}`,
                'padding-top-sm radius-xl hidden pointer partner-info'
                ]" :style="`${isPC?'border:1px solid rgba(238,238,238,1);':''}`"
                     v-for="item in partner" :key="item.id">
                    <div :class="`${isPC?'':'padding-sm margin-sm shadow'}`">
                        <div class="text-center padding-tb-sm">
                            <img width="100%" :src="item.headimage" alt="" />
                        </div>
                        <div :class="[
                    'padding-bottom-xl padding-lr-sm',
                    `${isPC?'text-xs':'text-sm'} text-black text-justify`
                    ]">{{item.introduction}}</div>
                        <div class="text-sm text-center partner-btn">
                            <router-link :to="{path: '/partner/details', query: {id: item.id}}"
                                         class="padding-tb-xs block">
                                查看详情
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="isPC" class="flex justify-center padding-bottom-df">
                <Pagination background :page-size="Number(paging.limit)"
                            :current-page="paging.page" :total="paging.count"
                            @current-change="handlePageChange" />
            </div>
        </div>
        <Footer v-if="isPC||(!isPC&&paging.page >= paging.countPage)"  />
    </scroll-view>
</template>
<script lang="ts">
import { Component, Vue, Watch} from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import Footer from "@/components/Footer/index.vue";
import Pagination from "@/components/pagination/index.vue";
import {Getter} from "vuex-class";
import service from "@/api/request";

@Component({
    components:{Footer,Pagination}
})
export default class Partner extends Vue {
    private isPC: boolean;
    private partner: object[];
    private navActive: number;
    private paging: ServicePagination;
    private Loading: boolean;
    constructor () {
        super();
        this.isPC =  ObjectDetection.isPCBroswer();
        this.partner = [];
        this.navActive = 0;
        this.paging = {type: 0,limit: 6,page: 1,count: 0,countPage: 0};
        this.Loading = false;
    }
    @Getter('partnerNav') Nav: any
    @Watch('Nav')
    NavChange (nav: [{id: number}]) {
        this.paging = {...this.paging,type: nav[0].id};
        this.getPartnerList(this.paging);
    }

    getPartnerList (params: ServicePagination) {
        this.navActive = params.type;
        this.Loading = true;
        service.getPartnerList(params).then(response => {
            const {limit,page,count,list} = response.data;
            this.Loading = false;
            this.paging = {limit,page,count,type: this.navActive,countPage: Math.ceil((Number(count) / Number(limit)))}
            if (this.isPC) {
                this.partner = list.map((item: object) => item);
            }else{
                this.partner = [...this.partner,...list.map((item: object) => item)];
            }
        }).catch(error => {this.Loading = false;})
    }
    switchPartner (id: number) {
        if (id === this.navActive) return ;
        this.paging = {...this.paging,page: 1,type: id};
        this.partner = [];
        this.getPartnerList(this.paging);
    }

    async onPullingUp () {
        const {page,countPage} = this.paging;
        if (Number(page) >= Number(countPage)) return false;
        await this.getPartnerList({
            ...this.paging,
            type: this.navActive,
            page:(Number(page) + 1)
        });
    }

    async onPullingDown () {
        this.partner = [];
        await this.getPartnerList({
            ...this.paging,
            type: this.navActive,
            page: 1
        });
    }

    handlePageChange (pages: ServicePagination) {
        this.getPartnerList({type:this.navActive,limit: pages.limit,page: pages.page});
    }
    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }
    mounted(): void {
        if (this.Nav[0]) {
            this.paging = {...this.paging,type: this.Nav[0].id}
            this.getPartnerList(this.paging);
        }
    }
}
</script>
