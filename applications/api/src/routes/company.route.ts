import CompanyController from '#controllers/company.controller'
import router from '@adonisjs/core/services/router'


export const companyRoute = router
    .group(() => {
        router.post("/", [CompanyController, 'create']).as("create")
    })
    .prefix("company")
    .as("company")
