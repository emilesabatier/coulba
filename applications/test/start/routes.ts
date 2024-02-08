/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { v1Route } from '../app/routes/v1.route.js'

router
    .group(() => {
        v1Route
    })
    .prefix("api")
