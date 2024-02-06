import z from "zod"

export const numericSchema = z.coerce.string({ invalid_type_error: "Format invalide.", required_error: "Le champ est requis." })
