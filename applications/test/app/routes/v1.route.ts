import router from "@adonisjs/core/services/router";


export const v1Route = router
    .group(() => {
        router.get("users", () => { console.log(1) })
    })
    .prefix("/v1")
