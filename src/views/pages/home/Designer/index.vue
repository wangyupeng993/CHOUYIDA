<template>
    <div class="relative">
        <img width="100%" :style="`height:${isPC?'820px':(1028/46.875)+'rem'};`" class="object-fit-cover"
             src="@/assets/images/home/shejishi_bg.png" alt="" />
        <div class="absolute absolute-t absolute-l app-main">
            <div :class="[
            `${isPC?'center-1200 padding-top-xl':'padding-top-df'}`,
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
                            <img v-if="isPC" width="254px" height="38px" src="@/assets/images/home/shejishi.png" alt="" />
                            <img v-else :style="`width:${254/46.875}rem;height:${38/46.875}rem;`"
                                 src="@/assets/images/home/shejishi.png" alt="" />
                        </div>
                        <div class="flex items-center text-df text-white margin-lr-sm white-nowrap">展示</div>
                    </div>

                    <div :class="`basis-xl ${isPC?'flex items-center justify-end':'padding-top-sm'}`">
                        <ul :class="`white-nowrap ${isPC?'':'text-center'}`">
                            <li v-for="item in Nav" :key="item.id" :class="[
                                'inline-block padding-tb-xs pointer',`${item.className} text-grey`
                                ]" @click="switchDesigner(item.id)"><span :class="[
                                'inline-block  padding-lr-df',
                                `${navActive == item.id?'text-green':'text-grey'}`
                                ]">{{item.name}}</span><i v-if="item.isSlash">/</i>
                            </li>
                        </ul>
                    </div>
                </div>
                <div :class="`margin-top-sm flex ${isPC?'padding-top-xl':'flex-wrap-wrap justify-center'}`">
                    <div :class="[
                    'padding-top-sm padding-lr-sm pointer relative',
                    `${isPC?'basis-xs padding-bottom-xl':'basis-sm'} radius-xl designer-info hidden`
                    ]" v-for="(item,index) in designer" :key="index">
                        <div class="text-center relative zIndex-xs">
                            <div class="padding-xs round inline-block"
                                 :style="`width:${item.imgWidth};${item.imgWidth};border:${isPC?'5px':(5/46.875)+'rem'} solid #52B16E;`">
                                <img class="app-main" src="@/assets/images/home/userImg.png" alt="" />
                            </div>
                            <p :class="`margin-top text-white text-center ${isPC?'text-df':'text-xl'}`">
                                {{item.name}}
                            </p>
                            <p :class="`margin-top-xs text-white text-center ${isPC?'text-sm padding-bottom-xl':'text-df'}`">
                                {{item.type_name}}
                            </p>
                        </div>
                        <p v-if="item.isPC" :class="[
                        'absolute absolute-t absolute-r absolute-l absolute-b padding-sm',
                        'designer-description radius-xl bg-transparentGreen text-white',
                        'flex direction-column justify-end'
                        ]">
                            {{item.introduction}}
                        </p>
                    </div>
                </div>
            </div>
            <div :class="[
            'flex items-center justify-center',
            `${isPC?'padding-top-df margin-top-sm':'padding-top-lg'}`]"
            ><router-link to="/designer">
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
import { Component, Vue, Prop,Watch} from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import service from "@/api/request";
import {Getter} from "vuex-class";

@Component
export default class Designer extends Vue {
    private isPC: boolean;
    private designer: object[];
    private navActive: number;
    constructor () {
        super();
        this.isPC = ObjectDetection.isPCBroswer();
        this.designer = [];
        this.navActive = 0;
    }
    @Prop({
        type: Boolean,
        required: false,
        default: false
    }) visible !: boolean

    @Getter('designerNav') Nav: any

    @Watch('Nav')
    NavChange (nav: [{id: number}]) {
        this.getDesignerList({type: nav[0].id});
    }

    async getDesignerList (params: ServicePagination) {
        this.navActive = params.type;
        service.getDesignerList(params).then(response => {
            this.designer = response.data.list.slice(0,3).map((item: object) => {
                return {
                    ...item,
                    isPC: this.isPC,
                    imgWidth: `${this.isPC?'150px':(150/46.875)+'rem'}`
                }
            });
        });
    }

    switchDesigner (id: number) {
        if (id === this.navActive) return ;
        this.getDesignerList({type: id});
    }

    mounted(): void {
        if (this.Nav[0]) {
            this.getDesignerList({type: this.Nav[0].id});
        }
    }
}
</script>
