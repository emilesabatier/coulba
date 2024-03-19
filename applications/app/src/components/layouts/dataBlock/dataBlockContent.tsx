import { ReactElement } from "react"


type DataBlockContent = {
    children: ReactElement | ReactElement[]
}

export function DataBlockContent(props: DataBlockContent) {
    return (
        <div className="w-full min-h-fit h-full p-4 bg-white rounded-sm">
            {
                !Array.isArray(props.children) ? props.children : (
                    <ol className="w-full flex flex-col justify-start items-start gap-4">
                        {
                            props.children.length === 0 ? (
                                <li className="p-2">
                                    <span className="text-neutral/50 italic">
                                        Aucun élément.
                                    </span>
                                </li>
                            ) : (
                                props.children.map((child, childIndex) => {
                                    return (
                                        <li key={childIndex} className="max-w-full">
                                            {child}
                                        </li>
                                    )
                                })
                            )

                        }
                    </ol>
                )
            }
        </div>
    )
}
