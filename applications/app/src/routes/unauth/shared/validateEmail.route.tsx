import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { Link, createRoute, useSearch } from "@tanstack/react-router"
import { useEffect, useState } from "react"
import { validateEmail } from "../../../services/api/shared/users/validateEmail"
import { sharedLayout } from "./shared.layout"


export const validateEmailRoute = createRoute({
    getParentRoute: () => sharedLayout,
    beforeLoad: () => ({
        title: "Validation de l'email",
        description: "Cette page permet de valider automatiquement votre email si les informations sont correctes"
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
        const [isLoading, setIsLoading] = useState(true)

        useEffect(() => {
            const timeoutId = setTimeout(async () => {
                await validateEmailFn()
            }, 250)
            return () => clearTimeout(timeoutId);
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

        async function validateEmailFn() {
            setIsLoading(true)

            const response = await validateEmail({
                body: {
                    id: search.id,
                    emailToken: search.token
                }
            })
            if (!response) {
                setIsLoading(false)
                // router.navigate({ to: "/" })
                return
            }

            toast({ title: "Email validé ", variant: "success" })
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
