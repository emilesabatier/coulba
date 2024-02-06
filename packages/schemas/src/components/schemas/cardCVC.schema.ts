import z from "zod"

export const cardCVCSchema = z
    .string({ invalid_type_error: "Format invalide.", required_error: "Le champ est requis." })
    .regex(/^\d{3}$/, { message: "Format requis: 000 ou 999." })
