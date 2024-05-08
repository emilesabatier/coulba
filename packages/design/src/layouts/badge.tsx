import { cloneElement } from "react"


type Badge = {
    isDisplayed: boolean
    children: JSX.Element
}

export function Badge(props: Badge) {
    if (!props.isDisplayed) return props.children
    return (
        <div className="relative rounded-sm overflow-hidden pt-1.5">
            {cloneElement(props.children)}
            <div className="absolute z-10 -top-1 -right-1 w-3 h-3 rounded-[100%] bg-neutral" />
        </div>
    )
}
