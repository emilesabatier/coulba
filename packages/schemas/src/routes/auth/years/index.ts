import { createOneYearBody, createOneYearReturn } from "./createOneYear"
import { deleteOneYearParams, deleteOneYearReturn } from "./deleteOneYear"
import { readOneYearParams, readOneYearReturn } from "./readOneYear"
import { updateOneYearBody, updateOneYearParams, updateOneYearReturn } from "./updateOneYear"


export const years = {
    post: {
        body: createOneYearBody,
        return: createOneYearReturn
    },
    get: {
        params: readOneYearParams,
        return: readOneYearReturn
    },
    put: {
        params: updateOneYearParams,
        body: updateOneYearBody,
        return: updateOneYearReturn
    },
    delete: {
        params: deleteOneYearParams,
        return: deleteOneYearReturn
    }
}
