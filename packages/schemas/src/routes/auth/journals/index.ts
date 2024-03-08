import { createJournalBody, createJournalReturn } from "./createJournal"
import { deleteJournalParams, deleteJournalReturn } from "./deleteJournal"
import { readJournalParams, readJournalReturn } from "./readJournal"
import { updateJournalBody, updateJournalParams, updateJournalReturn } from "./updateJournal"


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
