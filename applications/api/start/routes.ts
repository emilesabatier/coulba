/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/
import { companyRoute } from '#routes/company.route'
import { userRoute } from '#routes/user.route'
import router from '@adonisjs/core/services/router'

router
    .group(() => {
        companyRoute
        userRoute
    })
    .prefix("app")
    .as("app")
