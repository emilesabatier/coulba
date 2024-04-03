

type Invitation = {
    from: string
    to: string
    urlInvitation: string
    urlWebsite: string
    urlDocumentation: string
}

function Invitation(props: Invitation) {
    return (
        <html lang="fr">
            <body>
                <p>
                    Bonjour {props.to},
                </p>
                <p>
                    Vous avez reçu une invitation pour collaborer sur l'application de la part de <b>{props.from}</b>.
                </p>
                <p>
                    Pour valider votre compte et vous rendre sur l'application, veuillez cliquer sur le lien suivant: <a href={props.urlInvitation}>{props.urlInvitation}</a>
                </p>
                <p>
                    Pour plus d'informations, vous pouvez vous rendre sur le <a href={props.urlWebsite}>site de l'application</a> ou sur le <a href={props.urlDocumentation}>site de la documentation</a>.
                </p>
            </body>
        </html>
    )
}

export function invitationTemplate(props: Invitation) {
    return (<Invitation {...props} />).toString()
}
