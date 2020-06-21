<template>
    <div @scroll="mousewheel" ref="wrpper" class="app-main"
         :style="`overflow:${isPC?'auto':'hidden'};`">
        <div v-if="!isPC" class="content" :style="`width:${width};`">
            <slot></slot>
        </div>
        <slot v-if="isPC"></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
import ObjectDetection from "../../api/methods/validator";
export default {
    name: "ScrollView",
    data () {
        return {
            scroll: null,
            isPC: ObjectDetection.isPCBroswer()
        }
    },
    props:{
        width: String,
        scrollX: Boolean,
        scrollY: Boolean,
        // 开启下拉刷新的动作
        pullDownRefresh: Object,
        // 开启上拉加载的动作
        pullUpLoad: Object,
        // 滚动到顶部/左边 多少距离时触发
        scrolltoupper: {
            type: Number,
            default: 100
        },
        // 滚动到底部/右边多少距离时触发
        scrolltolower: {
            type: Number,
            default: 50
        },
        eventPassthrough: {
            type: String,
            default: ''
        }
    },
    async mounted() {
        if (!this.isPC) {
            const scroll = this.scroll = await new BScroll(this.$refs.wrpper, {
                eventPassthrough: this.eventPassthrough,
                probeType: 3,
                scrollX:this.scrollX,
                scrollY:this.scrollY,
                click: true,
                preventDefaultException: {
                    tagName: /^(IMG|INPUT|TEXTAREA|BUTTON|SELECT)$/
                },
                pullUpLoad: this.pullUpLoad,
                pullDownRefresh: this.pullDownRefresh
            });

            await setTimeout(async () => {
                // 当scroll 处于启用状态时发布一个初始化事件
                await scroll.refresh();
                if (scroll.enabled) await this.$emit('before-scroll', scroll);
            }, 100)
            // 监听滚动事件
            scroll.on('scroll', (pos) => {
                const iosVersion = ObjectDetection.iosVersion();
                if (iosVersion >= 13.4&&pos.y <= scroll.maxScrollY) {scroll.stop();}
                if (iosVersion >= 13.4&&pos.y >= 0) {
                    scroll.stop();
                }
                if (iosVersion >= 13.4&&pos.x <= scroll.maxScrollX) {scroll.stop();}
                if (iosVersion >= 13.4&&pos.x >= 0) {scroll.stop();}

                this.$emit('onScroll', pos);
            });

            scroll.on('scrollEnd', (pos) => {
                const iosVersion = ObjectDetection.iosVersion();
                if (iosVersion >= 13.4&&this.scrollY&&pos.y <= scroll.maxScrollY) {
                    scroll.scrollTo(0,scroll.maxScrollY);
                }
                if (iosVersion >= 13.4&&this.scrollY&&pos.y >= 0) {
                    scroll.scrollTo(0,0);
                }
                if (iosVersion >= 13.4&&this.scrollX&&pos.x <= scroll.maxScrollX) {
                    scroll.scrollTo(scroll.maxScrollX,0);
                }
                if (iosVersion >= 13.4&&this.scrollX&&pos.x >= 0) {
                    scroll.scrollTo(0,0);
                }

                this.$emit('onScrollEnd', pos);
            });

            scroll.on('pullingUp', () => {
                this.$emit('onPullingUp', scroll);
            });

            scroll.on('pullingDown', () => {
                this.$emit('onPullingDown', scroll);
            });
        }
    },
    methods: {
        mousewheel () {
            this.$emit('handle-scroll',this.$refs.wrpper);
        }
    }
}
</script>
