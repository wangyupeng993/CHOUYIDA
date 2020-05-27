import router from "@/router";
import Storage from "@/api/methods/storage";

const whiteList: string[] = ['/login','/404']; // 不重定向的白名单

router.beforeEach((to,from, next) => {
    if (Storage.getSession("token") && Storage.getSession("token") !== null) {
        to.path === "/login" ? next({ path: "/" }) : next();
    } else {
        whiteList.indexOf(to.path) !== -1 ? next() : next({ path: "/login" });
    }
})
