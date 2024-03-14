

type MainHeader = {
    title: string
    description?: string
}

export function MainHeader(props: MainHeader) {
    return (
        <div
            className="flex flex-col justify-start items-start gap-2"
        >
            <span className="text-3xl leading-none">{props.title}</span>
            {!props.description ? null : <span className="text-neutral/50 max-w-md">{props.description}</span>}
        </div>
    )
}
