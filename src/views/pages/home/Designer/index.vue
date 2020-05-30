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
                            <li v-for="item in switchType" :key="item.name" :class="[
                    'inline-block text-grey',
                    'padding-tb-xs pointer',
                    `${item.className}`
                    ]"><span class="inline-block  padding-lr-df">{{item.name}}</span>
                                <i v-if="item.isSlash">/</i>
                            </li>
                        </ul>
                    </div>
                </div>
                <div :class="`margin-top-sm flex ${isPC?'padding-top-xl':'flex-wrap-wrap'}`">
                    <div :class="`basis-sm padding-sm radius-xl ${isPC?'bg-transparentGreen':''}`"
                         v-for="(item,index) in designer" :key="index">
                        <div class="text-center">
                            <div class="padding-xs round inline-block"
                                 :style="`width:${item.imgWidth};${item.imgWidth};border:${isPC?'5px':(5/46.875)+'rem'} solid #52B16E;`">
                                <img class="app-main" src="@/assets/images/home/userImg.png" alt="" />
                            </div>
                            <p :class="`margin-top text-white text-center ${isPC?'text-df':'text-xl'}`">
                                {{item.name}}
                            </p>
                            <p :class="`margin-top-xs text-white text-center ${isPC?'text-sm':'text-df'}`">
                                {{item.skill}}
                            </p>
                            <p v-if="item.isPC" class="padding-tb-sm text-justify line-height-xs text-white text-xs">
                                {{item.content}}
                            </p>
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
import { Component, Vue, Prop, Watch} from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
@Component({
    watch: {

    }
})
export default class Designer extends Vue {
    isPC = ObjectDetection.isPCBroswer();
    @Prop({
        type: Boolean,
        required: false,
        default: false
    }) visible !: boolean

    switchType = [{
        name:'平面',
        className: `${this.isPC?'text-sm':'text-df'}`,
        isSlash: true
    },{
        name:'插画',
        className: `${this.isPC?'text-sm':'text-df'}`,
        isSlash: true
    },{
        name:'工艺设计',
        className: `${this.isPC?'text-sm':'text-df'}`,
        isSlash: true
    },{
        name:'工业设计',
        className: `${this.isPC?'text-sm':'text-df'}`,
        isSlash: false
    }];
    designer = [{
        name: '周晓晓',
        skill: '平面、插画',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容......',
        imgWidth: `${this.isPC?'150px':(150/46.875)+'rem'}`,
        isPC: this.isPC
    },{
        name: '周晓晓',
        skill: '平面、插画',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容......',
        imgWidth: `${this.isPC?'150px':(150/46.875)+'rem'}`,
        isPC: this.isPC
    },{
        name: '周晓晓',
        skill: '平面、插画',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容......',
        imgWidth: `${this.isPC?'150px':(150/46.875)+'rem'}`,
        isPC: this.isPC
    },{
        name: '周晓晓',
        skill: '平面、插画',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容......',
        imgWidth: `${this.isPC?'150px':(150/46.875)+'rem'}`,
        isPC: this.isPC
    }]
}
</script>
