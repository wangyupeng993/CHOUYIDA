import router from "@/router";

// const whiteList: string[] = ['/login','/404']; // 不重定向的白名单

router.beforeEach((to,from, next) => {
    next();
})
