import { Hono } from 'hono'
import { companiesRoute } from './companies.route'


export const v1Route = new Hono()
    .route('/companies', companiesRoute)
