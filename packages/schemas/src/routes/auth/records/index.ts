import { createRecordBody, createRecordReturn } from "./createRecord.js"
import { deleteRecordParams, deleteRecordReturn } from "./deleteRecord.js"
import { readRecordParams, readRecordReturn } from "./readRecord.js"
import { updateRecordBody, updateRecordParams, updateRecordReturn } from "./updateRecord.js"


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
