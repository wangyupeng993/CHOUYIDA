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
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import {RouterOptions} from "vue-router";

@Component({})
export default class Banner extends Vue {
    isPC = ObjectDetection.isPCBroswer();
    get routes () {
        const RouterOptions: any = this.$router;
        const Routes = RouterOptions.options.routes;
        const whiteList: string[] = ['/login','/404','/NotFound','*','/']; // 不显示的白名单
        return Routes.filter((item: any) => item.hidden&&whiteList.indexOf(item.path) === -1);
    }
}
</script>
