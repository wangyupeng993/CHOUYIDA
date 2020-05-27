<template>
    <div class="app-main flex direction-column">
        <header class="padding-sm bg-darkblue text-white">头部</header>
        <div class="flex hidden flex-grow-min">
            <side-bar />
            <app-main />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {AppMain,SideBar} from "@/views/layout/components";

@Component({
    components: {AppMain,SideBar}
})
export default class Layout extends Vue {}
</script>
