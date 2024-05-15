

type ValidateEmail = {
    to: string
    url: string
}

function ValidateEmail(props: ValidateEmail) {
    return (
        <html lang="fr">
            <body>
                <p>
                    Bonjour {props.to},
                </p>
                <p>
                    Pour valider votre email, veuillez cliquer sur le lien suivant: <a href={props.url}>{props.url}</a>
                </p>
            </body>
        </html>
    )
}

export function validateEmailTemplate(props: ValidateEmail) {
    return (<ValidateEmail {...props} />).toString()
}
