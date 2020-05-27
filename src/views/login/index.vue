<template>
    <div class="app-main login flex items-center justify-center">
        <div class="padding-lr-df padding-top-xl bg-white shadow radius-sm">
            <div class="text-xl text-black text-bold text-indent-lg margin-bottom">
                后台管理
            </div>
            <div class="flex">
                <div class="basis-df padding-right-xl margin-right-df">
                    <img width="500px" src="@/assets/images/login_img1.png" alt="" />
                </div>
                <div class="basis-df">
                    <div class="padding-lr-lg margin-top-xl" style="min-width:382px;">
                        <form>
                            <div class="flex relative solid-bottom padding-tb-sm margin-bottom-df">
                                <input
                                        class="basis-ls text-grey text-df text-indent-xs"
                                        type="text"
                                        name="user"
                                        placeholder="请输入用户名"
                                        autocomplete="off"
                                />
                            </div>
                            <div class="flex relative solid-bottom padding-tb-sm">
                                <input
                                        class="basis-ls text-grey text-df text-indent-xs"
                                        type="password"
                                        name="password"
                                        placeholder="请输入密码"
                                        autocomplete="off"
                                />
                            </div>
                            <div class="flex margin-top-df">
                                <button
                                        class="basis-max shadow pointer padding-tb-xs text-lg text-white bg-blueLight radius-round"
                                        type="submit">
                                    登录
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component({})
    export default class Login extends Vue {
        mounted(): void {
            console.log(this.$options,'==============')
        }
    }
</script>
