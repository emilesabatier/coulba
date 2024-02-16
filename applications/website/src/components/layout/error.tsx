import { Card } from "@coulba/design/layouts"


export function Error() {
    return (
        <Card variant="error" className="p-4 h-fit flex flex-col justify-start items-stretch">
            <p className="text-error"  >
                Une erreur s&apos;est produite lors de la récupération des données. Veuillez vérifier votre connexion internet et rafraîchir la page.
            </p>
            <p className="text-error"  >
                Si le problème persiste, n&apos;hésitez pas à contacter le&nbsp;
                <a className="text-error underline cursor-pointer hover:no-underline" href={`mailto:support@coulba.fr`} target="_blank" rel="noopener noreferrer">
                    support
                </a>
                .
            </p>
        </Card>
    )
}
