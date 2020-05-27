<template>
    <el-menu :show-timeout="200"
          :default-active="$route.path"
          :mode="mode"
          background-color="#304156"
          text-color="#bfcbd9"
          active-text-color="#409EFF"
         :style="`${mode === 'vertical'?'width: 220px;':''}`"
    >
        <template v-if="routes && routes.length > 0">
            <sideBar-item
            v-for="route in routes"
            :key="route.path"
            :item="route"
            :base-path="route.path"
            :mode="mode" />
        </template>
    </el-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SideBarItem from './Item.vue';
import {Menu} from "element-ui";

@Component({
    components: {Menu,SideBarItem},
    computed: {
        routes () {
            const $router: any = this.$router
            return $router.options.routes
        }
    }
})
export default class SideBar extends Vue {
    mode = 'vertical';
}
</script>

