import { Hono } from 'hono'
import { signedUrlRoute } from './services/signedUrlRoute.route'


export const servicesRoute = new Hono()
    .route('/signed-url', signedUrlRoute)
