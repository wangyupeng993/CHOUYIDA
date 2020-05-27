<template>
    <div class="bg-grayLight padding-top-xl">
        <div class="padding-top-sm" style="width:1200px;margin:0 auto;">
            <div class="padding-tb-xs flex">
                <div class="flex basis-df">
                    <div class="text-xsl white-nowrap">运营项目</div>
                    <div class="flex items-center text-df margin-lr-sm white-nowrap">案例</div>
                </div>
                <div class="basis-xl flex items-center justify-end">
                    <ul class="white-nowrap">
                        <li :class="[
                    'inline-block bg-green radius-round-sm text-xs text-white',
                    'padding-tb-xs padding-lr-sm margin-lr-df pointer'
                    ]">全部</li>
                        <li :class="[
                    'inline-block bg-green radius-round-sm text-xs text-white',
                    'padding-tb-xs padding-lr-sm margin-lr-df pointer'
                    ]">人气新品</li>
                        <li :class="[
                    'inline-block bg-green radius-round-sm text-xs text-white',
                    'padding-tb-xs padding-lr-sm margin-lr-df pointer'
                    ]">消费众筹</li>
                        <li :class="[
                    'inline-block bg-green radius-round-sm text-xs text-white',
                    'padding-tb-xs padding-lr-sm margin-lr-df pointer'
                    ]">权益众筹</li>
                    </ul>
                </div>
            </div>
            <div class="padding-top-xl flex">
                <div class="basis-sm radius-xl bg-white hidden">
                    <div class="bg-blueLight" style="height:232px;"></div>
                    <div class="margin-lr-sm">
                        <div class="text-df text-hidden padding-top-xs">
                            宋朝青玉观音瓶【限量复刻】
                        </div>
                        <p class="text-xs text-gray solid-bottom padding-bottom-xs">
                            胎质光滑剔透，皇家精品，限量复刻
                        </p>
                    </div>
                </div>
                <div class="basis-sm radius-xl margin-lr-df bg-white hidden">
                    <div class="bg-blueLight" style="height:232px;"></div>
                    <div class="margin-lr-sm">
                        <div class="text-df text-hidden padding-top-xs">
                            宋朝青玉观音瓶【限量复刻】
                        </div>
                        <p class="text-xs text-gray solid-bottom padding-bottom-xs">
                            胎质光滑剔透，皇家精品，限量复刻
                        </p>
                    </div>
                </div>
                <div class="basis-sm radius-xl bg-white hidden">
                    <div class="bg-blueLight" style="height:232px;"></div>
                    <div class="margin-lr-sm">
                        <div class="text-df text-hidden padding-top-xs">
                            宋朝青玉观音瓶【限量复刻】
                        </div>
                        <p class="text-xs text-gray solid-bottom padding-bottom-xs">
                            胎质光滑剔透，皇家精品，限量复刻
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class OperatingProjects extends Vue {}
</script>
