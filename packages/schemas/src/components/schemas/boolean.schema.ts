import z from "zod"
export const booleanSchema = z.boolean({ invalid_type_error: "Format invalide.", required_error: "Le champ est requis." })
