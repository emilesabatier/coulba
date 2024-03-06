import { readOneAccountParams, readOneAccountReturn } from "./readOneAccount"


export const accounts = {
    get: {
        params: readOneAccountParams,
        return: readOneAccountReturn
    }
}
