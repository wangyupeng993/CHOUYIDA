<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC">
        <div>
            <img width="100%" :style="`min-height:${isPC?'':(590/46.875)}rem;`"
                 :class="`${isPC?'':'object-fit-cover'}`"
                 src="@/assets/images/banner/about_banner.png" alt="" />
        </div>

        <div class="relative padding-bottom-xl hidden">
            <img class="absolute absolute-l absolute-b margin-right-sm"
                 style="width:727px;height:663px;"
                 src="@/assets/images/about_1848.png" alt="" />
            <img class="absolute absolute-r absolute-t margin-right-sm"
                 style="width:1191px;height:873px;"
                 src="@/assets/images/about_1849.png" alt="" />

            <div :class="`${isPC?'center-1200 padding-bottom-xl':''} relative`">
                <div class="padding-tb-df margin-lr-sm">
                    <div :class="`text-black ${isPC?'text-sm':'text-df'}`">首页 > {{$route.meta.title}}</div>
                </div>

                <div class="padding-df">
                    <h2 :class="`${isPC?'text-lg':'text-xl'} text-center text-inkblue padding-bottom-df`">企业简介</h2>
                    <div :class="`${isPC?'text-xs':'text-df'} text-inkblue about-details`" v-html="about.detail"></div>
                </div>

                <!--<div :class="`${isPC?'padding-lr-xl':''} padding-top-df padding-bottom-xl margin-bottom-xl`">
                    <el-carousel v-if="isPC" :interval="4000" height="350px"
                                 class="radius-lg margin-lr-xl padding-lr-xl">
                        <el-carousel-item v-for="item in 6" :key="item" class="radius-lg hidden">
                            <img class="app-main"
                                 src="@/assets/images/banner/information_banner.png" alt="">
                        </el-carousel-item>
                    </el-carousel>

                    <swiper v-if="!isPC" class="swiper margin-lr-sm" :options="swiperOption">
                        <swiper-slide v-for="item in 6" :key="item"
                                      class="radius-xl hidden"
                                      :style="`height:${300/46.875}rem;`">
                            <img class="app-main"
                                 src="@/assets/images/banner/information_banner.png" alt="">
                        </swiper-slide>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                </div>-->
            </div>
        </div>
        <Footer />
    </scroll-view>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import Footer from "@/components/Footer/index.vue";
import {Swiper,SwiperSlide} from "vue-awesome-swiper";
import 'swiper/css/swiper.min.css';
import service from "@/api/request";
@Component({
    components: {Swiper,SwiperSlide,Footer}
})
export default class About extends Vue {
    private isPC: boolean;
    private about: object
    private swiperOption: object
    constructor () {
        super();
        this.isPC = ObjectDetection.isPCBroswer();
        this.about = {}
        this.swiperOption = {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        };
    }

    getAbout () {
        service.getAbout().then(response => {
            const {data} = response;
            this.about = data;
        }).catch(error => {
            console.log(error,'==============');
        });
    }

    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }

    mounted(): void {
        this.getAbout();
    }
}
</script>
