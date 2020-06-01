<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC">
        <div>
            <img width="100%" src="@/assets/images/banner/team_banner.png" alt="" />
        </div>
        <div :class="`${isPC?'center-1200':''}`">
            <div class="padding-tb-df margin-lr-sm">
                <div :class="`text-black ${isPC?'text-sm':'text-df'}`">首页 > {{$route.meta.title}}</div>
            </div>
            <div class="padding-tb-df">
                <ul class="text-center">
                    <li v-for="item in switchType" :key="item.name" :class="[
                    'inline-block text-grey',
                    'padding-tb-xs pointer',
                    `${item.className}`
                    ]"><span :class="`inline-block ${isPC?'padding-lr-sm':'padding-lr-xs'}`">
                        {{item.name}}</span> <i v-if="item.isSlash">/</i>
                    </li>
                </ul>
            </div>
            <div class="flex padding-bottom-df">
                <div :class="[
                'team-info shadow',
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
        }];
        mousewheel = (ev: Element) => {
            this.$store.commit('getScrollTop',ev.scrollTop);
        }
    }
</script>
