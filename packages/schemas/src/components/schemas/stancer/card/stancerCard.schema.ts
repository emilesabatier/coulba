import { z } from "zod"
import { cardCVCSchema } from "../../cardCVC.schema"
import { cardNumberSchema } from "../../cardNumber.schema"


export const stancerCardSchema = z.object({
    id: z.string().length(29),
    number: cardNumberSchema,
    last4: z.string().length(4),
    brand: z.string(),
    exp_month: z
        .number({ invalid_type_error: "Format invalide.", required_error: "Le champ est requis." })
        .int({ message: "Doit être un nombre entier." })
        .min(1, { message: "Le numéro du mois doit être supérieur ou égal à 1." })
        .max(12, { message: "Le numéro du mois doit être inférieur ou égal à 12." }),
    exp_year: z
        .number({ invalid_type_error: "Format invalide.", required_error: "Le champ est requis." })
        .int({ message: "Doit être un nombre entier." })
        .min((new Date()).getFullYear(), { message: "L'année doit être au moins égale à l'année actuelle." })
        .max(2100, { message: "L'année est trop élevée." }),
    cvc: cardCVCSchema,
    name: z
        .string({ invalid_type_error: "Format invalide.", required_error: "Le champ est requis." })
        .min(4, { message: "Trop court (min. 4)" })
        .max(64, { message: "Trop long (max. 64)" })
    ,
    funding: z.enum(["credit", "debit", "prepaid", "universal", "charge", "deferred"]),
    nature: z.enum(["personal", "personnal", "corporate"]),
    network: z.enum(["national", "mastercard", "visa"]),
    zip_code: z
        .string()
        .min(2, { message: "Trop court (min. 2)" })
        .max(8, { message: "Trop long (max. 8)" })
    ,
    tokenize: z.boolean(),
    created: z.number().int().min(0),
    live_mode: z.boolean(),
    country: z.string(),
    external_id: z.string().min(1).max(36),
})
