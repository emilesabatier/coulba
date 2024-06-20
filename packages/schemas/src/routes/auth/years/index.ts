import { createYearBody, createYearReturn } from "./createYear.js"
import { deleteYearParams, deleteYearReturn } from "./deleteYear.js"
import { closeReturn } from "./patch/close.js"
import { openBody, openReturn } from "./patch/open.js"
import { settleSheetBody, settleSheetReturn } from "./patch/settleSheet.js"
import { settleStatementBody, settleStatementReturn } from "./patch/settleStatement.js"
import { switchYearParams, switchYearReturn } from "./patch/switchYear.js"
import { readYearParams, readYearReturn } from "./readYear.js"
import { updateYearBody, updateYearParams, updateYearReturn } from "./updateYear.js"


export const years = {
    post: {
        body: createYearBody,
        return: createYearReturn
    },
    get: {
        params: readYearParams,
        return: readYearReturn
    },
    put: {
        params: updateYearParams,
        body: updateYearBody,
        return: updateYearReturn
    },
    delete: {
        params: deleteYearParams,
        return: deleteYearReturn
    },
    patch: {
        switch: {
            params: switchYearParams,
            return: switchYearReturn
        },
        settleStatement: {
            body: settleStatementBody,
            return: settleStatementReturn
        },
        settleSheet: {
            body: settleSheetBody,
            return: settleSheetReturn
        },
        close: {
            return: closeReturn
        },
        open: {
            body: openBody,
            return: openReturn
        }
    }
}
