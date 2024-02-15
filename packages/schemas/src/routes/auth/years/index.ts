import { createOneYearBody, createOneYearReturn } from "./createOneYear"
import { deleteOneYearParams, deleteOneYearReturn } from "./deleteOneYear"
import { readOneYearParams, readOneYearReturn } from "./readOneYear"
import { updateOneYearBody, updateOneYearParams, updateOneYearReturn } from "./updateOneYear"


export const years = {
    create: {
        body: createOneYearBody,
        return: createOneYearReturn
    },
    read: {
        params: readOneYearParams,
        return: readOneYearReturn
    },
    update: {
        params: updateOneYearParams,
        body: updateOneYearBody,
        return: updateOneYearReturn
    },
    delete: {
        params: deleteOneYearParams,
        return: deleteOneYearReturn
    }
}
