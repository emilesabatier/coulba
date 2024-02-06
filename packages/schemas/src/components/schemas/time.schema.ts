import z from "zod"

export const timeSchema = z
    .string({ invalid_type_error: "Format invalide.", required_error: "Le champ est requis." })
    .trim()
    .transform((val) => val.replaceAll(" ", ""))
    .pipe(z
        .string()
        .regex(/^(0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])?$/, { message: "L'horaire saisi est invalide." })
    )
