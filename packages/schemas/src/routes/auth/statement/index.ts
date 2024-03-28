import { createStatementBody, createStatementReturn } from "./createStatement"
import { deleteStatementParams, deleteStatementReturn } from "./deleteStatement"
import { readStatementParams, readStatementReturn } from "./readStatement"
import { updateStatementBody, updateStatementParams, updateStatementReturn } from "./updateStatement"


export const statements = {
    post: {
        body: createStatementBody,
        return: createStatementReturn
    },
    get: {
        params: readStatementParams,
        return: readStatementReturn
    },
    put: {
        params: updateStatementParams,
        body: updateStatementBody,
        return: updateStatementReturn
    },
    delete: {
        params: deleteStatementParams,
        return: deleteStatementReturn
    }
}
