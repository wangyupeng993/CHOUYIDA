<template>
    <div class="bg-blue flex direction-column justify-end" style="height:810px;">
        <div class="padding-tb-sm text-white text-center"
             style="background-color:rgba(82,177,110,0.7);">
            <div class="flex justify-center" style="width:1200px;margin:0 auto;">
                <div class="basis-sm margin-lr-xs" v-for="(item,index) in navs" :key="index">
                    <i :class="item.icon"></i>
                    <p :class="item.className">{{item.name}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import ObjectDetection from "@/api/methods/validator";

    @Component({})
    export default class Banner extends Vue {
        isPC = ObjectDetection.isPCBroswer();
        navs = [{
            icon: `cuIcon-form ${this.isPC?'text-lg':'text-xml'}`,
            name: '关于筹易达',
            className: `${this.isPC?'text-sm':'text-df'}`
        },{
            icon: `cuIcon-down ${this.isPC?'text-lg':'text-xml'}`,
            name: '下载APP',
            className: `${this.isPC?'text-sm':'text-df'}`
        },{
            icon: `cuIcon-cooperation ${this.isPC?'text-lg':'text-xml'}`,
            name: '项目合作',
            className: `${this.isPC?'text-sm':'text-df'}`
        },{
            icon: `cuIcon-attention ${this.isPC?'text-lg':'text-xml'}`,
            name: '关注我们',
            className: `${this.isPC?'text-sm':'text-df'}`
        }];
    }
</script>
