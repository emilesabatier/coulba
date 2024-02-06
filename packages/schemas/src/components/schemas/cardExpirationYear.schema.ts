import z from "zod"

export const cardExpirationYearSchema = z
    .string({ invalid_type_error: "Format invalide.", required_error: "Le champ est requis." })
    .regex(/^(?:19|20|21)\d{2}$/, { message: "Format requis: 1900 ou 2050." })
