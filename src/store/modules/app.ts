const app = {
    state: {
        scrollTop: 0,
        designerNav: [],
        teamNav: [],
        partnerNav: [],
        recruitmentNav: [],
        newsNav: [],
        productNav: []
    },
    mutations: {
        getScrollTop (state: {scrollTop: number},payload: number) {
            state.scrollTop = payload
        },
        getDesignerNav (state: {designerNav: object[]},payload: object[]) {
            state.designerNav = payload;
        },
        getTeamNav (state: {teamNav: object[]},payload: object[]) {
            state.teamNav = payload;
        },
        getPartnerNav (state: {partnerNav: object[]},payload: object[]) {
            state.partnerNav = payload;
        },
        getRecruitmentNav (state: {recruitmentNav: object[]},payload: object[]) {
            state.recruitmentNav = payload;
        },
        getNewsNav (state: {newsNav: object[]},payload: object[]) {
            state.newsNav = payload;
        },
        getProductNav (state: {productNav: object[]},payload: object[]) {
            state.productNav = payload;
        }
    },
    actions: {}
}

export default app
