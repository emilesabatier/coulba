import z from "zod"

export const integerSchema = z.number({ invalid_type_error: "Format invalide.", required_error: "Le champ est requis." }).int({ message: "Doit être un nombre entier." })
