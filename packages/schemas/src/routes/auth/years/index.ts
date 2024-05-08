import { createYearBody, createYearReturn } from "./createYear.js"
import { deleteYearParams, deleteYearReturn } from "./deleteYear.js"
import { readYearParams, readYearReturn } from "./readYear.js"
import { switchYearParams, switchYearReturn } from "./switchYear.js"
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
        }
    }
}
