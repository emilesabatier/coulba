import z from "zod"
export const idSchema = z.string({ invalid_type_error: "Format invalide.", required_error: "Le champ est requis." }).trim()
