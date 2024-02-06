import { userInclude } from "../user/user.include.js"


export const sessionWith = {
    user: {
        columns: userInclude
    }
} as const
