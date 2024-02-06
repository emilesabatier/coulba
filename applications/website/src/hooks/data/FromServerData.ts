

export type CRUDUrl = "/accounts" | "/adherents" | "/lessons" | "/events" | "/rollcalls" | "/collaborators" | "/sports"
// T is the response type
// K is the request type which defaults to T
export type FromServerValue = FromServerData | Array<FromServerData> | string | number | Date | boolean | null | undefined
export type FromServerData = {
    [key: symbol | string]: FromServerValue
    id?: string
    children?: Array<FromServerData>
} //& (RollcallFromServer | LessonFromServer | ContactFromServer | OccurrenceFromServer | EventOccurrenceFromServer)//| Adherent | Collaborator | Event | Rollcall | SupervisionForEvent | EnrollmentForAdherent | EnrollmentForEvent
