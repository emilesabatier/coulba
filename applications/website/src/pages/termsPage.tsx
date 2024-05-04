

import { useEffect } from "react"
import { Main } from "../components/layout/main/main"
import { Text } from "../components/layout/text/text"
import { TextSection } from "../components/layout/text/textSection"


export function TermsPage() {

    useEffect(() => { document.title = "Conditions d'utilisation | Coulba" }, [])

    return (
        <Main.Root>
            <Main.Header
                title="Conditions Générales d'Utilisation et de Vente (CGUV)"
                description="Dernière version le 04/05/2024."
            />
            <Main.Content>
                <Text.Root>
                    <Text.Section>
                        <Text.Title>
                            Introduction
                        </Text.Title>
                        <Text.Paragraph>
                            La solution logicielle “Coulba” offre la possibilité de gérer la comptabilité des entreprises.

                            Les présentes conditions générales d'utilisation et de vente, également désignées sous le nom de "Conditions Générales", établissent les modalités selon lesquelles un client, tel que décrit ultérieurement, peut accéder et utiliser les services détaillés à l'Article 1.
                        </Text.Paragraph>
                    </Text.Section>
                    <Text.Section>
                        <Text.Title>
                            1. Définitions
                        </Text.Title>
                        <Text.Paragraph>
                            Les définitions figurant ci-dessous s'appliquent aux Conditions Générales.
                        </Text.Paragraph>
                        <TextSection>
                            <Text.SubTitle>
                                1.1 Client
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le terme "Client" fait référence à toute entité juridique qui a souscrit à un abonnement pour accéder aux Services définis dans cet article.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                1.2 Contact
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le terme "Contact" fait référence à toute personne inscrite dans la base de données du Client grâce aux Services, incluant notamment mais non exclusivement, les utilisateurs et clients de la solution.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                1.3 Contenu
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le terme "Contenu" englobe toutes les données, informations ou documents transmis à la Société par le Client ou téléchargés via les Services. Cela inclut, entre autres, les détails des produits fournis par le Client via les Services, tels que les descriptions, spécificités, unités de mesure, catégories, prix, modes de paiement, images, illustrations, vidéos, spécifications techniques et tout matériel promotionnel ou informatif. Cela englobe également les mises à jour, ajustements et corrections associés. Il est à noter que le Contenu ne contient aucun composant logiciel.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                1.4 Données
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le terme "Données" fait référence à toutes les informations ou éléments, qu'elles soient gérées par le Client ou relevant de sa pleine propriété, fournies par le Client pour l'exécution des Services par la Société. Cela inclut spécifiquement les données, qu'elles soient personnelles ou non, du Client et des Utilisateurs Autorisés, générées lors de l'utilisation des Services et conservées sur les serveurs de la Société.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                1.5 Données personnelles
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le terme "Données personnelles" fait référence aux informations personnelles telles que définies par la réglementation sur la protection des données, que le Client gère lors de l'utilisation des Services.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                1.6 Droits de propriété intellectuelle
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le terme "Droits de propriété intellectuelle" englobe les droits liés aux brevets, droits d'auteur, secrets industriels, noms commerciaux, logos, marques, droits moraux, savoir-faire et autres droits similaires ou actifs immatériels, reconnus par la loi ou les conventions internationales dans n'importe quel pays ou juridiction, comme étant des créations intellectuelles bénéficiant de droits de propriété. Cela inclut toutes les formalités associées, telles que les enregistrements, dépôts, demandes, renouvellements, extensions ou autres actions actuellement en place ou à venir.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                1.7 Force majeure
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le terme "Force majeure" fait référence aux événements ou situations qui échappent à la volonté ou au contrôle du Client ou de la Société, conformément à la définition généralement acceptée par la jurisprudence des tribunaux français.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                1.8 Informations
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le terme "Informations" englobe toute information, qu'elle soit technique ou commerciale, présentée sous forme écrite, graphique, verbale ou autre. Cela inclut, sans s'y limiter, les dessins, outils, échantillons, rapports, registres, données, logiciels, modèles et secrets industriels.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                1.9 Informations confidentielles
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le terme "Informations confidentielles" englobe :
                                <Text.List>
                                    <Text.Item>
                                        Pour ce qui est de la Société, toutes les données, logiciels, innovations, savoir-faire, concepts, applications, programmes opérationnels et Droits de propriété intellectuelle liés aux Services ou dérivant de ces derniers ;
                                    </Text.Item>
                                    <Text.Item>
                                        En ce qui concerne le Client, toute information, totalement ou partiellement de sa propriété, non rendue publique et se rapportant à ses activités ou partenaires commerciaux ;
                                    </Text.Item>
                                    <Text.Item>
                                        Pour le Client et la Société, toute information, donnée technique ou expertise incluant, mais sans s'y limiter, celles concernant la recherche,, les services, la clientèle, les marchés, les logiciels, les codes sources, la documentation logicielle, les avancées, les listes, les secrets industriels, les compilations de données, les procédés, les modèles, les dessins, l'ingénierie, les détails sur la configuration du matériel, le marketing ou les aspects financiers.
                                    </Text.Item>
                                </Text.List>
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                1.10 Logiciel
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le terme "Logiciel" fait référence aux logiciels et programmes informatiques protégés, utilisés ou fournis par la Société dans le cadre de la prestation des Services.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                1.11 Prix
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le terme "Prix" fait référence à la structure tarifaire des Services, telle que présentée sur le site internet https://coulba.com.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                1.12 Règlementation données personnelles
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le terme "Règlementation Données Personnelles" englobe toutes les dispositions législatives ou réglementaires, qu'elles soient européennes ou nationales, notamment le règlement 2016/679/UE du 27 avril 2016 sur la protection des données personnelles et la libre circulation de ces données, la loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés, ainsi que ses textes d'application. Cela inclut également toute autre réglementation pertinente pouvant s'y ajouter ou la remplacer dans le futur.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                1.13 Services
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le terme "Services" fait référence aux prestations proposées par la Société conformément aux présentes Conditions Générales, incluant tout service ultérieur ou de substitution offrant une fonctionnalité équivalente ou supérieure à celle du Service initialement fourni.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                1.14 Société affiliée
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le terme "Société affiliée" représente, pour la Société, toute entité ou société qu'elle dirige, qui la dirige, ou qui est dirigée par une entité ou société ayant un contrôle commun avec la Société. Le terme "contrôle" tel qu'utilisé ici correspond à la définition énoncée à l'article L. 233-3 du Code de commerce.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                1.15 Tiers
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le terme "Tiers" fait référence à toute personne qui n'est ni le Client ni la Société.
                            </Text.Paragraph>
                        </TextSection>
                    </Text.Section>
                    <Text.Section>
                        <Text.Title>
                            2. Objet
                        </Text.Title>
                        <Text.Paragraph>
                            Les Conditions Générales ont pour but de définir les modalités d'accès aux Services par le Client, qui pourra les utiliser en conformité avec les dispositions énoncées dans les Conditions Générales.
                            <br />
                            Cet ensemble de règles forme un accord juridiquement contraignant et exécutoire entre la Société et le Client. En conséquence, la Société encourage vivement le Client à examiner attentivement ces Conditions Générales d'Utilisation, à les accepter et à s'engager à les respecter.
                        </Text.Paragraph>
                    </Text.Section>
                    <Text.Section>
                        <Text.Title>
                            3. Accès aux services
                        </Text.Title>
                        <TextSection>
                            <Text.SubTitle>
                                3.1 Utilisation
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Sous condition du règlement du Prix et du respect intégral des Conditions Générales par le Client, la Société accorde au Client un droit d'accès non exclusif et non transférable aux Services et au Logiciel, selon les modalités définies dans les présentes Conditions Générales.
                                Néanmoins, certaines restrictions s'appliquent :

                                Le Client est autorisé à utiliser les Services et le Logiciel uniquement pour ses besoins internes ;
                                Le Client doit s'assurer que les contenus ou services mis en ligne via les Services sont conformes à la législation et/ou réglementation française. À ce titre, l'utilisation des fonctionnalités d'emailing fournies par les Services pour des actions illicites est strictement interdite ;
                                Sauf exceptions prévues à l'Article L.122-6-1 du Code de la propriété intellectuelle, le Client s'engage à ne pas :
                                (A) Dupliquer, en tout ou partie, le Logiciel ou les Services ;
                                (B) Vendre, sous-licencier, distribuer, louer, concéder ou transférer les Services ou le Logiciel à un tiers ;
                                (C) Modifier, décompiler, désassembler, traduire, ou créer des œuvres dérivées des Services ou du Logiciel ;
                                (D) Autoriser un tiers à utiliser les Services ou le Logiciel, tout en précisant que cette restriction ne s'applique pas aux accès et utilisations par les Contacts ou Tiers de la plateforme internet du Client créée au sein des Services ;
                                (E) Reproduire tout élément des Services, sauf usage interne ou propre au Client ;
                                (F) Accéder aux Services dans le but de : (1) développer un produit ou service concurrent, (2) créer une offre similaire basée sur les fonctionnalités ou caractéristiques des Services, ou (3) imiter les idées, fonctions ou graphiques des Services.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                3.2 Nom d'utilisateur et mot de passe
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Lors de l'inscription aux Services, le Client est tenu de renseigner le numéro RNA de l’association, un nom d’utilisateur ainsi qu'une adresse mail. Un mot de passe temporaire sera alors attribué au Client pour sa première connexion aux Services.Il est de la responsabilité exclusive du Client de maintenir la confidentialité de ces informations d'identification. Le Client sera tenu pour responsable de toute utilisation des Services effectuée via son compte qui ne respecterait pas les Conditions Générales. Si le Client suspecte une utilisation non autorisée de son nom d'utilisateur ou de son mot de passe, il doit immédiatement en informer la Société et procéder à la modification du mot de passe concerné. Le Client s'engage à utiliser les Services de manière sécurisée, en adhérant aux directives de sécurité que la Société pourrait réviser périodiquement. Pour le moment, ces directives requièrent que le Client se connecte aux Services via un réseau Internet sécurisé.
                            </Text.Paragraph>
                        </TextSection>
                    </Text.Section>
                    <Text.Section>
                        <Text.Title>
                            4. Objet, disponibilité et modifications des Services
                        </Text.Title>
                        <TextSection>
                            <Text.SubTitle>
                                4.1 Objectif des Services
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Les Services ont pour finalité de permettre au Client :
                                d’utiliser le logiciel Coulba ;
                                de publier et de mettre à jour des informations sur ce logiciel ;
                                de gérer ses interactions avec ses Contacts ;
                                d'enregistrer des transactions comptables et de générer des documents liés à la comptabilité (facture, justificatifs de dons…) ;
                                d'offrir divers services à ses Contacts ;
                                de réaliser des transactions financières en ligne, y compris le paiement des adhésions.

                                Il est important de noter que la Société n'intervient ni en tant que partie prenante, ni en tant que bénéficiaire, ni comme garant dans tout accord éventuellement conclu entre le Client et un Tiers, incluant les Contacts, pendant l'utilisation des Services. Les accords contractuels entre le Client et les utilisateurs, y compris les Contacts et Tiers, doivent se conformer aux conditions générales établies par le Client lui-même.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                4.2 Exclusion des Données de santé
                            </Text.SubTitle>
                            <Text.Paragraph>
                                La Société tient à préciser qu'elle n'opère pas en tant qu'hébergeur de données de santé et ne fournit pas de services d'hébergement relatifs à des données de santé pour le compte de ses Clients. De ce fait, elle ne détient ni l'agrément ni la certification requise conformément à l'article L. 1111-8 du Code de la santé publique pour assurer l'hébergement de données de santé. En conséquence, le Client est strictement tenu de ne pas utiliser de Données de santé à caractère personnel dans le cadre de l'utilisation des Services proposés par la Société.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                4.3 Disponibilité des Services
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Techniquement parlant, l'accès aux Services est disponible 24 heures sur 24, 7 jours sur 7, sauf en cas de force majeure, d'interruptions pour maintenance ou d'éventuelles pannes, conformément à l'article 9.1 des Conditions Générales qui stipule l'obligation de moyens de la Société. Le Client est conscient qu'il doit avoir les compétences et les équipements nécessaires pour accéder aux Services. Cela implique d'avoir un ordinateur ou un autre dispositif avec une connexion Internet stable et correctement configurée pour une utilisation optimale des Services.
                                <br />
                                Le Client est informé des risques associés à l'utilisation d'Internet, y compris la possibilité d'interception ou d'altération de données. Bien que la Société mette tout en œuvre pour assurer la sécurité, il est conseillé au Client de prendre des mesures préventives contre les menaces telles que les virus, en utilisant un logiciel de détection à jour.
                                <br />
                                Il est crucial de noter que la disponibilité des Services dépend également de la qualité et de la stabilité de la connexion Internet du Client. La Société ne peut être tenue pour responsable en cas de défaillance ou d'interruption liée à des problèmes de réseau Internet. Par conséquent, la responsabilité de la Société ne saurait être engagée pour tout manquement ou dommage causé par des problèmes de connexion ou d'autres aspects techniques indépendants de sa volonté.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                4.4 Modification des Services
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le Client accepte expressément que la Société puisse, à sa discrétion, modifier les désignations des Services ou ajuster leurs caractéristiques techniques. De surcroît, le Client comprend et admet que la Société a la liberté de substituer un Service par un autre (ou d'autres) Service(s) offrant des fonctionnalités équivalentes ou même supérieures à celles du Service initial.
                            </Text.Paragraph>
                        </TextSection>
                    </Text.Section>
                    <Text.Section>
                        <Text.Title>
                            5. Prix – Facturation et conditions de paiement
                        </Text.Title>
                        <TextSection>
                            <Text.SubTitle>
                                5.1 Prix.
                            </Text.SubTitle>
                            <Text.Paragraph>
                                La tarification des Services proposés par la Société est présentée sur le site web https://coulba.com. Il est important de noter que ces tarifs varient en fonction du nombre de Contacts associés au Client.

                                La Société a la faculté de réajuster sa grille tarifaire à chaque période de renouvellement d'abonnement. Le montant à payer pour tout renouvellement sera déterminé par les tarifs en vigueur sur le site https://coulba.com à la date de ce renouvellement.
                                De plus, si de nouvelles taxes sont instaurées ou si les taux des taxes existantes sont revus à la hausse, la Société se réserve le droit de les appliquer immédiatement.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                5.2 Modalités de paiement pour les services sur abonnement
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Tout au long de la période d'abonnement, le Client est tenu de verser à la Société les frais correspondant aux Services fournis, conformément à la structure tarifaire en vigueur. Le coût total de l'abonnement est exigible en avance. À moins de stipulations différentes dans le tarif applicable, le Client doit régler toutes les factures émises par la Société dans un délai de trente (30) jours à compter de leur émission. La Société a le droit de transmettre ses factures au Client par voie électronique (dont une disponibilité sur les Services), et ce dernier donne son consentement explicite à cette méthode.

                                En cas de non-paiement dans les délais, des intérêts de retard seront appliqués, calculés à un taux de trois pour cent (3%) par mois ou selon le taux maximal autorisé par la législation en vigueur, le montant le plus bas étant retenu. De plus, tout retard de paiement entraînera automatiquement une indemnité forfaitaire de quarante (40) euros au titre des frais de recouvrement, exigible envers la Société.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                5.3 Droits et taxes
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le Client est responsable de l'acquittement de toutes les obligations fiscales relatives à la fourniture des Services, y compris les obligations liées à la taxe sur la valeur ajoutée.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                5.4 Modalités de Paiement
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le Client règlera les factures dues à la Société par carte bancaire. Une fois le moyen de paiement sélectionné par le Client enregistré, il sera utilisé pour l'ensemble des transactions concernant les factures émises par la Société.

                                Pour toute transaction nécessitant une action de la part du service de facturation, la Société pourra appliquer au Client des frais fixes d'un montant de cinquante euros (50€) toutes taxes comprises (TTC). À titre illustratif, mais non exhaustif, ces frais pourront être facturés en cas de rejet de paiement par la banque du Client ou lors de l'émission d'un avoir.
                            </Text.Paragraph>
                        </TextSection>
                        <Text.Section>
                            <Text.Title>
                                6. Droits de propriété intellectuelle
                            </Text.Title>
                            <Text.Paragraph>
                                Tous les droits de propriété intellectuelle associés au Logiciel et aux Services appartiennent exclusivement à la Société ou aux tiers ayant accordé à la Société les licences nécessaires. Ces droits restent la propriété exclusive de la Société et des éventuels tiers concernés.
                            </Text.Paragraph>
                            <TextSection>
                                <Text.SubTitle>
                                    6.1 Droit sur le Contenu
                                </Text.SubTitle>
                                <Text.Paragraph>
                                    Tous les droits et titres associés aux Contenus fournis ou accessibles à la Société, dans le cadre de la prestation de services, demeurent la propriété du Client. Si tout ou partie du Contenu est sujet à des litiges ou si la Société estime que certaines informations enfreignent les droits de propriété intellectuelle d'un tiers ou les lois en vigueur, la Société est autorisée à suspendre ou retirer cet accès litigieux sans être tenue responsable envers le Client. De plus, la Société peut demander la suppression de contenus considérés comme illicites conformément à l'article 6 de la loi n° 2004-575 du 21 juin 2004 relative à la confiance dans l'économie numérique.
                                </Text.Paragraph>
                            </TextSection>
                            <TextSection>
                                <Text.SubTitle>
                                    6.2 Améliorations
                                </Text.SubTitle>
                                <Text.Paragraph>
                                    La Société a le droit d'utiliser, d'intégrer et de mettre en œuvre, à l'échelle mondiale et sans restriction de durée, toutes les améliorations, suggestions, idées ou autres informations proposées par le Client ou ses Utilisateurs Autorisés pour l'amélioration des Services, sans aucun coût ou redevance.
                                </Text.Paragraph>
                            </TextSection>
                        </Text.Section>
                    </Text.Section>
                    <Text.Section>
                        <Text.Title>
                            7. Confidentialité
                        </Text.Title>
                        <TextSection>
                            <Text.SubTitle>
                                7.1 Confidentialité des informations sensibles
                            </Text.SubTitle>
                            <Text.Paragraph>
                                À l'exception des dispositions énoncées à l'article 11.7 des Conditions Générales, chaque partie s'engage à maintenir la confidentialité des informations confidentielles fournies par l'autre partie pour garantir l'exécution optimale des Services. Les parties conviennent : (i) d'utiliser les informations confidentielles exclusivement pour la réalisation des Services et conformément aux termes des Conditions Générales; (ii) de ne pas dupliquer ou conserver ces informations, que ce soit en totalité ou en partie, sauf autorisation explicite prévue dans les présentes conditions; (iii) d'inclure sur toute copie des informations confidentielles toutes les mentions de confidentialité qui y sont associées, qu'elles aient été ajoutées par la partie d'origine ou par un tiers, conformément aux attentes raisonnables de la partie d'origine.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                7.2 Protection des données personnelles
                            </Text.SubTitle>
                            <Text.Paragraph>
                                La Société s'engage à assurer la confidentialité des Données Personnelles traitées en vertu des Conditions Générales. Elle ne permettra l'accès ou la divulgation de ces données qu'aux individus spécifiquement autorisés. Ces individus sont uniquement des personnes travaillant directement pour la Société en tant qu’employés ou prestataires.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                7.3 Recours juridiques
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Les parties reconnaissent que, en dépit de toute autre clause contenue dans les Conditions Générales, la partie non responsable des violations des dispositions de ces Conditions a le droit de rechercher une compensation équitable pour préserver ses droits. Cela peut inclure la demande de mesures temporaires ou permanentes par voie d'injonction, ainsi que la réclamation de dommages et intérêts. Rien dans les présentes ne saurait être interprété comme limitant ou restreignant d'autres recours légaux dont les parties pourraient se prévaloir.
                            </Text.Paragraph>
                        </TextSection>
                    </Text.Section>
                    <Text.Section>
                        <Text.Title>
                            8. Durée et fin des Services
                        </Text.Title>
                        <TextSection>
                            <Text.SubTitle>
                                8.1 Formules
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le Client dispose d'une formule unique, dont le prix dépend du nombre d'adhérents pour la saison en cours. Toutes les fonctionnalités sont disponibles dans cette formule.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                8.2 Durée de l'abonnement
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le Client bénéficie des Services pour une période d'un mois, renouvellable autant de fois que nécessaire.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                8.3 Renouvellement automatique
                            </Text.SubTitle>
                            <Text.Paragraph>
                                À la fin de la période initiale, l'abonnement est prolongé automatiquement si le Client en a fait le choix. Sinon, le paiement devra être réglé manuellement.

                                Si le paiement du Prix échoue, alors l’abonnement est suspendu

                                En cas de renouvellement automatique, le paiement du Prix est déclenché le dernier jour de l’abonnement actuel et utilise le moyen de paiement principal renseigné par le Client. Tous les bons de réduction disponibles sont alors utilisés.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                8.4 Résiliation pour juste motif.
                            </Text.SubTitle>
                            <Text.Paragraph>
                                La Société ou le Client peut résilier l'abonnement en cours dans certaines situations, définies ci-dessous comme "juste motif". Voici les conditions et conséquences de cette résiliation :

                                - Si la Société résilie l'abonnement pour un juste motif, elle doit en informer le Client par écrit avec un préavis de trente (30) jours. Dans ce cas, la Société conserve l'intégralité du montant payé par le Client.

                                - Si le Client résilie pour un Juste motif, la Société lui remboursera une partie du montant payé, calculée au prorata du temps pendant lequel les Services auraient dû être fournis.

                                Les motifs justifiant une résiliation anticipée sont les suivants :

                                (i) Le Client n'honore pas un paiement dû à la Société dans les sept (7) jours suivant une notification écrite de la Société concernant ce manquement, envoyée par courrier électronique avec accusé de réception.

                                (ii) L'une des parties ne respecte pas une condition des Conditions Générales, à l'exception des obligations de paiement, et ne remédie pas à ce manquement dans les trente (30) jours suivant une notification écrite envoyée par l'autre partie par lettre recommandée ou courrier électronique avec accusé de réception. Notamment, si la Société identifie une utilisation illégale de ses services d'emailing, elle peut suspendre immédiatement ses services.

                                (iii) L'une des parties (a) interrompt ses activités, (b) est incapable de payer ses dettes, reconnait son insolvabilité, ou est soumise à un contrôle externe, ou (c) dépose le bilan ou est engagée dans une procédure de redressement ou de liquidation judiciaire.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                8.5 Conséquences en cas de Non-Paiement
                            </Text.SubTitle>
                            <Text.Paragraph>
                                (a) **Suspension des Services** : Si le Client ne respecte pas une échéance de paiement, la Société peut suspendre l'accès aux Services dans les sept (7) jours suivant une notification écrite de ce manquement. Cette suspension sera levée une fois que le Client aura payé les sommes dues et pris des mesures garantissant les paiements futurs.

                                (b) **Exigibilité Immédiate** : Si le Client manque à une échéance de paiement, la Société peut, à sa discrétion, exiger immédiatement le paiement de toutes les sommes dues dans les sept (7) jours suivant une notification écrite du manquement. La Société peut alors utiliser tous les moyens légaux pour récupérer ces sommes. Le fait pour la Société de ne pas exercer ce droit immédiatement ne l'empêche pas de le faire ultérieurement.

                                (c) **Indemnités** : Si le Client ne respecte pas une échéance de paiement et que la Société résilie l'abonnement pour un Juste Motif ou autrement, le Client reconnaît la complexité d'évaluer les dommages subis par la Société. En conséquence, la Société peut demander une indemnité qui comprend :
                                - Les sommes dues pour les services non fournis.
                                - Les montants qui auraient été dus si l'abonnement s'était poursuivi, incluant tous les frais, intérêts, et autres coûts associés. Ces sommes visent à compenser la perte de revenus de la Société et ne sont pas considérées comme une pénalité. La Société conserve tous ses droits et recours légaux dans cette situation.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                8.6 Obligation de Restitution après Résiliation
                            </Text.SubTitle>
                            <Text.Paragraph>
                                En cas de résiliation de l'abonnement conformément aux conditions énoncées, la Société a le droit d'interdire immédiatement au Client l'accès et l'utilisation des Services. Suite à cette résiliation, le Client doit immédiatement cesser toute utilisation des Services, des Logiciels, ainsi que des Informations Confidentielles reçues de la Société. De plus, le Client est tenu de retourner à la Société tout matériel ou support physique qui lui aurait été fourni pour l'exécution des Services.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                8.7 Effets de la résiliation des services
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Suite à toute résiliation du contrat, certaines dispositions demeureront en vigueur même après la fin du contrat :
                                - L'Article 7 concernant la "Confidentialité" restera en vigueur pour une période de cinq (5) ans à partir de la date de résiliation du contrat.
                                - L'Article 11.3 relatif à la "non-sollicitation du personnel" demeurera applicable pendant une durée d'une (1) année, conformément à ses termes.
                                - Les dispositions des Articles 6 ("Droits de propriété"), 8.3 ("Déchéance du terme"), 9 ("Clause de non-responsabilité; Limitation de responsabilité"), 10 ("Garanties") et 11.5 ("Règlement des litiges – Juridiction et Droit applicable") resteront en vigueur tant que la Société conservera des droits conformément à ces articles.
                                Toutes les autres stipulations et droits accordés par ce contrat prendront fin à la date de résiliation.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                8.8 Processus de réversibilité
                            </Text.SubTitle>
                            <Text.Paragraph>
                                En cas de fin de collaboration entre le Client et la Société pour n'importe quelle raison, la Société s'engage à garantir la réversibilité des Données Personnelles du Client. Cette réversibilité sera effectuée dans un format utilisable par le Client, et ce, sans frais supplémentaires. Le Client peut demander cette réversibilité à tout moment et au plus tard dans les trois (3) mois suivant la fin de la relation commerciale.

                                Une fois la réversibilité des Données effectuée, ou si le Client n'a pas fait une demande de réversibilité dans le délai de trois (3) mois, la Société détruira toutes les Données Personnelles encore détenues ou archivées. Aucune copie ne sera conservée ou utilisée, sauf si la loi ou les règlements en vigueur exigent leur conservation.

                                Si le Client souhaite des services d'assistance supplémentaires après la fin de la relation, ces services seront facturés selon les tarifs actuels de la Société. Un devis détaillé sera présenté au Client pour son approbation avant la fourniture de ces services.
                            </Text.Paragraph>
                        </TextSection>
                    </Text.Section>
                    <Text.Section>
                        <Text.Title>
                            9. Clause de non responsabilité ; limitation de responsabilité
                        </Text.Title>
                        <TextSection>
                            <Text.SubTitle>
                                9.1 Engagement envers les Services
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Les Services sont offerts tel quel. Il est de la responsabilité du Client de s'assurer, avant de souscrire, que les Services répondent à ses besoins spécifiques et respectent les obligations légales et réglementaires pertinentes. La Société décline toute responsabilité à cet égard. Néanmoins, la Société s'engage à respecter une obligation de moyens. En conséquence, elle garantit de fournir les Services avec le niveau de soin et d'attention nécessaires, assurant ainsi une prestation de qualité et sécurisée, conformément aux spécifications et conditions énoncées dans les présentes Conditions Générales.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                9.2 Limitation de responsabilité
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Conformément aux lois en vigueur, la Société décline toute responsabilité pour des pertes de bénéfices, une perte de revenus, des interruptions d'activité, des frais associés à l'acquisition de technologies ou de services de remplacement, ainsi que pour tout dommage ou préjudice découlant de l'utilisation ou de la prestation des Services. De plus, la Société n'est pas tenue responsable des préjudices résultant de retards dans la fourniture ou l'exécution des Services. La responsabilité globale de la Société, quelle qu'en soit la cause, est limitée au montant total réellement versé par le Client au cours des douze (12) mois précédant l'événement à l'origine du manquement ou du dommage.
                            </Text.Paragraph>
                        </TextSection>
                    </Text.Section>
                    <Text.Section>
                        <Text.Title>
                            10. Garantie
                        </Text.Title>
                        <TextSection>
                            <Text.SubTitle>
                                10.1 Engagement de la Société en cas de Violation de Propriété Intellectuelle
                            </Text.SubTitle>
                            <Text.Paragraph>
                                La Société s'engage à protéger le Client contre toute réclamation relative à une violation des droits de propriété intellectuelle découlant de l'utilisation des Services. Pour cela, la Société prendra toutes les mesures appropriées, y compris la négociation d'un accord transactionnel. De plus, la Société prendra en charge tous les coûts et dommages associés à cette réclamation ou procédure, à condition que le Client respecte certaines obligations.

                                Le Client doit informer immédiatement la Société de toute réclamation et lui fournir tous les moyens nécessaires pour défendre ou régler la réclamation. Bien que la Société ait le contrôle total de la défense, le Client peut, à ses frais, consulter un avocat de son choix et participer à la défense. La Société a le droit de choisir entre plusieurs options pour résoudre le problème, telles que continuer à fournir les Services, les remplacer, les modifier ou les arrêter, en fonction de ce qui est le plus économiquement viable. Si la Société choisit de cesser de fournir les Services, elle indemnisera le Client pour les sommes déjà payées.

                                La Société n'aura aucune autre obligation envers le Client concernant les Services en question si elle décide de les arrêter. En outre, si les Services ont été modifiés ou utilisés d'une manière qui ne respecte pas les conditions générales, les obligations de la Société peuvent être exclues. Dans ces cas, le Client devra dédommager la Société pour tout dommages, frais ou dépenses encourus en raison de cette violation.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                10.2 Engagement du Client
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le Client s'engage à indemniser et à protéger la Société, ainsi que ses entités affiliées, leurs dirigeants, actionnaires, membres, représentants et employés, contre toute sanction, amende, frais, perte, responsabilité, ou coût (y compris les honoraires d'avocat) résultant de l'utilisation incorrecte ou non conforme des Services par le Client, conformément aux Conditions Générales.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                10.3 Recours exclusif
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Les stipulations de l'Article 10 précitées représentent la totalité des clauses relatives à la responsabilité et aux engagements de la Société, ainsi que de toute tierce partie lui ayant octroyé une licence. Elles constituent également le seul et unique recours dont dispose le Client en cas de violation effective ou alléguée d'un droit de propriété intellectuelle lié aux Services, au Logiciel ou à tout élément associé.   </Text.Paragraph>
                        </TextSection>
                    </Text.Section>
                    <Text.Section>
                        <Text.Title>
                            11. Généralités
                        </Text.Title>
                        <TextSection>
                            <Text.SubTitle>
                                11.1 Modalités de notification
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Toute communication requise en vertu des présentes Conditions Générales ou de la loi doit être réalisée par écrit et peut être effectuée de l'une des manières suivantes : (i) remise directe en personne, (ii) expédition par courrier recommandé avec un accusé de réception, ou (iii) transmission par courrier électronique avec demande d'accusé de réception. En cas de modification de l'adresse postale ou électronique du Client ou de la Société, une notification en bonne et due forme doit être effectuée conformément à cet Article. Les communications sont considérées comme reçues dès la date de remise en main propre, ou après un délai de trois (3) jours ouvrables suivant leur dépôt à la poste ou leur envoi par courrier électronique, conformément aux modalités précitées.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                11.2 Engagements et garanties du Client
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le Client affirme et garantit que : (i) il est une entité juridique dûment établie et opérant en conformité avec les législations du pays de son siège social, (ii) il détient l'autorité requise pour s'engager envers la Société selon les termes énoncés dans les présentes Conditions Générales, (iii) ses activités sont conformes aux lois et réglementations françaises en vigueur, (iv) toutes les informations fournies lors de la souscription aux Services sont précises, exhaustives et à jour, et (v) il reconnaît et accepte que les présentes Conditions Générales le lient légalement et seront exécutées conformément à leurs stipulations.

                                En cas de manquement à l'une quelconque de ces affirmations ou garanties, la Société se réserve le droit de suspendre immédiatement l'accès aux Services ou de mettre fin à l'abonnement sans préavis. La violation de ces affirmations constitue un motif légitime pour la Société. Le Client s'engage, sur demande de la Société, à fournir toute pièce justificative nécessaire pour vérifier les informations communiquées lors de sa souscription aux Services.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                11.3 Engagement de non-débauchage du personnel
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le Client reconnaît l'importance pour la Société de pouvoir compter sur un personnel qualifié pour la réalisation de ses activités et projets. À ce titre, le Client s'engage formellement, tant pour lui-même que pour toute entité ou personne avec laquelle il pourrait avoir une relation, qu'elle soit directe ou indirecte, à ne pas débaucher, solliciter ou encourager de quelque manière que ce soit les employés ou sous-traitants de la Société à rompre leur contrat ou relation professionnelle avec cette dernière. Cette restriction s'applique pendant toute la période durant laquelle l'employé ou le sous-traitant collabore avec le Client et se prolonge pour une période d'un (1) an après la fin de cette collaboration.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                11.4 Cession des droits
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le Client reconnaît et accepte qu'il ne peut pas céder ou transférer tout ou partie de ses droits contractuels, sauf dans les cas spécifiques tels que la cession d'actifs, une fusion ou toute opération similaire ayant un impact équivalent. Toutefois, dans ces situations limitées, les présentes Conditions Générales demeurent applicables au Client et continuent de lier ses successeurs et ayants droit. De plus, le Client donne expressément son accord pour que la Société puisse céder ou transférer ses droits contractuels à une tierce partie de son choix, à condition que le Client soit préalablement informé de cette intention, conformément aux dispositions de l'article 1216 du Code civil.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                11.5 Règlement des litiges – Juridiction et loi applicable
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Les présentes Conditions Générales sont régies et interprétées conformément au droit français.
                                Pour toute réclamation relative aux Services, le Client doit contacter le service client de la Société via l’adresse mail suivante : support@coulba.fr
                                En l'absence de résolution amiable d'un litige, tout différend, réclamation ou question concernant l'interprétation, la mise en œuvre ou la validité des présentes Conditions Générales, ou lié à l'utilisation des Services, sera soumis à la compétence exclusive des tribunaux situés dans le ressort de la cour d'appel de Paris. Cette compétence s'applique sans égard à toute pluralité de défendeurs ou à toute action en garantie.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                11.6 Indépendance
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Les liens entre la Société et le Client sont fondés sur une relation de contractants indépendants. Aucune disposition des présentes Conditions Générales ne sera interprétée comme établissant un contrôle, une association, une co-entreprise, une co-propriété ou tout autre type de relation ou de partenariat entre les deux parties, que ce soit en tant qu'associés, membres d'une joint-venture, co-propriétaires ou participants à une entreprise commune.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                11.7 Communication
                            </Text.SubTitle>
                            <Text.Paragraph>
                                En vertu des présentes, le Client donne à la Société l'autorisation d'utiliser son nom, ainsi que ceux de ses produits ou services, dans diverses publications de la Société. Cela inclut les listings clients, le site internet de la Société, les réseaux sociaux de la Société, une fiche de profil client, ainsi que tout communiqué de presse futur.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                11.8 Protection des données personnelles
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Les Parties reconnaissent leurs obligations respectives en matière de protection des données personnelles conformément à la réglementation en vigueur.

                                La Société agit en tant que responsable de traitement pour la gestion de la relation commerciale avec le Client. Le Client, quant à lui, agit en tant que responsable de traitement pour les données personnelles liées à la fourniture des Services et en tant que sous-traitant pour certaines données techniques et opérationnelles.

                                Le Client s'engage notamment à obtenir le consentement des utilisateurs pour le traitement de leurs données, en particulier celles considérées comme sensibles. La Société, en tant que sous-traitant, assure diverses obligations, telles que garantir la sécurité des données, fournir une formation adéquate à son personnel, et traiter les données uniquement selon les instructions du Client.

                                De plus, la Société peut sous-traiter certaines de ses obligations, mais elle demeure responsable de la conformité à la réglementation. La Société s'engage à n'utiliser que des sous-traitants qui garantissent un niveau de protection adéquat des données personnelles. Toutefois, la responsabilité principale en matière de conformité à la réglementation sur les données personnelles incombe au Client, en sa qualité de responsable de traitement.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                11.9 Convention de preuve.
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Conformément à la législation en vigueur, notamment l'article 1367 du code civil, le Client reconnaît et accepte que lorsqu'il coche la case d'acceptation des Conditions Générales, cela équivaut à une signature électronique. Cette signature électronique a la même valeur juridique qu'une signature manuscrite entre les parties concernées.

                                Le Client prend également acte que toute documentation générée par cette méthode de validation, ainsi que tout échange de courriers électroniques entre la Société et lui-même, constitue une preuve tangible. Cela signifie que ces échanges et accords électroniques ont la même valeur probante qu'un document signé manuscritement.

                                En l'absence de preuve contraire devant une juridiction compétente, tout courrier électronique échangé entre le Client et la Société est reconnu comme valable et opposable. Cette reconnaissance s'étend non seulement entre les parties concernées mais également vis-à-vis de tout tiers, avec la même force probante qu'un document sur support papier.
                            </Text.Paragraph>
                        </TextSection>
                        <TextSection>
                            <Text.SubTitle>
                                11.10 Dispositions diverses.
                            </Text.SubTitle>
                            <Text.Paragraph>
                                Le Client reconnaît avoir pris connaissance des présentes Conditions Générales, en avoir compris le contenu, et accepte formellement d'être lié par ces conditions. Il est expressément stipulé que les Conditions Générales priment sur toute autre condition générale ou spécifique que le Client pourrait avoir.

                                Aucun employé, agent, représentant, ou entité affiliée à la Société n'est autorisé à engager la responsabilité de la Société par des déclarations, garanties ou engagements oraux concernant le Logiciel ou les Services offerts. Seules les déclarations, garanties ou engagements expressément stipulés et écrits dans les présentes Conditions Générales sont opposables à la Société et ont une force juridique.

                                Le Client est donc invité à faire preuve de diligence et de prudence, en ne se basant que sur les termes explicites des présentes Conditions Générales, et en évitant de se fier à toute déclaration ou garantie non explicitement mentionnée dans ce document.
                            </Text.Paragraph>
                        </TextSection>
                    </Text.Section>
                    <Text.Section>
                        <Text.Title>
                            12. Support technique et compatibilité
                        </Text.Title>
                        <Text.Paragraph>
                            L'utilisation des Services offerts par la Société est optimisée pour une compatibilité minimale avec la dernière version des navigateurs suivants : Firefox, Edge (anciennement connu sous le nom d'Internet Explorer), Safari et Google Chrome. Il est essentiel pour les utilisateurs de ces Services de veiller à ce que leur navigateur soit mis à jour à la version la plus récente pour garantir une expérience optimale.

                            La Société n'assurera pas la compatibilité de ses services, notamment le logiciel "Coulba", avec les versions obsolètes ou non mises à jour des navigateurs. Par conséquent, il est recommandé aux utilisateurs de maintenir à jour leur navigateur afin de bénéficier des fonctionnalités et des performances optimales des Services fournis par la Société.
                        </Text.Paragraph>
                    </Text.Section>
                </Text.Root>
            </Main.Content>
        </Main.Root>
    )
}
