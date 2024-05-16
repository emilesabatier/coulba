import { MiddlewareHandler } from "hono"
import { HTTPException } from "hono/http-exception"


export const checkCurrentYear: MiddlewareHandler = async (c, next) => {

    if (c.var.currentYear.isClosed) throw new HTTPException(403, { message: "Current year is closed" })

    await next()
}
