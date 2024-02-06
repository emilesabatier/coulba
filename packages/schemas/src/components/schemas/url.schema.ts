import z from "zod"
export const urlSchema = z.string({ invalid_type_error: "Format invalide.", required_error: "Le champ est requis." }).trim().url({ message: "Le format url est requis." })
