import { ComponentProps } from "react"
import { FormatBase } from "../formatBase"
import { FormatNull } from "../null/formatNull"


type FormatRelativeDateTime = {
    isoDate: string | null
    className?: ComponentProps<'div'>['className']
}

export function FormatRelativeDateTime(props: FormatRelativeDateTime) {
    if (props.isoDate === null) return <FormatNull />
    if (String(new Date(props.isoDate)) === "Invalid Date") return <FormatNull />

    const date = new Date(props.isoDate)
    let day = String(date.getDate())
    let month = String(date.getMonth() + 1)
    let year = String(date.getFullYear())
    let hour = String(date.getHours())
    let minute = String(date.getMinutes())

    if (date.getDate() < 10) day = "0" + day
    if ((date.getMonth() + 1) < 10) month = "0" + month
    if ((date.getHours()) < 10) hour = "0" + hour
    if ((date.getMinutes()) < 10) minute = "0" + minute

    return (
        <FormatBase className={props.className}>
            <div className="flex justify-start items-end flex-wrap gap-1">
                <span className="">{`${[day, month, year].join('/')}`}</span>
                <span className="text-sm leading-none text-neutral/75">{`${[hour, minute].join(':')}`}</span>
            </div>
        </FormatBase>
    )
}
