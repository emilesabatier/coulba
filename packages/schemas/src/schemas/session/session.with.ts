import { userInclude } from "../user/user.include"


export const sessionWith = {
    user: {
        columns: userInclude
    }
} as const
