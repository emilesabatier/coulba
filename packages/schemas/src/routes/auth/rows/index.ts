import { CreateRowBody, CreateRowReturn } from "./createRow.js"
import { deleteRowParams, deleteRowReturn } from "./deleteRow.js"
import { readRowParams, readRowReturn } from "./readRow.js"
import { UpdateRowBody, UpdateRowParams, UpdateRowReturn } from "./updateRow.js"


export const rows = {
    post: {
        body: CreateRowBody,
        return: CreateRowReturn
    },
    get: {
        params: readRowParams,
        return: readRowReturn
    },
    put: {
        params: UpdateRowParams,
        body: UpdateRowBody,
        return: UpdateRowReturn
    },
    delete: {
        params: deleteRowParams,
        return: deleteRowReturn
    }
}
