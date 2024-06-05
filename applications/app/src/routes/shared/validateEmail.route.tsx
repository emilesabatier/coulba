import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { createRoute, useSearch } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import { validateEmail } from "../../services/api/shared/users/validateEmail"
import { router } from "../router"
import { sharedLayout } from "./shared.layout"


export const validateEmailRoute = createRoute({
    getParentRoute: () => sharedLayout,
    beforeLoad: () => ({
        title: "Validation email",
        description: undefined
    }),
    path: '/email',
    validateSearch: (search: Record<string, unknown>) => {
        return {
            id: String(search.id),
            token: String(search.token)
        }
    },
    component: () => {

        const search = useSearch({ from: validateEmailRoute.id })

        useEffect(() => {
            validateEmailFn()
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

        const [loading, setLoading] = useState(true)

        async function validateEmailFn() {
            const response = await validateEmail({
                body: {
                    id: search.id,
                    emailToken: search.token
                }
            })
            if (!response) {
                setLoading(false)
                router.navigate({ to: "/" })
                return
            }

            toast({ title: "Email validé ", variant: "success" })
            setLoading(false)
            router.navigate({ to: "/" })
        }

        return (
            <div className="w-full h-full flex justify-center items-center">
                {loading ?? <CircularLoader />}
            </div>
        )
    }
})
