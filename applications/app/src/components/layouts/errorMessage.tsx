

type ErrorMessage = {
    message?: string
}

export function ErrorMessage(props: ErrorMessage) {
    return (
        <span className="w-fit max-w-full text-error p-2 bg-error/5 leading-none">
            {props.message}
        </span>
    )
}
