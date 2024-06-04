import { Hono } from 'hono'
import { checkApiKey } from '../middlewares/checkApiKey.js'
import { attachmentsRoute } from './v1/attachments.route.js'
import { rowsRoute } from './v1/rows.route.js'


export const v1Route = new Hono()
    .use("/*", checkApiKey)
    .route('/attachments', attachmentsRoute)
    .route('/rows', rowsRoute)
