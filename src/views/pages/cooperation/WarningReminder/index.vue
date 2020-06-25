<template>
    <el-dialog :visible.sync="dialogVisible" :width="`${isPC?'450px':'80%'}`" center top="40vh"
               :custom-class="`${isPC?'':'isMobile'}`" @close="handleConfirm"
               :close-on-click-modal="false" :append-to-body="true">
        <div :class="`text-black ${isPC?'text-sm padding-tb-sm':'text-df padding-tb-df'}`">{{message}}</div>
        <div slot="footer" class="dialog-footer">
            <button @click="handleConfirm" :class="[
            'text-white bg-green radius-sm pointer',
            `${isPC?'padding-tb-xs padding-lr-df text-sm':'padding-tb-sm padding-lr-df text-df'}`
            ]">确定</button>
        </div>
    </el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit} from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
@Component
export default class WarningReminder extends Vue  {
    private dialogVisible: boolean;
    private isPC: boolean;
    constructor () {
        super();
        this.dialogVisible = true;
        this.isPC = ObjectDetection.isPCBroswer();
    }

    @Prop({
        type: String,
        required: false,
        default: ''
    }) message !: string
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
