import { Hono } from 'hono'
import { signedUrlRoute } from './services/signedUrlRoute.route.js'


export const servicesRoute = new Hono()
    .route('/signed-url', signedUrlRoute)
