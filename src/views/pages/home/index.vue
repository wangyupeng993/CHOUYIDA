<template>
    <scroll-view :scroll-y="!isPC">
        <Banner />
        <OperatingProjects />
        <Designer />
        <Team />
        <Partner />
    </scroll-view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import Banner from "@/views/pages/home/Banner/index.vue";
import OperatingProjects from "@/views/pages/home/OperatingProjects/index.vue";
import Designer from "@/views/pages/home/Designer/index.vue";
import Team from "@/views/pages/home/Team/index.vue";
import Partner from "@/views/pages/home/Partner/index.vue";

@Component({
    components: {Banner,OperatingProjects,Designer,Team,Partner}
})
export default class Home extends Vue {
    isPC = ObjectDetection.isPCBroswer();
}
</script>
