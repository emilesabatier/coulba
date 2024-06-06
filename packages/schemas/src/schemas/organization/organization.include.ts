
export const organizationInclude = {
    id: true,
    type: true,
    siren: true,
    name: true,
    email: true,
    lastUpdatedOn: true,
    createdOn: true,
    lastUpdatedBy: true
} as const


export const organizationIncludeKeys = ["id", "type", "siren", "name", "email", "lastUpdatedOn", "createdOn", "lastUpdatedBy"] as const
