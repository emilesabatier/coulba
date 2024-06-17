import { ButtonOutline } from "@coulba/design/buttons"
import { Logo } from "@coulba/design/layouts"
import { Link, Outlet } from "@tanstack/react-router"
import { router } from "../../routes/router"


export function UnauthLayout() {
    const currentRoute = router.state.matches.at(-1)

    return (
        <div id="unauth" className="min-w-full w-full max-w-full min-h-full h-full max-h-full overflow-hidden grid grid-cols-1 grid-rows-[64px_auto]">
            <div className="w-full border-b border-neutral/20 flex justify-center items-center">
                <div className="w-full max-w-[768px] h-full p-3 flex justify-between items-end gap-3">
                    <Link to="/" className="h-full w-fit flex justify-start items-center">
                        <Logo />
                    </Link>
                    <div className="flex justify-end items-center gap-1.5">
                        {
                            (router.state.location.pathname === "/inscription") ? null : (
                                <Link to="/inscription">
                                    <ButtonOutline
                                        text="Créer un compte"
                                    />
                                </Link>
                            )
                        }
                        {
                            (router.state.location.pathname === "/connexion") ? null : (
                                <Link to="/connexion">
                                    <ButtonOutline
                                        text="Se connecter"
                                    />
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-full max-w-[768px] h-full flex flex-col justify-center items-start p-3 gap-6">
                    <div>
                        <h1 className="text-3xl text-neutral/75">{currentRoute?.context.title}</h1>
                        <span className="text-neutral/50">{currentRoute?.context.description}</span>
                    </div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
