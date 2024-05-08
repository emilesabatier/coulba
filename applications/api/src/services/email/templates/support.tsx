

type Support = {
    category: string
    date: string
    message: string
}

function Support(props: Support) {
    return (
        <html lang="fr">
            <body>
                <p><b>Category:</b> {props.category}</p>
                <p><b>Date:</b> {props.date}</p>
                <p><b>Message:</b> {props.message}</p>
            </body>
        </html>
    )
}

export function supportTemplate(props: Support) {
    return (<Support {...props} />).toString()
}
