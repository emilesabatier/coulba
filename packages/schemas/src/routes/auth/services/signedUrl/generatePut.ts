import * as v from "valibot"


// Input
export const generatePutBody = v.object({
    contentType: v.string(),
    size: v.number()
})

// Output
export const generatePutReturn = v.object({
    url: v.string(),
    key: v.string()
})
