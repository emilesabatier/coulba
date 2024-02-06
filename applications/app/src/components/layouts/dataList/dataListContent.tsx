import { ReactElement } from "react"


type DataListContent = {
    children: ReactElement | ReactElement[]
}

export function DataListContent(props: DataListContent) {
    return (
        <div className="w-full h-full max-h-full overflow-auto bg-white rounded-md">
            <div className="h-fit">
                {
                    Array.isArray(props.children) ? (
                        <ol className="w-full flex flex-col justify-start items-start">
                            {
                                props.children.length === 0 ? (
                                    <li className="p-2">
                                        <span className="text-neutral/50 italic">
                                            Aucun élément.
                                        </span>
                                    </li>
                                ) : (
                                    props.children.map((child) => {
                                        return (
                                            <li key={child.key} className="w-full border-b last:border-b-0 border-neutral/5">
                                                {child}
                                            </li>
                                        )
                                    })
                                )

                            }
                        </ol>

                    ) : (
                        props.children
                    )
                }
            </div>
        </div>
    )
}
