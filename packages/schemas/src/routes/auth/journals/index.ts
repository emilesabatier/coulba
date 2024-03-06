import { createOneJournalBody, createOneJournalReturn } from "./createOneJournal"
import { deleteOneJournalParams, deleteOneJournalReturn } from "./deleteOneJournal"
import { readOneJournalParams, readOneJournalReturn } from "./readOneJournal"
import { updateOneJournalBody, updateOneJournalParams, updateOneJournalReturn } from "./updateOneJournal"


export const journals = {
    post: {
        body: createOneJournalBody,
        return: createOneJournalReturn
    },
    get: {
        params: readOneJournalParams,
        return: readOneJournalReturn
    },
    put: {
        params: updateOneJournalParams,
        body: updateOneJournalBody,
        return: updateOneJournalReturn
    },
    delete: {
        params: deleteOneJournalParams,
        return: deleteOneJournalReturn
    }
}
