<template>
    <header :class="[
    'padding-tb-sm absolute absolute-t absolute-l absolute-r transitions-sm',
    `${isPC?'flex justify-center zIndex-xl':'zIndex-max bg-darkblue'}`,
    `${scrollTop >= 200?' bg-darkblue shadow-bottom':''}`
    ]">
        <div v-if="isPC" class="padding-tb-xs flex center-1200">
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
        <div v-else class="flex">
            <div class="basis-df padding-lr-xl">
                <img :style="`width:${152/46.875}rem;height:${50/46.875}rem;`"
                     src="@/assets/images/home/logo.png" alt="" />
            </div>
            <div class="basis-df flex items-center justify-end text-white">
                <i @click="isVisible = true" class="cuIcon-menu text-xml padding-lr-xl"></i>
            </div>
        </div>
        <el-drawer
                custom-class="menu_drawer"
                :size="'70%'"
                title="我是标题"
                :visible.sync="isVisible"
                :with-header="false">
            <div>
                <div class="">
                    <i @click="isVisible = false"
                       class="cuIcon-close text-xgl text-black padding-xs"></i>
                </div>
                <ul>
                    <li class="padding-lr-sm margin-lr-xs white-nowrap"
                        v-for="item in routes" :key="item.path">
                        <router-link :to="item.path"
                                     :class="[
                                     'block text-center',
                                     `${item.path === $route.path?'':'text-grey'}`
                                     ]">{{item.meta.title}}</router-link>
                        <p :class="[
                        'bg-green margin-tb-xs transition-xs',
                        `${item.path === '/home'?'':'margin-lr-sm'}`
                        ]" :style="`border:1px solid #00BA33;opacity:${item.path === $route.path?1:0};`">
                        </p>
                    </li>
                </ul>
            </div>
        </el-drawer>
    </header>
</template>
<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import {mapGetters} from "vuex";

@Component({
    components: {},
    computed: {
        ...mapGetters(['scrollTop'])
    }
})
export default class Header extends Vue {
    isPC = ObjectDetection.isPCBroswer();
    isVisible = false;
    get routes () {
        const RouterOptions: any = this.$router;
        const Routes = RouterOptions.options.routes;
        return Routes.filter((item: any) => !item.hidden);
    }
}
</script>
