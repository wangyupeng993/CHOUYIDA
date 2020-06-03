<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC">
        <div class="">
             <img width="100%" :style="`min-height:${isPC?'':(590/46.875)}rem;`"
                  :class="`${isPC?'':'object-fit-cover'}`"
                  src="@/assets/images/banner/designer_banner.png" alt="" />
        </div>
        <div :class="`${isPC?'center-1200':''}`">
            <div class="padding-tb-df margin-lr-sm">
                <div :class="`text-black ${isPC?'text-sm':'text-df'}`">首页 > {{$route.meta.title}}</div>
            </div>
            <div :class="`flex hidden margin-lr-sm ${isPC?'radius-round-sm':'radius-round-df'}`"
                 style="border:1px solid #00BA33;">
                <input :class="[
                'line-height-xl text-indent-sm',
                `${isPC?'text-sm basis-max':'text-df basis-xl'}`
                ]" type="text" name="" placeholder="输入设计师名称" />
                <button :class="[
                'text-white bg-green pointer',
                `${isPC?'basis-min text-sm':'basis-xs text-df'}`
                ]">搜索</button>
            </div>
            <div class="padding-tb-df">
                <ul class="text-center">
                    <li v-for="item in switchType" :key="item.name" :class="[
                    'inline-block text-grey',
                    'padding-tb-xs pointer',
                    `${item.className}`
                    ]"><span class="inline-block  padding-lr-df">{{item.name}}</span>
                        <i v-if="item.isSlash">/</i>
                    </li>
                </ul>
            </div>
            <div class="flex padding-bottom-df">
                <div :class="[
                'team-info',
                'basis-xs bg-white padding-sm radius-lg pointer',
                'flex items-center justify-center relative hidden',
                `${(index%2) === 1?'margin-lr':''}`
                ]" v-for="(item,index) in designer" :key="index">
                    <div class="text-center">
                        <div class="padding-xs round inline-block"
                             :style="`width:${item.imgWidth};height:${item.imgWidth};`">
                            <img class="app-main" src="@/assets/images/home/userImg.png" alt="" />
                        </div>
                        <p :class="`margin-top-xs text-black text-center ${isPC?'text-df':'text-xl'}`">
                            {{item.name}}
                        </p>
                        <p :class="`margin-top-xs text-black text-center ${isPC?'text-sm':'text-df'}`">
                            {{item.skill}}
                        </p>
                        <div v-if="isPC" :class="[
                        'team-description',
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
            <div v-if="isPC" class="flex justify-center padding-bottom-df">
                <Pagination background />
            </div>
        </div>
        <Footer />
    </scroll-view>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import Footer from "@/components/Footer/index.vue";
import Pagination from "@/components/pagination/index.vue";
@Component({
    components:{Footer,Pagination}
})
export default class Designer extends Vue {
    isPC = ObjectDetection.isPCBroswer();
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
    },{
        name: '王利军',
        skill: '创始人   CEO',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容......',
        imgWidth: `${this.isPC?'130px':(130/46.875)+'rem'}`,
        isPC: this.isPC
    }]
    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }
}
</script>
