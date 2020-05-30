<template>
    <div>
        <div class="padding-tb" style="background:rgba(47,53,66,1);">
            <div :class="`${isPC?'center-1200':''} flex`">
                <div class="basis-max flex">
                    <div :class="`${isPC?'padding-right-xl margin-right-df':'padding-lr'}`">
                        <img v-if="isPC" width="102px" height="102px" class="bg-white"
                             src="@/assets/images/footer/code.png" alt="">
                        <img v-else class="bg-white" :style="`width:${102/46.875}rem;height:${102/46.875}rem;`"
                             src="@/assets/images/footer/code.png" alt="">
                    </div>
                    <div :class="`basis-max ${isPC?'flex items-center':''}`">
                        <p class="text-white text-df margin-bottom-sm" v-if="!isPC">联系我们</p>
                        <div class="flex">
                            <i class="cuIcon-address text-xml text-white"></i>
                            <p :class="`text-white text-sm padding-left-xs  padding-right-df ${isPC?'margin-right-xl':''}`">
                                广东省深圳市宝安区宝民一路<br />宝通大厦27楼
                            </p>
                            <i class="cuIcon-telephone text-xml text-white"></i>
                            <p class="text-white text-sm padding-lr-xs">
                                <span>+400-606-6638</span><br />
                                <span>+0755-32998669</span>
                            </p>
                        </div>
                        <!--<i class="cuIcon-telephone text-xml text-white"></i>
                        <p class="text-white text-sm padding-lr-xs">
                            <span>+400-606-6638</span><br />
                            <span>+0755-32998669</span>
                        </p>-->
                    </div>
                </div>
                <div v-if="isPC" class="basis-xs flex items-center text-lg text-gray">
                    <i class="cuIcon-weixin padding-lr-xs"></i>
                    <i class="cuIcon-QQ padding-lr-xs"></i>
                    <i class="cuIcon-weibo padding-lr-xs"></i>
                    <i class="cuIcon-facebook padding-lr-xs"></i>
                </div>
            </div>
        </div>
        <div :class="`text-center padding-tb-sm text-gray text-xs`"
             style="background:rgba(34,34,34,1);">
            <p>© Copyright  2015-2020   上海信爵企业发展有限公司 | 沪B2-20180358 | 沪公网安备44030502000264号</p>
            <p>地址：上海市杨浦区控江路1142号23栋5012室 传真：021-58825551 邮箱：info@chouyida.com 电话：400-152-5655</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator';
import ObjectDetection from "@/api/methods/validator";
@Component({})
export default class Footer extends Vue {
    isPC = ObjectDetection.isPCBroswer();
}
</script>
