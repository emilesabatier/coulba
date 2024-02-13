
export const userKeys = <const>["id", "idCompany", "isAdmin", "forename", "surname", "emailAddress", "emailAddressTemporary", "lastInvitationSentAt", "isActive", "lastUpdatedAt", "createdAt", "lastUpdatedBy", "createdBy"]

export const userInclude: Record<typeof userKeys[number], true> = {
    id: true,
    idCompany: true,
    isAdmin: true,
    forename: true,
    surname: true,
    emailAddress: true,
    emailAddressTemporary: true,
    lastInvitationSentAt: true,
    isActive: true,
    lastUpdatedAt: true,
    createdAt: true,
    lastUpdatedBy: true,
    createdBy: true
}
