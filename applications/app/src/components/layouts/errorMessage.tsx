

type ErrorMessage = {
    message?: string
}

export function ErrorMessage(props: ErrorMessage) {
    return (
        <span className="w-full max-w-full text-error p-3 bg-error/5 leading-none flex justify-start items-center">
            {props.message}
        </span>
    )
}
