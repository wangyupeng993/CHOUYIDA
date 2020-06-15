interface ServicePagination {
    type?:number
    page?:number
    limit?:number
}

interface ServiceResult<T> {
    code?:number
    msg?:string
    time?:string|number
    data: T
}
