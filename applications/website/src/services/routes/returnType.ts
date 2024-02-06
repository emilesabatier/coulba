
type ReturnData<T> = {
    status: true
    data: T
}

type ReturnError = {
    status: false
    message: string
    description?: string
}

export type ReturnResponse<T> = ReturnData<T> | ReturnError
