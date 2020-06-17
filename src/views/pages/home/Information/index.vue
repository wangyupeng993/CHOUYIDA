<template>
    <div class="relative">
        <img width="100%" :style="`height:${isPC?'704px':(908/46.875)+'rem'};`" class="object-fit-cover"
             src="@/assets/images/home/Information_bg.png" alt="" />
        <div class="absolute absolute-t absolute-l app-main hidden">
            <div :class="[
            `${isPC?'center-1200 padding-top-xl':'padding-top-df'}`,
            `${isPC?'animate__animated':''} ${visible?'animate__fadeInUp':'animate__fadeOutDown'}`
            ]">

                <div :class="`padding-tb-xs ${isPC?'flex margin-top-df':''}`">
                    <div :class="`flex basis-df ${isPC?'':'padding-left-sm'}`">
                        <div class="padding-xs flex items-center margin-right-xs">
                            <span v-if="isPC" class="bg-darkGreen inline-block counter-skewX-40"
                                  style="width:24px;height: 16px;"></span>
                            <span v-else class="bg-darkGreen inline-block counter-skewX-40"
                                  :style="`width:${24/46.875}rem;height: ${16/46.875}rem;`"></span>
                        </div>
                        <div class="text-xsl flex items-center">
                            <img v-if="isPC" width="254px" height="38px"
                                 src="@/assets/images/home/Information.png" alt="" />
                            <img v-else :style="`width:${254/46.875}rem;height:${38/46.875}rem;`"
                                 src="@/assets/images/home/Information.png" alt="" />
                        </div>
                        <div class="flex items-center text-df text-white margin-lr-sm white-nowrap">新闻</div>
                    </div>

                    <div :class="`basis-xl ${isPC?'flex items-center justify-end':'padding-top-sm'}`">
                        <ul :class="`white-nowrap ${isPC?'':'text-center'}`">
                            <li v-for="item in Nav" :key="item.id" :class="[
                                'inline-block padding-tb-xs pointer',`${item.className} text-white`
                                ]" @click="switchNews(item.id)"><span :class="[
                                'inline-block  padding-lr-df',
                                `${navActive == item.id?'text-green':'text-white'}`
                                ]">{{item.name}}</span><i v-if="item.isSlash">/</i>
                            </li>
                        </ul>
                    </div>
                </div>

                <div :class="`${isPC?'padding-top-xl margin-top-xl':'padding-top-df'}`">
                    <el-carousel v-if="isPC" :interval="4000" height="350px">
                        <el-carousel-item v-for="item in news" :key="item.id" class="margin-lr-xl">
                            <div class="app-main flex">
                                <div class="basis-sm padding-lr-df">
                                    <p class="text-white text-lg margin-bottom-lg">{{item.title}}</p>
                                    <p class="text-sm text-white text-justify margin-bottom-lg">
                                        {{item.detail}}
                                    </p>
                                    <router-link to="" class="padding-tb-xs padding-lr-sm text-white text-sm radius-round-sm solid">
                                        查看更多
                                    </router-link>
                                </div>
                                <div class="basis-df padding-lr-df">
                                    <img class="radius-xl" width="490px" height="350px"
                                         src="@/assets/images/home/2306.png" alt="" />
                                </div>
                            </div>
                        </el-carousel-item>
                    </el-carousel>

                    <swiper v-if="!isPC" class="swiper margin-lr-sm" :options="swiperOption">
                        <swiper-slide v-for="item in news" :key="item.id">
                            <div class="text-center margin-bottom-lg">
                                <p :style="`width:${490/46.875}rem;`" class="inline-block text-left text-white text-xl">
                                    {{item.title}}
                                </p>
                            </div>
                            <div class="text-center">
                                <img :style="`width:${490/46.875};height:${350/46.875}rem;`"
                                     class="radius-xl"
                                     src="@/assets/images/home/2306.png" alt="" />
                            </div>
                        </swiper-slide>
                        <div class="swiper-button-prev margin-top-xl" slot="button-prev"></div>
                        <div class="swiper-button-next margin-top-xl" slot="button-next"></div>
                    </swiper>
                    <div v-if="!isPC" class="margin-tb-df text-center">
                        <router-link to="/information" :class="[
                        'padding-tb-sm padding-lr-df',
                        'text-white text-df radius-round-lg'
                        ]" style="border:1px solid rgba(255,255,255,1);">
                            查看更多
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue,Prop, Watch} from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import {Swiper,SwiperSlide} from "vue-awesome-swiper";
import {Getter} from "vuex-class";
import service from "@/api/request";

@Component({
    components: {Swiper,SwiperSlide}
})
export default class Information extends Vue {
    private isPC: boolean;
    private swiperOption: object;
    private navActive: number;
    private news: object[]
    constructor () {
        super();
        this.isPC = ObjectDetection.isPCBroswer();
        this.navActive = 0;
        this.news = [];
        this. swiperOption = {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        };
    }
    @Prop({
        type: Boolean,
        required: false,
        default: false
    }) visible !: boolean

    @Getter('newsNav') Nav: any
    @Watch('Nav')
    NavChange (nav: [{id: number}]) {
        this.navActive = nav[0].id;
        this.getNewsList({type: nav[0].id});
    }

    getNewsList (params: ServicePagination) {
        service.getNewsList(params).then(response => {
            this.news = response.data.list.slice(0,3).map(item => item);
        })
    }

    switchNews (id: number) {
        if (id === this.navActive) return ;
        this.navActive = id;
        this.getNewsList({type: id})
    }
}
</script>
