<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC">
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
                <input :class="[
                'line-height-xl text-indent-sm',
                `${isPC?'text-sm basis-max':'text-df basis-xl'}`
                ]" type="text" name="" placeholder="输入项目名称" />
                <button :class="[
                'text-white bg-green pointer',
                `${isPC?'basis-min text-sm':'basis-xs text-df'}`
                ]">搜索</button>
            </div>

            <div class="padding-tb-df">
                <ul :class="`flex justify-center ${isPC?'':'text-center'}`">
                    <li v-for="item in switchType" :key="item.name" :class="[
                    'bg-darkGreen radius-round-sm text-white',
                    'padding-tb-xs padding-lr-sm pointer',
                    `${item.className}`
                    ]">{{item.name}}</li>
                </ul>
            </div>

            <div class="flex padding-bottom-df">
                <div :class="[
                    'radius-xl bg-white hidden pointer inline-block',
                    `${isPC?'basis-sm':'basis-df'}`,
                    `${(item%2) === 0&&isPC?'margin-lr-sm':'margin-lr-sm'} Operating-case`
                    ]" :style="`width:${isPC?'':(518/46.875)+'rem'};`" v-for="item in 2" :key="item">
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
                    <div class="text-sm text-center case-btn">
                        <router-link to="/operation/details" class="padding-tb-xs block">
                            查看案例
                        </router-link>
                    </div>
                </div>
            </div>
            <div v-if="isPC" class="flex justify-center padding-bottom-df">
                <Pagination background />
            </div>
        </div>
        <Footer />
    </scroll-view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import Footer from "@/components/Footer/index.vue";
import Pagination from "@/components/pagination/index.vue";
@Component({
    components:{Footer,Pagination}
})
export default class Operstion extends Vue {
    isPC = ObjectDetection.isPCBroswer();
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
    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }
}
</script>
