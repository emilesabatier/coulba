import { createComputationBody, createComputationReturn } from "./createComputation.js"
import { deleteComputationParams, deleteComputationReturn } from "./deleteComputation.js"
import { readComputationParams, readComputationReturn } from "./readComputation.js"
import { updateComputationBody, updateComputationParams, updateComputationReturn } from "./updateComputation.js"


export const computations = {
    post: {
        body: createComputationBody,
        return: createComputationReturn
    },
    get: {
        params: readComputationParams,
        return: readComputationReturn
    },
    put: {
        params: updateComputationParams,
        body: updateComputationBody,
        return: updateComputationReturn
    },
    delete: {
        params: deleteComputationParams,
        return: deleteComputationReturn
    }
}
