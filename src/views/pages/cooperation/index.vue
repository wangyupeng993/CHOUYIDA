<template>
    <scroll-view @handle-scroll="mousewheel" ref="scrollBar" :scroll-y="!isPC">
        <div>
            <img width="100%" :style="`min-height:${isPC?'':(590/46.875)}rem;`"
                 :class="`${isPC?'':'object-fit-cover'}`"
                 src="@/assets/images/banner/cooperation_banner.png" alt="" />
        </div>
        <div :class="`${isPC?'center-1200 padding-bottom-xl margin-bottom-xl':''}`">
            <div class="padding-tb-df margin-lr-sm">
                <div :class="`text-black ${isPC?'text-sm':'text-df'}`">首页 > {{$route.meta.title}}</div>
            </div>

            <div :class="`flex margin-bottom-df ${isPC?'padding-lr-xl':'margin-lr-sm'}`"
                 style="border:1px solid rgba(229,229,229,1);">
                <div :class="`${isPC?'margin-left-lg':''}`"
                     :style="`width:${isPC?'281px':(281/46.875)+'rem'};height:${isPC?'188px':(188/46.875)+'rem'};`">
                    <img class="app-main" src="@/assets/images/cooperation_1165.png" alt="" />
                </div>
                <div :class="`basis-df ${isPC?'margin-left-lg`':'margin-left-sm'}`">
                    <h2 :class="[
                    'text-darkGreen padding-top-sm text-lg'
                    ]">
                        申请合作项目登记表
                    </h2>
                    <p :class="`text-inkblue padding-top-sm text-sm`">
                        信息提交后，我们将在7个工作日内与您联系
                    </p>
                    <p :class="`text-inkblue padding-top-sm text-sm`">
                        进度查询：13802303655（Mr，Lee）
                    </p>
                </div>
            </div>

            <div :class="`${isPC?'padding-lr-xl':'padding-lr-sm margin-lr-sm'} margin-bottom-xl`"
                 style="border:1px solid rgba(229,229,229,1);">
                <div class="padding-lr-df">
                    <div :class="`flex padding-tb-xs text-black ${isPC?' text-sm':' text-df'}`"
                         style="border-bottom:1px solid rgba(238,238,238,1);">
                        <span class="basis-xs line-height-lg">项目类型</span>
                        <input :class="`basis-max text-right line-height-lg text-black ${isPC?' text-sm':' text-df'}`"
                               v-model="cooperation.type"
                               type="text" name="type" placeholder="请填写" />
                    </div>
                    <div :class="`flex padding-tb-xs text-black ${isPC?' text-sm':' text-df'}`"
                         style="border-bottom:1px solid rgba(238,238,238,1);">
                        <span class="basis-xs line-height-lg">联系人</span>
                        <input :class="`basis-max text-right line-height-lg text-black ${isPC?' text-sm':' text-df'}`"
                               v-model="cooperation.username"
                               type="text" name="username" placeholder="请输入姓名" />
                    </div>
                    <div :class="`flex padding-tb-xs text-black ${isPC?' text-sm':' text-df'}`"
                         style="border-bottom:1px solid rgba(238,238,238,1);">
                        <span class="basis-xs line-height-lg">联系电话</span>
                        <input :class="`basis-max text-right line-height-lg text-black ${isPC?' text-sm':' text-df'}`"
                               v-model="cooperation.mobile"
                               type="numbr" name="mobile" placeholder="请输入11位手机号码" />
                    </div>
                    <div :class="`flex padding-tb-xs text-black ${isPC?' text-sm':' text-df'}`"
                         style="border-bottom:1px solid rgba(238,238,238,1);">
                        <span class="basis-xs line-height-lg">微信</span>
                        <input :class="`basis-max text-right line-height-lg text-black ${isPC?' text-sm':' text-df'}`"
                               v-model="cooperation.wechat_num"
                               type="text" name="wechat_num" placeholder="请填写微信号" />
                    </div>
                    <div :class="`flex padding-tb-xs text-black ${isPC?' text-sm':' text-df'}`"
                         style="border-bottom:1px solid rgba(238,238,238,1);">
                        <span class="basis-xs line-height-lg">简单聊号</span>
                        <input :class="`basis-max text-right line-height-lg text-black ${isPC?' text-sm':' text-df'}`"
                               v-model="cooperation.easy_num"
                               type="text" name="easy_num" placeholder="请填写简单聊号" />
                    </div>
                    <div :class="`flex padding-tb-xs text-black ${isPC?' text-sm':' text-df'}`">
                        <span class="basis-xs line-height-lg">项目简介</span>
                    </div>
                    <div class="flex direction-column" style="border:1px solid rgba(229,229,229,1);">
                        <el-input type="textarea" placeholder="请输入1000字以内字符"
                                  resize="none" rows="10" v-model="cooperation.detail"
                                  maxlength="1000" show-word-limit
                        >
                        </el-input>
                        <div class="margin-bottom-xs">
                            <el-upload
                                    action="" :auto-upload="false"
                                    class="margin-xs" :multiple="true"
                                    list-type="picture-card" :on-change="uploadImage">
                                <i :class="`${isPC?'':'text-xl'} el-icon-plus`"></i>
                            </el-upload>
                        </div>
                    </div>
                    <div class="flex padding-tb-sm">
                        <button @click="saveCooperation"
                                class="basis-max padding-tb-xs radius-round-sm text-df text-white bg-darkGreen pointer">
                            提 交
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <WarningReminder v-if="visible" :message.sync="Message" @handle-confirm="handleConfirm"></WarningReminder>
        <Footer />
    </scroll-view>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
