import { createSheetBody, createSheetReturn } from "./createSheet.js"
import { deleteSheetParams, deleteSheetReturn } from "./deleteSheet.js"
import { readSheetParams, readSheetReturn } from "./readSheet.js"
import { updateSheetBody, updateSheetParams, updateSheetReturn } from "./updateSheet.js"


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
