import { createOneJournalBody, createOneJournalReturn } from "./createOneJournal"
import { deleteOneJournalParams, deleteOneJournalReturn } from "./deleteOneJournal"
import { readOneJournalParams, readOneJournalReturn } from "./readOneJournal"
import { updateOneJournalBody, updateOneJournalParams, updateOneJournalReturn } from "./updateOneJournal"


export const journals = {
    create: {
        body: createOneJournalBody,
        return: createOneJournalReturn
    },
    read: {
        params: readOneJournalParams,
        return: readOneJournalReturn
    },
    update: {
        params: updateOneJournalParams,
        body: updateOneJournalBody,
        return: updateOneJournalReturn
    },
    delete: {
        params: deleteOneJournalParams,
        return: deleteOneJournalReturn
    }
}
