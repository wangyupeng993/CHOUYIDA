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
                            <li v-for="item in switchType" :key="item.name" :class="[
                    'inline-block text-white',
                    'padding-tb-xs pointer',
                    `${item.className}`
                    ]"><span class="inline-block  padding-lr-df">{{item.name}}</span>
                                <i v-if="item.isSlash">/</i>
                            </li>
                        </ul>
                    </div>
                </div>

                <div :class="`${isPC?'padding-top-xl margin-top-xl':'padding-top-df'}`">
                    <el-carousel v-if="isPC" :interval="4000" height="350px">
                        <el-carousel-item v-for="item in 6" :key="item" class="margin-lr-xl">
                            <div class="app-main flex">
                                <div class="basis-sm padding-lr-df">
                                    <p class="text-white text-lg margin-bottom-lg">
                                        银保合作综合监管将给保险行业带来三大影响和变化
                                    </p>
                                    <p class="text-sm text-white text-justify margin-bottom-lg">
                                        3月27日，中央政治局委员、国务院副总理刘鹤在金融管理部门调研时表示，要平稳有序推进机构改革工作，加快银行保险监管职责调整，增强综合监管能力。中国银行保险监督管理委员会的组建，标志着综合监管趋势已经确立，下一步动作备受关...
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
                        <swiper-slide v-for="item in 6" :key="item">
                            <div class="text-center margin-bottom-lg">
                                <p :style="`width:${490/46.875}rem;`" class="inline-block text-left text-white text-xl">
                                    银保合作综合监管将给保险行业带来三大影响和变化
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
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue,Prop} from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import {Swiper,SwiperSlide} from "vue-awesome-swiper";
@Component({
    components: {Swiper,SwiperSlide}
})
export default class Information extends Vue {
    isPC = ObjectDetection.isPCBroswer();
    @Prop({
        type: Boolean,
        required: false,
        default: false
    }) visible !: boolean
    swiperOption = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    };
    switchType = [{
        name:'新闻',
        className: `${this.isPC?'text-sm':'text-df'}`,
        isSlash: true
    },{
        name:'流行动态',
        className: `${this.isPC?'text-sm':'text-df'}`,
        isSlash: true
    },{
        name:'公益活动',
        className: `${this.isPC?'text-sm':'text-df'}`,
        isSlash: true
    },{
        name:'营销活动',
        className: `${this.isPC?'text-sm':'text-df'}`,
        isSlash: false
    }];
}
</script>
