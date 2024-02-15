import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { HTTPException } from 'hono/http-exception'
import { logger } from 'hono/logger'
import { env } from './env'
import { authRoute } from './routes/auth.route'
import { sharedRoute } from './routes/shared.route'
import { v1Route } from './routes/v1.route'


const app = new Hono()

app.use(logger())
app.onError((error, c) => {
    if (error instanceof HTTPException) {
        return error.getResponse()
    }
    if (env()?.ENV !== "production") console.log(error)
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
    port
})
