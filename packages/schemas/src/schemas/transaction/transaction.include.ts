
export const transactionInclude = {
    id: true,
    idCompany: true,
    idYear: true,
    idAccount: true,
    idJournal: true,
    idAttachment: true,
    isConfirmed: true,
    label: true,
    date: true,
    debit: true,
    credit: true,
    lastUpdatedOn: true,
    createdOn: true,
    lastUpdatedBy: true,
    createdBy: true
} as const
