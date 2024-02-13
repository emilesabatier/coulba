import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { env } from './env'
import { v1Route } from './routes/v1.route'


const app = new Hono()

app.route('/v1', v1Route)

const port = Number(env()?.PORT)
if (!port) throw new Error("Port is undefined")

console.log(`Server is running on port ${port}`)

serve({
    fetch: app.fetch,
    port
})
