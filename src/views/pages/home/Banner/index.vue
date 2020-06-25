<template>
    <div class="flex direction-column justify-end relative">
        <img width="100%" :style="`min-height:${550/46.875}rem;`"
             :class="`${isPC?'':'object-fit-cover'}`"
             src="@/assets/images/home/home_banner.png" alt="" />
        <div class="padding-tb-sm text-white text-center zIndex-sm absolute absolute-b absolute-r absolute-l"
             style="background-color:rgba(82,177,110,0.7);">
            <div :class="`flex justify-center ${isPC?'center-1200':''}`">
                <div class="basis-sm margin-lr-xs pointer" v-for="item in routes" :key="item.path">
                    <router-link :to="item.path" class="text-white">
                        <i :class="`${item.meta.icon} ${isPC?'text-lg':'text-xl'}`"></i>
                        <p :class="`${isPC?'text-sm':'text-df'}`">{{item.meta.title}}</p>
                    </router-link>
                </div>
                <div :class="`basis-sm margin-lr-xs pointer relative ${isPC?'attention-us':''}`"
                     @click="showAttrntionCode">
                    <i :class="`cuIcon-attention ${isPC?'text-lg':'text-xl'}`"></i>
                    <p :class="`${isPC?'text-sm':'text-df'}`">关注我们</p>
                    <div class="absolute absolute-l absolute-r margin-top-xl attention-us-code" style="top:-25px;">
                        <div class="" style="height:25px;">
                            <i class="triangleup-white"></i>
                        </div>
                        <div class="radius-sm">
                            <img width="156px" height="156px"
                                 class="bg-white padding-sm radius-sm"
                                 src="@/assets/images/footer/code.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AttrntionCode v-if="visible" @handle-confirm="handleConfirm"></AttrntionCode>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import AttrntionCode from "@/views/pages/home/Banner/AttentionCode/index.vue";

@Component({
    components: {AttrntionCode}
})
export default class Banner extends Vue {
    private isPC: boolean;
    private visible: boolean;
    constructor () {
        super();
        this.isPC =  ObjectDetection.isPCBroswer();
        this.visible = false;
    }
    get routes () {
        const RouterOptions: any = this.$router;
        const Routes = RouterOptions.options.routes;
        const whiteList: string[] = ['/login','/404','/NotFound','*','/','/attention']; // 不显示的白名单
        return Routes.filter((item: any) => item.hidden&&whiteList.indexOf(item.path) === -1);
    }

    showAttrntionCode () {
        if (!this.isPC) this.visible = true;
    }

    handleConfirm (raw: {visible: boolean}) {
        this.visible = raw.visible;
    }
}
</script>

<style>
    .attention-us:hover .attention-us-code{
        visibility: visible;
        opacity: 1;
    }
    .attention-us-code{
        transition: 0.3s ease-out;
        visibility: hidden;
        opacity: 0;
    }
    .triangleup-white{
        width:0;
        height:0;
        border-right:8px solid transparent;
        border-left:8px solid transparent;
        border-bottom:8px solid rgba(255,255,255,1);
    }
</style>
