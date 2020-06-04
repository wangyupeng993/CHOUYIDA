<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC">
        <div>
            <img width="100%" :style="`min-height:${isPC?'':(590/46.875)}rem;`"
                 :class="`${isPC?'':'object-fit-cover'}`"
                 src="@/assets/images/banner/cooperation_banner.png" alt="" />
        </div>
        <div :class="`${isPC?'center-1200 padding-bottom-xl margin-bottom-xl':''}`">
            <div class="padding-tb-df margin-lr-sm">
                <div :class="`text-black ${isPC?'text-sm':'text-df'}`">首页 > {{$route.meta.title}}</div>
            </div>

            <div :class="`flex margin-bottom-df ${isPC?'padding-lr-xl':'margin-lr-sm'}`"
                 style="border:1px solid rgba(229,229,229,1);">
                <div :class="`${isPC?'margin-left-lg':''}`"
                     :style="`width:${isPC?'281px':(281/46.875)+'rem'};height:${isPC?'188px':(188/46.875)+'rem'};`">
                    <img class="app-main" src="@/assets/images/cooperation_1165.png" alt="" />
                </div>
                <div :class="`basis-df ${isPC?'margin-left-lg`':'margin-left-sm'}`">
                    <h2 :class="[
                    'text-darkGreen padding-top-sm text-lg'
                    ]">
                        申请合作项目登记表
                    </h2>
                    <p :class="`text-inkblue padding-top-sm text-sm`">
                        信息提交后，我们将在7个工作日内与您联系
                    </p>
                    <p :class="`text-inkblue padding-top-sm text-sm`">
                        进度查询：13802303655（Mr，Lee）
                    </p>
                </div>
            </div>

            <div :class="`${isPC?'padding-lr-xl':'padding-lr-sm margin-lr-sm'} margin-bottom-xl`"
                 style="border:1px solid rgba(229,229,229,1);">
                <div class="padding-lr-df">
                    <div :class="`flex padding-tb-xs text-black ${isPC?' text-sm':' text-df'}`"
                         style="border-bottom:1px solid rgba(238,238,238,1);">
                        <span class="basis-xs line-height-lg">项目类型</span>
                        <input :class="`basis-max text-right line-height-lg text-black ${isPC?' text-sm':' text-df'}`"
                               type="text" name="" placeholder="请填写" />
                    </div>
                    <div :class="`flex padding-tb-xs text-black ${isPC?' text-sm':' text-df'}`"
                         style="border-bottom:1px solid rgba(238,238,238,1);">
                        <span class="basis-xs line-height-lg">联系人</span>
                        <input :class="`basis-max text-right line-height-lg text-black ${isPC?' text-sm':' text-df'}`"
                               type="text" name="" placeholder="请输入姓名" />
                    </div>
                    <div :class="`flex padding-tb-xs text-black ${isPC?' text-sm':' text-df'}`"
                         style="border-bottom:1px solid rgba(238,238,238,1);">
                        <span class="basis-xs line-height-lg">联系电话</span>
                        <input :class="`basis-max text-right line-height-lg text-black ${isPC?' text-sm':' text-df'}`"
                               type="text" name="" placeholder="请输入11位手机号码" />
                    </div>
                    <div :class="`flex padding-tb-xs text-black ${isPC?' text-sm':' text-df'}`"
                         style="border-bottom:1px solid rgba(238,238,238,1);">
                        <span class="basis-xs line-height-lg">微信</span>
                        <input :class="`basis-max text-right line-height-lg text-black ${isPC?' text-sm':' text-df'}`"
                               type="text" name="" placeholder="请填写微信号" />
                    </div>
                    <div :class="`flex padding-tb-xs text-black ${isPC?' text-sm':' text-df'}`"
                         style="border-bottom:1px solid rgba(238,238,238,1);">
                        <span class="basis-xs line-height-lg">简单聊号</span>
                        <input :class="`basis-max text-right line-height-lg text-black ${isPC?' text-sm':' text-df'}`"
                               type="text" name="" placeholder="请填写简单聊号" />
                    </div>
                    <div :class="`flex padding-tb-xs text-black ${isPC?' text-sm':' text-df'}`">
                        <span class="basis-xs line-height-lg">项目简介</span>
                    </div>
                    <div class="flex direction-column" style="border:1px solid rgba(229,229,229,1);">
                        <textarea :class="`basis-df padding-xs text-black ${isPC?'text-sm':'text-df'}`"
                                  name="" id="" cols="30" rows="10" maxlength="1000"
                                  placeholder="请输入1000字以内字符"></textarea>
                        <div>
                            <el-upload
                                    action=""
                                    class="margin-xs"
                                    list-type="picture-card">
                                <i class="el-icon-plus"></i>
                            </el-upload>
                        </div>
                    </div>
                    <div class="flex padding-tb-sm">
                        <button class="basis-max padding-tb-xs radius-round-sm text-df text-white bg-darkGreen pointer">
                            提 交
                        </button>
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
    components:{Footer}
})
export default class Cooperation extends Vue {
    isPC = ObjectDetection.isPCBroswer();

    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }
}
</script>
