<template>
    <transition name="el-fade-in-linear" mode="out-in">
        <router-view />
    </transition>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({})
    export default class AppMain extends Vue {}
</script>

