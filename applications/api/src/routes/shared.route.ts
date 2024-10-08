import { Hono } from 'hono'
import { organizationsRoute } from './shared/organizations.route.js'
import { sessionsRoute } from './shared/sessions.route.js'
import { usersRoute } from './shared/users.route.js'


export const sharedRoute = new Hono()
    .route('/organizations', organizationsRoute)
    .route('/sessions', sessionsRoute)
    .route('/users', usersRoute)
