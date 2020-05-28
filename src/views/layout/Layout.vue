<template>
    <div :class="`app-main relative ${isPC?'':'isMobile'}`">
        <header v-if="isPC" class="padding-tb-sm absolute absolute-t absolute-l absolute-r flex justify-center zIndex-xl">
            <div class="padding-tb-xs flex" style="width:1200px;margin:0 auto;">
                <div class="basis-sm">
                    <img src="@/assets/images/home/logo.png" alt="" />
                </div>
                <ul class="basis-xl flex text-sm justify-end">
                    <li class="padding-lr-sm margin-lr-xs white-nowrap"
                        v-for="item in routes" :key="item.path">
                        <router-link :to="item.path"
                                     :class="[
                                     'block text-center',
                                     `${item.path === $route.path?'':'text-white'}`
                                     ]">{{item.meta.title}}</router-link>
                        <p :class="[
                        'bg-green margin-tb-xs transition-xs',
                        `${item.path === '/home'?'':'margin-lr-sm'}`
                        ]" :style="`border:1px solid #00BA33;opacity:${item.path === $route.path?1:0};`">
                        </p>
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
import { Component, Vue,Provide } from 'vue-property-decorator';
import {AppMain,SideBar} from "@/views/layout/components";
import ObjectDetection from "@/api/methods/validator";

@Component({
    components: {AppMain,SideBar}
})
export default class Layout extends Vue {
    isPC = ObjectDetection.isPCBroswer();
    get routes () {
        const RouterOptions: any = this.$router;
        const Routes = RouterOptions.options.routes;
        return Routes.filter((item: any) => !item.hidden);
    }
}
</script>
