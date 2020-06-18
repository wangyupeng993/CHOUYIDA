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
import service from "@/api/request";

@Component({
    components: {AppMain,SideBar,Header}
})
export default class Layout extends Vue {
    private isPC: boolean;
    constructor () {
        super();
        this.isPC = ObjectDetection.isPCBroswer();
    }

    created(): void {
        service.geHomeData().then(response => {
            const {designer,teamList,newsList,partnerList,recruitmentList} = response.data;
            this.$store.commit('getDesignerNav',designer.nav.map((item: object, index: number) => {
                return {...item,
                    className: `${this.isPC?'text-sm':'text-df'}`,
                    isSlash: index < designer.nav.length-1}
            }));
            this.$store.commit('getTeamNav',teamList.nav.map((item: object, index: number) => {
                return {...item,
                    className: `${this.isPC?'text-sm':'text-df'}`,
                    isSlash: index < teamList.nav.length-1}
            }));
            this.$store.commit('getPartnerNav',partnerList.nav.map((item: object) => {
                return {...item,
                    className:`${this.isPC?'text-xs margin-lr-xs padding-lr-sm':'text-df padding-lr-xs'}`}
            }));
            this.$store.commit('getRecruitmentNav',recruitmentList.nav.map((item: object) => {
                return {...item,
                    className: `${this.isPC?'text-xs margin-lr-xs':'text-df'}`}
            }));
            this.$store.commit('getNewsNav',newsList.nav.map((item: object,index: number) => {
                return {...item,
                    className: `${this.isPC?'text-xs margin-lr-xs':'text-df'}`,
                    isSlash: index < newsList.nav.length-1}
            }));
        });
    }
}
</script>
