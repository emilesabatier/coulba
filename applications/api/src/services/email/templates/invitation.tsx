

type Invitation = {
    urlInvitation: string
    urlWebsite: string
}

function Invitation(props: Invitation) {
    return (
        <html lang="fr">
            <body>
                <p>
                    Bonjour,
                </p>
                <p>
                    Vous avez reçu une invitation pour collaborer sur l'application de comptabilité Coulba.
                </p>
                <p>
                    Pour valider votre invitation et vous rendre sur l'application, veuillez cliquer sur le lien suivant:
                    <br />
                    <a href={props.urlInvitation}>Valider mon invitation</a>
                </p>
                <p>
                    Pour plus d'informations, vous pouvez vous rendre sur le <a href={props.urlWebsite}>site de l'application</a>.
                </p>
            </body>
        </html>
    )
}

export function invitationTemplate(props: Invitation) {
    return (<Invitation {...props} />).toString()
}
