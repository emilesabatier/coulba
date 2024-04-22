import { createJournalBody, createJournalReturn } from "./createJournal.js"
import { deleteJournalParams, deleteJournalReturn } from "./deleteJournal.js"
import { readJournalParams, readJournalReturn } from "./readJournal.js"
import { updateJournalBody, updateJournalParams, updateJournalReturn } from "./updateJournal.js"


export const journals = {
    post: {
        body: createJournalBody,
        return: createJournalReturn
    },
    get: {
        params: readJournalParams,
        return: readJournalReturn
    },
    put: {
        params: updateJournalParams,
        body: updateJournalBody,
        return: updateJournalReturn
    },
    delete: {
        params: deleteJournalParams,
        return: deleteJournalReturn
    }
}
