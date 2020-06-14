<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC">
        <div>
            <img width="100%" :style="`min-height:${isPC?'':(590/46.875)}rem;`"
                 :class="`${isPC?'':'object-fit-cover'}`"
                 src="@/assets/images/banner/help_banner.png" alt="" />
        </div>
        <div :class="`${isPC?'center-1200 relative padding-bottom-xl':''}`">
            <div class="padding-tb-df margin-lr-sm">
                <div :class="`text-black ${isPC?'text-sm':'text-df'}`">首页 > {{$route.meta.title}}</div>
            </div>

            <div :class="`flex hidden margin-lr-xl ${isPC?'radius-round-sm':'radius-round-df'}`"
                 style="border:1px solid #00BA33;">
                <input :class="[
                'line-height-xl text-indent-sm',
                `${isPC?'text-sm basis-max':'text-df basis-xl'}`
                ]" type="text" name="" placeholder="输入名称" />
                <button :class="[
                'text-white bg-green pointer',
                `${isPC?'basis-min text-sm':'basis-xs text-df'}`
                ]">搜索</button>
            </div>

            <div :class="`${isPC?'flex':''} margin-top-xl`">
                <div :class="`${isPC?'basis-sm solid-right':''} padding-lr-sm padding-bottom-xl`">
                    <h2 :class="`padding-tb-sm text-gray ${isPC?'':'text-xl'}`">问题分类</h2>
                    <el-collapse>
                        <el-collapse-item v-for="(item,index) in question" :key="index">
                            <template slot="title">
                                <p :class="`${isPC?'text-sm':'text-lg'}`">{{item.title}}</p>
                            </template>
                            <div v-for="(child,childIndex) in item.type" :key="childIndex"
                                 :class="`padding-left-sm ${isPC?'text-xs':'text-df'} padding-tb-xs pointer`">
                                {{child}}
                            </div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
                <div v-if="isPC" class="basis-xl padding-lr-xl">
                    <h2 class="padding-tb-sm text-black solid-bottom">产品保障</h2>
                    <div class="line-height-df text-justify padding-tb-df">
                        平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;平台上项目是否有保障;
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </scroll-view>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import Footer from "@/components/Footer/index.vue";
@Component({
    components: {Footer}
})
export default class Help extends Vue {
    isPC = ObjectDetection.isPCBroswer();
    question = [{
        title: '账户问题',
        type: ['产品保障','项目保障','关于保险']
    },{
        title: '协议问题',
        type: ['产品保障','项目保障','关于保险']
    }, {
        title: '求职问题',
        type: ['产品保障','项目保障','关于保险']
    },{
        title: '项目保障问题',
        type: ['产品保障','项目保障','关于保险']
    }]
    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }
}
</script>

