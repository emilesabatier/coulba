import { readAccountParams, readAccountReturn } from "./readAccount"


export const accounts = {
    get: {
        params: readAccountParams,
        return: readAccountReturn
    }
}
