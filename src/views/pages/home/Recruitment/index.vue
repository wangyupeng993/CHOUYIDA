<template>
    <div :class="`bg-grayLight ${isPC?'padding-tb-xl':'padding-bottom-df'}`">
        <div :class="[
        `padding-top-sm ${isPC?'center-1200':''}`,
        `${isPC?'animate__animated':''} ${visible?'animate__fadeInUp':'animate__fadeOutDown'}`
        ]">
            <div :class="`padding-tb-xs ${isPC?'flex':''}`">
                <div :class="`flex basis-df ${isPC?'':'padding-left-sm'}`">
                    <div class="padding-xs flex items-center margin-right-xs">
                        <span v-if="isPC" class="bg-darkGreen inline-block counter-skewX-40"
                              style="width:24px;height: 16px;"></span>
                        <span v-else class="bg-darkGreen inline-block counter-skewX-40"
                              :style="`width:${24/46.875}rem;height: ${16/46.875}rem;`"></span>
                    </div>
                    <div class="text-xsl flex items-center">
                        <img v-if="isPC" width="260px" height="38px"
                             src="@/assets/images/home/recruitment.png" alt="" />
                        <img v-else :style="`width:${260/46.875}rem;height:${38/46.875}rem;`"
                             src="@/assets/images/home/recruitment.png" alt="" />
                    </div>
                    <div class="flex items-center text-df margin-lr-sm white-nowrap">信息</div>
                </div>
                <div :class="`basis-xl ${isPC?'flex items-center justify-end':'padding-top-df'}`">
                    <ul :class="`flex justify-center ${isPC?'':'text-center'}`">
                        <li v-for="item in Nav" :key="item.id" :class="[
                    'radius-round-sm padding-tb-xs padding-lr-sm pointer',
                    `${item.className} ${navActive == item.id?'bg-darkGreen text-white':'text-grey'}`
                    ]">{{item.name}}</li>
                    </ul>
                </div>
            </div>

            <div :class="`margin-top-sm flex ${isPC?'padding-top-xl':'padding-lr-sm'}`">
                <div :class="[
                'recruitment-info hidden',
                'basis-sm bg-white padding-sm radius-lg pointer',
                'flex items-center justify-center relative',
                `${(index%2) === 1?'margin-lr':''}`
                ]" v-for="(item,index) in recruitment" :key="index">
                    <div class="text-center">
                        <div class="padding-xs round inline-block"
                             :style="item.imgWH">
                            <img class="app-main" src="@/assets/images/home/office.png" alt="" />
                        </div>
                        <p :class="`margin-top-xs text-black text-center ${isPC?'text-sm':'text-df'}`">
                            {{item.name}}
                        </p>
                        <p :class="`margin-top-xs text-gray text-center text-hidden ${isPC?'text-xs':'text-sm'}`">
                            {{item.skill}}
                        </p>
                        <div v-if="isPC" :class="[
                        'recruitment-description',
                        'text-justify line-height-xs bg-gradualDarkgreen radius-lg hidden',
                        'app-main absolute absolute-t absolute-l text-white text-sm'
                        ]"><p class="margin-sm">{{item.content}}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div :class="[
            'flex items-center justify-center',
            `${isPC?'padding-top-xl margin-top-sm':'padding-top-lg'}`]"
            ><router-link to="/recruitment">
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
import { Component, Vue,Prop, Watch} from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import {Getter} from "vuex-class";
import service from "@/api/request";

@Component
export default class Recruitment extends Vue {
    private isPC: boolean;
    private navActive: number
    private recruitment: object[]
    constructor () {
        super();
        this.isPC = ObjectDetection.isPCBroswer();
        this.navActive = 0;
        this.recruitment = [];
    }
    @Prop({
        type: Boolean,
        required: false,
        default: false
    }) visible !: boolean

    @Getter('recruitmentNav') Nav: any
    @Watch('Nav')
    NavChange (nav: [{id: number}]) {
        this.navActive = nav[0].id;
        this.getRecruitmentList({type: nav[0].id});
    }

    getRecruitmentList (params: ServicePagination) {
        service.getRecruitmentList(params).then(response => {
            this.recruitment = response.data.list.slice(0,3).map(item => {
                return {...item,
                    imgWH: `width:${this.isPC?'92px':(92/46.875)+'rem'};height:${this.isPC?'105px':(105/46.875)+'rem'};`,
                    isPC: this.isPC}
            })
        })
    }
}
</script>
