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
