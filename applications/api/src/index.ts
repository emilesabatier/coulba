import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { HTTPException } from 'hono/http-exception'
import { logger } from 'hono/logger'
import { env } from './env.js'
import { authRoute } from './routes/auth.route.js'
import { sharedRoute } from './routes/shared.route.js'
import { v1Route } from './routes/v1.route.js'


const app = new Hono()

app.use(logger())

// CORS
const corsConfig: Parameters<typeof cors>[0] = {
    origin: env()?.CORS_ORIGIN?.split(",") ?? "*",
    allowHeaders: ['Content-Type', 'Authorization', 'Cookie', 'Set-Cookie', 'Credentials'],
    allowMethods: ['POST', 'GET', 'OPTIONS', 'PUT', 'PATCH', 'DELETE', "UPDATE"],
    credentials: true
}
app.use('/auth/*', cors({
    ...corsConfig,
    credentials: true
}))
app.use('/shared/*', cors(corsConfig))


app.onError((error, c) => {
    console.log(error)
    if (error instanceof HTTPException) {
        if (error.status === 401) {
            // deleteCookie(c, "is_signed_in", {
            //     maxAge: 0,
            //     domain: env()?.COOKIES_DOMAIN
            // })
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
    port: port
})
