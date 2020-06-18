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
