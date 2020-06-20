<template>
    <el-dialog :visible.sync="dialogVisible" :custom-class="`${isPC?'':'isMobile'}`"
               @close="handleConfirm" style="margin-top:30vh !important;"
               :close-on-click-modal="false" :append-to-body="true" :width="`${isPC?'40%':'90%'}`">
        <div :class="`${isPC?'text-sm':'text-df'}`">
            请将你的求职职位、期望薪资和简历发送到888888@qq.com邮箱，
            请耐心等待，HR在5个工作日内将与您联系！
        </div>
        <div slot="footer" class="dialog-footer">
            <button @click="handleConfirm"
                    :class="`text-green padding-sm bg-white radius-sm ${isPC?'text-sm':'text-lg'} pointer`">
                我知道了
            </button>
        </div>
    </el-dialog>
</template>

<script lang="ts">
import { Component, Vue,Prop, Emit } from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
@Component
export default class PostResume extends Vue {
    private dialogVisible: boolean;
    private isPC: boolean;
    constructor () {
        super();
        this.dialogVisible = true;
        this.isPC = ObjectDetection.isPCBroswer();
    }

    @Prop({
        type: Boolean,
        required: false,
        default: false
    }) visible !: boolean


    @Emit('handle-confirm')
    handleConfirm () {
        return {visible: false}
    }
}
</script>
