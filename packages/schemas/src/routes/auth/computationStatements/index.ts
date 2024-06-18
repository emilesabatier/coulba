import { createComputationStatementBody, createComputationStatementReturn } from "./createComputationStatement.js"
import { deleteComputationStatementParams, deleteComputationStatementReturn } from "./deleteComputationStatement.js"
import { readComputationStatementParams, readComputationStatementReturn } from "./readComputationStatement.js"
import { updateComputationStatementBody, updateComputationStatementParams, updateComputationStatementReturn } from "./updateComputationStatement.js"


export const computationStatements = {
    post: {
        body: createComputationStatementBody,
        return: createComputationStatementReturn
    },
    get: {
        params: readComputationStatementParams,
        return: readComputationStatementReturn
    },
    put: {
        params: updateComputationStatementParams,
        body: updateComputationStatementBody,
        return: updateComputationStatementReturn
    },
    delete: {
        params: deleteComputationStatementParams,
        return: deleteComputationStatementReturn
    }
}
