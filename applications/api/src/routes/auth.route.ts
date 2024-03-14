import { Hono } from 'hono'
import { checkAuth } from '../middlewares/checkAuth'
import { accountsRoute } from './auth/accounts.route'
import { attachmentsRoute } from './auth/attachments.route'
import { companiesRoute } from './auth/companies.route'
import { journalsRoute } from './auth/journals.route'
import { recordsRoute } from './auth/records.route'
import { transactionsRoute } from './auth/transactions.route'
import { usersRoute } from './auth/users.route'
import { yearsRoute, yearsRoute } from './auth/years.route'


export const authRoute = new Hono()
    .use("/*", checkAuth)
    .route('/attachments', attachmentsRoute)
    .route('/companies', companiesRoute)
    .route('/users', usersRoute)
    .route('/records', recordsRoute)
    .route('/transactions', transactionsRoute)
    .route('/accounts', accountsRoute)
    .route('/years', yearsRoute)
    .route('/journals', journalsRoute)
