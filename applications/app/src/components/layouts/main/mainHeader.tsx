import { ReactElement } from "react"


type MainHeader = {
    title: string
    description?: string
    children?: ReactElement
}

export function MainHeader(props: MainHeader) {
    return (
        <div className="w-full h-full flex justify-between items-START flex-wrap gap-2 md:gap-4">
            <div className="flex flex-col justify-start items-start">
                <h1 className="text-2xl">{props.title}</h1>
                {!props.description ? null : (
                    <p className="text-neutral/50 max-w-[768px]">{props.description}</p>
                )}
            </div>
            {props.children}
        </div>
    )
}
