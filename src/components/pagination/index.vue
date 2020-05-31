<template>
    <el-pagination :background="background" :page-sizes="pageSizes"
                   :page-size="pageSize" :total="total"
                   :layout="layout" prev-text="上一页" next-text="下一页">
    </el-pagination>
</template>

<script lang="ts">
import { Component, Vue, Prop} from 'vue-property-decorator';
@Component({})
export default class Pagination extends Vue {
    @Prop({
        type: Number,
        required: false,
        default: 0
    }) total !: number;
    @Prop({
        type: Number,
        required: false,
        default: 0
    }) pageNumber !: number;
    @Prop({
        type: Number,
        required: false,
        default: 10
    }) pageSize !: number;
    @Prop({
        type: Array,
        required: false,
        default: () => []
    }) pageSizes !: any[];
    @Prop({
        type: String,
        required: false,
        default: 'total,prev, pager, next, jumper'
    }) layout !: string;
    @Prop({
        type: Boolean,
        required: false,
        default: false
    }) background !: boolean;
}
</script>
