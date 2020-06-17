<template>
    <div class="bg-grayLight">
        <div :class="[
        `${isPC?'center-1200 padding-tb-lg':'padding-tb-df'}`,
        `${isPC?'animate__animated':''} ${visible?'animate__fadeInUp':'animate__fadeOutDown'}`
        ]">
            <div :class="`padding-tb-xs ${isPC?'flex margin-top-df':''}`">

                <div :class="`flex basis-df ${isPC?'':'padding-left-sm'}`">
                    <div class="padding-xs flex items-center margin-right-xs">
                            <span v-if="isPC" class="bg-darkGreen inline-block counter-skewX-40"
                                  style="width:24px;height: 16px;"></span>
                        <span v-else class="bg-darkGreen inline-block counter-skewX-40"
                              :style="`width:${24/46.875}rem;height: ${16/46.875}rem;`"></span>
                    </div>
                    <div class="text-xsl flex items-center">
                        <img v-if="isPC" width="250px" height="38px" src="@/assets/images/home/team.png" alt="" />
                        <img v-else :style="`width:${250/46.875}rem;height:${38/46.875}rem;`"
                             src="@/assets/images/home/team.png" alt="" />
                    </div>
                    <div class="flex items-center text-df text-black margin-lr-sm white-nowrap">介绍</div>
                </div>

                <div :class="`basis-xl ${isPC?'flex items-center justify-end':'padding-top-sm'}`">
                    <ul :class="`white-nowrap ${isPC?'':'text-center'}`">
                        <li v-for="item in Nav" :key="item.id" :class="[
                            'inline-block padding-tb-xs pointer',`${item.className} text-grey`
                            ]" @click="switchTeam(item.id)"><span :class="[
                            'inline-block padding-lr-df',
                            `${navActive == item.id?'text-green':'text-grey'}`
                            ]">{{item.name}}</span><i v-if="item.isSlash">/</i>
                        </li>
                    </ul>
                </div>
            </div>

            <div :class="`margin-top-sm flex ${isPC?'padding-top-xl':'padding-lr-sm'}`">
                <div :class="[
                `${isPC?'basis-xs':'basis-sm'} team-info`,
                'bg-white padding-sm radius-lg pointer',
                'flex items-center justify-center relative hidden',
                `${(index%2) === 1?'margin-lr':''}`
                ]" v-for="(item,index) in team" :key="index">
                    <div class="text-center">
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

            <div :class="[
            'flex items-center justify-center',
            `${isPC?'padding-top-xl margin-top-sm':'padding-top-lg'}`]"
            ><router-link to="/team">
                <div class="rectangle-button flex items-center justify-center">
                    <span class="margin-right-sm">查看更多</span>
                    <i class="cuIcon-arrowRight"></i>
                </div>
            </router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch} from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import service from "@/api/request";
import {Getter} from "vuex-class";
@Component
export default class Team extends Vue {
    private isPC: boolean;
    private team: object[];
    private navActive: number;
    constructor () {
        super();
        this.isPC = ObjectDetection.isPCBroswer();
        this.team = [];
        this.navActive = 0;
    }
    @Prop({
        type: Boolean,
        required: false,
        default: false
    }) visible !: boolean

    @Getter('teamNav') Nav: any

    @Watch('Nav')
    NavChange (nav: [{id: number}]) {
        this.getTeamList({type: nav[0].id});
    }

    async getTeamList (params: ServicePagination) {
        this.navActive = params.type;
        service.getTeamList(params).then(response => {
            this.team = response.data.list.slice(0,3).map(item => {
                return {
                    ...item,
                    imgWidth: `${this.isPC?'130px':(130/46.875)+'rem'}`,
                    isPC: this.isPC
                }
            });
        });
    }

    switchTeam (id: number) {
        if (id === this.navActive) return ;
        this.getTeamList({type: id});
    }

    mounted(): void {
        if (this.Nav[0]) {
            this.getTeamList({type: this.Nav[0].id});
        }
    }
}
</script>
