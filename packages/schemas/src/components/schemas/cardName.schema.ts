import z from "zod"

export const cardNameSchema = z
    .string({ invalid_type_error: "Format invalide.", required_error: "Le champ est requis." })
    .min(4, { message: "Trop court (min. 4)" })
    .max(64, { message: "Trop long (max. 64)" })
