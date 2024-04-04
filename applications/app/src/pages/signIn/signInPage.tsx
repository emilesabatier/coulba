import { Logo } from "@coulba/design/layouts"
import { IconArrowRight, IconExternalLink } from "@tabler/icons-react"
import { Link } from "@tanstack/react-router"
import { useEffect } from "react"
import { SignInForm } from "../../components/signIn/signIn.form"


export function SignInPage() {

    useEffect(() => { document.title = "Connexion | Coulba" }, [])

    return (
        <div id="signin" className="w-full h-full grid grid-cols-2">
            <div className="w-full bg-white border-y flex justify-center items-center border-r border-neutral/20">
                <div className="min-w-[300px] w-full max-w-[50%] flex justify-center items-center">
                    <div className="flex flex-col justify-start items-start gap-8">
                        <Logo />
                        <SignInForm />
                        <Link
                            to="/connexion/identifiants"
                            className="underline hover:no-underline text-neutral/50"
                        >
                            Mot de passe oublié ?
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-background flex justify-center items-center">
                <div className="min-w-[300px] w-full max-w-[50%] flex flex-col justify-center items-center gap-2">
                    <div className="w-full bg-white rounded-md p-4 border border-neutral/20 flex flex-col justify-start items-start gap-4">
                        <div className="flex flex-col justify-start items-start">
                            <h2 className="text-2xl">Création d'un compte</h2>
                            <p className="text-neutral/75">Accès à la version beta</p>
                        </div>
                        <Link
                            to="/inscription"
                            className="cursor-pointer ml-auto flex justify-center items-center gap-2 group rounded-md p-2 border border-dashed border-neutral/20 hover:bg-neutral/5"
                        >
                            <span className="p-0">Créer un compte</span>
                            <IconArrowRight size={16} />
                        </Link>
                    </div>
                    <div className="w-full bg-white rounded-md p-4 border border-neutral/20 flex flex-col justify-start items-start gap-4">
                        <div className="flex flex-col justify-start items-start">
                            <h2 className="text-2xl">Documentation</h2>
                            <p className="text-neutral/75">Collaborative et open source</p>
                        </div>
                        <a
                            href="https://documentation.coulba.fr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer ml-auto flex justify-center items-center gap-2 group rounded-md p-2 border border-dashed border-neutral/20 hover:bg-neutral/5"
                        >
                            <span className="p-0">Consulter la documentation</span>
                            <IconExternalLink size={16} />
                        </a>
                    </div>
                    <div className="w-full bg-white rounded-md p-4 border border-neutral/20 flex flex-col justify-start items-start gap-4">
                        <div className="flex flex-col justify-start items-start">
                            <h2 className="text-2xl">Site internet</h2>
                            <p className="text-neutral/75">La page de présentation de l'application</p>
                        </div>
                        <a
                            href={import.meta.env.VITE_PUBLIC_WEBSITE_BASE}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer ml-auto flex justify-center items-center gap-2 group rounded-md p-2 border border-dashed border-neutral/20 hover:bg-neutral/5"
                        >
                            <span className="p-0">Se rendre sur le site</span>
                            <IconExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
