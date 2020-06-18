<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC" v-loading="Loading">
        <div>
            <img width="100%" :style="`min-height:${isPC?'':(590/46.875)}rem;`"
                 :class="`${isPC?'':'object-fit-cover'}`"
                 src="@/assets/images/banner/team_banner.png" alt="" />
        </div>
        <div :class="`${isPC?'center-1200':''}`">
            <div class="padding-tb-df margin-lr-sm">
                <div :class="`text-black ${isPC?'text-sm':'text-df'}`">首页 > {{$route.meta.title}}</div>
            </div>

            <div class="padding-tb-df">
                <ul class="text-center">
                    <li v-for="item in Nav" :key="item.id" :class="[
                        'inline-block padding-tb-xs pointer',`${item.className} text-grey`
                        ]" @click="switchTeam(item.id)"><span :class="[
                        'inline-block padding-lr-df',
                        `${navActive == item.id?'text-green':'text-grey'}`
                        ]">{{item.name}}</span><i v-if="item.isSlash">/</i>
                    </li>
                </ul>
            </div>

            <div class="flex padding-bottom-df padding-lr-xs flex-wrap-wrap">
                <div :class="[
                `team-info ${isPC?'basis-xm padding-sm margin-lr-sm shadow':'basis-df'}`,
                'bg-white radius-lg pointer margin-bottom-df',
                'relative hidden',
                ]" v-for="(item,index) in team" :key="index">
                    <div :class="`text-center ${isPC?'':'margin-xs padding-sm shadow radius-lg'}`">
                        <div class="padding-xs round inline-block"
                             :style="`width:${item.imgWidth};height:${item.imgWidth};`">
                            <img class="app-main" src="@/assets/images/home/userImg.png" alt="" />
                        </div>
                        <p :class="`margin-top-xs text-black text-center ${isPC?'text-df':'text-xl'}`">
                            {{item.name}}
                        </p>
                        <p :class="`margin-top-xs text-black text-center ${isPC?'text-sm':'text-df'}`">
                            {{item.type_name}}
                        </p>
                        <div v-if="isPC" :class="[
                        'team-description',
                        'text-justify line-height-xs bg-gradualDarkgreen radius-lg hidden',
                        'app-main absolute absolute-t absolute-l text-white text-sm'
                        ]"><p class="margin-sm">{{item.introduction}}</p>
                        </div>

                        <div v-if="!isPC" :class="[
                        'text-justify line-height-xs',
                        'padding-tb-sm text-black text-sm'
                        ]"><p>{{item.introduction}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="isPC" class="flex justify-center padding-bottom-df">
                <Pagination background :page-size="Number(paging.limit)"
                            :current-page="paging.page" :total="paging.count"
                            @current-change="handlePageChange" />
            </div>
        </div>
        <Footer />
    </scroll-view>
</template>
<script lang="ts">
import { Component, Vue, Watch} from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import Footer from "@/components/Footer/index.vue";
import Pagination from "@/components/pagination/index.vue";
import {Getter} from "vuex-class";
import service from "@/api/request";
@Component({
    components:{Footer,Pagination}
})
export default class Team extends Vue {
    private isPC: boolean;
    private team: object[];
    private navActive: number;
    private Loading: boolean;
    private paging: ServicePagination;
    constructor () {
        super();
        this.isPC = ObjectDetection.isPCBroswer();
        this.team = [];
        this.navActive = 0;
        this.Loading = false;
        this.paging = {type: 0,limit: 8,page: 1,count: 0}
    }
    @Getter('teamNav') Nav: any
    @Watch('Nav')
    NavChange (nav: [{id: number}]) {
        this.paging = {...this.paging,type: nav[0].id}
        this.getTeamList(this.paging);
    }

    async getTeamList (params: ServicePagination) {
        this.navActive = params.type;
        this.Loading = true;
        service.getTeamList(params).then(response => {
            const {limit,page,count} = response.data;
            this.Loading = false;
            this.paging = {limit,page,count,type: this.navActive};
            this.team = response.data.list.map(item => {
                return {
                    ...item,
                    imgWidth: `${this.isPC?'130px':(130/46.875)+'rem'}`,
                    isPC: this.isPC
                }
            });
        }).catch(() => {this.Loading = false;});
    }

    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }

    switchTeam (id: number) {
        if (id === this.navActive) return ;
        this.paging = {limit: 6,page: 1,type: id};
        this.getTeamList(this.paging);
    }


    private handlePageChange (pages: ServicePagination) {
        this.getTeamList({type:this.navActive,limit: pages.limit,page: pages.page});
    }

    mounted(): void {
        if (this.Nav[0]) {
            this.paging = {...this.paging,type: this.Nav[0].id}
            this.getTeamList(this.paging);
        }
    }
}
</script>
