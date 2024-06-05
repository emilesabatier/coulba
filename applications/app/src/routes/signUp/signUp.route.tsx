import { CircularLoader, Logo } from "@coulba/design/layouts"
import { createRoute, redirect } from "@tanstack/react-router"
import { rootLayout } from "../root.layout"
import { SignUpForm } from "../../components/signUp/signUp.form"


export const signUpRoute = createRoute({
    getParentRoute: () => rootLayout,
    beforeLoad: async ({ context }) => {
        if (context.session && context.session.isSignedIn) {
            throw redirect({
                to: '/'
            })
        }
        return ({
            title: "Inscription",
            description: undefined
        })
    },
    path: '/inscription',
    pendingComponent: () => <CircularLoader />,
    component: () => {
        return (
            <div id="signup" className="w-full h-full grid">
                <div className="bg-white flex justify-center items-center border-r border-neutral/20">
                    <div className="min-w-[300px] w-full max-w-[50%] flex justify-center items-center">
                        <div className="w-full flex flex-col justify-start items-start gap-8 p-3">
                            <Logo />
                            <SignUpForm />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
})
