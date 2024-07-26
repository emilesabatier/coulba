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
                    L'application est soumise à un <b>tarif libre</b>.
                    <br />
                    Vous pouvez l'utiliser gratuitement ou nous soutenir en fonction de vos moyens et de l'évolution de votre entreprise.
                </Text.Paragraph>
            </Text.Section>
            <Text.Section>
                <Text.Title>
                    Pourquoi ?
                </Text.Title>
                <Text.Paragraph>
                    La comptabilité est une pierre fondamentale de la vie d'une entreprise. Nous sommes convaincus qu'en deçà d'une certaine taille, une entreprise/association peut gérer sa comptabilité en interne. En plus de réaliser des économies, cela permet de bien comprendre les flux économiques et financiers.
                    <br />
                    Au début de sa vie, une entité doit faire face à un certain nombre de charges avec des produits qui peuvent se faire attendre. Nous pensons que la comptabilité ne doit pas constituer une charge élevée pendant cette période.
                </Text.Paragraph>
            </Text.Section>
            <Text.Section>
                <Text.Title>
                    Quel est notre modèle ?
                </Text.Title>
                <Text.Paragraph>
                    · Nos coûts sont principalement constitués des frais liés aux différents serveurs (hébergement et  base de données).
                    <br />
                    · Nous pensons que nous pouvons assumer ces coûts avec un soutien réparti sur l'ensemble de nos utilisateurs.
                    <br />
                    · Nous réfléchissons actuellement à une solution pour mettre en avant nos sponsors.
                    <br />
                    · Nous nous engageons à garder ce modèle le plus longtemps possible et à respecter vos données.
                </Text.Paragraph>
            </Text.Section>
            <Text.Section>
                <Text.Title>
                    Comment nous soutenir ?
                </Text.Title>
                <Text.Paragraph>
                    Vous pouvez nous soutenir financièrement en cliquant sur le lien suivant.
                </Text.Paragraph>
                <a
                    href="https://donate.stripe.com/6oE8xg5PV5EocWAfYY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit"
                    aria-label="Soutenir le projet"
                >
                    <ButtonPlainContent
                        text="Soutenir le projet"
                        className="justify-center"
                    />
                </a>
            </Text.Section>
        </Text.Root>
    )
}
