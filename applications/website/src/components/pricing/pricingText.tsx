import { ButtonPlainContent } from "@coulba/design/buttons"
import { Text } from "../layout/text/text"


export function PricingText() {
    return (
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
                    La comptabilité est une pierre fondamentale de la vie d'une entreprise. Nous sommes convaincus qu'en deça d'une certaine taille, une entreprise peut gérer sa comptabilité en interne.
                    <br />
                    En plus de réaliser des économies, cela permet de bien comprendre les flux économiques et financiers.
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
                <a href="https://donate.stripe.com/6oE8xg5PV5EocWAfYY" target="_blank" rel="noopener noreferrer" className="w-fit">
                    <ButtonPlainContent
                        text="Faire un don"
                        className="justify-center"
                    />
                </a>
            </Text.Section>
        </Text.Root>
    )
}
