interface ServicePagination {
    type:number
    page?:number
    limit?:number
    count?: number
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
