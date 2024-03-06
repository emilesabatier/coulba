import { Hono } from 'hono'
import { checkAuth } from '../middlewares/checkAuth'
import { attachmentsRoute } from './auth/attachments.route'
import { companiesRoute } from './auth/companies.route'
import { recordsRoute } from './auth/records.route'
import { usersRoute } from './auth/users.route'


export const authRoute = new Hono()
    .use("/*", checkAuth)
    .route('/attachments', attachmentsRoute)
    .route('/companies', companiesRoute)
    .route('/users', usersRoute)
    .route('/records', recordsRoute)
