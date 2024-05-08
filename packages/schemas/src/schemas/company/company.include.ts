
export const companyInclude = {
    id: true,
    siren: true,
    name: true,
    address: true,
    email: true,
    lastUpdatedOn: true,
    createdOn: true,
    lastUpdatedBy: true
} as const


export const companyIncludeKeys = ["id", "siren", "name", "address", "email", "lastUpdatedOn", "createdOn", "lastUpdatedBy"] as const
