import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { Link, createRoute, useSearch } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import { validateInvitation } from "../../../services/api/shared/users/validateInvitation"
import { sharedLayout } from "./shared.layout"


export const validateInvitationRoute = createRoute({
    getParentRoute: () => sharedLayout,
    beforeLoad: () => ({
        title: "Validation de l'invitation",
        description: "Cette page permet de valider automatiquement votre invitation si les informations sont correctes"
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
        const [isLoading, setIsLoading] = useState(true)

        useEffect(() => {
            const timeoutId = setTimeout(async () => {
                await validateInvitationFn()
            }, 250)
            return () => clearTimeout(timeoutId);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

        async function validateInvitationFn() {
            setIsLoading(true)

            const response = await validateInvitation({
                body: {
                    id: search.id,
                    invitationToken: search.token
                }
            })

            if (!response) {
                setIsLoading(false)
                // router.navigate({ to: "/" })
                return
            }

            toast({ title: "Invitation validée", description: "Veuillez vous connecter", variant: "success" })
            setIsLoading(false)
            // router.navigate({ to: "/" })
        }

        if (isLoading) return <CircularLoader />
        return (
            <div>
                <span>
                    Vous pouvez fermer la page en&nbsp;
                </span>
                <Link
                    to="/"
                    className="underline hover:no-underline"
                >
                    <span>cliquant ici</span>
                </Link>
                .
            </div>
        )
    }
})
