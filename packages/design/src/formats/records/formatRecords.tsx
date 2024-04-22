import { ComponentProps, ReactNode, useMemo, useState } from "react"
import { FormatBase, FormatNull } from ".."
import { Button } from "../../buttons"


type FormatRecords<T> = {
    format: (record: T) => ReactNode
    records: (T | undefined | null)[]
    className?: ComponentProps<'div'>['className']
}

export function FormatRecords<T>(props: FormatRecords<T>) {
    let defaultLimit = 5
    let isLongEnough = props.records.length > defaultLimit
    const [indexLimit, setIndexLimit] = useState(isLongEnough ? defaultLimit : undefined)

    let recordsToDisplay = useMemo(() => props.records.flatMap(y => !!y ? [y] : []).slice(0, indexLimit), [props.records, indexLimit])

    if (!recordsToDisplay) return <FormatNull />
    if (recordsToDisplay.length === 0) return <FormatNull />
    return (
        <FormatBase className={props.className}>
            <div className="w-full flex flex-row justify-center items-center">
                <ol className="w-full flex flex-col justify-start items-stretch gap-1">
                    {
                        recordsToDisplay.map((record, index) => {
                            return (
                                <li
                                    key={index}
                                    className="w-full flex flex-row justify-start items-center"
                                >
                                    {props.format(record)}
                                </li>
                            )
                        })
                    }
                    {!isLongEnough ? null :
                        <li
                            className="w-full flex flex-row justify-start items-center"
                        >
                            <Button
                                onClick={() => setIndexLimit(props.records.length !== recordsToDisplay.length ? props.records.length : defaultLimit)}
                                className="mt-2"
                            >
                                <span className="overflow-hidden hover:underline text-neutral">{(props.records.length !== recordsToDisplay.length) ? "Afficher plus" : "Afficher moins"}</span>
                            </Button>
                        </li>
                    }
                </ol>
            </div>
        </FormatBase>
    )
}
