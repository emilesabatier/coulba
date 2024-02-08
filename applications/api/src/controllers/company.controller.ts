import { db } from '#config/db'
import { HttpContext } from '@adonisjs/core/http'
import { companies } from '@coulba/schemas/models'
import { generateId } from "@coulba/schemas/services"


export default class CompanyController {
    async create(context: HttpContext) {

        const newCompany = {
            id: generateId(),
            siren: "123123123",
            name: "test"
        }

        await db.insert(companies).values(newCompany).returning()

        return context.response.status(200)
    }
}
