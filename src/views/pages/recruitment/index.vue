<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC" v-loading="Loading"
                 :pullUpLoad="{threshold: 10}" :pullDownRefresh="{threshold: 50}"
                 @onPullingDown="onPullingDown" @onPullingUp="onPullingUp">
        <div>
            <img width="100%" :style="`min-height:${isPC?'':(590/46.875)}rem;`"
                 :class="`${isPC?'':'object-fit-cover'}`"
                 src="@/assets/images/banner/recruitment_banner.png" alt="" />
        </div>

        <div :class="`${isPC?'center-1200':''}`">
            <div class="padding-tb-df margin-lr-sm">
                <div :class="`text-black ${isPC?'text-sm':'text-df'}`">首页 > {{$route.meta.title}}</div>
            </div>

            <div :class="`flex hidden margin-lr-sm ${isPC?'radius-round-sm':'radius-round-df'}`"
                 style="border:1px solid #00BA33;">
                <input @change="enterInputChange" :class="[
                'line-height-xl text-indent-sm',
                `${isPC?'text-sm basis-max':'text-df basis-xl'}`
                ]" v-model="paging.keyword" type="text" name="keyword" placeholder="输入职位名称" />
                <button @click="recruitmentSearch" :class="[
                'text-white bg-green pointer',
                `${isPC?'basis-min text-sm':'basis-xs text-df'}`
                ]">搜索</button>
            </div>

            <div class="padding-tb-df">
                <ul :class="`flex justify-center ${isPC?'':'text-center'}`">
                    <li v-for="item in Nav" :key="item.id" :class="[
                    'radius-round-sm padding-tb-xs padding-lr-sm pointer',
                    `${item.className} ${navActive == item.id?'bg-darkGreen text-white':'text-grey'}`
                    ]" @click="switchRecruitment(item.id)">{{item.name}}</li>
                </ul>
            </div>

            <div class="flex padding-bottom-df flex-wrap-wrap">
                <div :class="[
                `${isPC?'basis-xm margin-lr-sm padding-sm':'basis-df'} margin-bottom-df`,
                `text-black radius-sm pointer`
                ]" :style="`${isPC?'border:1px solid rgba(229,229,229,1);':'max-width:8rem;'}`"
                     v-for="(item,index) in recruitment" :key="index">
                    <div :class="`${isPC?'':'padding-sm margin-lr-sm'}`" :style="`${isPC?'':'border:1px solid rgba(229,229,229,1);'}`">
                        <router-link :to="{path: '/recruitment/details',query: {id:item.id}}">
                            <p :class="`${item.className} text-black text-hidden`">{{item.name}}
                                <span :class="`${isPC?'text-xs':'text-df'} text-gray`">{{item.createtime}} 发布</span>
                            </p>
                            <p :class="`${isPC?'text-xs':'text-df'} text-black padding-tb-xs`">
                                {{item.area}} | {{item.year_limit}} | {{item.education}}
                            </p>
                            <p :class="`${isPC?'text-xs':'text-lg'} text-red`">
                                {{item.money}}
                            </p>
                        </router-link>
                    </div>
                </div>
            </div>

            <div v-if="isPC" class="flex justify-center padding-bottom-df">
                <Pagination background :page-size="Number(paging.limit)"
                            :current-page="paging.page" :total="paging.count"
                            @current-change="handlePageChange" />
            </div>
        </div>
        <Footer v-if="isPC||(!isPC&&paging.page >= paging.countPage)" />
    </scroll-view>
</template>
<script lang="ts">
import { Component, Vue, Watch} from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import Footer from "@/components/Footer/index.vue";
import Pagination from "@/components/pagination/index.vue";
import {Getter} from "vuex-class";
import {formatTime} from "@/api/methods/common";
import service from "@/api/request";
import BScroll from "better-scroll";
@Component({
    components:{Footer,Pagination}
})
export default class Recruitment extends Vue {
    private isPC: boolean;
    private recruitment: object[];
    private navActive: number;
    private paging: ServicePagination;
    private Loading: boolean;
    constructor () {
        super();
        this.isPC = ObjectDetection.isPCBroswer();
        this.recruitment = [];
        this.navActive = 0;
        this.paging = {type: 0,limit: 6,page: 1,count: 0,countPage: 0,keyword: ''};
        this.Loading = false;
    }
    @Getter('recruitmentNav') Nav: any
    @Watch('Nav')
    NavChange (nav: [{id: number}]) {
        this.paging = {...this.paging,type: nav[0].id};
        this.getRecruitmentList(this.paging);
    }

    getRecruitmentList (params: ServicePagination) {
        this.navActive = params.type;
        this.Loading = true;
        service.getRecruitmentList(params).then(response => {
            const {limit,page,count,list} = response.data;
            this.Loading = false;
            this.paging = {
                limit,page,count,
                type: params.type,
                countPage: Math.ceil((Number(count) / Number(limit))),
                keyword: this.paging.keyword
            };

            if (this.isPC) {
                this.recruitment = list.map((item: ServiceNewDetails) => {
                    return {
                        ...item,
                        createtime: formatTime(new Date(Number(item.createtime))).split(' ')[1],
                        className: `${this.isPC?'text-sm':'text-lg'}`
                    }
                });
            } else {
                this.recruitment = [...this.recruitment,...list.map((item: ServiceNewDetails) => {
                    return {
                        ...item,
                        createtime: formatTime(new Date(Number(item.createtime))).split(' ')[1],
                        className: `${this.isPC?'text-sm':'text-lg'}`
                    }
                })];
            }
        }).catch(error => {this.Loading = false;});
    }

    switchRecruitment (id: number) {
        if (id === this.navActive) return ;
        this.paging = {...this.paging,page: 1,type: id};
        this.recruitment = [];
        this.getRecruitmentList(this.paging );
    }

    async onPullingUp (scroll: BScroll) {
        const {page,countPage} = this.paging;
        if (Number(page) >= Number(countPage)||this.Loading) return false;
        await this.getRecruitmentList({
            ...this.paging,
            type: this.navActive,
            page: (Number(page) + 1)
        });
        await scroll.refresh();
    }

    async onPullingDown () {
        this.recruitment= [];
        await this.getRecruitmentList({
            ...this.paging,
            type: this.navActive,
            page: 1
        });
    }

    recruitmentSearch () {
        this.recruitment = [];
        this.getRecruitmentList({type: this.navActive,limit: 8,page: 1,keyword: this.paging.keyword});
    }

    enterInputChange () {
        if (ObjectDetection.isNull(this.paging.keyword)) {
            this.recruitment = [];
            this.getRecruitmentList({type: this.navActive,limit: 8,page: 1,keyword: this.paging.keyword});
        }
    }

    handlePageChange (pages: ServicePagination) {
        this.getRecruitmentList({...pages,type: this.navActive,keyword: this.paging.keyword});
    }
    mounted(): void {
        if (this.Nav[0]) {
            this.paging = {...this.paging,type: this.Nav[0].id}
            this.getRecruitmentList(this.paging);
        }
    }
    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }
}
</script>
