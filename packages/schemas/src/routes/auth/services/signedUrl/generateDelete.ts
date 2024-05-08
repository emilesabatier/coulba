import * as v from "valibot"


// Input
export const generateDeleteBody = v.object({
    storageKey: v.string()
})

// Output
export const generateDeleteReturn = v.object({
    url: v.string()
})
