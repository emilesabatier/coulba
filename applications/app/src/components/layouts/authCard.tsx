import { Card } from "@monassosportive/design/layouts"


export function AuthCard() {
    return (
        <Card variant="warning" className="p-4 h-fit flex flex-col justify-start items-stretch">
            <p className="text-warning"  >
                Vous n'avez pas la permission d'accèder à cette fonctionnalité ;  veuillez vous rapprocher de votre association.
            </p>
        </Card>
    )
}
