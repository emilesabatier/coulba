
export function getCookie(name: string) {
    const stringCookies = document?.cookie?.split("; ")
    const cookie = stringCookies?.find(x => x.includes(name))
    if (!cookie) return undefined

    const cookieValue = cookie.split("=").at(1)
    if (!cookieValue) return undefined

    return cookieValue
}
