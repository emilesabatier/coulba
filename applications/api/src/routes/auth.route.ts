import { Hono } from 'hono'
import { checkAuth } from '../middlewares/checkAuth.js'
import { accountsRoute } from './auth/accounts.route.js'
import { attachmentsRoute } from './auth/attachments.route.js'
import { companiesRoute } from './auth/companies.route.js'
import { journalsRoute } from './auth/journals.route.js'
import { profileRoute } from './auth/profile.route.js'
import { recordsRoute } from './auth/records.route.js'
import { servicesRoute } from './auth/services.route.js'
import { sheetsRoute } from './auth/sheets.route.js'
import { statementsRoute } from './auth/statements.route.js'
import { transactionsRoute } from './auth/transactions.route.js'
import { usersRoute } from './auth/users.route.js'
import { yearsRoute } from './auth/years.route.js'


export const authRoute = new Hono()
    .use("/*", checkAuth)
    .route('/attachments', attachmentsRoute)
    .route('/companies', companiesRoute)
    .route('/users', usersRoute)
    .route('/records', recordsRoute)
    .route('/transactions', transactionsRoute)
    .route('/accounts', accountsRoute)
    .route('/sheets', sheetsRoute)
    .route('/statements', statementsRoute)
    .route('/years', yearsRoute)
    .route('/journals', journalsRoute)
    .route('/services', servicesRoute)
    .route('/profile', profileRoute)
