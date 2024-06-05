import { ComponentProps, ReactElement } from "react"


type MainContent = {
    className?: ComponentProps<'div'>['className']
    children: ReactElement | ReactElement[]
}

export function MainContent(props: MainContent) {
    return (
        <div className="w-full h-fit p-3 flex justify-center items-center">
            <div className="w-full max-w-[1280px] flex flex-col justify-between items-start gap-3">
                {props.children}
            </div>
        </div>
    )
}
