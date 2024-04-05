import { createStatementBody, createStatementReturn } from "./createStatement.js"
import { deleteStatementParams, deleteStatementReturn } from "./deleteStatement.js"
import { readStatementParams, readStatementReturn } from "./readStatement.js"
import { updateStatementBody, updateStatementParams, updateStatementReturn } from "./updateStatement.js"


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
