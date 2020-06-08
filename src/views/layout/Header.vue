<template>
    <header :class="[
    'padding-tb-sm absolute absolute-t absolute-l absolute-r transitions-sm',
    `${isPC?'flex justify-center zIndex-xl':'zIndex-max bg-darkblue'}`,
    `${scrollTop >= 200?' bg-darkblue shadow-bottom':''}`
    ]">
        <div :class="`${isPC?'center-1200 padding-tb-xs':''} flex`">
            <div :class="`${isPC?'basis-sm':'basis-df padding-lr-xl'}`">
                <router-link to="/home">
                    <img :style="`width:${isPC?'':(152/46.875)+'rem'};height:${isPC?'':(50/46.875)+'rem'};`"
                         src="@/assets/images/home/logo.png" alt="" />
                </router-link>
            </div>
            <ul v-if="isPC" class="basis-xl flex text-sm justify-end">
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
            <div v-else class="basis-df flex items-center justify-end text-white">
                <i @click="isVisible = !isVisible"
                   :class="`${isVisible?'cuIcon-close':'cuIcon-menu'} text-xml padding-lr-xl`"></i>
            </div>
        </div>
        <!--<div class="flex">
            <div class="basis-df padding-lr-xl">
                <img :style="`width:${152/46.875}rem;height:${50/46.875}rem;`"
                     src="@/assets/images/home/logo.png" alt="" />
            </div>
            <div class="basis-df flex items-center justify-end text-white">
                <i @click="isVisible = !isVisible"
                   :class="`${isVisible?'cuIcon-close':'cuIcon-menu'} text-xml padding-lr-xl`"></i>
            </div>
        </div>-->
        <el-drawer
                custom-class="menu_drawer"
                :size="'auto'"
                :direction="'ttb'"
                title="我是标题"
                :visible.sync="isVisible"
                :with-header="false">
            <div>
                <ul class="padding-bottom-df">
                    <li class="padding-lr-sm margin-lr-xs white-nowrap solid-bottom"
                        v-for="item in routes" :key="item.path">
                        <router-link :to="item.path"
                                     :class="[
                                     `block text-lg padding-tb-sm`,
                                     `${item.path === $route.path?'':'text-black'}`
                                     ]">
                            {{item.meta.title}} <i class="cuIcon-right text-xl fr"></i>
                        </router-link>
                    </li>
                </ul>
            </div>
        </el-drawer>
    </header>
</template>
<script lang="ts">
import { Component, Vue, Watch} from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import {mapGetters} from "vuex";
import {RouterOptions} from "vue-router";

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
    @Watch('$route')
    routeChange  (route: RouterOptions) {
        if (!this.isPC) {
            this.isVisible = false;
        }
    }
}
</script>
