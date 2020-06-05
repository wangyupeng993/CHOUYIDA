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
                    <ul :class="`flex justify-center ${isPC?'':'text-center'}`">
                        <li v-for="item in switchType" :key="item.name" :class="[
                    'bg-darkGreen radius-round-sm text-white',
                    'padding-tb-xs padding-lr-sm pointer',
                    `${item.className}`
                    ]">{{item.name}}</li>
                    </ul>
                </div>
            </div>

            <div class="inline-block" style="width:100%;">
                <scroll-view scroll-x :width="`${3*(558/46.875)}rem`">
                    <div :class="`${isPC?'padding-top-xl flex padding-bottom-sm hidden':'padding-top-sm margin-left-df'}`"
                         :style="`width:${isPC?'100%':3*(558/46.875)+'rem'};`">
                        <div :class="[
                    'basis-sm radius-xl bg-white hidden pointer inline-block',
                    `${(item%2) === 0?'margin-lr-sm':''} Operating-case`
                    ]" :style="`width:${isPC?'':(518/46.875)+'rem'};`" v-for="item in 3" :key="item">
                            <div class="bg-blueLight">
                                <img width="100%" src="@/assets/images/home/2306.png" alt="" />
                            </div>
                            <div class="margin-lr-sm">
                                <div class="text-df text-hidden padding-top-xs">
                                    宋朝青玉观音瓶【限量复刻】
                                </div>
                                <p class="text-xs text-gray solid-bottom padding-bottom-xs">
                                    胎质光滑剔透，皇家精品，限量复刻
                                </p>
                                <p class="text-xs text-black padding-tb-xs">
                                    <span>已筹</span>
                                    <span class="text-red text-sm">￥77768</span>
                                </p>
                                <div class="relative bg-grayLight radius-sm" style="height:5px;">
                                    <div class="absolute absolute-t absolute-l bg-gradualYellow radius-sm transition-sm"
                                         style="width:50%;height:100%;">
                                    <span :class="[
                                    'absolute absolute-r bg-gradualYellow',
                                    ' text-xs text-white text-center radius-round-xs'
                                    ]" style="padding:5px;top:-10px;">50%</span>
                                    </div>
                                </div>
                                <div class="flex padding-tb-sm">
                                    <div class="basis-df radius-sm solid padding-tb-xs">
                                        <div class="text-center text-black text-sm">¥100000</div>
                                        <div class="text-xs text-darkGray flex items-center justify-center">
                                            <i class="cuIcon-recharge text-sm"></i>目标金额
                                        </div>
                                    </div>
                                    <div class="basis-df margin-lr-xs radius-sm solid padding-tb-xs">
                                        <div class="text-center text-black text-sm">23</div>
                                        <div class="text-xs text-darkGray flex items-center justify-center">
                                            <i class="cuIcon-friend text-sm"></i>支持人数
                                        </div>
                                    </div>
                                    <div class="basis-df radius-sm solid padding-tb-xs">
                                        <div class="text-center text-black text-sm">0天</div>
                                        <div class="text-xs text-darkGray flex items-center justify-center">
                                            <i class="cuIcon-time text-sm"></i>剩余时间
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
                            <div class="padding-tb-xs text-sm text-center case-btn">
                                查看案例
                            </div>
                        </div>
                    </div>
                </scroll-view>
            </div>
            <div :class="[
            'flex items-center justify-center',
            `${isPC?'padding-top-xl margin-top-sm':'padding-top-sm'}`]"
            ><router-link to="">
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
import { Component, Vue, Prop} from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
@Component({})
export default class OperatingProjects extends Vue {
    isPC = ObjectDetection.isPCBroswer();
    @Prop({
        type: Boolean,
        required: false,
        default: false
    }) visible !: boolean
    switchType = [{
        name:'全部',
        className: `${this.isPC?'text-xs margin-lr-df':'text-df margin-lr-sm'}`
    },{
        name:'人气新品',
        className: `${this.isPC?'text-xs margin-lr-df':'text-df margin-lr-sm'}`
    },{
        name:'消费众筹',
        className: `${this.isPC?'text-xs margin-lr-df':'text-df margin-lr-sm'}`
    },{
        name:'权益众筹',
        className: `${this.isPC?'text-xs margin-lr-df':'text-df margin-lr-sm'}`
    }];
}
</script>
