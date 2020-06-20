<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC">
        <div>
            <img width="100%" :style="`min-height:${isPC?'':(590/46.875)}rem;`"
                 :class="`${isPC?'':'object-fit-cover'}`"
                 src="@/assets/images/banner/help_banner.png" alt="" />
        </div>
        <div :class="`${isPC?'center-1200 padding-bottom-xl':''} relative`">
            <div class="padding-tb-df margin-lr-sm">
                <div :class="`text-black ${isPC?'text-sm':'text-df'}`">首页 > {{$route.meta.title}}</div>
            </div>

            <div :class="`flex hidden margin-lr-xl ${isPC?'radius-round-sm':'radius-round-df'}`"
                 style="border:1px solid #00BA33;">
                <input :class="[
                'line-height-xl text-indent-sm',
                `${isPC?'text-sm basis-max':'text-df basis-xl'}`
                ]" type="text" name="" placeholder="输入名称" />
                <button :class="[
                'text-white bg-green pointer',
                `${isPC?'basis-min text-sm':'basis-xs text-df'}`
                ]">搜索</button>
            </div>

            <div :class="`${isPC?'flex':''} margin-top-xl`">
                <div :class="`${isPC?'basis-sm solid-right':''} padding-lr-sm padding-bottom-xl`">
                    <h2 :class="`padding-tb-sm text-gray ${isPC?'':'text-xl'}`">问题分类</h2>
                    <el-collapse>
                        <el-collapse-item v-for="(item) in question" :key="item.id">
                            <template slot="title">
                                <p :class="`${isPC?'text-sm':'text-lg'}`">{{item.name}}</p>
                            </template>
                            <div v-for="(child) in item._child" :key="child.id"
                                 @click="getHelpDetails(child.id)"
                                 :class="[
                                 'padding-left-sm  padding-tb-xs pointer',
                                 `${helpDetails.category_id == child.id?'text-green':''}`,
                                 `${isPC?'text-xs':'text-df'}`
                                 ]">{{child.name}}</div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
                <div v-if="isPC" class="basis-xl padding-lr-xl">
                    <h2 class="padding-tb-sm text-black solid-bottom">{{helpDetails.title}}</h2>
                    <div class="line-height-df text-justify padding-tb-df">
                        {{helpDetails.detail}}
                    </div>
                </div>
            </div>

            <HelpDetails v-if="visible" :details.sync="helpDetails" @handle-confirm="handleConfirm" />
        </div>
        <Footer />
    </scroll-view>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import Footer from "@/components/Footer/index.vue";
import service from "@/api/request";
import HelpDetails from "@/views/pages/help/details/index.vue";
@Component({
    components: {Footer, HelpDetails}
})
export default class Help extends Vue {
    private isPC: boolean;
    private question: object[];
    private helpDetails: ServiceHelpDetails;
    private visible: boolean;
    constructor () {
        super();
        this.isPC = ObjectDetection.isPCBroswer();
        this.question = [];
        this.helpDetails = {};
        this.visible = false;
    }

    getHelpNav () {
        service.getHelpNav().then(response => {
            const {data} = response;
            this.question = data.map(item => item);
        }).catch(error => {
            console.log(error,'===============');
        });
    }

    getHelpDetails (id: number) {
        if (this.helpDetails.category_id&& this.helpDetails.category_id == id) return ;
        service.getHelpDetails({id: id}).then(response => {
            const {data} = response;
            this.helpDetails = data;
            if (!this.isPC) {this.visible = true}
        }).catch(error => {
            console.log(error,'=================');
        })
    }
    handleConfirm (raw: {visible: boolean}) {
        this.visible = raw.visible;
        this.helpDetails = {};
    }

    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }

     mounted(): void {
        this.getHelpNav();
     }
}
</script>

