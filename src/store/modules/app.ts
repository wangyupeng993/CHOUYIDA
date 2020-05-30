const app = {
    state: {
        scrollTop: 0
    },
    mutations: {
        getScrollTop (state: any,payload: number) {
            state.scrollTop = payload
        }
    },
    actions: {}
}

export default app
