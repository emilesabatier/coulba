import { createOneEntryBody, createOneEntryReturn } from "./createOneEntry"
import { deleteOneEntryParams, deleteOneEntryReturn } from "./deleteOneEntry"
import { readOneEntryParams, readOneEntryReturn } from "./readOneEntry"
import { updateOneEntryBody, updateOneEntryParams, updateOneEntryReturn } from "./updateOneEntry"


export const entries = {
    create: {
        body: createOneEntryBody,
        return: createOneEntryReturn
    },
    read: {
        params: readOneEntryParams,
        return: readOneEntryReturn
    },
    update: {
        params: updateOneEntryParams,
        body: updateOneEntryBody,
        return: updateOneEntryReturn
    },
    delete: {
        params: deleteOneEntryParams,
        return: deleteOneEntryReturn
    }
}
