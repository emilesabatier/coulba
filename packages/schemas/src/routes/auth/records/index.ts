import { createRecordBody, createRecordReturn } from "./createRecord"
import { deleteRecordParams, deleteRecordReturn } from "./deleteRecord"
import { readRecordParams, readRecordReturn } from "./readRecord"
import { updateRecordBody, updateRecordParams, updateRecordReturn } from "./updateRecord"


export const records = {
    post: {
        body: createRecordBody,
        return: createRecordReturn
    },
    get: {
        params: readRecordParams,
        return: readRecordReturn
    },
    put: {
        params: updateRecordParams,
        body: updateRecordBody,
        return: updateRecordReturn
    },
    delete: {
        params: deleteRecordParams,
        return: deleteRecordReturn
    }
}
