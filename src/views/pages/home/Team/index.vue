<template>
    <div class="bg-grayLight">
        <div :class="`${isPC?'center-1200 padding-tb-lg':'padding-tb-df'}`">
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
                        <li v-for="item in switchType" :key="item.name" :class="[
                    'inline-block text-grey',
                    'padding-tb-xs pointer',
                    `${item.className}`
                    ]"><span class="inline-block  padding-lr-xs">{{item.name}}</span>
                            <i v-if="item.isSlash">/</i>
                        </li>
                    </ul>
                </div>
            </div>

            <div :class="`margin-top-sm flex ${isPC?'padding-top-xl':'padding-lr-sm'}`">
                <div :class="[
                'basis-sm bg-white padding-sm radius-lg pointer',
                'flex items-center justify-center relative',
                `${(index%2) === 1?'margin-lr':''}`
                ]" v-for="(item,index) in team" :key="index">
                    <div class="text-center">
                        <div class="padding-xs round inline-block"
                             :style="`width:${item.imgWidth};${item.imgWidth};`">
                            <img class="app-main" src="@/assets/images/home/userImg.png" alt="" />
                        </div>
                        <p :class="`margin-top-xs text-black text-center ${isPC?'text-df':'text-xl'}`">
                            {{item.name}}
                        </p>
                        <p :class="`margin-top-xs text-black text-center ${isPC?'text-sm':'text-df'}`">
                            {{item.skill}}
                        </p>
                        <div v-if="isPC" :class="[
                        'text-justify line-height-xs bg-gradualDarkgreen radius-lg hidden',
                        'app-main absolute absolute-t absolute-l text-white text-sm'
                        ]"><p class="margin-sm">{{item.content}}</p>
                        </div>

                        <div v-if="!isPC" :class="[
                        'text-justify line-height-xs',
                        'padding-tb-sm text-black text-sm'
                        ]"><p>{{item.content}}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div :class="[
            'flex items-center justify-center',
            `${isPC?'padding-top-xl margin-top-sm':'padding-top-lg'}`]"
            ><router-link to="">
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
    import { Component, Vue } from 'vue-property-decorator';
    import ObjectDetection from "@/api/methods/validator";
    @Component({})
    export default class Team extends Vue {
        isPC = ObjectDetection.isPCBroswer();
        switchType = [{
            name:'创始',
            className: `${this.isPC?'text-sm':'text-df'}`,
            isSlash: true
        },{
            name:'创意团队',
            className: `${this.isPC?'text-sm':'text-df'}`,
            isSlash: true
        },{
            name:'项目经理',
            className: `${this.isPC?'text-sm':'text-df'}`,
            isSlash: true
        },{
            name:'风险控制',
            className: `${this.isPC?'text-sm':'text-df'}`,
            isSlash: true
        },{
            name:'网络技术',
            className: `${this.isPC?'text-sm':'text-df'}`,
            isSlash: true
        },{
            name:'顾问团队',
            className: `${this.isPC?'text-sm':'text-df'}`,
            isSlash: false
        }];
        team = [{
            name: '王利军',
            skill: '创始人   CEO',
            content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容......',
            imgWidth: `${this.isPC?'130px':(130/46.875)+'rem'}`,
            isPC: this.isPC
        },{
            name: '王利军',
            skill: '创始人   CEO',
            content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容......',
            imgWidth: `${this.isPC?'130px':(130/46.875)+'rem'}`,
            isPC: this.isPC
        },{
            name: '王利军',
            skill: '创始人   CEO',
            content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容......',
            imgWidth: `${this.isPC?'130px':(130/46.875)+'rem'}`,
            isPC: this.isPC
        }]
    }
</script>

<style scoped>

</style>
