import { ButtonGhost, ButtonMenu, ButtonMenuContent } from "@coulba/design/buttons"
import { CircularLoader, Logo } from "@coulba/design/layouts"
import { PopoverMenu } from "@coulba/design/overlays"
import { IconBook, IconChevronRight, IconExternalLink, IconLifebuoy, IconLogout2, IconSettings, IconUser } from "@tabler/icons-react"
import { Link, Outlet, useRouter } from "@tanstack/react-router"
import { Fragment } from "react/jsx-runtime"
import { DisplayVersion } from "../../components/layouts/navigation/displayVersion"
import { Navigation } from "../../components/layouts/navigation/navigation"
import { useSession } from "../../contexts/session/useSession"


export function AppLayout() {
    const session = useSession()
    const router = useRouter()
    // const currentRoute = router.state.matches.at(-1)

    const breadcrumbs = router.state.matches
        .filter((match) => !!match.context?.title)

    if (session.isLoading) return (
        <div id="loading" className="min-w-full w-full max-w-full min-h-full h-full max-h-full overflow-hidden">
            <CircularLoader />
        </div>
    )
    return (
        <div id="app" className="min-w-full w-full max-w-full min-h-full h-full max-h-full overflow-hidden grid grid-cols-[max-content_auto] grid-rows-[64px_auto]">
            <div className="col-start-1 col-end-1 row-start-1 row-end-1 w-full h-full p-3 border-b border-r border-neutral/20 flex justify-between items-end">
                <Link to="/" className="h-full flex justify-center items-center">
                    <Logo />
                </Link>
                <DisplayVersion />
            </div>
            <div className="col-start-2 col-end-2 row-start-1 row-end-1 w-full h-full p-3 grid grid-cols-[auto_max-content] border-b border-neutral/20">
                <div className="w-full flex justify-start items-end">
                    {
                        breadcrumbs.map((breadcrumb, index) => (
                            <Fragment key={breadcrumb.id}>
                                {index === 0 ? null : (
                                    <IconChevronRight className="text-neutral/50" />
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
                        <a href="https://documentation.coulba.fr" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                            <ButtonMenuContent
                                icon={<IconBook />}
                                text="Documentation"
                            />
                        </a>
                        <a href={import.meta.env.VITE_PUBLIC_WEBSITE_BASE} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
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
                            onClick={async () => await session.signOut()}
                        />
                    </PopoverMenu>
                </div>
            </div>
            <div className="col-start-1 col-end-1 row-start-2 row-end-2 w-full h-full border-r border-neutral/20">
                <Navigation />
            </div>
            <div className="col-start-2 col-end-2 row-start-2 row-end-2 w-full max-w-full min-h-full h-full max-h-full overflow-auto">
                <Outlet />
            </div>
        </div>
    )
}
