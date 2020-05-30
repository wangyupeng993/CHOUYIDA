<template>
    <div :class="`app-main relative ${isPC?'':'isMobile'}`">
        <Header />
        <div class="app-main flex direction-column basis-max">
            <app-main />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';
import {AppMain,SideBar} from "@/views/layout/components";
import Header from "@/views/layout/Header.vue";
import ObjectDetection from "@/api/methods/validator";

@Component({
    components: {AppMain,SideBar,Header}
})
export default class Layout extends Vue {
    isPC = ObjectDetection.isPCBroswer();
}
</script>
