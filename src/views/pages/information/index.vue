<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC">
        <div>
            <img width="100%" :style="`min-height:${isPC?'':(590/46.875)}rem;`"
                 :class="`${isPC?'':'object-fit-cover'}`"
                 src="@/assets/images/banner/information_banner.png" alt="" />
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
                ]" type="text" name="" placeholder="输入资讯标题" />
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

            <div :class="`radius-lg margin-bottom-df ${isPC?'padding-df':'padding-sm margin-lr-sm'}`"
                 style="border:1px solid rgba(229,229,229,1);">
                <h2 :class="`text-inkblue padding-bottom-sm ${isPC?'':'text-lg text-hidden'}`">
                    WICC 高峰对话：一场 5G+通信云行业发展的华山论剑
                </h2>
                <p :class="`text-darkGrey text-justify ${isPC?'text-sm':'text-df'}`">
                    2019 年 11 月 30 日，全球互联网通信云大会（WICC）在上海圆满落幕。互联网通信云行业领导者融云作为主办方，邀请到阿里、百度、京东等知名公司的技术领袖，对通信云技术如何支撑 5G 时代下的互联网通信云新应用......
                </p>
            </div>

            <div class="padding-bottom-df">
                <div :class="`information-info flex margin-bottom-sm radius-df hidden pointer ${isPC?'':'margin-lr-sm'}`"
                     v-for="(item,index) in information" :key="index">
                    <div :class="`${isPC?'basis-xs':'basis-sm'} radius-df hidden margin-right-sm`">
                        <img class="object-fit-cover app-main" src="@/assets/images/147.png" alt="">
                    </div>
                    <div class="basis-xl hidden padding-right-sm">
                        <router-link to="/information/details">
                            <h3 :class="`information-title padding-tb-xs ${isPC?'':'text-hidden text-lg'}`">
                                {{item.title}}
                            </h3>
                        </router-link>
                        <p :class="`text-darkGrey ${isPC?'text-sm':'text-df'} text-justify`">
                            {{item.description}}
                        </p>
                        <div :class="`flex padding-top-sm ${isPC?'text-xs':'text-sm'}`">
                            <p class="basis-xl text-grey">{{item.date}}</p>
                            <router-link to="/information/details" class="basis-xs">
                                <p class="text-green text-right">
                                    查看详情 <i class="cuIcon-right"></i>
                                </p>
                            </router-link>
                        </div>
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
export default class Information extends Vue {
    isPC = ObjectDetection.isPCBroswer();
    switchType = [{
        name:'全部',
        className: `${this.isPC?'text-xs margin-lr-xs':'text-df'}`
    },{
        name:'金融',
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
    }];

    information = [{
        title: '互联网通信云 PaaS 选型 开发者必备指南',
        description: '打击无牌照金融活动的行动正延伸至保险行业。获悉，各地保监局已收到中国银保监会下发的相关通知，将开展2018年打击非法商业保险活动专项行动，重点打击非持牌金融机构...持牌金融机构...持牌金融机构...',
        date: '发布：2020-04-11',
    },{
        title: '互联网通信云 PaaS 选型 开发者必备指南',
        description: '打击无牌照金融活动的行动正延伸至保险行业。获悉，各地保监局已收到中国银保监会下发的相关通知，将开展2018年打击非法商业保险活动专项行动，重点打击非持牌金融机构...持牌金融机构...持牌金融机构...',
        date: '发布：2020-04-11',
    },{
        title: '互联网通信云 PaaS 选型 开发者必备指南',
        description: '打击无牌照金融活动的行动正延伸至保险行业。获悉，各地保监局已收到中国银保监会下发的相关通知，将开展2018年打击非法商业保险活动专项行动，重点打击非持牌金融机构...持牌金融机构...持牌金融机构...',
        date: '发布：2020-04-11',
    },{
        title: '互联网通信云 PaaS 选型 开发者必备指南',
        description: '打击无牌照金融活动的行动正延伸至保险行业。获悉，各地保监局已收到中国银保监会下发的相关通知，将开展2018年打击非法商业保险活动专项行动，重点打击非持牌金融机构...持牌金融机构...持牌金融机构...',
        date: '发布：2020-04-11',
    }]

    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }
}
</script>
