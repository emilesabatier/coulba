import { ReactElement } from "react"


type Title = {
    title: string
    description: string
    children?: ReactElement
}

export function Title(props: Title) {
    return (
        <div className="w-full flex justify-between items-stretch gap-4">
            <div className="flex flex-col justify-start items-start">
                <h2 className="text-2xl">{props.title}</h2>
                <p className="max-w-[768px] text-sm text-neutral/50">{props.description}</p>
            </div>
            <div className="flex justify-end items-end">
                {props.children}
            </div>
        </div>
    )
}
