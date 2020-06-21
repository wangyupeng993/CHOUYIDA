<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar"
                 @onPullingUp="onPullingUp" :pullUpLoad="{threshold: 10}"
                 :pullDownRefresh="{threshold: 50}" @onPullingDown="onPullingDown"
                 :scroll-y="!isPC" v-loading="Loading">
        <div class="">
             <img width="100%" :style="`min-height:${isPC?'':(590/46.875)}rem;`"
                  :class="`${isPC?'':'object-fit-cover'}`"
                  src="@/assets/images/banner/designer_banner.png" alt="" />
        </div>
        <div :class="`${isPC?'center-1200':''}`">
            <div class="padding-tb-df margin-lr-sm">
                <div :class="`text-black ${isPC?'text-sm':'text-df'}`">首页 > {{$route.meta.title}}</div>
            </div>

            <div :class="`flex hidden margin-lr-sm ${isPC?'radius-round-sm':'radius-round-df'}`"
                 style="border:1px solid #00BA33;">
                <input @input="enterInputChange" :class="[
                'line-height-xl text-indent-sm',
                `${isPC?'text-sm basis-max':'text-df basis-xl'}`
                ]" type="text" v-model="paging.keyword" name="keyword" placeholder="输入设计师名称" />
                <button @click="designerSearch" :class="[
                'text-white bg-green pointer',
                `${isPC?'basis-min text-sm':'basis-xs text-df'}`
                ]">搜索</button>
            </div>

            <div class="padding-tb-df">
                <ul class="text-center">
                    <li v-for="item in Nav" :key="item.id" :class="[
                        'inline-block padding-tb-xs pointer',`${item.className} text-grey`
                        ]" @click="switchDesigner(item.id)"><span :class="[
                        'inline-block  padding-lr-df',
                        `${navActive == item.id?'text-green':'text-grey'}`
                        ]">{{item.name}}</span><i v-if="item.isSlash">/</i>
                    </li>
                </ul>
            </div>

            <div class="flex padding-bottom-df flex-wrap-wrap">
                <div :class="[
                `team-info ${isPC?'basis-xs padding-sm':'basis-df'}`,
                'bg-white radius-lg pointer',
                'flex items-center justify-center relative hidden',
                `${(index%2) === 1&&isPC?'margin-lr-xs':''} margin-bottom-df`
                ]" v-for="(item,index) in designer" :key="index">
                    <div class="text-center">
                        <div class="padding-xs round inline-block"
                             :style="`width:${item.imgWidth};height:${item.imgWidth};border:${isPC?'5px':(5/46.875)+'rem'} solid #52B16E;`">
                            <img class="app-main round" :src="item.headimage" alt="" />
                        </div>
                        <p :class="`margin-top-xs text-black text-center ${isPC?'text-df':'text-xl'}`">
                            {{item.name}}
                        </p>
                        <p :class="`margin-top-xs text-black text-center ${isPC?'text-sm':'text-df'}`">
                            {{item.type_name}}
                        </p>
                        <div v-if="isPC" :class="[
                        'team-description',
                        'text-justify line-height-xs bg-gradualDarkgreen radius-lg hidden',
                        'app-main absolute absolute-t absolute-l text-white text-sm'
                        ]"><p class="margin-sm">{{item.introduction}}</p>
                        </div>

                        <div v-if="!isPC" :class="[
                        'text-justify line-height-xs',
                        'padding-tb-sm text-black text-sm'
                        ]"><p>{{item.introduction}}</p>
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
        <Footer v-if="isPC||(!isPC&&paging.page >= paging.countPage)" />
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
export default class Designer extends Vue {
    private isPC: boolean;
    private navActive: number;
    private designer: object[];
    private paging: ServicePagination;
    private Loading: boolean;
    constructor () {
        super();
        this.isPC = ObjectDetection.isPCBroswer();
        this.navActive = 0;
        this.designer = [];
        this.paging = {type: 0,limit: 8,page: 1,count: 0,countPage: 0,keyword: ''};
        this.Loading = false;
    }
    @Getter('designerNav') Nav: any
    @Watch('Nav')
    NavChange (nav: [{id: number}]) {
        this.paging = {...this.paging,type: nav[0].id};
        this.getDesignerList(this.paging);
    }

    getDesignerList (params: ServicePagination) {
        this.Loading = true;
        this.navActive = params.type;
        service.getDesignerList(params).then(response => {
            const {limit,page,count,list} = response.data;
            this.Loading = false;
            this.paging = {
                limit,page,count,
                type: params.type,
                countPage: Math.ceil((Number(count) / Number(limit))),
                keyword: this.paging.keyword
            };
            if (this.isPC) {
                this.designer = list.map((item: object) => {
                    return {
                        ...item,
                        isPC: this.isPC,
                        imgWidth: `${this.isPC?'150px':(150/46.875)+'rem'}`
                    }
                });
            } else {
                this.designer = [...this.designer,...list.map((item: object) => {
                    return {
                        ...item,
                        isPC: this.isPC,
                        imgWidth: `${this.isPC?'150px':(150/46.875)+'rem'}`
                    }
                })];
            }
        }).catch(() => {
            this.Loading = false;
        });
    }

    switchDesigner (id: number) {
        if (id === this.navActive) return ;
        this.designer = [];
        this.paging = {...this.paging,limit: 8,page: 1,type: id};
        this.getDesignerList(this.paging);
    }

    async onPullingUp () {
        const {page,countPage} = this.paging;
        if (Number(page) >= Number(countPage)) return false;
        await this.getDesignerList({
            ...this.paging,
            type: this.navActive,
            page:(Number(page) + 1)
        });
    }

    async onPullingDown () {
        this.designer = [];
        await this.getDesignerList({
            ...this.paging,
            type: this.navActive,
            page: 1
        });
    }

    designerSearch () {
        this.designer = [];
        this.getDesignerList({type: this.navActive,limit: 8,page: 1,keyword: this.paging.keyword});
    }

    enterInputChange () {
        if (ObjectDetection.isNull(this.paging.keyword)) {
            this.designer = [];
            this.getDesignerList({type: this.navActive,limit: 8,page: 1,keyword: this.paging.keyword});
        }
    }

    handlePageChange (pages: ServicePagination) {
        this.getDesignerList({...pages,type: this.navActive,keyword: this.paging.keyword});
    }

    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }

    mounted(): void {
        if (this.Nav[0]) {
            this.paging = {...this.paging,type: this.Nav[0].id}
            this.getDesignerList(this.paging);
        }
    }
}
</script>
