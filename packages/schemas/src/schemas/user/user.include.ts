
export const userKeys = <const>["id", "idCompany", "isAdmin", "forename", "surname", "emailAddress", "emailAddressTemporary", "invitationLastSentOn", "isActive", "lastUpdatedOn", "createdOn", "lastUpdatedBy", "createdBy"]

export const userInclude: Record<typeof userKeys[number], true> = {
    id: true,
    idCompany: true,
    isAdmin: true,
    forename: true,
    surname: true,
    emailAddress: true,
    emailAddressTemporary: true,
    invitationLastSentOn: true,
    isActive: true,
    lastUpdatedOn: true,
    createdOn: true,
    lastUpdatedBy: true,
    createdBy: true
}
