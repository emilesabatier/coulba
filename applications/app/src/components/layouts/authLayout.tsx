import { ButtonGhost, ButtonMenu, ButtonMenuContent } from "@coulba/design/buttons"
import { CircularLoader, Logo } from "@coulba/design/layouts"
import { PopoverMenu } from "@coulba/design/overlays"
import { IconChevronRight, IconExternalLink, IconLifebuoy, IconLogout2, IconSettings, IconUser } from "@tabler/icons-react"
import { Link, Outlet, useRouter } from "@tanstack/react-router"
import { Fragment } from "react/jsx-runtime"
import { useSession } from "../../contexts/session/useSession"
import { signOut } from "../../services/api/shared/sessions/signOut"
import { deleteCookies } from "../../services/deleteCookies"
import { DisplayVersion } from "./navigation/displayVersion"
import { Navigation } from "./navigation/navigation"


export function AuthLayout() {
    const session = useSession()
    const router = useRouter()
    // const currentRoute = router.state.matches.at(-1)

    const breadcrumbs = router.state.matches
        .filter((match) => !!match.context?.title)

    if (session.isLoading) return (
        <div id="loading" className="min-w-full w-full max-w-full min-h-full h-full max-h-full overflow-hidden flex justify-center items-center">
            <CircularLoader />
        </div>
    )
    return (
        <div id="auth" className="min-w-full w-full max-w-full min-h-full h-full max-h-full overflow-hidden grid grid-cols-[max-content_auto] grid-rows-[64px_auto]">
            <div className="col-start-1 col-end-1 row-start-1 row-end-1 h-full p-3 border-b border-r border-neutral/20 flex justify-between items-end gap-3">
                <Link to="/" className="flex w-fit max-w-fit">
                    <Logo />
                </Link>
                <DisplayVersion />
            </div>
            <div className="col-start-2 col-end-2 row-start-1 row-end-1 w-full h-full p-3 grid grid-cols-[auto_max-content] gap-3 border-b border-neutral/20 overflow-y-hidden overflow-x-auto">
                <div className="w-full flex justify-start items-end">
                    <div className="w-full flex justify-start items-center">
                        {
                            breadcrumbs.map((breadcrumb, index) => (
                                <Fragment key={breadcrumb.id}>
                                    {index === 0 ? null : (
                                        <IconChevronRight className="stroke-neutral/50" size={18} shapeRendering="geometricPrecision" />
                                    )}
                                    {
                                        index < breadcrumbs.length - 1 ? (
                                            <Link to={breadcrumb.pathname}>
                                                <span className="text-xl text-neutral/50 hover:underline whitespace-nowrap">{breadcrumb.context.title}</span>
                                            </Link>
                                        ) : (
                                            <span className="text-xl">{breadcrumb.context.title}</span>
                                        )
                                    }
                                </Fragment>
                            ))
                        }
                        {/* <h1 className="text-2xl">{currentRoute?.context.title}</h1> */}
                        {/* {!props.description ? null : (
                    <p className="text-neutral/50 max-w-[768px]">{props.description}</p>
                )} */}
                    </div>
                </div>
                <div className="w-fit">
                    <PopoverMenu
                        triggerElement={
                            <ButtonGhost
                                icon={<IconUser />}
                                className="w-full"
                            />
                        }
                        align="end"
                    >
                        <Link to="/profil">
                            <ButtonMenuContent
                                icon={<IconSettings />}
                                text="Paramètres & sécurité"
                            />
                        </Link>
                        <Link to="/support">
                            <ButtonMenuContent
                                icon={<IconLifebuoy />}
                                text="Contacter le support"
                            />
                        </Link>
                        {/* <a
                            href="https://documentation.coulba.fr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                            aria-label="Accès à la documentation"
                        >
                            <ButtonMenuContent
                                icon={<IconBook />}
                                text="Documentation"
                            />
                        </a> */}
                        <a
                            href={import.meta.env.VITE_PUBLIC_WEBSITE_BASE}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer"
                            aria-label="Adresse du site internet"
                        >
                            <ButtonMenuContent
                                icon={<IconExternalLink />}
                                text="Site internet"
                            />
                        </a>
                        {/* <CreateTicket>
                        <ButtonMenu
                            text="Contacter le support"
                            icon={<IconMessageQuestion />}
                        />
                    </CreateTicket> */}
                        <ButtonMenu
                            text="Se déconnecter"
                            icon={<IconLogout2 />}
                            color="error"
                            onClick={async () => {
                                await signOut()

                                deleteCookies()
                                await session.mutate()
                                // toast({ title: "Déconnexion réussie", variant: "success" })
                                // router.navigate({ to: "/connexion" })
                                window.location.reload()
                            }}
                        />
                    </PopoverMenu>
                </div>
            </div>
            <div className="col-start-1 col-end-1 row-start-2 row-end-2 h-full border-r border-neutral/20 p-3">
                <Navigation />
            </div>
            <div className="col-start-2 col-end-2 row-start-2 row-end-2 w-full max-w-full min-h-full h-full max-h-full overflow-y-auto overflow-x-hidden">
                <Outlet />
            </div>
        </div>
    )
}
