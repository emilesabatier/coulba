

import { ButtonPlainContent } from "@coulba/design/buttons"
import { useEffect } from "react"
import { Main } from "../components/layout/main/main"
import { Text } from "../components/layout/text/text"


export function PricingPage() {

    useEffect(() => { document.title = "Tarif" }, [])

    return (
        <Main.Root>
            <Main.Header
                title="Tarif"
                description="Pour comprendre notre modèle"
            />
            <Main.Content>
                <Text.Root>
                    <Text.Section>
                        <Text.Title>
                            Quel est le prix ?
                        </Text.Title>
                        <Text.Paragraph>
                            L'application est <b>gratuite</b> d'utilisation.
                        </Text.Paragraph>
                    </Text.Section>
                    <Text.Section>
                        <Text.Title>
                            Pourquoi ?
                        </Text.Title>
                        <Text.Paragraph>
                            La comptabilité est une pierre fondamentale de la vie d'une entreprise. Nous sommes convaincus qu'en deça d'une certaine taille d'entreprise, la comptabilité peut être gérée en interne.
                            <br />
                            En plus de réaliser des économies, notamment au début de vie de l'entreprise, cela permet de bien comprendre les flux économiques au sein des entreprises.
                        </Text.Paragraph>
                    </Text.Section>
                    <Text.Section>
                        <Text.Title>
                            Quel est notre modèle ?
                        </Text.Title>
                        <Text.Paragraph>
                            Les serveurs (hébergement et  base de données) ont un coût, qui augmente avec le nombre d'utilisateurs.
                            <br />
                            Pour le moment, notre modèle repose sur le don. Il est possible que le modèle évolue si on se rend compte qu'il n'est pas viable.
                            <br />
                            Cependant, nous nous engageons à garder la solution gratuite et à respecter vos données.
                        </Text.Paragraph>
                    </Text.Section>
                    <Text.Section>
                        <Text.Title>
                            Comment faire un don ?
                        </Text.Title>
                        <Text.Paragraph>
                            Vous pouvez faire un don en cliquant sur le lien suivant.
                        </Text.Paragraph>
                        <a href="" target="_blank" rel="noopener noreferrer" className="w-fit">
                            <ButtonPlainContent
                                text="Faire un don"
                                className="justify-center"
                            />
                        </a>
                    </Text.Section>
                </Text.Root>
            </Main.Content>
        </Main.Root >
    )
}
