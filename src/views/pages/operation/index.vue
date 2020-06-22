<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar"
                 :pullUpLoad="{threshold: 10}" :pullDownRefresh="{threshold: 50}"
                 @onPullingUp="onPullingUp" @onPullingDown="onPullingDown"
                 :scroll-y="!isPC" v-loading="Loading">
        <div>
            <img width="100%" :style="`min-height:${isPC?'':(590/46.875)}rem;`"
                 :class="`${isPC?'':'object-fit-cover'}`"
                 src="@/assets/images/banner/operation_banner.png" alt="" />
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
                ]" v-model="paging.keyword" type="text" name="keyword" placeholder="输入项目名称" />
                <button :class="[
                'text-white bg-green pointer',
                `${isPC?'basis-min text-sm':'basis-xs text-df'}`
                ]" @click="productSearch">搜索</button>
            </div>

            <div class="padding-tb-df">
                <ul :class="`flex justify-center ${isPC?'':'text-center'} white-nowrap`">
                    <li v-for="item in Nav" :key="item.id" :class="[
                        `${navActive == item.id?'bg-darkGreen text-white':'text-grey'}`,
                        'radius-round-sm padding-tb-xs padding-lr-sm pointer',
                        `${item.className}`
                        ]" @click="switchProduct(item.id)">{{item.name}}</li>
                </ul>
            </div>

            <div class="flex padding-bottom-df flex-wrap-wrap">
                <div :class="[
                    'bg-white hidden pointer inline-block margin-bottom-df',
                    `${isPC?'basis-30 margin-lr-xs':'basis-df'} Operating-case`
                    ]" :style="`width:${isPC?'':(518/46.875)+'rem'};`" v-for="item in product" :key="item.id">
                    <div :class="`${isPC?'':'margin-lr-xs'} radius-xl hidden`">
                        <div class="bg-blueLight">
                            <img width="100%" class="object-fit-cover"
                                 :style="`height:${isPC?'232px':(232/46.875)+'rem'};`"
                                 :src="item.image" alt="" />
                        </div>
                        <div class="margin-lr-sm">
                            <div :class="`${isPC?'text-df':'text-xl'} text-hidden padding-top-xs`">
                                {{item.title}}
                            </div>
                            <p :class="`${isPC?'text-xs':'text-df'} text-hidden text-gray solid-bottom padding-bottom-xs`">
                                {{item.subtitle}}
                            </p>
                            <p :class="`text-black ${isPC?'text-xs padding-tb-xs':'text-df padding-tb-sm'}`">
                                <span>已筹</span>
                                <span class="text-red text-sm">￥{{item.current_money}}</span>
                            </p>
                            <div class="relative bg-grayLight radius-sm" :style="`height:${isPC?'5px':(8/46.875) + 'rem'};`">
                                <div class="absolute absolute-t absolute-l bg-gradualYellow radius-sm transition-sm"
                                     :style="`width:${item.progress}%;height:100%;`">
                                    <span v-if="item.progress > 0" :class="[
                                    'absolute absolute-r bg-gradualYellow',
                                    'text-white text-center radius-round-xs',
                                    `${isPC?'text-xs':'text-df'}`
                                    ]" :style="`padding:5px;transform:translate(${item.progress>=95?'0':'100%'},-40%);`">
                                        {{item.progress}}%
                                    </span>
                                </div>
                            </div>
                            <div :class="`${isPC?'flex':''}padding-tb-sm`">
                                <div class="basis-df radius-sm solid padding-tb-xs">
                                    <div :class="`text-center text-black ${isPC?'text-sm':'text-df'}`">¥{{item.price}}</div>
                                    <div :class="`${isPC?'text-xs':'text-df'} text-darkGray flex items-center justify-center`">
                                        <i :class="`cuIcon-recharge ${isPC?'text-sm':'text-df'}`"></i>目标金额
                                    </div>
                                </div>
                                <div :class="`${isPC?'margin-lr-xs':'margin-tb-sm'} basis-df radius-sm solid padding-tb-xs`">
                                    <div :class="`text-center text-black ${isPC?'text-sm':'text-df'}`">{{item.user_num}}</div>
                                    <div :class="`${isPC?'text-xs':'text-df'} text-darkGray flex items-center justify-center`">
                                        <i :class="`cuIcon-friend ${isPC?'text-sm':'text-df'}`"></i>支持人数
                                    </div>
                                </div>
                                <div class="basis-df radius-sm solid padding-tb-xs">
                                    <div :class="`text-center text-black ${isPC?'text-sm':'text-df'}`">{{item.days}}天</div>
                                    <div :class="`${isPC?'text-xs':'text-df'} text-darkGray flex items-center justify-center`">
                                        <i :class="`cuIcon-time ${isPC?'text-sm':'text-df'}`"></i>剩余时间
                                    </div>
                                </div>
                            </div>
                            <div class="padding-tb-xs flex hidden" style="color:#EEEEEE;">
                                <div class="basis-df">
                                    <i class="cuIcon-dashed text-xs"></i>
                                </div>
                                <div class=""></div>
                                <div class="basis-df">
                                    <i class="cuIcon-dashed text-xs"></i>
                                </div>
                            </div>
                        </div>
                        <div class="text-sm text-center case-btn">
                            <router-link to="/operation/details" class="padding-tb-xs block">
                                查看案例
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
export default class Operstion extends Vue {
    private isPC: boolean;
    private navActive: number;
    private product: ServiceProductDetail[];
    private paging: ServicePagination;
    private Loading: boolean;
    constructor () {
        super();
        this.isPC = ObjectDetection.isPCBroswer();
        this.navActive = 0;
        this.product = [];
        this.paging = {type: 0,limit: 6,page: 1,count: 0,countPage: 0,keyword: ''};
        this.Loading = false;
    }

