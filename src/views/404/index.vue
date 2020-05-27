<template>
    <div>404页面</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {AppMain,SideBar} from "@/views/layout/components";

@Component({
    components: {AppMain,SideBar}
})
export default class NotFound extends Vue {}
</script>
