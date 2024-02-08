import router from '@adonisjs/core/services/router'


export const userRoute = router
    .group(() => {
        router.post("", (context) => {
            console.log(context.request.body())
            return context.response.status(200).send({
                message: "ok"
            })
        }).as("create")
    })
    .prefix("user")
    .as("user")
