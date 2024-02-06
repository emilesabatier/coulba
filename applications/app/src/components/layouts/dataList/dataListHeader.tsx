

type DataListHeader = {
    title: string
    length: number
}

export function DataListHeader(props: DataListHeader) {
    return (
        <div className="w-full flex justify-between items-end gap-2 md:gap-4 overflow-hidden shrink-0">
            <span className="max-w-full uppercase text-neutral/50 text-sm whitespace-nowrap overflow-hidden text-ellipsis">{props.title}</span>
            <div className="inline-flex justify-end items-center gap-1">
                <span className="font-bold text-sm">{props.length}</span>
                <span className="text-neutral/50 text-sm">éléments</span>
            </div>
        </div>
    )
}