import Footer from "@/components/Footer/index.vue";
import {upload} from 'qiniu-js';
import service from "@/api/request";
import WarningReminder from "@/views/pages/cooperation/WarningReminder/index.vue";
@Component({
    components:{Footer,WarningReminder}
})
export default class Cooperation extends Vue {
    private isPC: boolean;
    private cooperation: cooperationAttr;
    private qnToken: string;
    private visible: boolean;
    private Message: string;
    private ImageUrl: string[];
    constructor () {
        super();
        this.isPC = ObjectDetection.isPCBroswer();
        this.qnToken = '';
        this.visible = false;
        this.Message = '';
        this.ImageUrl = [];
        this.cooperation = {
            type: '',
            username: '',
            mobile: '',
            wechat_num: '',
            easy_num: '',
            detail: '',
            image_url: ''
        }
    }

    mousewheel = (ev: Element) => {
        this.$store.commit('getScrollTop',ev.scrollTop);
    }

    getQiniuToken () {
        service.getQiniuToken().then(response => {
            this.qnToken = response.data.upload_token;
        });
    }

    async uploadImage (files: {raw: File}) {
        const qnObservable = await upload(files.raw,files.raw.name,this.qnToken,{},{
            useCdnDomain: true,
            region: 'z0'
        });
        qnObservable.subscribe({
            next: (next: any) => {
                console.log(next,'===============');
            },
            error: (error: any) => {
                console.log(error,'=====================');
            },
            complete: (result: any) => {
                const {key} = result;
                this.ImageUrl.push(`https://image.chouyida.com/${key}`);
            }
        })
        console.log(files,'======================');
    }

    saveCooperation () {
        if (!ObjectDetection.isPhone(this.cooperation.mobile)) {
            this.visible = true;
            this.Message = '手机号码不正确!!!';
            return false;
        }

        if (ObjectDetection.isNull(this.cooperation.easy_num)||
            ObjectDetection.isNull(this.cooperation.wechat_num)||
            ObjectDetection.isNull(this.cooperation.username)||
            ObjectDetection.isNull(this.cooperation.type)||
            ObjectDetection.isNull(this.cooperation.detail)) {
            this.visible = true;
            this.Message = '信息不完善，请完善信息！';
            return false;
        } else {
            service.saveCooperation({
                ...this.cooperation,
                image_url: this.ImageUrl.join(',')
            }).then(response => {
                const {code} = response;
                if (Number(code) === 1) {
                    this.visible = true;
                    this.Message = '登记成功！请耐心等待，将在在1~5个工作日内将与您联系！';
                }
            }).catch(error => {
                console.log(error,'===================');
            });
        }
    }

    handleConfirm (raw: {visible: boolean}) {
        this.visible = raw.visible;
        this.Message = ''
    }

    mounted(): void {
        this.getQiniuToken();
    }
}
</script>
<style>
    .el-textarea__inner{
        border:none !important;
    }
</style>
