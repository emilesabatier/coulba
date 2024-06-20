

type EmailValidation = {
    url: string
}

function EmailValidation(props: EmailValidation) {
    return (
        <html lang="fr">
            <body>
                <p>
                    Bonjour,
                </p>
                <p>
                    Pour valider votre email, veuillez cliquer sur le lien suivant:
                    <br />
                    <a href={props.url}>Valider mon email</a>
                </p>
            </body>
        </html>
    )
}

export function emailValidationTemplate(props: EmailValidation) {
    return (<EmailValidation {...props} />).toString()
}
