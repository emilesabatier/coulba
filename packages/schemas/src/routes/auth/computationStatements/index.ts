import { createComputationStatementBody, createComputationStatementReturn } from "./createComputationStatement";
import { deleteComputationStatementParams, deleteComputationStatementReturn } from "./deleteComputationStatement";
import { readComputationStatementParams, readComputationStatementReturn } from "./readComputationStatement";
import { updateComputationStatementBody, updateComputationStatementParams, updateComputationStatementReturn } from "./updateComputationStatement";


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
