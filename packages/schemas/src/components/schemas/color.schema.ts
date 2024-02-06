import z from "zod"
export const colorSchema = z.string({ invalid_type_error: "Format invalide.", required_error: "Le champe est requis." }).trim().toLowerCase().length(7).regex(/^#/, { message: "Un format hexadécimal est requis." })
