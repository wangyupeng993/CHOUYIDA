<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC">
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
                <input :class="[
                'line-height-xl text-indent-sm',
                `${isPC?'text-sm basis-max':'text-df basis-xl'}`
                ]" type="text" name="" placeholder="输入职位名称" />
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
                    ]" @click="switchRecruitment(item.id)">{{item.name}}</li>
                </ul>
            </div>

            <div class="flex padding-bottom-df flex-wrap-wrap">
                <div :class="[
                `${isPC?'basis-xm margin-lr-sm padding-sm':'basis-df'} margin-bottom-df`,
                `text-black radius-sm pointer`
                ]" :style="`${isPC?'border:1px solid rgba(229,229,229,1);':''}`"
                     v-for="(item,index) in recruitment" :key="index">
                    <div :class="`${isPC?'':'padding-sm margin-lr-sm'}`" :style="`${isPC?'':'border:1px solid rgba(229,229,229,1);'}`">
                        <router-link :to="{path: '/recruitment/details',query: {id:item.id}}">
                            <p :class="`${item.className} text-black`">{{item.name}}
                                <span class="text-gray text-xs">{{item.time}}发布</span>
                            </p>
                            <p :class="`text-xs text-black padding-tb-xs`">
                                {{item.area}} | {{item.year_limit}} | {{item.education}}
                            </p>
                            <p :class="`text-sm text-red`">
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
export default class Recruitment extends Vue {
    private isPC: boolean;
    private recruitment: object[];
    private navActive: number;
    private paging: ServicePagination;
    constructor () {
        super();
        this.isPC = ObjectDetection.isPCBroswer();
        this.recruitment = [];
        this.navActive = 0;
        this.paging = {type: 0,limit: 6,page: 1,count: 0};
    }
    @Getter('recruitmentNav') Nav: any
    @Watch('Nav')
    NavChange (nav: [{id: number}]) {
        this.paging = {...this.paging,type: nav[0].id};
        this.getRecruitmentList(this.paging);
    }

    getRecruitmentList (params: ServicePagination) {
        this.navActive = params.type;
        service.getRecruitmentList(params).then(response => {
            const {limit,page,count,list} = response.data;
            this.paging = {limit,page,count,type: this.navActive}
            this.recruitment = list.map((item: object) => {
                return {...item,
                    className: `${this.isPC?'text-sm':'text-df'}`}
            })
        })
    }

    switchRecruitment (id: number) {
        if (id === this.navActive) return ;
        this.paging = {...this.paging,page: 1,type: id};
        this.getRecruitmentList(this.paging );
    }

    handlePageChange (pages: ServicePagination) {
        this.getRecruitmentList({type:this.navActive,limit: pages.limit,page: pages.page});
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
