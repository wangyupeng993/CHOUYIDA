<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC" v-loading="Loading">
        <div>
            <img width="100%" :style="`min-height:${isPC?'':(590/46.875)}rem;`"
                 :class="`${isPC?'':'object-fit-cover'}`"
                 src="@/assets/images/banner/recruitment_banner.png" alt="" />
        </div>

        <div :class="`${isPC?'center-1200':''}`">
            <div class="padding-tb-df margin-lr-sm">
                <div :class="`text-black ${isPC?'text-sm':'text-df'}`">首页 > {{$route.meta.title}}</div>
            </div>

            <div class="padding-tb-df text-green margin-lr-sm solid-bottom">
                <router-link to="/recruitment" :class="`pointer ${isPC?'text-sm':'text-df'}`">
                    <i class="cuIcon-arrowLeft text-df"></i> 全部职位
                </router-link>
            </div>

            <div class="margin-lr-sm padding-bottom-xl">
                <div class="flex text-black padding-tb-df">
                    <p class="basis-lg text-lg">{{RecDetails.name}}</p>
                    <p :class="`basis-sm ${isPC?'text-sm':'text-df'} flex direction-column justify-end`">
                        {{RecDetails.area}}
                    </p>
                </div>
                <div :class="`text-black text-justify  ${isPC?'text-xs':'text-df'}`">
                    {{RecDetails.detail}}
                </div>
                <div class="padding-tb-df">
                    <button @click="visible = true"
                            :class="[
                            'padding-tb-sm padding-lr-lg text-white pointer',
                            `${isPC?'text-sm':'text-lg'} radius-round-df bg-darkGreen`
                            ]">
                        投个简历
                    </button>
                </div>
                <PostResume v-if="visible" :visible.sync="visible" @handle-confirm="handleConfirm" />
            </div>
        </div>
        <Footer />
    </scroll-view>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import Footer from "@/components/Footer/index.vue";
import service from "@/api/request";
import PostResume from "@/views/pages/recruitment/details/PostResume.vue";
@Component({
    components:{Footer,PostResume}
})
export default class RecruitmentDetails extends Vue {
    private isPC: boolean;
    private RecDetails: ServiceRecDetails;
    private visible: boolean;
    private Loading: boolean;
    constructor () {
        super();
        this.isPC =  ObjectDetection.isPCBroswer();
        this.RecDetails = {};
        this.visible = false;
        this.Loading = false;
    }
    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }

    getRecruitmentDetails () {
        const {id} = this.$route.query;
        this.Loading = true;
        service.getRecruitmentDetails({id: Number(id)}).then(response => {
            const {data} = response;
            this.RecDetails = data;
            this.Loading = false;
        }).catch(error => {this.Loading = false;});
    }

    handleConfirm (raw: {visible: boolean}) {
        this.visible = raw.visible;
    }

    mounted(): void {
        this.getRecruitmentDetails()
    }
}
</script>