    @Getter('productNav') Nav: any
    @Watch('Nav')
    NavChange (nav: [{id: number}]) {
        this.paging = {...this.paging,type: nav[0].id};
        this.getProductList(this.paging);
    }

    getProductList (params: ServicePagination) {
        this.navActive = params.type;
        this.Loading = true;
        service.getProductList(params).then(response => {
            const {limit,page,count,list} = response.data;
            this.paging = {
                limit,page,count,
                type: this.navActive,
                countPage: Math.ceil((Number(count) / Number(limit))),
                keyword: this.paging.keyword
            };
            this.Loading = false;
            if (this.isPC) {
                this.product = list.map((item: ServiceProductDetail) => item);
            }else{
                this.product = [...this.product,...list.map((item: ServiceProductDetail) => item)];
            }
        }).catch(error => {this.Loading = false;});
    }

    switchProduct (id: number) {
        if (id === this.navActive) return ;
        this.paging = {...this.paging,page: 1,type: id};
        this.product = [];
        this.getProductList(this.paging);
    }

    enterInputChange () {
        this.product = [];
        console.log(this.product,'==================');
        if (ObjectDetection.isNull(this.paging.keyword)) {
            this.getProductList({type: this.navActive,limit: 8,page: 1,keyword: this.paging.keyword});
        }
    }

    productSearch () {
        this.product = [];
        this.getProductList({type: this.navActive,limit: 8,page: 1,keyword: this.paging.keyword});
    }

    async onPullingUp () {
        const {page,countPage} = this.paging;
        if (Number(page) >= Number(countPage)) return false;
        await this.getProductList({
            ...this.paging,
            type: this.navActive,
            page:(Number(page) + 1)
        });
    }

    async onPullingDown () {
        this.product = [];
        await this.getProductList({
            ...this.paging,
            type: this.navActive,
            page: 1
        });
    }

    handlePageChange (pages: ServicePagination) {
        this.getProductList({type:this.navActive,limit: pages.limit,page: pages.page});
    }

    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }

    mounted(): void {
        if (this.Nav[0]) {
            this.paging = {...this.paging,type: this.Nav[0].id}
            this.getProductList(this.paging);
        }
    }
}
</script>
