<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC">
        <div>
            <img width="100%" :style="`min-height:${isPC?'':(590/46.875)}rem;`"
                 :class="`${isPC?'':'object-fit-cover'}`"
                 src="@/assets/images/banner/information_banner.png" alt="" />
        </div>
        <div :class="`${isPC?'center-1200':''}`">
            <div class="padding-tb-df margin-lr-sm">
                <div :class="`text-black ${isPC?'text-sm':'text-df'}`">首页 > {{$route.meta.title}}</div>
            </div>

            <div :class="`flex hidden margin-lr-sm ${isPC?'radius-round-sm':'radius-round-df'}`"
                 style="border:1px solid #00BA33;">
                <input :class="[
                'line-height-xl text-indent-sm',
                `${isPC?'text-sm basis-max':'text-df basis-xl'}`
                ]" type="text" name="" placeholder="输入资讯标题" />
                <button :class="[
                'text-white bg-green pointer',
                `${isPC?'basis-min text-sm':'basis-xs text-df'}`
                ]">搜索</button>
            </div>

            <div class="padding-tb-df">
                <ul :class="`flex justify-center ${isPC?'':'text-center'}`">
                    <li v-for="item in Nav" :key="item.id" :class="[
                    'radius-round-sm padding-tb-xs padding-lr-sm pointer',
                    `${item.className} ${navActive == item.id?'bg-darkGreen text-white':'text-grey'}`
                    ]">{{item.name}}</li>
                </ul>
            </div>

            <div :class="`radius-lg margin-bottom-df ${isPC?'padding-df':'padding-sm margin-lr-sm'}`"
                 style="border:1px solid rgba(229,229,229,1);">
                <h2 :class="`text-inkblue padding-bottom-sm ${isPC?'':'text-lg text-hidden'}`">
                    WICC 高峰对话：一场 5G+通信云行业发展的华山论剑
                </h2>
                <p :class="`text-darkGrey text-justify ${isPC?'text-sm':'text-df'}`">
                    2019 年 11 月 30 日，全球互联网通信云大会（WICC）在上海圆满落幕。互联网通信云行业领导者融云作为主办方，邀请到阿里、百度、京东等知名公司的技术领袖，对通信云技术如何支撑 5G 时代下的互联网通信云新应用......
                </p>
            </div>

            <div class="padding-bottom-df">
                <div :class="`information-info flex margin-bottom-sm radius-df hidden pointer ${isPC?'':'margin-lr-sm'}`"
                     v-for="(item,index) in information" :key="index">
                    <div :class="`${isPC?'basis-xs':'basis-sm'} radius-df hidden margin-right-sm`">
                        <img class="object-fit-cover app-main" src="@/assets/images/147.png" alt="">
                    </div>
                    <div class="basis-xl hidden padding-right-sm">
                        <router-link to="/information/details">
                            <h3 :class="`information-title padding-tb-xs ${isPC?'':'text-hidden text-lg'}`">
                                {{item.title}}
                            </h3>
                        </router-link>
                        <p :class="`text-darkGrey ${isPC?'text-sm':'text-df'} text-justify`">
                            {{item.detail}}
                        </p>
                        <div :class="`flex padding-top-sm ${isPC?'text-xs':'text-sm'}`">
                            <p class="basis-xl text-grey">{{item.date}}</p>
                            <router-link to="/information/details" class="basis-xs">
                                <p class="text-green text-right">
                                    查看详情 <i class="cuIcon-right"></i>
                                </p>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="isPC" class="flex justify-center padding-bottom-df">
                <Pagination background :page-size="Number(paging.limit)"
                            :current-page="paging.page" :total="paging.count"
                            @current-change="handlePageChange"/>
            </div>
        </div>
        <Footer />
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
export default class Information extends Vue {
    private isPC: boolean;
    private navActive: number;
    private paging: ServicePagination;
    private information: object[];
    constructor () {
        super();
        this.isPC = ObjectDetection.isPCBroswer();
        this.navActive = 0;
        this.paging = {type: 0,limit: 6,page: 1,count: 0};
        this.information = [];
    }
    @Getter('newsNav') Nav: any
    @Watch('Nav')
    NavChange (nav: [{id: number}]) {
        this.paging = {...this.paging,type: nav[0].id};
        this.getNewsList(this.paging);
    }

    getNewsList (params: ServicePagination) {
        this.navActive = params.type;
        service.getNewsList(params).then(response => {
            const {limit,page,count,list} = response.data;
            this.paging = {limit,page,count,type: this.navActive}
            this.information = list.map(item => item);
        }).catch(error => {
            console.log(error,'===========');
        })
    }

    handlePageChange (pages: ServicePagination) {
        this.getNewsList({type:this.navActive,limit: pages.limit,page: pages.page});
    }

    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }

    mounted(): void {
        if (this.Nav[0]) {
            this.paging = {...this.paging,type: this.Nav[0].id}
            this.getNewsList(this.paging);
        }
    }
}
</script>
