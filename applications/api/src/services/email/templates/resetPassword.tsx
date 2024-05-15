

type ResetPassword = {
    to: string
    urlInvitation: string
}

function ResetPassword(props: ResetPassword) {
    return (
        <html lang="fr">
            <body>
                <p>
                    Bonjour {props.to},
                </p>
                <p>
                    Pour réinitialiser votre mot de passe, veuillez cliquer sur le lien suivant: <a href={props.urlInvitation}>{props.urlInvitation}</a>
                </p>
            </body>
        </html>
    )
}

export function resetPasswordTemplate(props: ResetPassword) {
    return (<ResetPassword {...props} />).toString()
}
