import { Hono } from 'hono'
import { checkApiKey } from '../middlewares/checkApiKey.js'
import { attachmentsRoute } from './v1/attachments.route.js'
import { transactionsRoute } from './v1/transactions.route.js'


export const v1Route = new Hono()
    .use("/*", checkApiKey)
    .route('/attachments', attachmentsRoute)
    .route('/transactions', transactionsRoute)
