<template>
    <div class="relative">
        <img width="100%" :style="`height:${isPC?'758px':(758/46.875)+'rem'};`" class="object-fit-cover"
             src="@/assets/images/home/Partner_bg.png" alt="" />
        <div class="absolute absolute-t absolute-l app-main">
            <div :class="[
            `${isPC?'center-1200 padding-top-xl':'padding-top-df'}`,
            `animate__animated ${visible?'animate__fadeInUp':'animate__fadeOutDown'}`
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
                            <img v-if="isPC" width="254px" height="38px" src="@/assets/images/home/partner.png" alt="" />
                            <img v-else :style="`width:${254/46.875}rem;height:${38/46.875}rem;`"
                                 src="@/assets/images/home/partner.png" alt="" />
                        </div>
                        <div class="flex items-center text-df text-white margin-lr-sm white-nowrap">展示</div>
                    </div>

                    <div :class="`basis-xl ${isPC?'flex items-center justify-end':'padding-top-df'}`">
                        <ul :class="`flex justify-center ${isPC?'':'text-center'}`">
                            <li v-for="(item) in switchType" :key="item.name" :class="[
                    'bg-darkGreen radius-round-sm text-white',
                    'padding-xs pointer white-nowrap',
                    `${item.className}`
                    ]">{{item.name}}</li>
                        </ul>
                    </div>
                </div>

                <div :class="`${isPC?'padding-top-xl margin-top-xl':'padding-top-df'}`">
                    <el-carousel v-if="isPC" :interval="4000" type="card" height="260px">
                        <el-carousel-item v-for="item in 6" :key="item" class="bg-white radius-sm">
                            <div class="app-main flex">
                                <div class="basis-xs flex items-center">
                                    <img src="@/assets/images/home/swiper_img.png" alt="" />
                                </div>
                                <div class="basis-xl margin-lr text-black text-sm flex items-center">
                                    <p class="line-height-xs">“帮助我们更好地实现集团化管理，提升内部协作效率与质量。数据安全方面，也另我们感到十分放心。”“帮助我们更好地实现集团化管理，提升内部协作效率与质量。数据安全方面，也另我们感到十分放心。”“帮助我们更好地实现集团化管理，提升内部协作效率与质量。数据安全方面，也另我们感到十分放心。”</p>
                                </div>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                    <swiper v-if="!isPC" class="swiper margin-lr-sm" :options="swiperOption">
                        <swiper-slide v-for="item in 6" :key="item">
                            <div class="flex margin-lr-xl bg-white radius-df" style="height:100%;">
                                <div class="basis-sm flex items-center">
                                    <img width="100%" src="@/assets/images/home/swiper_img.png" alt="" />
                                </div>
                                <div class="basis-xl margin-lr text-black text-df flex items-center">
                                    <p class="line-height-xs padding-tb-sm text-justify">
                                        “帮助我们更好地实现集团化管理，提升内部协作效率与质量。数据安全方面，也另我们感到十分放心。”“帮助我们更好地实现集团化管理，提升内部协作效率与质量。数据安全方面，也另我们感到十分放心。”“帮助我们更好地实现集团化管理，提升内部协作效率与质量。数据安全方面，也另我们感到十分放心。”
                                    </p>
                                </div>
                            </div>
                        </swiper-slide>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                    </swiper>
                </div>

                <div :class="[
                'flex items-center justify-center',
                `${isPC?'padding-top-xl margin-top-sm':'padding-top-df'}`]"
                    ><router-link to="">
                        <div class="rectangle-button flex items-center justify-center">
                            <span class="margin-right-sm">查看更多</span>
                            <i class="cuIcon-arrowRight"></i>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue,Prop} from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import {Swiper,SwiperSlide} from "vue-awesome-swiper";
import 'swiper/css/swiper.css';

@Component({
    components: {Swiper,SwiperSlide}
})
export default class Partner extends Vue {
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
        name:'金融投资',
        className: `${this.isPC?'text-xs margin-lr-xs':'text-df'}`
    },{
        name:'创意研发',
        className: `${this.isPC?'text-xs margin-lr-xs':'text-df'}`
    },{
        name:'品质控制',
        className: `${this.isPC?'text-xs margin-lr-xs':'text-df'}`
    },{
        name:'商业模式',
        className: `${this.isPC?'text-xs margin-lr-xs':'text-df'}`
    },{
        name:'制造加工',
        className: `${this.isPC?'text-xs margin-lr-xs':'text-df'}`
    },{
        name:'法律法规',
        className: `${this.isPC?'text-xs margin-lr-xs':'text-df'}`
    }];
}
</script>
