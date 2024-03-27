import { serve } from '@hono/node-server'
import { readFileSync } from 'fs'
import { Hono } from 'hono'
import { deleteCookie } from 'hono/cookie'
import { cors } from 'hono/cors'
import { HTTPException } from 'hono/http-exception'
import { logger } from 'hono/logger'
import { createServer } from 'node:https'
import { env } from './env'
import { authRoute } from './routes/auth.route'
import { sharedRoute } from './routes/shared.route'
import { v1Route } from './routes/v1.route'


const app = new Hono()

app.use(logger())

// CORS
const corsConfig: Parameters<typeof cors>[0] = {
    origin: env()?.APP_BASE_URL ?? "",
    allowHeaders: ['Content-Type', 'Authorization', 'Cookie', 'Set-Cookie', 'Credentials'],
    allowMethods: ['POST', 'GET', 'OPTIONS', 'PUT', 'PATCH', 'DELETE', "UPDATE"],
    credentials: true
}
app.use('/auth/*', cors(corsConfig))
app.use('/shared/*', cors(corsConfig))


app.onError((error, c) => {
    if (env()?.ENV !== "production") console.log(error)
    if (error instanceof HTTPException) {
        if (error.status === 401) {
            deleteCookie(c, "is_signed_in", {
                maxAge: 0,
                domain: env()?.COOKIES_DOMAIN
            })
            return c.text("Erreur interne", 401)
        }
        return error.getResponse()
    }
    return c.text("Erreur interne", 500)
})

app.route('/shared', sharedRoute)
app.route('/auth', authRoute)
app.route('/v1', v1Route)

const port = Number(env()?.PORT)
if (!port) throw new Error("Port is undefined")

console.log(`Server is running on port ${port}`)

serve({
    fetch: app.fetch,
    createServer: createServer,
    port: port,
    serverOptions: {
        key: readFileSync('../../.cert/localhost-key.pem'),
        cert: readFileSync('../../.cert/localhost.pem')
    }
})
