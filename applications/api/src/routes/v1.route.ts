import { Hono } from 'hono'
import { checkApiKey } from '../middlewares/checkApiKey.js'
import { attachmentsRoute } from './v1/attachments.route.js'
import { recordsRoute } from './v1/records.route.js'


export const v1Route = new Hono()
    .use("/*", checkApiKey)
    .route('/attachments', attachmentsRoute)
    .route('/records', recordsRoute)
