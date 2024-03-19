import { createYearBody, createYearReturn } from "./createYear"
import { deleteYearParams, deleteYearReturn } from "./deleteYear"
import { readYearParams, readYearReturn } from "./readYear"
import { switchYearParams, switchYearReturn } from "./switchYear"
import { updateYearBody, updateYearParams, updateYearReturn } from "./updateYear"


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
