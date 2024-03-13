import { Hono } from 'hono'
import { companiesRoute } from './shared/companies.route'
import { sessionsRoute } from './shared/sessions.route'
import { usersRoute } from './shared/users.route'
import { contactRoute } from './shared/contact.route'


export const sharedRoute = new Hono()
    .route('/companies', companiesRoute)
    .route('/sessions', sessionsRoute)
    .route('/users', usersRoute)
    .route("/contact", contactRoute)
