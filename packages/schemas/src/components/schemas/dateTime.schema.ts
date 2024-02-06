import z from "zod"


export const dateTimeSchema = z.string({ invalid_type_error: "Format invalide.", required_error: "Le champ est requis." }).trim().datetime({ offset: true, message: "Le format date est requis." })
