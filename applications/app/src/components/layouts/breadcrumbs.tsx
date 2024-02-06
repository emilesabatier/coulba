import { cn } from "@monassosportive/design/services"
import { IconSlash } from "@tabler/icons-react"
import { Link, useRouter } from "@tanstack/react-router"
import { Fragment, cloneElement } from "react"


export function PageHeader() {
    const router = useRouter()

    const breadcrumbs = router.state.matches
        .filter((match) => !!match.context?.label)
        .map((match) => {
            return {
                title: match.context.title,
                label: match.context.label,
                icon: match.context.icon,
                path: match.pathname,
            }
        })
    // breadcrumbs.unshift({
    //     title: "MonAssoSportive",
    //     label: "Accueil",
    //     icon: <OverviewIcon />,
    //     path: "/"
    // })

    return (
        <div className="w-fit flex flex-wrap justify-start items-center gap-4">
            {
                breadcrumbs.map((breadcrumb, index) => {
                    if (index < breadcrumbs.length - 1) return (
                        <Fragment>
                            <div
                                key={index.toString()}
                                className="flex justify-center items-center"
                            >
                                <Link
                                    to={breadcrumb.path}
                                    params={{}}
                                >
                                    <span className={cn(
                                        "text-xs hover:underline text-neutral/30"
                                    )}>
                                        {breadcrumb.label}
                                    </span>
                                </Link>
                            </div>
                            <IconSlash className="stroke-neutral/10" />
                        </Fragment>
                    )
                    return (
                        <div className="max-w-full flex justify-start items-center gap-1 overflow-hidden">
                            {!breadcrumb?.icon ? null : cloneElement(breadcrumb.icon, { size: 16, className: "stroke-neutral" })}
                            <h1 className="max-w-full text-base md:text-lg text-left text-neutral whitespace-nowrap overflow-hidden text-ellipsis">{breadcrumb?.label}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}
