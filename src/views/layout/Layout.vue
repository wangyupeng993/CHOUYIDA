<template>
    <div :class="`app-main relative ${isPC?'':'isMobile'}`">
        <header v-if="isPC" class="padding-tb-sm absolute absolute-t absolute-l absolute-r flex justify-center">
            <div class="padding-tb-xs flex" style="width:1200px;margin:0 auto;">
                <div class="basis-sm">logo</div>
                <ul class="basis-xl flex text-sm justify-end">
                    <li class="padding-lr-sm margin-lr-xs white-nowrap">
                        <router-link to="/home" class="block text-center">首页</router-link>
                        <p class="bg-green margin-tb-xs"
                           style="border:1px solid #00BA33;"></p>
                    </li>
                    <li class="padding-lr-sm margin-lr-xs white-nowrap">
                        <router-link to="/home" class="block text-center">运营项目</router-link>
                        <p class="bg-green margin-tb-xs margin-lr-sm"
                           style="border:1px solid #00BA33;"></p>
                    </li>
                    <li class="padding-lr-sm margin-lr-xs white-nowrap">
                        <router-link to="/home" class="block text-center">合作设计师</router-link>
                        <p class="bg-green margin-tb-xs margin-lr-sm"
                           style="border:1px solid #00BA33;"></p>
                    </li>
                    <li class="padding-lr-sm margin-lr-xs white-nowrap">
                        <router-link to="/home" class="block text-center">团队介绍</router-link>
                        <p class="bg-green margin-tb-xs margin-lr-sm"
                           style="border:1px solid #00BA33;"></p>
                    </li>
                    <li class="padding-lr-sm margin-lr-xs white-nowrap">
                        <router-link to="/home" class="block text-center">合作伙伴</router-link>
                        <p class="bg-green margin-tb-xs margin-lr-sm"
                           style="border:1px solid #00BA33;"></p>
                    </li>
                    <li class="padding-left-sm margin-lr-xs white-nowrap">
                        <router-link to="/home" class="block text-center">人才招聘</router-link>
                        <p class="bg-green margin-tb-xs margin-lr-sm"
                           style="border:1px solid #00BA33;"></p>
                    </li>
                </ul>
            </div>
        </header>
        <div class="app-main flex direction-column basis-max">
            <app-main />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {AppMain,SideBar} from "@/views/layout/components";
import ObjectDetection from "@/api/methods/validator";

@Component({
    components: {AppMain,SideBar}
})
export default class Layout extends Vue {
    isPC = ObjectDetection.isPCBroswer();
}
</script>
