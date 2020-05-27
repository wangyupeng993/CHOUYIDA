<template>
    <div ref="wrpper" class="app-main" :style="`overflow:${isPC?'auto':'hidden'};`">
        <div v-if="!isPC" class="content">
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
        scrollX: Boolean,
        scrollY: Boolean,
        // 开启下拉刷新的动作
        pullingDown: Boolean,
        // 开启上拉加载的动作
        pullingUp: Boolean,
        // 滚动到顶部/左边 多少距离时触发
        scrolltoupper: {
            type: Number,
            default: 100
        },
        // 滚动到底部/右边多少距离时触发
        scrolltolower: {
            type: Number,
            default: 50
        }
    },
    async mounted() {
        if (!this.isPC) {
            const scroll = this.scroll = await new BScroll(this.$refs.wrpper, {
                probeType: 3,
                scrollX:this.scrollX,
                scrollY:this.scrollY,
                click: true
            })
            await setTimeout(async () => {
                // 当scroll 处于启用状态时发布一个初始化事件
                await scroll.refresh()
                if (scroll.enabled) await this.$emit('before-scroll', scroll)
            }, 100)
            // 监听滚动事件
            scroll.on('scroll', (pos) => {
                this.$emit('bind-scroll', pos)
            })
            // 上拉加载 / 下拉刷新
            scroll.on('touchEnd', pos => {
                // 上拉加载更多
                if (scroll.maxScrollY >= (pos.y + this.scrolltolower) && this.pullingUp||scroll.maxScrollX >= (pos.x + this.scrolltolower) && this.pullingUp) {
                    this.$emit('bind-scroll-up', scroll)
                }
                // 下拉刷新
                if (pos.y > this.scrolltoupper||pos.x > this.scrolltoupper) {
                    this.$emit('bind-scroll-down', scroll)
                }
            })
        }
    }
}
</script>
