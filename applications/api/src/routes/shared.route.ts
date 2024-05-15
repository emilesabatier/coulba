import { Hono } from 'hono'
import { companiesRoute } from './shared/companies.route.js'
import { sessionsRoute } from './shared/sessions.route.js'
import { usersRoute } from './shared/users.route.js'


export const sharedRoute = new Hono()
    .route('/companies', companiesRoute)
    .route('/sessions', sessionsRoute)
    .route('/users', usersRoute)
