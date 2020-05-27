import scroll from "./ScrollView"

const ScrollView = {
    install: (Vue) => {
        Vue.component('ScrollView', scroll)
    }
}

export default ScrollView
