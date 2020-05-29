import Vue from 'vue';
import {
    Loading,
    InfiniteScroll,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Carousel,
    CarouselItem
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css';

Vue.use(Loading)
Vue.use(InfiniteScroll)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Menu)
Vue.use(Carousel)
Vue.use(CarouselItem)
