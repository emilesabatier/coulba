export type CRUDUrl = "/accounts" | "/adherents" | "/lessons" | "/events" | "/rollcalls" | "/collaborators" | "/sports"
// T is the response type
// K is the request type which defaults to T
export type FromServerValue = FromServerData | Array<FromServerData> | string | number | Date | boolean | null | undefined
export type FromServerData = {
    [key: symbol | string]: FromServerValue
    id?: string
    children?: Array<FromServerData>
} //& (RollcallFromServer | LessonFromServer | ContactFromServer | OccurrenceFromServer | EventOccurrenceFromServer)//| Adherent | Collaborator | Event | Rollcall | SupervisionForEvent | EnrollmentForAdherent | EnrollmentForEvent


export async function fetcher<T extends FromServerData>(path: string, method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH", body?: string) {
    try {
        const response = await fetch(
            new URL(`${import.meta.env.VITE_PUBLIC_API_BASE}${path}`),
            {
                method: method,
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include',
                body: body
            }
        )

        if (response.ok) {
            const textData = await response.text()
            let data
            try {
                data = JSON.parse(textData) as T
            } catch {
                data = undefined
            }
            return {
                success: true,
                data: data
            }
        }
        return {
            success: false,
            error: response.body
        }
    } catch (error) {
        return {
            success: false,
            error: String(error)
        }
    }
}
