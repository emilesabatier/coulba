import z from "zod"

export const cardExpirationMonthSchema = z
    .string({ invalid_type_error: "Format invalide.", required_error: "Le champ est requis." })
    .regex(/^(0[1-9]|1[012])$/, { message: "Format requis: 01 ou 12." })
