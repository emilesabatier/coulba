import * as v from "valibot"

export const fileSchema = v.instance(File, [
    v.maxSize(10 * (10 ** 6), 'Le fichier ne doit pas dépasser 10 Mo'),
])
