import { ReactElement } from "react"


type FormBlock = {
    children: ReactElement | ReactElement[]
}

export function FormBlock(props: FormBlock) {
    return (
        <div className="flex flex-col justify-start items-stretch gap-2">
            {props.children}
        </div>
    )
}
