import { shared } from '@coulba/schemas/routes'
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { bodyValidator } from '../../middlewares/bodyValidator.js'


export const contactRoute = new Hono()
    .patch(
        '/send-message',
        validator("json", bodyValidator(shared.contact.patch.sendMessage.body)),
        async (c) => {
            const body = c.req.valid('json')

            console.log(body.message)

            return c.json({}, 200)
        }
    )
