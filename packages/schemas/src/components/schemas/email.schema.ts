import z from "zod"
export const emailSchema = z.string({ invalid_type_error: "Format invalide.", required_error: "Le champ est requis." }).trim().toLowerCase().email({ message: "Le format email est requis." })
