<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC">
        <Banner />
        <OperatingProjects :visible.sync="visibleOperating" ref="Operating" />
        <Designer :visible.sync="visibleDesigner" ref="designer" />
        <Team :visible.sync="visibleTeam" ref="team" />
        <Partner :visible.sync="visiblePartner" ref="partner" />
        <Recruitment :visible.sync="visibleRecruitment" ref="recruitment" />
        <Information :visible.sync="visibleInformation" ref="information" />
        <Footer />
    </scroll-view>
</template>

<script lang="ts">
import { Component, Vue, Watch} from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import Banner from "@/views/pages/home/Banner/index.vue";
import OperatingProjects from "@/views/pages/home/OperatingProjects/index.vue";
import Designer from "@/views/pages/home/Designer/index.vue";
import Team from "@/views/pages/home/Team/index.vue";
import Partner from "@/views/pages/home/Partner/index.vue";
import Recruitment from "@/views/pages/home/Recruitment/index.vue";
import Information from "@/views/pages/home/Information/index.vue";
import Footer from "@/components/Footer/index.vue";
import {isElementInViewport} from "@/api/methods/common";

@Component({
    components: {Banner,OperatingProjects,Designer,Team,Partner,Recruitment,Information,Footer}
})
export default class Home extends Vue {
    isPC = ObjectDetection.isPCBroswer();
    visibleOperating = false;
    visibleDesigner = false;
    visibleTeam = false;
    visiblePartner = false;
    visibleRecruitment = false;
    visibleInformation = false;

    setVisibleDesigner (visible: boolean) {
        this.visibleDesigner = visible
    }
    setVisibleTeam (visible: boolean) {
        this.visibleTeam = visible
    }
    setVisiblePartner (visible: boolean) {
        this.visiblePartner = visible
    }
    setVisibleRecruitment (visible: boolean) {
        this.visibleRecruitment = visible
    }
    setVisibleInformation (visible: boolean) {
        this.visibleInformation = visible
    }
    mousewheel = (ev: Element) => {
        const designer: any = this.$refs.designer;
        const team: any = this.$refs.team;
        const partner: any = this.$refs.partner;
        const recruitment: any = this.$refs.recruitment;
        const information: any = this.$refs.information;
        this.$store.commit('getScrollTop',ev.scrollTop);
        if (isElementInViewport(designer.$el)) {
            this.setVisibleDesigner(true);
        }
        if (isElementInViewport(team.$el)) {
            this.setVisibleTeam(true);
        }
        if (isElementInViewport(partner.$el)) {
            this.setVisiblePartner(true);
        }
        if (isElementInViewport(recruitment.$el)) {
            this.setVisibleRecruitment(true);
        }
        if (isElementInViewport(information.$el)) {
            this.setVisibleInformation(true);
        }
    }
    mounted(): void {
        this.visibleOperating = true;
    }
}
</script>
