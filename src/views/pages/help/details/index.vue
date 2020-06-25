<template>
    <el-dialog :visible.sync="dialogVisible" width="80%" center
               custom-class="isMobile" @close="handleConfirm"
               :close-on-click-modal="false" :append-to-body="true">
        <div class="hidden" style="height:60vh;">
            <scroll-view :scroll-y="true">
                <h2 class="text-black text-lg text-center">{{details.title}}</h2>
                <div class="text-black text-df">{{details.detail}}</div>
            </scroll-view>
        </div>
        <div slot="footer" class="dialog-footer">
            <button @click="handleConfirm" class="text-white padding-sm bg-green radius-sm text-df">
                ok,了解了
            </button>
        </div>
    </el-dialog>
</template>

<script lang="ts">
    import { Component, Vue, Prop, Emit} from 'vue-property-decorator';
    @Component
    export default class HelpDetails extends Vue {
        private dialogVisible: boolean
        constructor () {
            super();
            this.dialogVisible = true;
        }

        @Prop({
            type: Boolean,
            required: false,
            default: false
        }) visible !: boolean
        @Prop({
            type: Object,
            required: false,
            default: () => {
                return {
                    // eslint-disable-next-line @typescript-eslint/camelcase
                    category_id: 0,
                    detail: '',
                    title: '',
                    updatetime: 0,
                    createtime: 0,
                    deletetime: 0,
                    id: 0
                }
            }
        }) details !: ServiceHelpDetails

        @Emit('handle-confirm')
        handleConfirm () {
            return {visible: false}
        }

    }
</script>
