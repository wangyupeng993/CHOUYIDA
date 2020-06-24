<template>
    <div :class="`bg-grayLight ${isPC?'padding-tb-xl':'padding-bottom-df'}`">
        <div :class="[
        `padding-top-sm ${isPC?'center-1200':''}`,
        `${isPC?'animate__animated':''} ${visible?'animate__fadeInUp':''}`
        ]">
            <div :class="`padding-tb-xs ${isPC?'flex':''}`">
                <div :class="`flex basis-df ${isPC?'':'padding-left-sm'}`">
                    <div class="padding-xs flex items-center margin-right-xs">
                        <span class="bg-darkGreen inline-block counter-skewX-40"
                              :style="`width:${isPC?'24px':(24/46.875)+'rem'};height: ${isPC?'16px':(16/46.875)+'rem'};`"></span>
                    </div>
                    <div class="text-xsl flex items-center">
                        <img :style="`width:${isPC?'254px':(254/46.875)+'rem'};height:${isPC?'38px':(38/46.875)+'rem'};`"
                             src="@/assets/images/home/yunying.png" alt="" />
                    </div>
                    <div class="flex items-center text-df margin-lr-sm white-nowrap">案例</div>
                </div>

                <div :class="`basis-xl ${isPC?'flex items-center justify-end':'padding-top-df'}`">
                    <ul :class="`flex justify-center ${isPC?'':'text-center'} white-nowrap`">
                        <li v-for="item in Nav" :key="item.id" :class="[
                        `${navActive == item.id?'bg-darkGreen text-white':'text-grey'}`,
                        'radius-round-sm padding-tb-xs padding-lr-sm pointer',
                        `${item.className}`
                        ]" @click="switchProduct(item.id)">{{item.name}}</li>
                    </ul>
                </div>
            </div>

            <div class="inline-block" style="width:100%;">
                <scroll-view scroll-x :width="`${product.length*(558/46.875)}rem`">
                    <div :class="`${isPC?'padding-top-xl flex padding-bottom-sm hidden':'padding-top-sm margin-left-df'}`"
                         :style="`width:${isPC?'100%':product.length*(558/46.875)+'rem'};`">
                        <div :class="[
                    'basis-sm radius-xl bg-white hidden pointer inline-block',
                    `margin-lr-xs Operating-case`
                    ]" :style="`width:${isPC?'':(518/46.875)+'rem'};`" v-for="item in product" :key="item.id">
                            <div class="bg-blueLight">
                                <img width="100%" class="object-fit-cover"
                                     :style="`height:${isPC?'232px':(232/46.875)+'rem'};`"
                                     :src="`https://image.chouyida.eshchat.com${item.image}`" alt="" />
                            </div>
                            <div class="margin-lr-sm">
                                <div :class="`${isPC?'text-df':'text-xl'} text-hidden padding-top-xs`">
                                    {{item.title}}
                                </div>
                                <p :class="`${isPC?'text-xs':'text-df'} text-gray solid-bottom padding-bottom-xs`">
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
                                <div class="flex padding-tb-sm">
                                    <div class="basis-df radius-sm solid padding-tb-xs">
                                        <div :class="`text-center text-black ${isPC?'text-sm':'text-df'}`">¥{{item.price}}</div>
                                        <div :class="`${isPC?'text-xs':'text-df'} text-darkGray flex items-center justify-center`">
                                            <i :class="`cuIcon-recharge ${isPC?'text-sm':'text-df'}`"></i>目标金额
                                        </div>
                                    </div>
                                    <div class="basis-df margin-lr-xs radius-sm solid padding-tb-xs">
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
                                <div class="padding-tb-xs flex xuxian_bg">
                                    <div class="basis-sm flex items-center">
                                        <img width="40px" height="40px"
                                             :style="`width:${isPC?'':(40/46.875)+'rem'};height:${isPC?'':(40/46.875)+'rem'};`"
                                             :src="require(`@/assets/images/operation/${item.draftImg}.png`)" alt="" />
                                    </div>
                                    <div class="basis-df flex items-center justify-center">
                                        <img width="40px" height="40px"
                                             :style="`width:${isPC?'':(40/46.875)+'rem'};height:${isPC?'':(40/46.875)+'rem'};`"
                                             :src="require(`@/assets/images/operation/${item.doingImg}.png`)" alt="" />
                                    </div>
                                    <div class="basis-df flex items-center justify-center">
                                        <img width="40px" height="40px"
                                             :style="`width:${isPC?'':(40/46.875)+'rem'};height:${isPC?'':(40/46.875)+'rem'};`"
                                             :src="require(`@/assets/images/operation/${item.successImg}.png`)" alt="" />
                                    </div>
                                    <div class="basis-sm flex items-center justify-end">
                                        <img width="40px" height="40px"
                                             :style="`width:${isPC?'':(40/46.875)+'rem'};height:${isPC?'':(40/46.875)+'rem'};`"
                                             :src="require(`@/assets/images/operation/${item.finishImg}.png`)" alt="" />
                                    </div>
                                </div>

                                <div :class="`padding-bottom-xs flex ${isPC?'text-sm':'text-df'} text-black`">
                                    <div class="basis-sm">即将开始</div>
                                    <div class="basis-df text-center">{{item.status === 'failed'?'未成功':'进行中'}}</div>
                                    <div class="basis-df text-center">发货</div>
                                    <div class="basis-sm text-right">完成</div>
                                </div>
                            </div>
                            <div :class="`${isPC?'text-sm':'text-df'} text-center case-btn`">
                                <router-link :to="{path: '/operation/details',query: {id: item.id}}"
                                             class="padding-tb-xs block">
                                    查看案例
                                </router-link>
                            </div>
                        </div>
                    </div>
                </scroll-view>
            </div>
            <div :class="[
            'flex items-center justify-center',
            `${isPC?'padding-top-xl margin-top-sm':'padding-top-sm'}`]"
            ><router-link to="/operation">
                    <div class="rectangle-button flex items-center justify-center">
                        <span class="margin-right-sm">查看更多</span>
                        <i class="cuIcon-arrowRight"></i>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch} from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import {Getter} from "vuex-class";
