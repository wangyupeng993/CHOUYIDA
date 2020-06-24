interface ServicePagination {
    type:number
    page?:number
    limit?:number
    count?: number
    countPage?: number
    keyword?: string
}

interface ServiceSearch {
    keyword: string
    page?: number
    limit?: number
}

interface ServiceResult<T> {
    code?:number
    msg?:string
    time?:string|number
    data: {
        count?: number
        limit?: number
        page?: number
        list: T
    }
}

interface ServiceResultObject<T> {
    code?:number
    msg?:string
    time?:string|number
    data: T
}

interface ServiceHelpDetails {
    category_id?: number
    detail?: string
    title?: string
    updatetime?: number
    createtime?: number
    deletetime?: number
    id?: number
}

interface ServiceRecDetails {
    createtime?: number
    deletetime?: number
    detail?: string
    id?: number
    name?: string
    status?: number
    type_ids?: number|string
    type_name?: string
    updatetime?: number
}

interface ServiceNewDetails {
    id: number,
    title?: string,
    user_id?: number,
    type_ids?: string,
    detail?: string,
    status?: number,
    view_times?: number,
    createtime: string,
    updatetime?: number,
    deletetime?: number,
    type_name?: string
}

interface ServicePartnerDetail {
    id?: number,
    name: string,
    introduction: string,
    type_ids?: string,
    headimage: string,
    status?: number,
    detail: string,
    industry: string,
    createtime?: number,
    updatetime?: number,
    deletetime?: number,
    type_name?: string
}

interface ServiceProductDetail {
    id: number
    title: string
    subtitle: string
    status: string
    image: string
    price: string
    days: number
    start_time: number
    user_num: number
    current_money: number
    type_text: string
    status_text: string
    dispatch_type_text: string
    progress: number
    draftImg: string
    doingImg: string
    successImg: string
    finishImg: string
}

interface cooperationAttr {
    type: string
    username: string
    mobile: string
    wechat_num: string
    easy_num: string
    detail: string
    image_url: string
}
