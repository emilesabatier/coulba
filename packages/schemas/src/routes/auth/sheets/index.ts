import { createSheetBody, createSheetReturn } from "./createSheet"
import { deleteSheetParams, deleteSheetReturn } from "./deleteSheet"
import { readSheetParams, readSheetReturn } from "./readSheet"
import { updateSheetBody, updateSheetParams, updateSheetReturn } from "./updateSheet"


export const sheets = {
    post: {
        body: createSheetBody,
        return: createSheetReturn
    },
    get: {
        params: readSheetParams,
        return: readSheetReturn
    },
    put: {
        params: updateSheetParams,
        body: updateSheetBody,
        return: updateSheetReturn
    },
    delete: {
        params: deleteSheetParams,
        return: deleteSheetReturn
    }
}
