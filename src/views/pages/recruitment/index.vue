<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC">
        <div>
            <img width="100%" src="@/assets/images/banner/recruitment_banner.png" alt="" />
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
                ]" type="text" name="" placeholder="输入职位名称" />
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
                `basis-sm padding-tb-sm padding-lr-df text-black radius-sm`,
                `${(index%2)===1?'margin-lr-sm':''} pointer`
                ]" style="border:1px solid rgba(229,229,229,1);"
                     v-for="(item,index) in recuitment" :key="index">
                    <p :class="item.className">{{item.name}}
                        <span class="text-gray text-xs">{{item.time}}发布</span>
                    </p>
                    <p :class="`text-xs padding-tb-xs`">
                        {{item.city}} | {{item.years}} | {{item.education}}
                    </p>
                    <p :class="`text-sm text-red`">
                        {{item.salary}}
                    </p>
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
export default class Recruitment extends Vue {
    isPC = ObjectDetection.isPCBroswer();
    switchType = [{
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

    recuitment = [{
        name: '金融变现产品经理',
        time: '17:02',
        city: '厦门',
        years: '3-5年',
        education: '本科',
        salary: '7-12k',
        className: `${this.isPC?'text-sm':'text-df'}`
    },{
        name: '金融变现产品经理',
        time: '17:02',
        city: '厦门',
        years: '3-5年',
        education: '本科',
        salary: '7-12k',
        className: `${this.isPC?'text-sm':'text-df'}`
    },{
        name: '金融变现产品经理',
        time: '17:02',
        city: '厦门',
        years: '3-5年',
        education: '本科',
        salary: '7-12k',
        className: `${this.isPC?'text-sm':'text-df'}`
    },]

    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }
}
</script>
