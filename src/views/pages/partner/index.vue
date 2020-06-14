<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC">
        <div>
            <img width="100%" :style="`min-height:${isPC?'':(590/46.875)}rem;`"
                 :class="`${isPC?'':'object-fit-cover'}`"
                 src="@/assets/images/banner/partner_banner.png" alt="" />
        </div>
        <div :class="`${isPC?'center-1200':''}`">
            <div class="padding-tb-df margin-lr-sm">
                <div :class="`text-black ${isPC?'text-sm':'text-df'}`">首页 > {{$route.meta.title}}</div>
            </div>

            <div class="padding-tb-df">
                <ul :class="`flex justify-center ${isPC?'':'text-center'}`">
                    <li v-for="item in switchType" :key="item.name" :class="[
                    'bg-darkGreen radius-round-sm text-white',
                    'padding-tb-xs pointer',
                    `${item.className}`
                    ]">{{item.name}}</li>
                </ul>
            </div>

            <div class="flex padding-bottom-df">
                <div :class="[
                `${isPC?'basis-sm':'basis-df'}`,
                'padding-top-sm radius-xl hidden pointer',
                `${(item%2) === 0&&isPC?'margin-lr-df':'margin-lr-sm'} partner-info`
                ]" style="border:1px solid rgba(238,238,238,1);" v-for="item in 2" :key="item">
                    <div class="text-center padding-tb-sm">
                        <img src="@/assets/images/home/swiper_img.png" alt="" />
                    </div>
                    <div :class="[
                    'padding-bottom-xl padding-lr-sm',
                    `${isPC?'text-xs':'text-sm'} text-black text-justify`
                    ]">
                        “帮助我们更好地实现集团化管理，提升内部协作效率与质量。数据安全方面，也另我们感到十分放心。”“帮助我们更好地实现集团化管理，提升内部协作效率与质量。数据安全方面，也另我们感到十分放心。”“帮助我们更好地实现集团化管理，提升内部协作效率与质量。数据安全方面，也另我们感到十分放心。”
                    </div>
                    <div class="text-sm text-center partner-btn">
                        <router-link to="/partner/details" class="padding-tb-xs block">
                            查看详情
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
export default class Partner extends Vue {
    isPC = ObjectDetection.isPCBroswer();
    switchType = [{
        name:'金融投资',
        className: `${this.isPC?'text-xs margin-lr-xs padding-lr-sm':'text-df padding-lr-xs'}`
    },{
        name:'创意研发',
        className: `${this.isPC?'text-xs margin-lr-xs padding-lr-sm':'text-df padding-lr-xs'}`
    },{
        name:'品质控制',
        className: `${this.isPC?'text-xs margin-lr-xs padding-lr-sm':'text-df padding-lr-xs'}`
    },{
        name:'商业模式',
        className: `${this.isPC?'text-xs margin-lr-xs padding-lr-sm':'text-df padding-lr-xs'}`
    },{
        name:'制造加工',
        className: `${this.isPC?'text-xs margin-lr-xs padding-lr-sm':'text-df padding-lr-xs'}`
    },{
        name:'法律法规',
        className: `${this.isPC?'text-xs margin-lr-xs padding-lr-sm':'text-df padding-lr-xs'}`
    }];
    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }
}
</script>
