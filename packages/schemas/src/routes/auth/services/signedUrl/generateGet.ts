import * as v from "valibot"


// Input
export const generateGetBody = v.object({
    storageKey: v.string()
})

// Output
export const generateGetReturn = v.object({
    url: v.string()
})
