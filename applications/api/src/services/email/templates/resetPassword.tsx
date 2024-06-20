

type ResetPassword = {
    to: string
    urlInvitation: string
}

function ResetPassword(props: ResetPassword) {
    return (
        <html lang="fr">
            <body>
                <p>
                    Bonjour,
                </p>
                <p>
                    Pour réinitialiser votre mot de passe, veuillez cliquer sur le lien suivant:
                    <br />
                    <a href={props.urlInvitation}>Mettre à jour mon mot de passe</a>
                </p>
            </body>
        </html>
    )
}

export function resetPasswordTemplate(props: ResetPassword) {
    return (<ResetPassword {...props} />).toString()
}
