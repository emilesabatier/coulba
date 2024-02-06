import z from "zod"

export const cardNumberSchema = z
    .string({ invalid_type_error: "Format invalide.", required_error: "Le champ est requis." })
    .regex(/^[0-9]/, { message: "Seulement des chiffres doivent être renseignés." })
    .length(16, { message: "La longueur doit être de 16." })
