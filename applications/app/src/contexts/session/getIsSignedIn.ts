
export function getIsSignedIn() {
    const stringCookies = document?.cookie?.split("; ")
    const cookie = stringCookies?.find(x => x.includes("is_signed_in"))
    if (!cookie) return false

    const newIsSignedIn = cookie.split("=").at(1)
    if (!newIsSignedIn) return false

    return true
}
