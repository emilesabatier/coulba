import { IconChevronRight } from "@tabler/icons-react"
import { Link, useRouter } from "@tanstack/react-router"
import { Fragment, ReactElement } from "react"


type MainHeader = {
    children?: ReactElement
}

export function MainHeader(props: MainHeader) {
    const router = useRouter()

    const breadcrumbs = router.state.matches
        .filter((match) => !!match.context?.title)

    return (
        <div className="w-full h-fit p-3 flex justify-center items-center border-b border-neutral/10">
            <div className="w-full max-w-[1280px] flex justify-between items-start gap-3">
                <div className="flex justify-start items-center gap-1">
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
                </div>
                <div className="flex justify-end items-center gap-1.5">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
