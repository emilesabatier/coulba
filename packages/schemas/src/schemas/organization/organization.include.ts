
export const organizationInclude = {
    id: true,
    scope: true,
    siren: true,
    name: true,
    email: true,
    lastUpdatedOn: true,
    createdOn: true,
    lastUpdatedBy: true
} as const


export const organizationIncludeKeys = ["id", "scope", "siren", "name", "email", "lastUpdatedOn", "createdOn", "lastUpdatedBy"] as const
