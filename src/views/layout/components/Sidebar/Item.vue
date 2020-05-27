<template>
    <section v-if="!item.hidden && item.children"
             :class="`menu-wrapper ${mode === 'horizontal'?'inline-blocak':''}`">
        <el-submenu v-if="!item.meta.onelevel" :index="item.path">
            <template slot="title">
                <i :class="item.meta.icon"></i>
                <span>{{ item.meta.title }}</span>
            </template>
            <el-menu-item-group>
                <el-menu-item
                        v-for="child in item.children"
                        :key="child.path"
                        :index="item.path + '/' + child.path">
                    <template slot="title">
                        <i :class="child.meta.icon"></i>
                        <span>{{ child.meta.title }}</span>
                    </template>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-menu-item v-if="item.meta.onelevel"
                      :index="item.path">
            <i :class="item.meta.icon"></i>
            <span slot="title">{{ item.meta.title }}</span>
        </el-menu-item>
    </section>
</template>

<script lang="ts">
import { Component,Prop, Vue } from 'vue-property-decorator';

@Component({
    components: {},
    computed: {}
})
export default class Item extends Vue {
    @Prop({
        type: Object,
        required: false, // 是否必填
        default: {}
    }) item !: object;
    @Prop({
        type: String,
        required: false, // 是否必填
        default: ''
    }) mode !: string;
    mounted(): void {
        console.log(this.$route.path,'============')
    }
}
</script>

