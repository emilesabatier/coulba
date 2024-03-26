import { Hono } from 'hono'
import { checkApiKey } from '../middlewares/checkApiKey'
import { attachmentsRoute } from './v1/attachments.route'
import { transactionsRoute } from './v1/transactions.route'


export const v1Route = new Hono()
    .use("/*", checkApiKey)
    .route('/attachments', attachmentsRoute)
    .route('/transactions', transactionsRoute)