import service from "@/api/request";

@Component({})
export default class OperatingProjects extends Vue {
    private isPC: boolean;
    private navActive: number;
    private product: ServiceProductDetail[];
    constructor () {
        super();
        this.isPC = ObjectDetection.isPCBroswer();
        this.navActive = 0;
        this.product = [];
    }
    @Prop({
        type: Boolean,
        required: false,
        default: false
    }) visible !: boolean

    @Getter('productNav') Nav: any
    @Watch('Nav')
    NavChange (nav: [{id: number}]) {
        this.getProductList({type: nav[0].id,page: 1,limit: 3});
    }

    getProductList (params: ServicePagination) {
        this.navActive = params.type;
        service.getProductList(params).then(response => {
            const {list} = response.data;
            this.product = list.map((item: ServiceProductDetail) => {
                if (item.status === 'draft') {
                    item.draftImg = 'draft_1';
                }else{
                    item.draftImg = 'waiting';
                }

                if (item.status !== 'draft'&&item.status !== 'failed') {
                    item.doingImg = 'doing';
                }else{
                    item.doingImg = 'draft_2';
                }

                if (item.status === 'success'||item.status === 'finish') {
                    item.successImg = 'success';
                }else{
                    item.successImg = 'draft_3';
                }

                if (item.status === 'finish') {
                    item.finishImg = 'finish';
                }else{
                    item.finishImg = 'draft_4';
                }
                return item;
            });
        }).catch(error => {
            console.log(error,'===================');
        });
    }

    switchProduct (id: number) {
        this.getProductList({type: id,page: 1,limit: 3});
    }

    mounted(): void {
        if (this.Nav[0]) {
            this.getProductList({type: this.Nav[0].id,page: 1,limit: 3});
        }
    }
}
</script>
