<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC">
        <div>
            <img width="100%" :style="`min-height:${isPC?'':(590/46.875)}rem;`"
                 :class="`${isPC?'':'object-fit-cover'}`"
                 src="@/assets/images/banner/recruitment_banner.png" alt="" />
        </div>

        <div :class="`${isPC?'center-1200':''}`">
            <div class="padding-tb-df margin-lr-sm">
                <div :class="`text-black ${isPC?'text-sm':'text-df'}`">首页 > {{$route.meta.title}}</div>
            </div>

            <div class="padding-tb-df text-green margin-lr-sm solid-bottom">
                <span @click="$router.go(-1)" :class="`pointer ${isPC?'text-sm':'text-df'}`">
                    <i class="cuIcon-arrowLeft text-df"></i> 全部职位
                </span>
            </div>

            <div class="margin-lr-sm padding-bottom-xl">
                <div class="flex text-black padding-tb-df">
                    <p class="basis-lg text-lg">金融变现产品经理</p>
                    <p class="basis-sm text-sm flex direction-column justify-end">厦门、上海、广州</p>
                </div>
                <div class="text-black text-justify">
                    <p class="text-sm padding-bottom-df">职位描述：</p>
                    <p :class="`line-height-sm ${isPC?'text-xs':'text-sm'}`">
                        负责公司公有云产品及解决方案销售工作，完成目标业绩；
                        钻研成功客户案例，挖掘客户需求本质，复制既往成功案例，突破行业客户，并持续提升对客户业务的理解力和销售关键节点的把控能力；
                        发散思维，客户为先，以客户需求为导向，整合公司资源提供服务，拓展行业新客户，融入客户行业圈子，有效调用内外部资源推动项目落地；
                        分享销售思路，经验及技巧，贡献团队建设。
                    </p>
                    <p class="text-sm padding-tb-df">职位要求：</p>
                    <p :class="`line-height-sm ${isPC?'text-xs':'text-sm'}`">
                        负责公司公有云产品及解决方案销售工作，完成目标业绩；
                        钻研成功客户案例，挖掘客户需求本质，复制既往成功案例，突破行业客户，并持续提升对客户业务的理解力和销售关键节点的把控能力；
                        发散思维，客户为先，以客户需求为导向，整合公司资源提供服务，拓展行业新客户，融入客户行业圈子，有效调用内外部资源推动项目落地；
                        分享销售思路，经验及技巧，贡献团队建设。
                    </p>
                </div>
                <div class="padding-tb-df">
                    <button class="padding-tb-sm padding-lr-lg text-white text-sm radius-round-df bg-darkGreen pointer">
                        投个简历
                    </button>
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
export default class RecruitmentDetails extends Vue {
    isPC = ObjectDetection.isPCBroswer();
    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }
}
</script>

