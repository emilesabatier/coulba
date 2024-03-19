

type DataBlockHeader = {
    title: string
}

export function DataBlockHeader(props: DataBlockHeader) {
    return (
        <div className="flex justify-start items-center overflow-hidden">
            <span className="uppercase text-neutral/50 text-sm">{props.title}</span>
        </div>
    )
}
