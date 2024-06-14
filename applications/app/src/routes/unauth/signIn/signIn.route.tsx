import { Link, createRoute } from "@tanstack/react-router"
import { SignInForm } from "../../../components/signIn/signIn.form"
import { signInLayout } from "./signIn.layout"


export const signInRoute = createRoute({
    getParentRoute: () => signInLayout,
    beforeLoad: () => ({
        title: "Connexion",
        description: "Veuillez entrer vos informations de connexion"
    }),
    path: '/',
    component: () => {
        return (
            <div className="w-full flex flex-col justify-start items-start gap-6">
                <SignInForm />
                <Link
                    to="/connexion/identifiants"
                    className="underline hover:no-underline text-neutral/50"
                >
                    Mot de passe oublié ?
                </Link>
            </div>
        )
    }
})
