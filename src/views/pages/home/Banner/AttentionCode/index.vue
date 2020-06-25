<template>
    <el-dialog :visible.sync="dialogVisible" :width="`${isPC?'450px':'50%'}`" center top="40vh"
               :custom-class="`${isPC?'':'isMobile'}`" @close="handleConfirm" :append-to-body="true">
        <div :class="`text-black text-center ${isPC?'text-sm padding-tb-sm':'text-df padding-tb-df'}`">
            <img :style="`width:${256/46.875}rem;height:${256/46.875}rem;`"
                 class="bg-white padding-sm radius-sm"
                 src="@/assets/images/footer/code.png" alt="" />
        </div>
    </el-dialog>
</template>

<script lang="ts">
    import { Component, Vue, Prop, Emit} from 'vue-property-decorator';
    import ObjectDetection from "@/api/methods/validator";
    @Component
    export default class AttrntionCode extends Vue  {
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
