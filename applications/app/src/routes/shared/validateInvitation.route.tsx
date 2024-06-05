import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { createRoute, useSearch } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import { validateInvitation } from "../../services/api/shared/users/validateInvitation"
import { router } from "../router"
import { sharedLayout } from "./shared.layout"


export const validateInvitationRoute = createRoute({
    getParentRoute: () => sharedLayout,
    beforeLoad: () => ({
        title: "Validation invitation",
        description: undefined
    }),
    path: '/invitation',
    validateSearch: (search: Record<string, unknown>) => {
        return {
            id: String(search.id),
            token: String(search.token)
        }
    },
    component: () => {

        const search = useSearch({ from: validateInvitationRoute.id })

        useEffect(() => {
            validateInvitationFn()
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

        const [loading, setLoading] = useState(true)

        async function validateInvitationFn() {
            const response = await validateInvitation({
                body: {
                    id: search.id,
                    invitationToken: search.token
                }
            })
            if (!response) {
                setLoading(false)
                router.navigate({ to: "/" })
                return
            }

            toast({ title: "Invitation validée", description: "Veuillez vous connecter", variant: "success" })
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
