"use client"

import { useEffect } from "react"
import { Main } from "../components/layout/main/main"
import { Text } from "../components/layout/text/text"


export function LegalPage() {

    useEffect(() => { document.title = "Mentions légales | MonAssoSportive" }, [])

    return (
        <Main.Root>
            <Main.Header
                title="Mentions légales"
            />
            <Main.Content>
                <span className="text-right self-end italic text-neutral/30">Dernière version le 05/02/2024.</span>
                <Text.Root>
                    <Text.Section>
                        <Text.Title>
                            Identité
                        </Text.Title>
                        <Text.Paragraph>
                            La solution logicielle <b>“MonAssoSportive”</b> est développée par la Société MySphere. MySphere est une <b>Société par Actions Simplifiée</b> (SAS) avec un capital social de <b>1.000,00 euros</b>.
                            <br />
                            La Société est enregistrée au <b>Registre du Commerce et des Sociétés</b> (RCS) de <b>Paris</b> sous le numéro de SIRET <b>908 719 503</b>.
                        </Text.Paragraph>
                    </Text.Section>
                    <Text.Section>
                        <Text.Title>
                            Coordonnées
                        </Text.Title>
                        <Text.Paragraph>
                            Le siège social de la Société est localisé au <b>93 Rue Sedaine, 75011 Paris</b>, en <b>France</b>.
                            <br />
                            L'adresse de contact est <Text.Link href="mailto:bonjour@monassosportive.fr">bonjour@monassosportive.fr</Text.Link>.
                        </Text.Paragraph>
                    </Text.Section>
                    <Text.Section>
                        <Text.Title>
                            Mentions relatives à la propriété intellectuelle
                        </Text.Title>
                        <Text.Paragraph>
                            Sauf mention contraire, tous les éléments de propriété intellectuelle appartiennent à la Société.
                            <br />
                            <br />
                            Les icônes utilisées proviennent de
                            <Text.List>
                                <Text.Item>
                                    <Text.Link href="https://github.com/tabler/tabler-icons">Tabler Icons</Text.Link> sous la license <b>MIT</b>
                                </Text.Item>
                                <Text.Item>
                                    <Text.Link href="https://www.svgrepo.com/collection/sports-24/">SVGRepo</Text.Link> sous la license <b>CC0</b>
                                </Text.Item>
                            </Text.List>

                        </Text.Paragraph>
                    </Text.Section>
                    <Text.Section>
                        <Text.Title>
                            Mentions relatives à l'hébergement du site
                        </Text.Title>
                        <Text.Paragraph>
                            La solution logicielle est hébergée sous les domaines <Text.Link href="https://monassosportive.fr">monassosportive.fr</Text.Link> et <Text.Link href="https://monassosportive.com">monassosportive.com</Text.Link>.
                            <br />
                            Tous les sous-domaines actifs sont hébergés chez notre partenaire <b>Hostinger International Ltd</b>. situé à l'adresse <b>61 Lordou Vironos Street, 6023 Larnaca</b> à <b>Chypre</b>. Vous pourrez trouver la dernière version de leur données de contact sur la page de leur <Text.Link href="https://www.hostinger.fr/legal/termes-universels-de-contrat-de-service">mentions légales</Text.Link>.
                        </Text.Paragraph>
                    </Text.Section>
                    <Text.Section>
                        <Text.Title>
                            Mentions relatives à la gestion de données personnelles
                        </Text.Title>
                        <Text.Paragraph>
                            Nous ne collectons pas de données personnelles sur les sites public de la solution, à savoir
                            <Text.List>
                                <Text.Item>
                                    <Text.Link href="https://monassosportive.fr">monassosportive.fr</Text.Link>
                                </Text.Item>
                                <Text.Item>
                                    <Text.Link href="https://documentation.monassosportive.fr">documentation.monassosportive.fr</Text.Link>
                                </Text.Item>
                            </Text.List>
                            <br />
                            Nous collectons des données d'utilisation de l'application disponible à l'adresse <Text.Link href="https://app.monassosportive.fr">app.monassosportive.fr</Text.Link> à des fins d'amélioration des services et de sécurité. Ces données sont strictement réservées à un usage interne et ne seront en aucun cas partagées ou vendues à des tiers.
                            <br /><br />
                            Les données bancaires sont stockées chez notre partenaire français <b>Stancer</b> agréée par l'ACPR en qualité d'établissement de paiement sous le numéro d'agrément (CIB) : 11758. Vous pouvez retrouver plus d'informations sur leur site <Text.Link href="https://www.stancer.com/fr/">www.stancer.com</Text.Link>.
                        </Text.Paragraph>
                    </Text.Section>
                </Text.Root>
            </Main.Content>
        </Main.Root>
    )
}
