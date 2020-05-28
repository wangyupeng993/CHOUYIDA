<template>
    <scroll-view :scroll-y="!isPC">
        <Banner />
        <OperatingProjects />
        <Designer />
    </scroll-view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import Banner from "@/views/pages/home/Banner/index.vue";
import OperatingProjects from "@/views/pages/home/OperatingProjects/index.vue";
import Designer from "@/views/pages/home/Designer/index.vue";

@Component({
    components: {Banner,OperatingProjects,Designer}
})
export default class Home extends Vue {
    isPC = ObjectDetection.isPCBroswer();
}
</script>
