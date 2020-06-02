import VueClamp from "./VClamp";

const VClamp = {
    install: (Vue) => {
        Vue.component('ScrollView', VueClamp)
    }
}

export default VClamp;
