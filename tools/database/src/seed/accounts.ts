

export type DefaultAccount = {
    number: number
    label: string
    system: "base" | "condensed" | "developed"
}

export const defaultAccounts: DefaultAccount[] = [
    {
        number: 1,
        system: "condensed",
        label: "Comptes de capitaux"
    },
    {
        number: 10,
        system: "base",
        label: "Capital et réserves"
    },
    {
        number: 101,
        system: "condensed",
        label: "Capital"
    },
    {
        number: 1011,
        system: "developed",
        label: "Capital souscrit - non appelé"
    },
    {
        number: 1012,
        system: "developed",
        label: "Capital souscrit - appelé, non versé"
    },
    {
        number: 1013,
        system: "developed",
        label: "Capital souscrit - appelé, versé"
    },
    {
        number: 10131,
        system: "developed",
        label: "Capital non amorti"
    },
    {
        number: 10132,
        system: "developed",
        label: "Capital amorti"
    },
    {
        number: 1018,
        system: "developed",
        label: "Capital souscrit soumis à des réglementations particulières"
    },
    {
        number: 102,
        system: "base",
        label: "Fonds fiduciaires"
    },
    {
        number: 104,
        system: "base",
        label: "Primes liées au capital social"
    },
    {
        number: 1041,
        system: "developed",
        label: "Primes d'émission"
    },
    {
        number: 1042,
        system: "developed",
        label: "Primes de fusion"
    },
    {
        number: 1043,
        system: "developed",
        label: "Primes d'apport"
    },
    {
        number: 1044,
        system: "developed",
        label: "Primes de conversion d'obligations en actions"
    },
    {
        number: 1045,
        system: "developed",
        label: "Bons de souscription d'actions"
    },
    {
        number: 105,
        system: "condensed",
        label: "Écarts de réévaluation"
    },
    {
        number: 1051,
        system: "developed",
        label: "Réserve spéciale de réévaluation"
    },
    {
        number: 1052,
        system: "developed",
        label: "Écart de réévaluation libre"
    },
    {
        number: 1053,
        system: "developed",
        label: "Réserve de réévaluation"
    },
    {
        number: 1055,
        system: "developed",
        label: "Écarts de réévaluation (autres opérations légales)"
    },
    {
        number: 1057,
        system: "developed",
        label: "Autres écarts de réévaluation en France"
    },
    {
        number: 1058,
        system: "developed",
        label: "Autres écarts de réévaluation à l'étranger"
    },
    {
        number: 106,
        system: "base",
        label: "Réserves"
    },
    {
        number: 1061,
        system: "condensed",
        label: "Réserve légale"
    },
    {
        number: 10611,
        system: "developed",
        label: "Réserve légale proprement dite"
    },
    {
        number: 10612,
        system: "developed",
        label: "Plus-values nettes à long terme"
    },
    {
        number: 1062,
        system: "base",
        label: "Réserves indisponibles"
    },
    {
        number: 1063,
        system: "condensed",
        label: "Réserves statutaires ou contractuelles"
    },
    {
        number: 1064,
        system: "condensed",
        label: "Réserves réglementées"
    },
    {
        number: 10641,
        system: "developed",
        label: "Plus-values nettes à long terme"
    },
    {
        number: 10643,
        system: "developed",
        label: "Réserves consécutives à l'octroi de subventions d'investissement"
    },
    {
        number: 10648,
        system: "developed",
        label: "Autres réserves réglementées"
    },
    {
        number: 1068,
        system: "condensed",
        label: "Autres réserves"
    },
    {
        number: 10681,
        system: "developed",
        label: "Réserve de propre assureur"
    },
    {
        number: 10688,
        system: "developed",
        label: "Réserves diverses"
    },
    {
        number: 107,
        system: "base",
        label: "Écart d'équivalence"
    },
    {
        number: 108,
        system: "condensed",
        label: "Compte de l'exploitant"
    },
    {
        number: 109,
        system: "base",
        label: "Actionnaires : Capital souscrit - non appelé"
    },
    {
        number: 11,
        system: "base",
        label: "Report à nouveau (solde créditeur ou débiteur)"
    },
    {
        number: 110,
        system: "developed",
        label: "Report à nouveau (solde créditeur)"
    },
    {
        number: 119,
        system: "developed",
        label: "Report à nouveau (solde débiteur)"
    },
    {
        number: 12,
        system: "condensed",
        label: "Résultat de l'exercice (bénéfice ou perte)"
    },
    {
        number: 120,
        system: "developed",
        label: "Résultat de l'exercice (bénéfice)"
    },
    {
        number: 129,
        system: "developed",
        label: "Résultat de l'exercice (perte)"
    },
    {
        number: 13,
        system: "base",
        label: "Subventions d'investissement"
    },
    {
        number: 131,
        system: "base",
        label: "Subventions d'équipement"
    },
    {
        number: 1311,
        system: "developed",
        label: "État"
    },
    {
        number: 1312,
        system: "developed",
        label: "Régions"
    },
    {
        number: 1313,
        system: "developed",
        label: "Départements"
    },
    {
        number: 1314,
        system: "developed",
        label: "Communes"
    },
    {
        number: 1315,
        system: "developed",
        label: "Collectivités publiques"
    },
    {
        number: 1316,
        system: "developed",
        label: "Entreprises publiques"
    },
    {
        number: 1317,
        system: "developed",
        label: "Entreprises et organismes privés"
    },
    {
        number: 1318,
        system: "developed",
        label: "Autres"
    },
    {
        number: 138,
        system: "base",
        label: "Autres subventions d'investissement (même ventilation que celle du compte 131)"
    },
    {
        number: 139,
        system: "base",
        label: "Subventions d'investissement inscrites au compte de résultat"
    },
    {
        number: 1391,
        system: "base",
        label: "Subventions d'équipement"
    },
    {
        number: 13911,
        system: "developed",
        label: "État"
    },
    {
        number: 13912,
        system: "developed",
        label: "Régions"
    },
    {
        number: 13913,
        system: "developed",
        label: "Départements"
    },
    {
        number: 13914,
        system: "developed",
        label: "Communes"
    },
    {
        number: 13915,
        system: "developed",
        label: "Collectivités publiques"
    },
    {
        number: 13916,
        system: "developed",
        label: "Entreprises publiques"
    },
    {
        number: 13917,
        system: "developed",
        label: "Entreprises et organismes privés"
    },
    {
        number: 13918,
        system: "developed",
        label: "Autres"
    },
    {
        number: 1398,
        system: "base",
        label: "Autres subventions d'investissement (même ventilation que celle du compte 1391)"
    },
    {
        number: 14,
        system: "base",
        label: "Provisions réglementées"
    },
    {
        number: 142,
        system: "base",
        label: "Provisions réglementées relatives aux immobilisations"
    },
    {
        number: 1423,
        system: "developed",
        label: "Provisions pour reconstitution des gisements miniers et pétroliers"
    },
    {
        number: 1424,
        system: "developed",
        label: "Provisions pour investissement (participation des salariés)"
    },
    {
        number: 143,
        system: "base",
        label: "Provisions réglementées relatives aux stocks"
    },
    {
        number: 1431,
        system: "developed",
        label: "Hausse des prix"
    },
    {
        number: 1432,
        system: "developed",
        label: "Fluctuation des cours"
    },
    {
        number: 144,
        system: "base",
        label: "Provisions réglementées relatives aux autres éléments de l'actif"
    },
    {
        number: 145,
        system: "condensed",
        label: "Amortissements dérogatoires"
    },
    {
        number: 146,
        system: "condensed",
        label: "Provision spéciale de réévaluation"
    },
    {
        number: 147,
        system: "condensed",
        label: "Plus-values réinvesties"
    },
    {
        number: 148,
        system: "condensed",
        label: "Autres provisions réglementées"
    },
    {
        number: 15,
        system: "condensed",
        label: "Provisions pour risques et charges"
    },
    {
        number: 151,
        system: "base",
        label: "Provisions pour risques"
    },
    {
        number: 1511,
        system: "developed",
        label: "Provisions pour litiges"
    },
    {
        number: 1512,
        system: "developed",
        label: "Provisions pour garanties données aux clients"
    },
    {
        number: 1513,
        system: "developed",
        label: "Provisions pour pertes sur marchés à terme"
    },
    {
        number: 1514,
        system: "developed",
        label: "Provisions pour amendes et pénalités"
    },
    {
        number: 1515,
        system: "developed",
        label: "Provisions pour pertes de change"
    },
    {
        number: 1516,
        system: "developed",
        label: "Provisions pour pertes sur contrats"
    },
    {
        number: 1518,
        system: "developed",
        label: "Autres provisions pour risques"
    },
    {
        number: 153,
        system: "base",
        label: "Provisions pour pensions et obligations similaires"
    },
    {
        number: 154,
        system: "base",
        label: "Provisions pour restructurations"
    },
    {
        number: 155,
        system: "base",
        label: "Provisions pour impôts"
    },
    {
        number: 156,
        system: "base",
        label: "Provisions pour renouvellement des immobilisations (entreprises concessionnaires)"
    },
    {
        number: 157,
        system: "base",
        label: "Provisions pour charges à répartir sur plusieurs exercices"
    },
    {
        number: 1572,
        system: "developed",
        label: "Provisions pour gros entretien ou grandes révisions"
    },
    {
        number: 158,
        system: "base",
        label: "Autres provisions pour charges"
    },
    {
        number: 1581,
        system: "developed",
        label: "Provisions pour remises en état"
    },
    {
        number: 16,
        system: "condensed",
        label: "Emprunts et dettes assimilées"
    },
    {
        number: 161,
        system: "base",
        label: "Emprunts obligataires convertibles"
    },
    {
        number: 162,
        system: "base",
        label: "Obligations représentatives de passifs nets remis en fiducie"
    },
    {
        number: 163,
        system: "base",
        label: "Autres emprunts obligataires"
    },
    {
        number: 164,
        system: "base",
        label: "Émprunts auprès des établissements de crédit"
    },
    {
        number: 165,
        system: "base",
        label: "Dépôts et cautionnements reçus"
    },
    {
        number: 1651,
        system: "developed",
        label: "Dépôts"
    },
    {
        number: 1655,
        system: "developed",
        label: "Cautionnements"
    },
    {
        number: 166,
        system: "developed",
        label: "Participation des salariés aux résultats"
    },
    {
        number: 1661,
        system: "developed",
        label: "Comptes bloqués"
    },
    {
        number: 1662,
        system: "developed",
        label: "Fonds de participation"
    },
    {
        number: 167,
        system: "base",
        label: "Emprunts et dettes assortis de conditions particulières"
    },
    {
        number: 1671,
        system: "base",
        label: "Émissions de titres participatifs"
    },
    {
        number: 1674,
        system: "base",
        label: "Avances conditionnées de l'État"
    },
    {
        number: 1675,
        system: "base",
        label: "Emprunts participatifs"
    },
    {
        number: 168,
        system: "base",
        label: "Autres emprunts et dettes assimilées"
    },
    {
        number: 1681,
        system: "developed",
        label: "Autres emprunts"
    },
    {
        number: 1685,
        system: "developed",
        label: "Rentes viagères capitalisées"
    },
    {
        number: 1687,
        system: "developed",
        label: "Autres dettes"
    },
    {
        number: 1688,
        system: "developed",
        label: "Intérêts courus"
    },
    {
        number: 16881,
        system: "developed",
        label: "Sur emprunts obligataires convertibles"
    },
    {
        number: 16883,
        system: "developed",
        label: "Sur autres emprunts obligataires"
    },
    {
        number: 16884,
        system: "developed",
        label: "Sur emprunts auprès des établissements de crédit"
    },
    {
        number: 16885,
        system: "developed",
        label: "Sur dépôts et cautionnements reçus"
    },
    {
        number: 16886,
        system: "developed",
        label: "Sur participation des salariés aux résultats"
    },
    {
        number: 16887,
        system: "developed",
        label: "Sur emprunts et dettes assortis de conditions particulières"
    },
    {
        number: 16888,
        system: "developed",
        label: "Sur autres emprunts et dettes assimilées"
    },
    {
        number: 169,
        system: "base",
        label: "Primes de remboursement des obligations"
    },
    {
        number: 17,
        system: "base",
        label: "Dettes rattachées à des participations"
    },
    {
        number: 171,
        system: "base",
        label: "Dettes rattachées à des participations (groupe)"
    },
    {
        number: 174,
        system: "base",
        label: "Dettes rattachées à des participations (hors groupe)"
    },
    {
        number: 178,
        system: "base",
        label: "Dettes rattachées à des sociétés en participation"
    },
    {
        number: 1781,
        system: "developed",
        label: "Principal"
    },
    {
        number: 1788,
        system: "developed",
        label: "Intérêts courus"
    },
    {
        number: 18,
        system: "base",
        label: "Comptes de liaison des établissements et sociétés en participation"
    },
    {
        number: 181,
        system: "developed",
        label: "Comptes de liaison des établissements"
    },
    {
        number: 186,
        system: "developed",
        label: "Biens et prestations de services échangés entre établissements (charges)"
    },
    {
        number: 187,
        system: "developed",
        label: "Biens et prestations de services échangés entre établissements (produits)"
    },
    {
        number: 188,
        system: "developed",
        label: "Comptes de liaison des sociétés en participation"
    },
    {
        number: 2,
        system: "condensed",
        label: "Comptes d'immobilisations"
    },
    {
        number: 20,
        system: "condensed",
        label: "Immobilisations incorporelles"
    },
    {
        number: 201,
        system: "condensed",
        label: "Frais d'établissement"
    },
    {
        number: 2011,
        system: "developed",
        label: "Frais de constitution"
    },
    {
        number: 2012,
        system: "developed",
        label: "Frais de premier établissement"
    },
    {
        number: 20121,
        system: "developed",
        label: "Frais de prospection"
    },
    {
        number: 20122,
        system: "developed",
        label: "Frais de publicité"
    },
    {
        number: 2013,
        system: "developed",
        label: "Frais d'augmentation de capital et d'opérations diverses (fusions, scissions, transformations)"
    },
    {
        number: 203,
        system: "base",
        label: "Frais de recherche et de développement"
    },
    {
        number: 205,
        system: "base",
        label: "Concessions et droits similaires, brevets, licences, marques, procédés, logiciels, droits et valeurs similaires"
    },
    {
        number: 206,
        system: "condensed",
        label: "Droit au bail"
    },
    {
        number: 207,
        system: "condensed",
        label: "Fonds commercial"
    },
    {
        number: 208,
        system: "condensed",
        label: "Autres immobilisations incorporelles"
    },
    {
        number: 2081,
        system: "base",
        label: "Mali de fusion sur actifs incorporels"
    },
    {
        number: 21,
        system: "condensed",
        label: "Immobilisations corporelles"
    },
    {
        number: 211,
        system: "base",
        label: "Terrains"
    },
    {
        number: 2111,
        system: "base",
        label: "Terrains nus"
    },
    {
        number: 2112,
        system: "base",
        label: "Terrains aménagés"
    },
    {
        number: 2113,
        system: "base",
        label: "Sous-sols et sursols"
    },
    {
        number: 2114,
        system: "base",
        label: "Terrains de de carrières (tréfonds)"
    },
    {
        number: 2115,
        system: "base",
        label: "Terrains bâtis"
    },
    {
        number: 21151,
        system: "developed",
        label: "Ensembles immobiliers industriels (A, B, ...)"
    },
    {
        number: 21155,
        system: "developed",
        label: "Ensembles immobiliers administratifs et commerciaux (A, B, ...)"
    },
    {
        number: 21158,
        system: "developed",
        label: "Autres ensembles immobiliers"
    },
    {
        number: 211581,
        system: "developed",
        label: "affectés aux opérations professionnelles (A, B, ...)"
    },
    {
        number: 211588,
        system: "developed",
        label: "affectés aux opérations non professionnelles (A, B, ...)"
    },
    {
        number: 2116,
        system: "base",
        label: "Compte d'ordre sur immobilisations"
    },
    {
        number: 212,
        system: "base",
        label: "Agencements et aménagements de terrains (même ventilation que celle du compte 211)"
    },
    {
        number: 213,
        system: "base",
        label: "Constructions"
    },
    {
        number: 2131,
        system: "base",
        label: "Bâtiments"
    },
    {
        number: 21311,
        system: "developed",
        label: "Ensembles immobiliers industriels (A, B, ...)"
    },
    {
        number: 21315,
        system: "developed",
        label: "Ensembles immobiliers administratifs et commerciaux (A, B, ...)"
    },
    {
        number: 21318,
        system: "developed",
        label: "Autres ensembles immobiliers"
    },
    {
        number: 213181,
        system: "developed",
        label: "affectés aux opérations professionnelles (A, B, ...)"
    },
    {
        number: 213188,
        system: "developed",
        label: "affectés aux opérations non professionnelles (A, B, ...)"
    },
    {
        number: 2135,
        system: "base",
        label: "Installations générales - agencements - aménagements des constructions"
    },
    {
        number: 21351,
        system: "developed",
        label: "Ensembles immobiliers industriels (A, B, ...)"
    },
    {
        number: 21355,
        system: "developed",
        label: "Ensembles immobiliers administratifs et commerciaux (A, B, ...)"
    },
    {
        number: 21358,
        system: "developed",
        label: "Autres ensembles immobiliers"
    },
    {
        number: 213581,
        system: "developed",
        label: "affectés aux opérations professionnelles (A, B)"
    },
    {
        number: 213588,
        system: "developed",
        label: "affectés aux opérations non professionnelles (A, B)"
    },
    {
        number: 2138,
        system: "base",
        label: "Ouvrages d'infrastructure"
    },
    {
        number: 21381,
        system: "developed",
        label: "Voies de terre"
    },
    {
        number: 21382,
        system: "developed",
        label: "Voies de fer"
    },
    {
        number: 21383,
        system: "developed",
        label: "Voies d'eau"
    },
    {
        number: 21384,
        system: "developed",
        label: "Barrages"
    },
    {
        number: 21385,
        system: "developed",
        label: "Pistes d'aérodromes"
    },
    {
        number: 214,
        system: "base",
        label: "Constructions sur sol d'autrui (même ventilation que celle du compte 213)"
    },
    {
        number: 215,
        system: "base",
        label: "Installations techniques, matériels et outillage industriels"
    },
    {
        number: 2151,
        system: "base",
        label: "Installations complexes spécialisées"
    },
    {
        number: 21511,
        system: "developed",
        label: "sur sol propre"
    },
    {
        number: 21514,
        system: "developed",
        label: "sur sol d'autrui"
    },
    {
        number: 2153,
        system: "base",
        label: "Installations à caractère spécifique"
    },
    {
        number: 21531,
        system: "developed",
        label: "sur sol propre"
    },
    {
        number: 21534,
        system: "developed",
        label: "sur sol d'autrui"
    },
    {
        number: 2154,
        system: "base",
        label: "Matériel industriel"
    },
    {
        number: 2155,
        system: "base",
        label: "Outillage industriel"
    },
    {
        number: 2157,
        system: "base",
        label: "Agencements et aménagements du matériel et outillage industriels"
    },
    {
        number: 218,
        system: "base",
        label: "Autres immobilisations corporelles"
    },
    {
        number: 2181,
        system: "base",
        label: "Installations générales, agencements, aménagements divers"
    },
    {
        number: 2182,
        system: "base",
        label: "Matériel de transport"
    },
    {
        number: 2183,
        system: "base",
        label: "Matériel de bureau et matériel informatique"
    },
    {
        number: 2184,
        system: "base",
        label: "Mobilier"
    },
    {
        number: 2185,
        system: "base",
        label: "Cheptel"
    },
    {
        number: 2186,
        system: "base",
        label: "Emballages récupérables"
    },
    {
        number: 2187,
        system: "base",
        label: "Mali de fusions sur actifs corporels"
    },
    {
        number: 22,
        system: "base",
        label: "Immobilisations mises en concession"
    },
    {
        number: 23,
        system: "condensed",
        label: "Immobilisations en cours"
    },
    {
        number: 231,
        system: "base",
        label: "Immobilisations corporelles en cours"
    },
    {
        number: 2312,
        system: "developed",
        label: "Terrains"
    },
    {
        number: 2313,
        system: "developed",
        label: "Constructions"
    },
    {
        number: 2315,
        system: "developed",
        label: "Installations techniques, matériel et outillage industriels"
    },
    {
        number: 2318,
        system: "developed",
        label: "Autres immobilisations corporelles"
    },
    {
        number: 232,
        system: "base",
        label: "Immobilisations incorporelles en cours"
    },
    {
        number: 237,
        system: "base",
        label: "Avances et acomptes versés sur immobilisations incorporelles"
    },
    {
        number: 238,
        system: "base",
        label: "Avances et acomptes versés sur commandes d'immobilisations corporelles"
    },
    {
        number: 2382,
        system: "developed",
        label: "Terrains"
    },
    {
        number: 2383,
        system: "developed",
        label: "Constructions"
    },
    {
        number: 2385,
        system: "developed",
        label: "Installations techniques, matériel et outillage industriels"
    },
    {
        number: 2388,
        system: "developed",
        label: "Autres immobilisations corporelles"
    },
    {
        number: 25,
        system: "base",
        label: "Parts dans des entreprises liées et créances sur des entreprises liées"
    },
    {
        number: 26,
        system: "base",
        label: "Participations et créances rattachées à des participations"
    },
    {
        number: 261,
        system: "base",
        label: "Titres de participation"
    },
    {
        number: 2611,
        system: "developed",
        label: "Actions"
    },
    {
        number: 2618,
        system: "developed",
        label: "Autres titres"
    },
    {
        number: 266,
        system: "base",
        label: "Autres formes de participation"
    },
    {
        number: 2661,
        system: "developed",
        label: "Droits représentatifs d'actifs nets remis en fiducie"
    },
    {
        number: 267,
        system: "base",
        label: "Créances rattachées à des participations"
    },
    {
        number: 2671,
        system: "developed",
        label: "Créances rattachées à des participations (groupe)"
    },
    {
        number: 2674,
        system: "developed",
        label: "Créances rattachées à des participations (hors groupe)"
    },
    {
        number: 2675,
        system: "developed",
        label: "Versements représentatifs d'apports non capitalisés (appel de fonds)"
    },
    {
        number: 2676,
        system: "developed",
        label: "Avances consolidables"
    },
    {
        number: 2677,
        system: "developed",
        label: "Autres créances rattachées à des participations"
    },
    {
        number: 2678,
        system: "developed",
        label: "Intérêts courus"
    },
    {
        number: 268,
        system: "base",
        label: "Créances rattachées à des sociétés en participation"
    },
    {
        number: 2681,
        system: "developed",
        label: "Principal"
    },
    {
        number: 2688,
        system: "developed",
        label: "Intérêts courus"
    },
    {
        number: 269,
        system: "base",
        label: "Versements restant à effectuer sur titres de participation non libérés"
    },
    {
        number: 27,
        system: "condensed",
        label: "Autres immobilisations financières"
    },
    {
        number: 271,
        system: "base",
        label: "Titres immobilisés autres que les titres immobilisés de l'activité de portefeuille (droit de propriété)"
    },
    {
        number: 2711,
        system: "developed",
        label: "Actions"
    },
    {
        number: 2718,
        system: "developed",
        label: "Autres titres"
    },
    {
        number: 272,
        system: "base",
        label: "Titres immobilisés (droit de créance)"
    },
    {
        number: 2721,
        system: "developed",
        label: "Obligations"
    },
    {
        number: 2722,
        system: "developed",
        label: "Bons"
    },
    {
        number: 273,
        system: "base",
        label: "Titres immobilisés de l'activité de portefeuille"
    },
    {
        number: 274,
        system: "base",
        label: "Prêts"
    },
    {
        number: 2741,
        system: "developed",
        label: "Prêts participatifs"
    },
    {
        number: 2742,
        system: "developed",
        label: "Prêts aux associés"
    },
    {
        number: 2743,
        system: "developed",
        label: "Prêts au personnel"
    },
    {
        number: 2748,
        system: "developed",
        label: "Autres prêts"
    },
    {
        number: 275,
        system: "base",
        label: "Dépôts et cautionnements versés"
    },
    {
        number: 2751,
        system: "developed",
        label: "Dépôts"
    },
    {
        number: 2755,
        system: "developed",
        label: "Cautionnements"
    },
    {
        number: 276,
        system: "base",
        label: "Autres créances immobilisées"
    },
    {
        number: 2761,
        system: "developed",
        label: "Créances diverses"
    },
    {
        number: 2768,
        system: "developed",
        label: "Intérêts courus"
    },
    {
        number: 27682,
        system: "developed",
        label: "sur titres immobilisés (droit de créance)"
    },
    {
        number: 27684,
        system: "developed",
        label: "sur prêts"
    },
    {
        number: 27685,
        system: "developed",
        label: "sur dépôts et cautionnements"
    },
    {
        number: 27688,
        system: "developed",
        label: "sur créances diverses"
    },
    {
        number: 277,
        system: "base",
        label: "Actions propres ou parts propres"
    },
    {
        number: 2771,
        system: "developed",
        label: "Actions propres ou parts propres"
    },
    {
        number: 2772,
        system: "developed",
        label: "Actions propres ou parts propres en voie d'annulation"
    },
    {
        number: 278,
        system: "base",
        label: "Mali de fusion sur actifs financiers"
    },
    {
        number: 279,
        system: "base",
        label: "Versements restant à effectuer sur titres immobilisés non libérés"
    },
    {
        number: 28,
        system: "base",
        label: "Amortissements des immobilisations"
    },
    {
        number: 280,
        system: "condensed",
        label: "Amortissements des immobilisations incorporelles"
    },
    {
        number: 2801,
        system: "base",
        label: "Frais d'établissement (même ventilation que celle du compte 201)"
    },
    {
        number: 2803,
        system: "base",
        label: "Frais de recherche et de développement"
    },
    {
        number: 2805,
        system: "base",
        label: "Concessions et droits similaires, brevets, licences, logiciels, droits et valeurs similaires"
    },
    {
        number: 2807,
        system: "base",
        label: "Fonds commercial"
    },
    {
        number: 2808,
        system: "base",
        label: "Autres immobilisations incorporelles"
    },
    {
        number: 28081,
        system: "base",
        label: "Amortissements du mali de fusion sur actifs incorporels"
    },
    {
        number: 281,
        system: "condensed",
        label: "Amortissements des immobilisations corporelles"
    },
    {
        number: 2812,
        system: "base",
        label: "Agencements, aménagements de terrains (même ventilation que celle du compte 212)"
    },
    {
        number: 2813,
        system: "base",
        label: "Constructions (même ventilation que celle du compte 213)"
    },
    {
        number: 2814,
        system: "base",
        label: "Constructions sur sol d'autrui (même ventilation que celle du compte 214)"
    },
    {
        number: 2815,
        system: "base",
        label: "Installations, matériel et outillage industriels (même ventilation que celle du compte 215)"
    },
    {
        number: 2818,
        system: "base",
        label: "Autres immobilisations corporelles (même ventilation que celle du compte 218)"
    },
    {
        number: 28181,
        system: "developed",
        label: "Amortissements des installations et agencements"
    },
    {
        number: 28182,
        system: "developed",
        label: "Amortissements du matériel de transport"
    },
    {
        number: 28183,
        system: "developed",
        label: "Amortissements du matériel de bureau et du matériel informatique"
    },
    {
        number: 28187,
        system: "base",
        label: "Amortissement du mali de fusion sur actifs corporels"
    },
    {
        number: 282,
        system: "base",
        label: "Amortissements des immobilisations mises en concession"
    },
    {
        number: 29,
        system: "base",
        label: "Dépréciations des immobilisations"
    },
    {
        number: 290,
        system: "condensed",
        label: "Dépréciations des immobilisations incorporelles"
    },
    {
        number: 2905,
        system: "base",
        label: "Marques, procédés, droits et valeurs similaires"
    },
    {
        number: 2906,
        system: "base",
        label: "Droit au bail"
    },
    {
        number: 2907,
        system: "base",
        label: "Fonds commercial"
    },
    {
        number: 2908,
        system: "base",
        label: "Autres immobilisations incorporelles"
    },
    {
        number: 29081,
        system: "base",
        label: "Dépréciation du mali de fusion sur actifs incorporels"
    },
    {
        number: 291,
        system: "condensed",
        label: "Dépréciations des immobilisations corporelles (même ventilation que celle du compte 21)"
    },
    {
        number: 29187,
        system: "base",
        label: "Dépréciation du mali de fusion sur actifs corporels"
    },
    {
        number: 292,
        system: "base",
        label: "Dépréciations des immobilisations mises en concession"
    },
    {
        number: 293,
        system: "base",
        label: "Dépréciations des immobilisations en cours"
    },
    {
        number: 2931,
        system: "base",
        label: "Immobilisations corporelles en cours"
    },
    {
        number: 2932,
        system: "base",
        label: "Immobilisations incorporelles en cours"
    },
    {
        number: 296,
        system: "base",
        label: "Dépréciations des participations et créances rattachées à des participations"
    },
    {
        number: 2961,
        system: "base",
        label: "Titres de participation"
    },
    {
        number: 2966,
        system: "base",
        label: "Autres formes de participation"
    },
    {
        number: 2967,
        system: "base",
        label: "Créances rattachées à des participations (même ventilation que celle du compte 267)"
    },
    {
        number: 2968,
        system: "base",
        label: "Créances rattachées à des sociétés en participation (même ventilation que celle du compte 268)"
    },
    {
        number: 297,
        system: "condensed",
        label: "Dépréciations des autres immobilisations financières"
    },
    {
        number: 2971,
        system: "base",
        label: "Titres immobilisés autres que les titres immobilisés de l'activité de portefeuille, droit de propriété (même ventilation que celle du compte 271)"
    },
    {
        number: 2972,
        system: "base",
        label: "Droit de créance (même ventilation que celle du compte 272)"
    },
    {
        number: 2973,
        system: "base",
        label: "Titres immobilisés de l'activité de portefeuille"
    },
    {
        number: 2974,
        system: "base",
        label: "Prêts (même ventilation que celle du compte 274)"
    },
    {
        number: 2975,
        system: "base",
        label: "Dépôts et cautionnements versés (même ventilation que celle du compte 275)"
    },
    {
        number: 2976,
        system: "base",
        label: "Autres créances immobilisées (même ventilation que celle du compte 276)"
    },
    {
        number: 2978,
        system: "base",
        label: "Dépréciation du mali de fusion sur actifs financiers"
    },
    {
        number: 29787,
        system: "base",
        label: "Dépréciation du mali de fusion sur actifs financiers"
    },
    {
        number: 3,
        system: "condensed",
        label: "Comptes de stocks et en-cours"
    },
    {
        number: 31,
        system: "condensed",
        label: "Matières premières et fournitures"
    },
    {
        number: 311,
        system: "base",
        label: "Matières (ou groupe) A"
    },
    {
        number: 312,
        system: "base",
        label: "Matières (ou groupe) B"
    },
    {
        number: 317,
        system: "base",
        label: "Fournitures A, B, C, ..."
    },
    {
        number: 32,
        system: "condensed",
        label: "Autres approvisionnements"
    },
    {
        number: 321,
        system: "base",
        label: "Matières consommables"
    },
    {
        number: 3211,
        system: "developed",
        label: "Matières (ou groupe) C"
    },
    {
        number: 3212,
        system: "developed",
        label: "Matières (ou groupe) D"
    },
    {
        number: 322,
        system: "base",
        label: "Fournitures consommables"
    },
    {
        number: 3221,
        system: "developed",
        label: "Combustibles"
    },
    {
        number: 3222,
        system: "developed",
        label: "Produits d'entretien"
    },
    {
        number: 3223,
        system: "developed",
        label: "Fournitures d'atelier et d'usine"
    },
    {
        number: 3224,
        system: "developed",
        label: "Fournitures de magasin"
    },
    {
        number: 3225,
        system: "developed",
        label: "Fournitures de bureau"
    },
    {
        number: 326,
        system: "base",
        label: "Emballages"
    },
    {
        number: 3261,
        system: "developed",
        label: "Emballages perdus"
    },
    {
        number: 3265,
        system: "developed",
        label: "Emballages récupérables non identifiables"
    },
    {
        number: 3267,
        system: "developed",
        label: "Emballages à usage mixte"
    },
    {
        number: 33,
        system: "condensed",
        label: "En-cours de production de biens"
    },
    {
        number: 331,
        system: "base",
        label: "Produits en cours"
    },
    {
        number: 3311,
        system: "developed",
        label: "Produits en cours P1"
    },
    {
        number: 3312,
        system: "developed",
        label: "Produits en cours P2"
    },
    {
        number: 335,
        system: "base",
        label: "Travaux en cours"
    },
    {
        number: 3351,
        system: "developed",
        label: "Travaux en cours T1"
    },
    {
        number: 3352,
        system: "developed",
        label: "Travaux en cours T2"
    },
    {
        number: 34,
        system: "condensed",
        label: "En-cours de production de services"
    },
    {
        number: 341,
        system: "base",
        label: "Études en cours"
    },
    {
        number: 3411,
        system: "developed",
        label: "Études en cours E1"
    },
    {
        number: 3412,
        system: "developed",
        label: "Études en cours E2"
    },
    {
        number: 345,
        system: "base",
        label: "Prestations de services en cours"
    },
    {
        number: 3451,
        system: "developed",
        label: "Prestations de services S1"
    },
    {
        number: 3452,
        system: "developed",
        label: "Prestations de services S2"
    },
    {
        number: 35,
        system: "condensed",
        label: "Stocks de produits"
    },
    {
        number: 351,
        system: "base",
        label: "Produits intermédiaires"
    },
    {
        number: 3511,
        system: "developed",
        label: "Produits intermédiaires (ou groupe) A"
    },
    {
        number: 3512,
        system: "developed",
        label: "Produits intermédiaires (ou groupe) B"
    },
    {
        number: 355,
        system: "base",
        label: "Produits finis"
    },
    {
        number: 3551,
        system: "developed",
        label: "Produits finis (ou groupe) A"
    },
    {
        number: 3552,
        system: "developed",
        label: "Produits finis (ou groupe) B"
    },
    {
        number: 358,
        system: "base",
        label: "Produits résiduels (ou matières de récupération)"
    },
    {
        number: 3581,
        system: "developed",
        label: "Déchets"
    },
    {
        number: 3585,
        system: "developed",
        label: "Rebuts"
    },
    {
        number: 3586,
        system: "developed",
        label: "Matières de récupération"
    },
    {
        number: 36,
        system: "base",
        label: "Stocks provenant d'immobilisations"
    },
    {
        number: 37,
        system: "condensed",
        label: "Stocks de marchandises"
    },
    {
        number: 371,
        system: "developed",
        label: "Marchandises (ou groupe) A"
    },
    {
        number: 372,
        system: "developed",
        label: "Marchandises (ou groupe) B"
    },
    {
        number: 38,
        system: "base",
        label: "Stocks en voie d'acheminement, mis en dépôt ou donnés en consignation"
    },
    {
        number: 39,
        system: "base",
        label: "Dépréciations des stocks et en-cours"
    },
    {
        number: 391,
        system: "condensed",
        label: "Dépréciations des matières premières (et fournitures)"
    },
    {
        number: 3911,
        system: "developed",
        label: "Matières (ou groupe) A"
    },
    {
        number: 3912,
        system: "developed",
        label: "Matières (ou groupe) B"
    },
    {
        number: 3917,
        system: "developed",
        label: "Fournitures A, B, C, ..."
    },
    {
        number: 392,
        system: "condensed",
        label: "Dépréciations des autres approvisionnements"
    },
    {
        number: 3921,
        system: "developed",
        label: "Matières consommables (même ventilation que celle du compte 321)"
    },
    {
        number: 3922,
        system: "developed",
        label: "Fournitures consommables (même ventilation que celle du compte 322)"
    },
    {
        number: 3926,
        system: "developed",
        label: "Emballages (même ventilation que celle du compte 326)"
    },
    {
        number: 393,
        system: "condensed",
        label: "Dépréciations des en-cours de production de biens"
    },
    {
        number: 3931,
        system: "developed",
        label: "Produits en cours (même ventilation que celle du compte 331)"
    },
    {
        number: 3935,
        system: "developed",
        label: "Travaux en cours (même ventilation que celle du compte 335)"
    },
    {
        number: 394,
        system: "condensed",
        label: "Dépréciations des en-cours de production de services"
    },
    {
        number: 3941,
        system: "developed",
        label: "Études en cours (même ventilation que celle du compte 341)"
    },
    {
        number: 3945,
        system: "developed",
        label: "Prestations de services en cours (même ventilation que celle du compte 345)"
    },
    {
        number: 395,
        system: "condensed",
        label: "Dépréciations des stocks de produits"
    },
    {
        number: 3951,
        system: "developed",
        label: "Produits intermédiaires (même ventilation que celle du compte 351)"
    },
    {
        number: 3955,
        system: "developed",
        label: "Produits finis (même ventilation que celle du compte 355)"
    },
    {
        number: 397,
        system: "condensed",
        label: "Dépréciations des stocks de marchandises"
    },
    {
        number: 3971,
        system: "developed",
        label: "Marchandise (ou groupe) A"
    },
    {
        number: 3972,
        system: "developed",
        label: "Marchandise (ou groupe) B"
    },
    {
        number: 4,
        system: "condensed",
        label: "Comptes de tiers"
    },
    {
        number: 40,
        system: "condensed",
        label: "Fournisseurs et comptes rattachés"
    },
    {
        number: 401,
        system: "base",
        label: "Fournisseurs"
    },
    {
        number: 4011,
        system: "developed",
        label: "Fournisseurs - Achats de biens et prestations de services"
    },
    {
        number: 4017,
        system: "developed",
        label: "Fournisseurs - Retenues de garantie"
    },
    {
        number: 403,
        system: "base",
        label: "Fournisseurs - Effets à payer"
    },
    {
        number: 404,
        system: "base",
        label: "Fournisseurs d'immobilisations"
    },
    {
        number: 4041,
        system: "developed",
        label: "Fournisseurs - Achats d'immobilisations"
    },
    {
        number: 4047,
        system: "developed",
        label: "Fournisseurs d'immobilisations - Retenues de garantie"
    },
    {
        number: 405,
        system: "base",
        label: "Fournisseurs d'immobilisations - Effets à payer"
    },
    {
        number: 408,
        system: "base",
        label: "Fournisseurs - Factures non parvenues"
    },
    {
        number: 4081,
        system: "developed",
        label: "Fournisseurs"
    },
    {
        number: 4084,
        system: "developed",
        label: "Fournisseurs d'immobilisations"
    },
    {
        number: 4088,
        system: "developed",
        label: "Fournisseurs - Intérêts courus"
    },
    {
        number: 409,
        system: "condensed",
        label: "Fournisseurs débiteurs"
    },
    {
        number: 4091,
        system: "base",
        label: "Fournisseurs - Avances et acomptes versés sur commandes"
    },
    {
        number: 4096,
        system: "base",
        label: "Fournisseurs - Créances pour emballages et matériel à rendre"
    },
    {
        number: 4097,
        system: "base",
        label: "Fournisseurs - Autres avoirs"
    },
    {
        number: 40971,
        system: "developed",
        label: "Fournisseurs d'exploitation"
    },
    {
        number: 40974,
        system: "developed",
        label: "Fournisseurs d'immobilisations"
    },
    {
        number: 4098,
        system: "base",
        label: "Rabais, remises, ristournes à obtenir et autres avoirs non encore reçus"
    },
    {
        number: 41,
        system: "base",
        label: "Clients et comptes rattachés"
    },
    {
        number: 410,
        system: "condensed",
        label: "Clients et comptes rattachés"
    },
    {
        number: 411,
        system: "base",
        label: "Clients"
    },
    {
        number: 4111,
        system: "developed",
        label: "Clients - Ventes de biens ou de prestations de services"
    },
    {
        number: 4117,
        system: "developed",
        label: "Clients - Retenues de garantie"
    },
    {
        number: 413,
        system: "base",
        label: "Clients - Effets à recevoir"
    },
    {
        number: 416,
        system: "base",
        label: "Clients douteux ou litigieux"
    },
    {
        number: 418,
        system: "base",
        label: "Clients - Produits non encore facturés"
    },
    {
        number: 4181,
        system: "developed",
        label: "Clients - Factures à établir"
    },
    {
        number: 4188,
        system: "developed",
        label: "Clients - Intérêts courus"
    },
    {
        number: 419,
        system: "condensed",
        label: "Clients créditeurs"
    },
    {
        number: 4191,
        system: "base",
        label: "Clients - Avances et acomptes reçus sur commandes"
    },
    {
        number: 4196,
        system: "base",
        label: "Clients - Dettes sur emballages et matériels consignés"
    },
    {
        number: 4197,
        system: "base",
        label: "Clients - Autres avoirs"
    },
    {
        number: 4198,
        system: "base",
        label: "Rabais, remises, ristournes à accorder et autres avoirs à établir"
    },
    {
        number: 42,
        system: "base",
        label: "Personnel et comptes rattachés"
    },
    {
        number: 421,
        system: "condensed",
        label: "Personnel - Rémunérations dues"
    },
    {
        number: 422,
        system: "base",
        label: "Comités d'entreprises, d'établissement, ..."
    },
    {
        number: 424,
        system: "base",
        label: "Participation des salariés aux résultats"
    },
    {
        number: 4246,
        system: "developed",
        label: "Réserve spéciale"
    },
    {
        number: 4248,
        system: "developed",
        label: "Comptes courants"
    },
    {
        number: 425,
        system: "base",
        label: "Personnel - Avances et acomptes"
    },
    {
        number: 426,
        system: "base",
        label: "Personnel - Dépôts"
    },
    {
        number: 427,
        system: "base",
        label: "Personnel - Oppositions"
    },
    {
        number: 428,
        system: "condensed",
        label: "Personnel - Charges à payer et produits à recevoir"
    },
    {
        number: 4282,
        system: "developed",
        label: "Dettes provisionnées pour congés à payer"
    },
    {
        number: 4284,
        system: "developed",
        label: "Dettes provisionnées pour participation des salariés aux résultats"
    },
    {
        number: 4286,
        system: "developed",
        label: "Autres charges à payer"
    },
    {
        number: 4287,
        system: "developed",
        label: "Produits à recevoir"
    },
    {
        number: 43,
        system: "condensed",
        label: "Sécurité sociale et autres organismes sociaux"
    },
    {
        number: 431,
        system: "base",
        label: "Sécurité sociale"
    },
    {
        number: 437,
        system: "base",
        label: "Autres organismes sociaux"
    },
    {
        number: 438,
        system: "base",
        label: "Organismes sociaux - Charges à payer et produits à recevoir"
    },
    {
        number: 4382,
        system: "developed",
        label: "Charges sociales sur congés à payer"
    },
    {
        number: 4386,
        system: "developed",
        label: "Autres charges à payer"
    },
    {
        number: 4387,
        system: "developed",
        label: "Produits à recevoir"
    },
    {
        number: 44,
        system: "base",
        label: "État et autres collectivités publiques"
    },
    {
        number: 441,
        system: "base",
        label: "État - Subventions à recevoir"
    },
    {
        number: 4411,
        system: "developed",
        label: "Subventions d'investissement"
    },
    {
        number: 4417,
        system: "developed",
        label: "Subventions d'exploitation"
    },
    {
        number: 4418,
        system: "developed",
        label: "Subventions d'équilibre"
    },
    {
        number: 4419,
        system: "developed",
        label: "Avances sur subventions"
    },
    {
        number: 442,
        system: "base",
        label: "Contributions, impôts et taxes recouvrés pour le compte de l'État"
    },
    {
        number: 4421,
        system: "base",
        label: "Prélèvements à la source (Impôt sur le revenu)"
    },
    {
        number: 4422,
        system: "base",
        label: "Prélèvements forfaitaires non libératoires"
    },
    {
        number: 4423,
        system: "base",
        label: "Retenues et prélèvements sur les distributions"
    },
    {
        number: 4424,
        system: "developed",
        label: "Obligataires"
    },
    {
        number: 4425,
        system: "developed",
        label: "Associés"
    },
    {
        number: 443,
        system: "base",
        label: "Opérations particulières avec l'État, les collectivités publiques, les organismes internationaux"
    },
    {
        number: 4431,
        system: "base",
        label: "Créances sur l'État résultant de la suppression de la règle du décalage d'un mois en matière de TVA"
    },
    {
        number: 4438,
        system: "base",
        label: "Intérêts courus sur créances figurant au 4431"
    },
    {
        number: 444,
        system: "condensed",
        label: "État - Impôts sur les bénéfices"
    },
    {
        number: 445,
        system: "condensed",
        label: "État - Taxes sur le chiffre d'affaires"
    },
    {
        number: 4452,
        system: "base",
        label: "TVA due intracommunautaire"
    },
    {
        number: 4453,
        system: "base",
        label: "TVA due extracommunautaire"
    },
    {
        number: 4455,
        system: "base",
        label: "Taxes sur le chiffre d'affaires à décaisser"
    },
    {
        number: 44551,
        system: "developed",
        label: "TVA à décaisser"
    },
    {
        number: 44558,
        system: "developed",
        label: "Taxes assimilées à la TVA"
    },
    {
        number: 4456,
        system: "base",
        label: "Taxes sur le chiffre d'affaires déductibles"
    },
    {
        number: 44562,
        system: "developed",
        label: "TVA sur immobilisations"
    },
    {
        number: 44563,
        system: "developed",
        label: "TVA transférée par d'autres entreprises"
    },
    {
        number: 44566,
        system: "developed",
        label: "TVA sur autres biens et services"
    },
    {
        number: 445662,
        system: "developed",
        label: "TVA déductible intracommunautaire"
    },
    {
        number: 445663,
        system: "developed",
        label: "TVA déductible extracommunautaire"
    },
    {
        number: 44567,
        system: "developed",
        label: "Crédit de TVA à reporter"
    },
    {
        number: 44568,
        system: "developed",
        label: "Taxes assimilées à la TVA"
    },
    {
        number: 4457,
        system: "base",
        label: "Taxes sur le chiffre d'affaires collectées par l'entreprise"
    },
    {
        number: 44571,
        system: "developed",
        label: "TVA collectée"
    },
    {
        number: 44578,
        system: "developed",
        label: "Taxes assimilées à la TVA"
    },
    {
        number: 4458,
        system: "base",
        label: "Taxes sur le chiffre d'affaires à régulariser ou en attente"
    },
    {
        number: 44581,
        system: "developed",
        label: "Acomptes - Régime simplifié d'imposition"
    },
    {
        number: 44582,
        system: "developed",
        label: "Acomptes - Régime de forfait"
    },
    {
        number: 44583,
        system: "developed",
        label: "Remboursement de taxes sur le chiffre d'affaires demandé"
    },
    {
        number: 44584,
        system: "developed",
        label: "TVA récupérée d'avance"
    },
    {
        number: 44586,
        system: "developed",
        label: "Taxes sur le chiffre d'affaires sur factures non parvenues"
    },
    {
        number: 44587,
        system: "developed",
        label: "Taxes sur le chiffre d'affaires sur factures à établir"
    },
    {
        number: 446,
        system: "base",
        label: "Obligations cautionnées"
    },
    {
        number: 447,
        system: "condensed",
        label: "Autres impôts, taxes et versements assimilés"
    },
    {
        number: 448,
        system: "base",
        label: "État - Charges à payer et produits à recevoir"
    },
    {
        number: 4482,
        system: "developed",
        label: "Charges fiscales sur congés à payer"
    },
    {
        number: 4486,
        system: "developed",
        label: "Charges à payer"
    },
    {
        number: 4487,
        system: "developed",
        label: "Produits à recevoir"
    },
    {
        number: 449,
        system: "base",
        label: "Quotas d'émission à acquérir"
    },
    {
        number: 45,
        system: "condensed",
        label: "Groupe et associés"
    },
    {
        number: 451,
        system: "base",
        label: "Groupe"
    },
    {
        number: 455,
        system: "condensed",
        label: "Associés - Comptes courants"
    },
    {
        number: 4551,
        system: "developed",
        label: "Principal"
    },
    {
        number: 4558,
        system: "developed",
        label: "Intérêts courus"
    },
    {
        number: 456,
        system: "base",
        label: "Associés - Opérations sur le capital"
    },
    {
        number: 4561,
        system: "developed",
        label: "Associés - Comptes d'apport en société"
    },
    {
        number: 45611,
        system: "developed",
        label: "Apports en nature"
    },
    {
        number: 45615,
        system: "developed",
        label: "Apports en numéraire"
    },
    {
        number: 4562,
        system: "developed",
        label: "Apporteurs - Capital appelé, non versé"
    },
    {
        number: 45621,
        system: "developed",
        label: "Actionnaires - Capital souscrit et appelé, non versé"
    },
    {
        number: 45625,
        system: "developed",
        label: "Associés - Capital appelé, non versé"
    },
    {
        number: 4563,
        system: "developed",
        label: "Associés - Versements reçus sur augmentation de capital"
    },
    {
        number: 4564,
        system: "developed",
        label: "Associés - Versements anticipés"
    },
    {
        number: 4566,
        system: "developed",
        label: "Actionnaires défaillants"
    },
    {
        number: 4567,
        system: "developed",
        label: "Associés - Capital à rembourser"
    },
    {
        number: 457,
        system: "base",
        label: "Associés - Dividendes à payer"
    },
    {
        number: 458,
        system: "base",
        label: "Associés - Opérations faites en commun et en GIE"
    },
    {
        number: 4581,
        system: "developed",
        label: "Opérations courantes"
    },
    {
        number: 4588,
        system: "developed",
        label: "Intérêts courus"
    },
    {
        number: 46,
        system: "condensed",
        label: "Débiteurs divers et créditeurs divers"
    },
    {
        number: 462,
        system: "developed",
        label: "Créances sur cessions d'immobilisations"
    },
    {
        number: 464,
        system: "developed",
        label: "Dettes sur acquisitions de valeurs mobilières de placement"
    },
    {
        number: 465,
        system: "developed",
        label: "Créances sur cessions de valeurs mobilières de placement"
    },
    {
        number: 467,
        system: "developed",
        label: "Autres comptes débiteurs ou créditeurs"
    },
    {
        number: 468,
        system: "developed",
        label: "Divers - Charges à payer et produits à recevoir"
    },
    {
        number: 4686,
        system: "developed",
        label: "Charges à payer"
    },
    {
        number: 4687,
        system: "developed",
        label: "Produits à recevoir"
    },
    {
        number: 47,
        system: "condensed",
        label: "Comptes transitoires ou d'attente"
    },
    {
        number: 471,
        system: "base",
        label: "Comptes d'attente"
    },
    {
        number: 472,
        system: "base",
        label: "Comptes d'attente"
    },
    {
        number: 473,
        system: "base",
        label: "Comptes d'attente"
    },
    {
        number: 474,
        system: "base",
        label: "Différences d'évaluation de jetons sur des passifs"
    },
    {
        number: 4746,
        system: "developed",
        label: "Différence d'évaluation de jetons sur des passifs - Actif"
    },
    {
        number: 4747,
        system: "developed",
        label: "Différence d'évaluation de jetons sur des passifs - Passif"
    },
    {
        number: 475,
        system: "base",
        label: "Comptes d'attente"
    },
    {
        number: 476,
        system: "base",
        label: "Différence de conversion - Actif"
    },
    {
        number: 4761,
        system: "developed",
        label: "Diminution des créances"
    },
    {
        number: 4762,
        system: "developed",
        label: "Augmentation des dettes"
    },
    {
        number: 4768,
        system: "developed",
        label: "Différences compensées par couverture de change"
    },
    {
        number: 477,
        system: "base",
        label: "Différences de conversion - Passif"
    },
    {
        number: 4771,
        system: "developed",
        label: "Augmentation des créances"
    },
    {
        number: 4772,
        system: "developed",
        label: "Diminution des dettes"
    },
    {
        number: 4778,
        system: "developed",
        label: "Différences compensées par couverture de change"
    },
    {
        number: 478,
        system: "base",
        label: "Autres comptes transitoires"
    },
    {
        number: 4786,
        system: "developed",
        label: "Différences d'évaluation - Actif"
    },
    {
        number: 47861,
        system: "developed",
        label: "Différences d'évaluation sur instruments financier à terme - Actif"
    },
    {
        number: 47862,
        system: "developed",
        label: "Différences d'évaluation sur jetons détenus - Actif"
    },
    {
        number: 4787,
        system: "developed",
        label: "Différences d'évaluation - Passif"
    },
    {
        number: 47871,
        system: "developed",
        label: "Différences d'évaluation sur instruments financier à terme - Passif"
    },
    {
        number: 47872,
        system: "developed",
        label: "Différences d'évaluation sur jetons détenus - Passif"
    },
    {
        number: 48,
        system: "base",
        label: "Comptes de régularisation"
    },
    {
        number: 481,
        system: "condensed",
        label: "Charges à répartir sur plusieurs exercices"
    },
    {
        number: 4811,
        system: "developed",
        label: "Charges différées"
    },
    {
        number: 4812,
        system: "developed",
        label: "Frais d'acquisition des immobilisations"
    },
    {
        number: 4816,
        system: "developed",
        label: "Frais d'émission des emprunts"
    },
    {
        number: 4818,
        system: "developed",
        label: "Charges à étaler"
    },
    {
        number: 486,
        system: "condensed",
        label: "Charges constatées d'avance"
    },
    {
        number: 487,
        system: "condensed",
        label: "Produits constatés d'avance"
    },
    {
        number: 4871,
        system: "base",
        label: "Produits constatés d'avance sur jetons émis"
    },
    {
        number: 488,
        system: "base",
        label: "Comptes de répartition périodique des charges et des produits"
    },
    {
        number: 4886,
        system: "developed",
        label: "Charges"
    },
    {
        number: 4887,
        system: "developed",
        label: "Produits"
    },
    {
        number: 489,
        system: "base",
        label: "Quotas d'émission alloués par l'État"
    },
    {
        number: 49,
        system: "base",
        label: "Dépréciations des comptes de tiers"
    },
    {
        number: 491,
        system: "condensed",
        label: "Dépréciations des comptes de clients"
    },
    {
        number: 495,
        system: "base",
        label: "Dépréciations des comptes du groupe et des associés"
    },
    {
        number: 4951,
        system: "base",
        label: "Comptes du groupe"
    },
    {
        number: 4955,
        system: "base",
        label: "Comptes courants des associés"
    },
    {
        number: 4958,
        system: "base",
        label: "Opérations faites en commun et en GIE"
    },
    {
        number: 496,
        system: "condensed",
        label: "Dépréciations des comptes de débiteurs divers"
    },
    {
        number: 4962,
        system: "developed",
        label: "Créances sur cessions d'immobilisations"
    },
    {
        number: 4965,
        system: "developed",
        label: "Créances sur cessions de valeurs mobilières de placement"
    },
    {
        number: 4967,
        system: "developed",
        label: "Autres comptes débiteurs"
    },
    {
        number: 5,
        system: "condensed",
        label: "Comptes financiers"
    },
    {
        number: 50,
        system: "condensed",
        label: "Valeurs mobilières de placement"
    },
    {
        number: 501,
        system: "base",
        label: "Parts dans des entreprises liées"
    },
    {
        number: 502,
        system: "base",
        label: "Actions propres"
    },
    {
        number: 5021,
        system: "developed",
        label: "Actions destinées à être attribuées aux employés et affectées à des plans déterminés"
    },
    {
        number: 5022,
        system: "developed",
        label: "Actions disponibles pour être attribuées aux employés ou pour la régularisation des cours de bourse"
    },
    {
        number: 503,
        system: "base",
        label: "Actions"
    },
    {
        number: 5031,
        system: "developed",
        label: "Titres cotés"
    },
    {
        number: 5035,
        system: "developed",
        label: "Titres non cotés"
    },
    {
        number: 504,
        system: "base",
        label: "Autres titres conférant un droit de propriété"
    },
    {
        number: 505,
        system: "base",
        label: "Obligations et bons émis par la société et rachetés par elle"
    },
    {
        number: 506,
        system: "base",
        label: "Obligations"
    },
    {
        number: 5061,
        system: "developed",
        label: "Titres cotés"
    },
    {
        number: 5065,
        system: "developed",
        label: "Titres non cotés"
    },
    {
        number: 507,
        system: "base",
        label: "Bons du Trésor et bons de caisse à court terme"
    },
    {
        number: 508,
        system: "base",
        label: "Autres valeurs mobilières de placement et autres créances assimilées"
    },
    {
        number: 5081,
        system: "developed",
        label: "Autres valeurs mobilières"
    },
    {
        number: 5082,
        system: "developed",
        label: "Bons de souscription"
    },
    {
        number: 5088,
        system: "developed",
        label: "Intérêts courus sur obligations, bons et valeurs assimilés"
    },
    {
        number: 509,
        system: "base",
        label: "Versements restant à effectuer sur valeurs mobilières de placement non libérées"
    },
    {
        number: 51,
        system: "condensed",
        label: "Banques, établissements financiers et assimilés"
    },
    {
        number: 511,
        system: "base",
        label: "Valeurs à l'encaissement"
    },
    {
        number: 5111,
        system: "developed",
        label: "Coupons échus à l'encaissement"
    },
    {
        number: 5112,
        system: "developed",
        label: "Chèques à encaisser"
    },
    {
        number: 5113,
        system: "developed",
        label: "Effets à l'encaissement"
    },
    {
        number: 5114,
        system: "developed",
        label: "Effets à l'escompte"
    },
    {
        number: 512,
        system: "base",
        label: "Banques"
    },
    {
        number: 5121,
        system: "developed",
        label: "Comptes en monnaie nationale"
    },
    {
        number: 5124,
        system: "developed",
        label: "Comptes en devises"
    },
    {
        number: 514,
        system: "base",
        label: "Chèques postaux"
    },
    {
        number: 515,
        system: "base",
        label: "Caisses du Trésor et des établissements publics"
    },
    {
        number: 516,
        system: "base",
        label: "Sociétés de bourse"
    },
    {
        number: 517,
        system: "base",
        label: "Autres organismes financiers"
    },
    {
        number: 518,
        system: "base",
        label: "Intérêts courus"
    },
    {
        number: 5181,
        system: "developed",
        label: "Intérêts courus à payer"
    },
    {
        number: 5188,
        system: "developed",
        label: "Intérêts courus à recevoir"
    },
    {
        number: 519,
        system: "base",
        label: "Concours bancaires courants"
    },
    {
        number: 5191,
        system: "developed",
        label: "Crédit de mobilisation de créances commerciales"
    },
    {
        number: 5193,
        system: "developed",
        label: "Mobilisation de créances nées à l'étranger"
    },
    {
        number: 5198,
        system: "developed",
        label: "Intérêts courus sur concours bancaires courants"
    },
    {
        number: 52,
        system: "base",
        label: "Instruments financiers à terme et jetons détenus"
    },
    {
        number: 521,
        system: "developed",
        label: "Instruments financiers à terme"
    },
    {
        number: 522,
        system: "developed",
        label: "Jetons détenus"
    },
    {
        number: 523,
        system: "developed",
        label: "Jetons auto-détenus"
    },
    {
        number: 524,
        system: "developed",
        label: "Jetons empruntés"
    },
    {
        number: 53,
        system: "condensed",
        label: "Caisse"
    },
    {
        number: 531,
        system: "base",
        label: "Caisse siège social"
    },
    {
        number: 5311,
        system: "developed",
        label: "Caisse en monnaie nationale"
    },
    {
        number: 5314,
        system: "developed",
        label: "Caisse en devises"
    },
    {
        number: 532,
        system: "developed",
        label: "Caisse succursale (ou usine) A"
    },
    {
        number: 533,
        system: "developed",
        label: "Caisse succursale (ou usine) B"
    },
    {
        number: 54,
        system: "condensed",
        label: "Régies d'avance et accréditifs"
    },
    {
        number: 58,
        system: "condensed",
        label: "Virements internes"
    },
    {
        number: 59,
        system: "base",
        label: "Dépréciations des comptes financiers"
    },
    {
        number: 590,
        system: "condensed",
        label: "Dépréciations des valeurs mobilières de placement"
    },
    {
        number: 5903,
        system: "base",
        label: "Actions"
    },
    {
        number: 5904,
        system: "base",
        label: "Autres titres conférant un droit de propriété"
    },
    {
        number: 5906,
        system: "base",
        label: "Obligations"
    },
    {
        number: 5908,
        system: "base",
        label: "Autres valeurs mobilières de placement et créances assimilées"
    },
    {
        number: 6,
        system: "condensed",
        label: "Comptes de charges"
    },
    {
        number: 60,
        system: "condensed",
        label: "Achats (sauf 603)"
    },
    {
        number: 601,
        system: "base",

        label: "Achats stockés - Matières premières (et fournitures)"
    },
    {
        number: 6011,
        system: "developed",
        label: "Matières (ou groupe) A"
    },
    {
        number: 6012,
        system: "developed",
        label: "Matières (ou groupe) B"
    },
    {
        number: 6017,
        system: "developed",
        label: "Fournitures A, B, C, ..."
    },
    {
        number: 602,
        system: "base",

        label: "Achats stockés - Autres approvisionnements"
    },
    {
        number: 6021,
        system: "base",

        label: "Matières consommables"
    },
    {
        number: 60211,
        system: "developed",
        label: "Matières (ou groupe) C"
    },
    {
        number: 60212,
        system: "developed",
        label: "Matières (ou groupe) D"
    },
    {
        number: 6022,
        system: "base",

        label: "Fournitures consommables"
    },
    {
        number: 60221,
        system: "developed",
        label: "Combustibles"
    },
    {
        number: 60222,
        system: "developed",
        label: "Produits d'entretien"
    },
    {
        number: 60223,
        system: "developed",
        label: "Fournitures d'atelier et d'usine"
    },
    {
        number: 60224,
        system: "developed",
        label: "Fournitures de magasin"
    },
    {
        number: 60225,
        system: "developed",
        label: "Fourniture de bureau"
    },
    {
        number: 6026,
        system: "base",

        label: "Emballages"
    },
    {
        number: 60261,
        system: "developed",
        label: "Emballages perdus"
    },
    {
        number: 60265,
        system: "developed",
        label: "Emballages récupérables non identifiables"
    },
    {
        number: 60267,
        system: "developed",
        label: "Emballages à usage mixte"
    },
    {
        number: 603,
        system: "condensed",
        label: "Variations des stocks (approvisionnements et marchandises)"
    },
    {
        number: 6031,
        system: "base",
        label: "Variation des stocks de matières premières (et fournitures)"
    },
    {
        number: 6032,
        system: "base",
        label: "Variation des stocks des autres approvisionnements"
    },
    {
        number: 6037,
        system: "base",
        label: "Variation des stocks de marchandises"
    },
    {
        number: 604,
        system: "base",
        label: "Achats d'études et prestations de services"
    },
    {
        number: 605,
        system: "base",
        label: "Achats de matériel, équipements et travaux"
    },
    {
        number: 606,
        system: "base",

        label: "Achats non stockés de matière et fournitures"
    },
    {
        number: 6061,
        system: "developed",
        label: "Fournitures non stockables (eau, énergie, ...)"
    },
    {
        number: 6063,
        system: "developed",
        label: "Fournitures d'entretien et de petit équipement"
    },
    {
        number: 6064,
        system: "developed",
        label: "Fournitures administratives"
    },
    {
        number: 6068,
        system: "developed",
        label: "Autres matières et fournitures"
    },
    {
        number: 607,
        system: "base",

        label: "Achats de marchandises"
    },
    {
        number: 6071,
        system: "developed",
        label: "Marchandise (ou groupe) A"
    },
    {
        number: 6072,
        system: "developed",
        label: "Marchandise (ou groupe) B"
    },
    {
        number: 608,
        system: "base",
        label: "Récapitulation des frais accessoires incorporés aux achats"
    },
    {
        number: 609,
        system: "base",
        label: "Rabais, remises et ristournes obtenus sur achats"
    },
    {
        number: 6091,
        system: "developed",
        label: "de matières premières (et fournitures)"
    },
    {
        number: 6092,
        system: "developed",
        label: "d'autres approvisionnements stockés"
    },
    {
        number: 6094,
        system: "developed",
        label: "d'études et prestations de services"
    },
    {
        number: 6095,
        system: "developed",
        label: "de matériel, équipements et travaux"
    },
    {
        number: 6096,
        system: "developed",
        label: "d'approvisionnements non stockés"
    },
    {
        number: 6097,
        system: "developed",
        label: "de marchandises"
    },
    {
        number: 6098,
        system: "developed",
        label: "Rabais, remises et ristournes non affectés"
    },
    {
        number: 61,
        system: "condensed",

        label: "Services extérieurs"
    },
    {
        number: 611,
        system: "base",
        label: "Sous-traitance générale"
    },
    {
        number: 612,
        system: "base",

        label: "Redevances de crédit-bail"
    },
    {
        number: 6122,
        system: "base",
        label: "Crédit-bail mobilier"
    },
    {
        number: 6125,
        system: "base",
        label: "Crédit-bail immobilier"
    },
    {
        number: 613,
        system: "base",

        label: "Locations"
    },
    {
        number: 6132,
        system: "developed",
        label: "Locations immobilières"
    },
    {
        number: 6135,
        system: "developed",
        label: "Locations mobilières"
    },
    {
        number: 6136,
        system: "developed",
        label: "Malis sur emballages"
    },
    {
        number: 614,
        system: "base",
        label: "Charges locatives et de copropriété"
    },
    {
        number: 615,
        system: "base",

        label: "Entretien et réparations"
    },
    {
        number: 6152,
        system: "developed",
        label: "sur biens immobiliers"
    },
    {
        number: 6155,
        system: "developed",
        label: "sur biens mobiliers"
    },
    {
        number: 6156,
        system: "developed",
        label: "Maintenance"
    },
    {
        number: 616,
        system: "base",

        label: "Primes d'assurances"
    },
    {
        number: 6161,
        system: "developed",
        label: "Multirisques"
    },
    {
        number: 6162,
        system: "developed",
        label: "Assurance obligatoire dommage construction"
    },
    {
        number: 6163,
        system: "developed",

        label: "Assurance transport"
    },
    {
        number: 61636,
        system: "developed",
        label: "sur achats"
    },
    {
        number: 61637,
        system: "developed",
        label: "sur ventes"
    },
    {
        number: 61638,
        system: "developed",
        label: "sur autres biens"
    },
    {
        number: 6164,
        system: "developed",
        label: "Risques d'exploitation"
    },
    {
        number: 6165,
        system: "developed",
        label: "Insolvabilité clients"
    },
    {
        number: 617,
        system: "base",
        label: "Études et recherches"
    },
    {
        number: 618,
        system: "base",

        label: "Divers"
    },
    {
        number: 6181,
        system: "developed",
        label: "Documentation générale"
    },
    {
        number: 6183,
        system: "developed",
        label: "Documentation technique"
    },
    {
        number: 6185,
        system: "developed",
        label: "Frais de colloques, séminaires, conférences"
    },
    {
        number: 619,
        system: "base",
        label: "Rabais, remises et ristournes obtenus sur services extérieurs"
    },
    {
        number: 62,
        system: "condensed",

        label: "Autres services extérieurs"
    },
    {
        number: 621,
        system: "base",

        label: "Personnel extérieur à l'entreprise"
    },
    {
        number: 6211,
        system: "developed",
        label: "Personnel intérimaire"
    },
    {
        number: 6214,
        system: "developed",
        label: "Personnel détaché ou prêté à l'entreprise"
    },
    {
        number: 622,
        system: "base",

        label: "Rémunérations d'intermédiaires et honoraires"
    },
    {
        number: 6221,
        system: "developed",
        label: "Commissions et courtages sur achats"
    },
    {
        number: 6222,
        system: "developed",
        label: "Commissions et courtages sur ventes"
    },
    {
        number: 6224,
        system: "developed",
        label: "Rémunérations des transitaires"
    },
    {
        number: 6225,
        system: "developed",
        label: "Rémunérations d'affacturage"
    },
    {
        number: 6226,
        system: "developed",
        label: "Honoraires"
    },
    {
        number: 6227,
        system: "developed",
        label: "Frais d'actes et de contentieux"
    },
    {
        number: 6228,
        system: "developed",
        label: "Divers"
    },
    {
        number: 623,
        system: "base",

        label: "Publicité, publications, relations publiques"
    },
    {
        number: 6231,
        system: "developed",
        label: "Annonces et insertions"
    },
    {
        number: 6232,
        system: "developed",
        label: "Échantillons"
    },
    {
        number: 6233,
        system: "developed",
        label: "Foires et expositions"
    },
    {
        number: 6234,
        system: "developed",
        label: "Cadeaux à la clientèle"
    },
    {
        number: 6235,
        system: "developed",
        label: "Primes"
    },
    {
        number: 6236,
        system: "developed",
        label: "Catalogues et imprimés"
    },
    {
        number: 6237,
        system: "developed",
        label: "Publications"
    },
    {
        number: 6238,
        system: "developed",
        label: "Divers (pourboires, dons courants, ...)"
    },
    {
        number: 624,
        system: "base",

        label: "Transports de biens et transports collectifs du personnel"
    },
    {
        number: 6241,
        system: "developed",
        label: "Transports sur achats"
    },
    {
        number: 6242,
        system: "developed",
        label: "Transports sur ventes"
    },
    {
        number: 6243,
        system: "developed",
        label: "Transports entre établissements ou chantiers"
    },
    {
        number: 6244,
        system: "developed",
        label: "Transports administratifs"
    },
    {
        number: 6247,
        system: "developed",
        label: "Transports collectifs du personnel"
    },
    {
        number: 6248,
        system: "developed",
        label: "Divers"
    },
    {
        number: 625,
        system: "base",

        label: "Déplacements, missions et réceptions"
    },
    {
        number: 6251,
        system: "developed",
        label: "Voyages et déplacements"
    },
    {
        number: 6255,
        system: "developed",
        label: "Frais de déménagement"
    },
    {
        number: 6256,
        system: "developed",
        label: "Missions"
    },
    {
        number: 6257,
        system: "developed",
        label: "Réceptions"
    },
    {
        number: 626,
        system: "base",
        label: "Frais postaux et de télécommunications"
    },
    {
        number: 627,
        system: "base",

        label: "Services bancaires et assimilés"
    },
    {
        number: 6271,
        system: "developed",
        label: "Frais sur titres (achat, vente, garde)"
    },
    {
        number: 6272,
        system: "developed",
        label: "Commissions et frais sur émission d'emprunts"
    },
    {
        number: 6275,
        system: "developed",
        label: "Frais sur effets"
    },
    {
        number: 6276,
        system: "developed",
        label: "Location de coffres"
    },
    {
        number: 6278,
        system: "developed",
        label: "Autres frais et commissions sur prestations de services"
    },
    {
        number: 628,
        system: "base",

        label: "Divers"
    },
    {
        number: 6281,
        system: "developed",
        label: "Concours divers (cotisations, ...)"
    },
    {
        number: 6284,
        system: "developed",
        label: "Frais de recrutement de personnel"
    },
    {
        number: 629,
        system: "base",
        label: "Rabais, remises et ristournes obtenus sur autres services extérieurs"
    },
    {
        number: 63,
        system: "condensed",

        label: "Impôts, taxes et versements assimilés"
    },
    {
        number: 631,
        system: "base",

        label: "Impôts, taxes et versements assimilés sur rémunérations (administrations des impôts)"
    },
    {
        number: 6311,
        system: "developed",
        label: "Taxe sur les salaires"
    },
    {
        number: 6312,
        system: "developed",
        label: "Taxe d'apprentissage"
    },
    {
        number: 6313,
        system: "developed",
        label: "Participation des employeurs à la formation professionnelle continue"
    },
    {
        number: 6314,
        system: "developed",
        label: "Cotisation pour défaut d'investissement obligatoire dans la construction"
    },
    {
        number: 6318,
        system: "developed",
        label: "Autres"
    },
    {
        number: 633,
        system: "base",

        label: "Impôts, taxes et versements assimilés sur rémunérations (autres organismes)"
    },
    {
        number: 6331,
        system: "developed",
        label: "Versement de transport"
    },
    {
        number: 6332,
        system: "developed",
        label: "Allocations logement"
    },
    {
        number: 6333,
        system: "developed",
        label: "Contribution unique des employeurs à la formation professionnelle"
    },
    {
        number: 6334,
        system: "developed",
        label: "Participation des employeurs à l'effort de construction"
    },
    {
        number: 6335,
        system: "developed",
        label: "Versements libératoires ouvrant droit à l'exonération de la taxe d'apprentissage"
    },
    {
        number: 6338,
        system: "developed",
        label: "Autres"
    },
    {
        number: 635,
        system: "base",

        label: "Autres impôts, taxes et versements assimilés (administrations des impôts)"
    },
    {
        number: 6351,
        system: "developed",

        label: "Impôts directs (sauf impôts sur les bénéfices)"
    },
    {
        number: 63511,
        system: "developed",
        label: "Contribution économique territoriale"
    },
    {
        number: 63512,
        system: "developed",
        label: "Taxes foncières"
    },
    {
        number: 63513,
        system: "developed",
        label: "Autres impôts locaux"
    },
    {
        number: 63514,
        system: "developed",
        label: "Taxe sur les véhicules des sociétés"
    },
    {
        number: 6352,
        system: "developed",
        label: "Taxe sur le chiffre d'affaires non récupérables"
    },
    {
        number: 6353,
        system: "developed",
        label: "Impôts indirects"
    },
    {
        number: 6354,
        system: "developed",

        label: "Droits d'enregistrement et de timbre"
    },
    {
        number: 63541,
        system: "developed",
        label: "Droits de mutation"
    },
    {
        number: 6358,
        system: "base",
        label: "Autres droits"
    },
    {
        number: 637,
        system: "base",

        label: "Autres impôts, taxes et versements assimilés (autres organismes)"
    },
    {
        number: 6371,
        system: "developed",
        label: "Contribution sociale de solidarité à la charge des sociétés"
    },
    {
        number: 6372,
        system: "developed",
        label: "Taxes perçues par les organismes publics internationaux"
    },
    {
        number: 6374,
        system: "developed",
        label: "Impôts et taxes exigibles à l'Étranger"
    },
    {
        number: 6378,
        system: "developed",
        label: "Taxes diverses"
    },
    {
        number: 64,
        system: "base",
        label: "Charges de personnel"
    },
    {
        number: 641,
        system: "condensed",

        label: "Rémunérations du personnel"
    },
    {
        number: 6411,
        system: "developed",
        label: "Salaires, appointements"
    },
    {
        number: 6412,
        system: "developed",
        label: "Congés payés"
    },
    {
        number: 6413,
        system: "developed",
        label: "Primes et gratifications"
    },
    {
        number: 6414,
        system: "developed",
        label: "Indemnités et avantages divers"
    },
    {
        number: 6415,
        system: "developed",
        label: "Supplément familial"
    },
    {
        number: 644,
        system: "condensed",
        label: "Rémunération du travail de l'exploitant"
    },
    {
        number: 645,
        system: "condensed",

        label: "Charges de sécurité sociale et de prévoyance"
    },
    {
        number: 6451,
        system: "developed",
        label: "Cotisations à l'URSSAF"
    },
    {
        number: 6452,
        system: "developed",
        label: "Cotisations aux mutuelles"
    },
    {
        number: 6453,
        system: "developed",
        label: "Cotisations aux caisses de retraites"
    },
    {
        number: 6454,
        system: "developed",
        label: "Cotisations aux ASSEDIC"
    },
    {
        number: 6458,
        system: "developed",
        label: "Cotisations aux autres organismes sociaux"
    },
    {
        number: 646,
        system: "condensed",
        label: "Cotisations sociales personnelles de l'exploitant"
    },
    {
        number: 647,
        system: "base",

        label: "Autres charges sociales"
    },
    {
        number: 6471,
        system: "developed",
        label: "Prestations directes"
    },
    {
        number: 6472,
        system: "developed",
        label: "Versements aux comités d'entreprise et d'établissement"
    },
    {
        number: 6473,
        system: "developed",
        label: "Versements aux comités d'hygiène et de sécurité"
    },
    {
        number: 6474,
        system: "developed",
        label: "Versements aux autres œuvres sociales"
    },
    {
        number: 6475,
        system: "developed",
        label: "Médecine du travail, pharmacie"
    },
    {
        number: 648,
        system: "base",
        label: "Autres charges de personnel"
    },
    {
        number: 65,
        system: "condensed",
        label: "Autres charges de gestion courante"
    },
    {
        number: 651,
        system: "base",

        label: "Redevances pour concessions, brevets, licences, marques, procédés, logiciels, droits et valeurs similaires"
    },
    {
        number: 6511,
        system: "developed",
        label: "Redevances pour concessions, brevets, licences, marques, procédés, logiciels"
    },
    {
        number: 6516,
        system: "developed",
        label: "Droits d'auteur et de reproduction"
    },
    {
        number: 6518,
        system: "developed",
        label: "Autres droits et valeurs similaires"
    },
    {
        number: 653,
        system: "base",
        label: "Jetons de présence"
    },
    {
        number: 654,
        system: "base",

        label: "Pertes sur créances irrécouvrables"
    },
    {
        number: 6541,
        system: "developed",
        label: "Créances de l'exercice"
    },
    {
        number: 6544,
        system: "developed",
        label: "Créances des exercices antérieurs"
    },
    {
        number: 655,
        system: "base",

        label: "Quote-part de résultat sur opérations faites en commun"
    },
    {
        number: 6551,
        system: "developed",
        label: "Quote-part de bénéfice transférée (comptabilité du gérant)"
    },
    {
        number: 6555,
        system: "developed",
        label: "Quote-part de perte supportée (comptabilité des associés non gérants)"
    },
    {
        number: 656,
        system: "base",
        label: "Pertes de change sur créances commerciales"
    },
    {
        number: 658,
        system: "base",
        label: "Charges diverses de gestion courante"
    },
    {
        number: 66,
        system: "condensed",
        label: "Charges financières"
    },
    {
        number: 661,
        system: "base",

        label: "Charges d'intérêts"
    },
    {
        number: 6611,
        system: "developed",

        label: "Intérêts des emprunts et dettes"
    },
    {
        number: 66116,
        system: "developed",
        label: "des emprunts et dettes assimilées"
    },
    {
        number: 66117,
        system: "developed",
        label: "des dettes rattachées à des participations"
    },
    {
        number: 6612,
        system: "developed",
        label: "Charges de la fiducie, résultat de la période"
    },
    {
        number: 6615,
        system: "developed",
        label: "Intérêts des comptes courants et des dépôts créditeurs"
    },
    {
        number: 6616,
        system: "developed",
        label: "Intérêts bancaires et sur opérations de financement (escompte, ...)"
    },
    {
        number: 6617,
        system: "developed",
        label: "Intérêts des obligations cautionnées"
    },
    {
        number: 6618,
        system: "developed",

        label: "Intérêts des autres dettes"
    },
    {
        number: 66181,
        system: "developed",
        label: "des dettes commerciales"
    },
    {
        number: 66188,
        system: "developed",
        label: "des dettes diverses"
    },
    {
        number: 664,
        system: "base",
        label: "Pertes sur créances liées à des participations"
    },
    {
        number: 665,
        system: "base",
        label: "Escomptes accordés"
    },
    {
        number: 666,
        system: "base",
        label: "Pertes de change financières"
    },
    {
        number: 667,
        system: "base",
        label: "Charges nettes sur cessions de valeurs mobilières de placement"
    },
    {
        number: 668,
        system: "base",
        label: "Autres charges financières"
    },
    {
        number: 67,
        system: "condensed",
        label: "Charges exceptionnelles"
    },
    {
        number: 671,
        system: "base",

        label: "Charges exceptionnelles sur opérations de gestion"
    },
    {
        number: 6711,
        system: "developed",
        label: "Pénalités sur marchés (et dédits payés sur achats et ventes)"
    },
    {
        number: 6712,
        system: "developed",
        label: "Pénalités, amendes fiscales et pénales"
    },
    {
        number: 6713,
        system: "developed",
        label: "Dons, libéralités"
    },
    {
        number: 6714,
        system: "developed",
        label: "Créances devenues irrécouvrables dans l'exercice"
    },
    {
        number: 6715,
        system: "developed",
        label: "Subventions accordées"
    },
    {
        number: 6717,
        system: "developed",
        label: "Rappel d'impôts (autres qu'impôts sur les bénéfices)"
    },
    {
        number: 6718,
        system: "developed",
        label: "Autres charges exceptionnelles sur opérations de gestion"
    },
    {
        number: 672,
        system: "base",
        label: "(Compte à la disposition des entités pour enregistrer, en cours d'exercice, les charges sur exercices antérieurs)"
    },
    {
        number: 674,
        system: "base",
        label: "Opérations de constitution ou liquidation des fiducies"
    },
    {
        number: 6741,
        system: "developed",
        label: "Opérations liées à la constitution de fiducie - Transfert des éléments"
    },
    {
        number: 6742,
        system: "developed",
        label: "Opérations liées à la liquidation de la fiducie"
    },
    {
        number: 675,
        system: "base",

        label: "Valeurs comptables des éléments d'actif cédés"
    },
    {
        number: 6751,
        system: "developed",
        label: "Immobilisations incorporelles"
    },
    {
        number: 6752,
        system: "developed",
        label: "Immobilisations corporelles"
    },
    {
        number: 6756,
        system: "developed",
        label: "Immobilisations financières"
    },
    {
        number: 6758,
        system: "developed",
        label: "Autres éléments d'actif"
    },
    {
        number: 678,
        system: "base",

        label: "Autres charges exceptionnelles"
    },
    {
        number: 6781,
        system: "developed",
        label: "Malis provenant de clauses d'indexation"
    },
    {
        number: 6782,
        system: "developed",
        label: "Lots"
    },
    {
        number: 6783,
        system: "developed",
        label: "Malis provenant du rachat par l'entreprise d'actions et obligations émises par elle-même"
    },
    {
        number: 6788,
        system: "developed",
        label: "Charges exceptionnelles diverses"
    },
    {
        number: 68,
        system: "base",
        label: "Dotations aux amortissements, aux dépréciations et aux provisions"
    },
    {
        number: 681,
        system: "condensed",
        label: "Dotations aux amortissements, aux dépréciations et aux provisions - Charges d'exploitation"
    },
    {
        number: 6811,
        system: "base",

        label: "Dotations aux amortissements sur immobilisations incorporelles et corporelles"
    },
    {
        number: 68111,
        system: "developed",
        label: "Immobilisations incorporelles"
    },
    {
        number: 68112,
        system: "developed",
        label: "Immobilisations corporelles"
    },
    {
        number: 6812,
        system: "base",
        label: "Dotations aux amortissements des charges d'exploitation à répartir"
    },
    {
        number: 6815,
        system: "base",
        label: "Dotations aux provisions d'exploitation"
    },
    {
        number: 6816,
        system: "base",

        label: "Dotations pour dépréciations des immobilisations incorporelles et corporelles"
    },
    {
        number: 68161,
        system: "developed",
        label: "Immobilisations incorporelles"
    },
    {
        number: 68162,
        system: "developed",
        label: "Immobilisations corporelles"
    },
    {
        number: 6817,
        system: "base",

        label: "Dotations pour dépréciations des actifs circulants"
    },
    {
        number: 68173,
        system: "developed",
        label: "Stocks et en-cours"
    },
    {
        number: 68174,
        system: "developed",
        label: "Créances"
    },
    {
        number: 686,
        system: "condensed",

        label: "Dotations aux amortissements, aux dépréciations et aux provisions - Charges financières"
    },
    {
        number: 6861,
        system: "base",
        label: "Dotations aux amortissements des primes de remboursement des obligations"
    },
    {
        number: 6865,
        system: "base",
        label: "Dotations aux provisions financières"
    },
    {
        number: 6866,
        system: "base",

        label: "Dotations pour dépréciations des éléments financiers"
    },
    {
        number: 68662,
        system: "developed",
        label: "Immobilisations financières"
    },
    {
        number: 68665,
        system: "developed",
        label: "Valeurs mobilières de placement"
    },
    {
        number: 6868,
        system: "base",
        label: "Autres dotations"
    },
    {
        number: 687,
        system: "condensed",

        label: "Dotations aux amortissements, aux dépréciations et aux provisions - Charges exceptionnelles"
    },
    {
        number: 6871,
        system: "base",
        label: "Dotations aux amortissements exceptionnels des immobilisations"
    },
    {
        number: 6872,
        system: "base",

        label: "Dotations aux provisions réglementées (immobilisations)"
    },
    {
        number: 68725,
        system: "developed",
        label: "Amortissements dérogatoires"
    },
    {
        number: 6873,
        system: "base",
        label: "Dotations aux provisions réglementées (stocks)"
    },
    {
        number: 6874,
        system: "base",
        label: "Dotations aux autres provisions réglementées"
    },
    {
        number: 6875,
        system: "base",
        label: "Dotations aux provisions exceptionnelles"
    },
    {
        number: 6876,
        system: "base",
        label: "Dotations pour dépréciations exceptionnelles"
    },
    {
        number: 69,
        system: "base",
        label: "Participation des salariés - Impôts sur les bénéfices et assimilés"
    },
    {
        number: 691,
        system: "condensed",
        label: "Participation des salariés aux résultats"
    },
    {
        number: 695,
        system: "condensed",

        label: "Impôts sur les bénéfices"
    },
    {
        number: 6951,
        system: "developed",
        label: "Impôts dus en France"
    },
    {
        number: 6952,
        system: "developed",
        label: "Contribution additionnelle à l'impôt sur les bénéfices"
    },
    {
        number: 6954,
        system: "developed",
        label: "Impôts dus à l'étranger"
    },
    {
        number: 696,
        system: "base",
        label: "Suppléments d'impôt sur les sociétés liés aux distributions"
    },
    {
        number: 698,
        system: "base",

        label: "Intégration fiscale"
    },
    {
        number: 6981,
        system: "base",
        label: "Intégration fiscale - Charges"
    },
    {
        number: 6989,
        system: "base",
        label: "Intégration fiscale - Produits"
    },
    {
        number: 699,
        system: "condensed",
        label: "Produits - Reports en arrière des déficits"
    },
    {
        number: 7,
        system: "condensed",
        label: "Comptes de produits"
    },
    {
        number: 70,
        system: "base",
        label: "Ventes de produits fabriqués, prestations de services, marchandises"
    },
    {
        number: 701,
        system: "condensed",

        label: "Ventes de produits finis"
    },
    {
        number: 7011,
        system: "developed",
        label: "Produits finis (ou groupe) A"
    },
    {
        number: 7012,
        system: "developed",
        label: "Produits finis (ou groupe) B"
    },
    {
        number: 702,
        system: "base",
        label: "Ventes de produits intermédiaires"
    },
    {
        number: 703,
        system: "base",
        label: "Ventes de produits résiduels"
    },
    {
        number: 704,
        system: "base",

        label: "Travaux"
    },
    {
        number: 7041,
        system: "base",
        label: "Travaux de catégorie (ou activité) A"
    },
    {
        number: 7042,
        system: "base",
        label: "Travaux de catégorie (ou activité) B"
    },
    {
        number: 705,
        system: "base",
        label: "Études"
    },
    {
        number: 706,
        system: "condensed",
        label: "Prestations de services"
    },
    {
        number: 707,
        system: "condensed",

        label: "Ventes de marchandises"
    },
    {
        number: 7071,
        system: "developed",
        label: "Marchandises (ou groupe) A"
    },
    {
        number: 7072,
        system: "developed",
        label: "Marchandises (ou groupe) B"
    },
    {
        number: 708,
        system: "condensed",

        label: "Produits des activités annexes"
    },
    {
        number: 7081,
        system: "developed",
        label: "Produits des services exploités dans l'intérêt du personnel"
    },
    {
        number: 7082,
        system: "developed",
        label: "Commissions et courtages"
    },
    {
        number: 7083,
        system: "developed",
        label: "Locations diverses"
    },
    {
        number: 7084,
        system: "developed",
        label: "Mise à disposition de personnel facturée"
    },
    {
        number: 7085,
        system: "developed",
        label: "Ports et frais accessoires facturés"
    },
    {
        number: 7086,
        system: "developed",
        label: "Bonis sur reprises d'emballages consignés"
    },
    {
        number: 7087,
        system: "developed",
        label: "Bonifications obtenues des clients et primes sur ventes"
    },
    {
        number: 7088,
        system: "developed",
        label: "Autres produits d'activités annexes (cessions d'approvisionnements, ...)"
    },
    {
        number: 709,
        system: "condensed",
        label: "Rabais, remises et ristournes accordés par l'entreprise"
    },
    {
        number: 7091,
        system: "developed",
        label: "sur ventes de produits finis"
    },
    {
        number: 7092,
        system: "developed",
        label: "sur ventes de produits intermédiaires"
    },
    {
        number: 7094,
        system: "developed",
        label: "sur travaux"
    },
    {
        number: 7095,
        system: "developed",
        label: "sur études"
    },
    {
        number: 7096,
        system: "developed",
        label: "sur prestations de services"
    },
    {
        number: 7097,
        system: "developed",
        label: "sur ventes de marchandises"
    },
    {
        number: 7098,
        system: "developed",
        label: "sur produits des activités annexes"
    },
    {
        number: 71,
        system: "base",
        label: "Production stockée (ou déstockage)"
    },
    {
        number: 713,
        system: "condensed",

        label: "Variation des stocks (en-cours de production, produits)"
    },
    {
        number: 7133,
        system: "base",

        label: "Variation des en-cours de production de biens"
    },
    {
        number: 71331,
        system: "developed",
        label: "Produits en cours"
    },
    {
        number: 71335,
        system: "developed",
        label: "Travaux en cours"
    },
    {
        number: 7134,
        system: "base",

        label: "Variation des en-cours de production de services"
    },
    {
        number: 71341,
        system: "developed",
        label: "Études en cours"
    },
    {
        number: 71345,
        system: "developed",
        label: "Prestations de services en cours"
    },
    {
        number: 7135,
        system: "base",

        label: "Variation des stocks de produits"
    },
    {
        number: 71351,
        system: "developed",
        label: "Produits intermédiaires"
    },
    {
        number: 71355,
        system: "developed",
        label: "Produits finis"
    },
    {
        number: 71358,
        system: "developed",
        label: "Produits résiduels"
    },
    {
        number: 72,
        system: "condensed",

        label: "Production immobilisée"
    },
    {
        number: 721,
        system: "base",
        label: "Immobilisations incorporelles"
    },
    {
        number: 722,
        system: "base",
        label: "Immobilisations corporelles"
    },
    {
        number: 74,
        system: "condensed",
        label: "Subventions d'exploitation"
    },
    {
        number: 75,
        system: "condensed",

        label: "Autres produits de gestion courante"
    },
    {
        number: 751,
        system: "base",

        label: "Redevances pour concessions, brevets, licences, marques, procédés, logiciels, droits et valeurs similaires"
    },
    {
        number: 7511,
        system: "developed",
        label: "Redevances pour concessions, brevets, licences, marques, procédés, logiciels"
    },
    {
        number: 7516,
        system: "developed",
        label: "Droits d'auteur et de reproduction"
    },
    {
        number: 7518,
        system: "developed",
        label: "Autres droits et valeurs similaires"
    },
    {
        number: 752,
        system: "base",
        label: "Revenus des immeubles non affectés à des activités professionnelles"
    },
    {
        number: 753,
        system: "condensed",
        label: "Jetons de présence et rémunérations d'administrateurs, gérants"
    },
    {
        number: 754,
        system: "condensed",
        label: "Ristournes perçues des coopératives (provenant des excédents)"
    },
    {
        number: 755,
        system: "condensed",

        label: "Quote-parts de résultat sur opérations faites en commun"
    },
    {
        number: 7551,
        system: "developed",
        label: "Quote-part de perte transférée (comptabilité du gérant)"
    },
    {
        number: 7555,
        system: "developed",
        label: "Quote-part de bénéfice attribuée (comptabilité des associés non-gérants)"
    },
    {
        number: 756,
        system: "base",
        label: "Gains de change sur créances commerciales"
    },
    {
        number: 758,
        system: "base",
        label: "Produits divers de gestion courante"
    },
    {
        number: 76,
        system: "condensed",
        label: "Produits financiers"
    },
    {
        number: 761,
        system: "base",

        label: "Produits de participations"
    },
    {
        number: 7611,
        system: "developed",
        label: "Revenus des titres de participation"
    },
    {
        number: 7612,
        system: "developed",
        label: "Produits de la fiducie, résultat de la période"
    },
    {
        number: 7616,
        system: "developed",
        label: "Revenus sur autres formes de participation"
    },
    {
        number: 7617,
        system: "developed",
        label: "Revenus des créances rattachées à des participations"
    },
    {
        number: 762,
        system: "base",

        label: "Produits des autres immobilisations financières"
    },
    {
        number: 7621,
        system: "developed",
        label: "Revenus des titres immobilisés"
    },
    {
        number: 7626,
        system: "developed",
        label: "Revenus des prêts"
    },
    {
        number: 7627,
        system: "developed",
        label: "Revenus des créances immobilisées"
    },
    {
        number: 763,
        system: "base",

        label: "Revenus des autres créances"
    },
    {
        number: 7631,
        system: "developed",
        label: "Revenus des créances commerciales"
    },
    {
        number: 7638,
        system: "developed",
        label: "Revenus des créances diverses"
    },
    {
        number: 764,
        system: "base",
        label: "Revenus des valeurs mobilières de placement"
    },
    {
        number: 765,
        system: "base",
        label: "Escomptes obtenus"
    },
    {
        number: 766,
        system: "base",
        label: "Gains de change financiers"
    },
    {
        number: 767,
        system: "base",
        label: "Produits nets sur cessions de valeurs mobilières de placement"
    },
    {
        number: 768,
        system: "base",
        label: "Autres produits financiers"
    },
    {
        number: 77,
        system: "condensed",
        label: "Produits exceptionnels"
    },
    {
        number: 771,
        system: "base",

        label: "Produits exceptionnels sur opérations de gestion"
    },
    {
        number: 7711,
        system: "developed",
        label: "Dédits et pénalités perçus sur achats et sur ventes"
    },
    {
        number: 7713,
        system: "developed",
        label: "Libéralités reçues"
    },
    {
        number: 7714,
        system: "developed",
        label: "Rentrées sur créances amorties"
    },
    {
        number: 7715,
        system: "developed",
        label: "Subventions d'équilibre"
    },
    {
        number: 7717,
        system: "developed",
        label: "Dégrèvements d'impôts autres qu'impôts sur les bénéfices"
    },
    {
        number: 7718,
        system: "developed",
        label: "Autres produits exceptionnels sur opérations de gestion"
    },
    {
        number: 772,
        system: "base",
        label: "(Compte à la disposition des entités pour enregistrer, en cours d'exercice, les produits sur exercices antérieurs)"
    },
    {
        number: 774,
        system: "base",
        label: "Opérations de constitution ou liquidation des fiducies"
    },
    {
        number: 7741,
        system: "developed",
        label: "Opérations liées à la constitution de fiducie - Transfert des éléments"
    },
    {
        number: 7742,
        system: "developed",
        label: "Opérations liées à la liquidation de la fiducie"
    },
    {
        number: 775,
        system: "base",

        label: "Produits des cessions d'éléments d'actif"
    },
    {
        number: 7751,
        system: "developed",
        label: "Immobilisations incorporelles"
    },
    {
        number: 7752,
        system: "developed",
        label: "Immobilisations corporelles"
    },
    {
        number: 7756,
        system: "developed",
        label: "Immobilisations financières"
    },
    {
        number: 7758,
        system: "developed",
        label: "Autres éléments d'actif"
    },
    {
        number: 777,
        system: "base",
        label: "Quote-part des subventions d'investissement virée au résultat de l'exercice"
    },
    {
        number: 778,
        system: "base",

        label: "Autres produits exceptionnels"
    },
    {
        number: 7781,
        system: "developed",
        label: "Bonis provenant de clauses d'indexation"
    },
    {
        number: 7782,
        system: "developed",
        label: "Lots"
    },
    {
        number: 7783,
        system: "developed",
        label: "Bonis provenant du rachat par l'entreprise d'actions et d'obligations émises par elle-même"
    },
    {
        number: 7788,
        system: "developed",
        label: "Produits exceptionnels divers"
    },
    {
        number: 78,
        system: "base",
        label: "Reprises sur amortissements, dépréciations et provisions"
    },
    {
        number: 781,
        system: "condensed",

        label: "Reprises sur amortissements, dépréciations et provisions (à inscrire dans les produits d'exploitation)"
    },
    {
        number: 7811,
        system: "base",

        label: "Reprises sur amortissements des immobilisations incorporelles et corporelles"
    },
    {
        number: 78111,
        system: "developed",
        label: "Immobilisations incorporelles"
    },
    {
        number: 78112,
        system: "developed",
        label: "Immobilisations corporelles"
    },
    {
        number: 7815,
        system: "base",
        label: "Reprises sur provisions d'exploitation"
    },
    {
        number: 7816,
        system: "base",

        label: "Reprises sur dépréciations des immobilisations incorporelles et corporelles"
    },
    {
        number: 78161,
        system: "developed",
        label: "Immobilisations incorporelles"
    },
    {
        number: 78162,
        system: "developed",
        label: "Immobilisations corporelles"
    },
    {
        number: 7817,
        system: "base",

        label: "Reprises sur dépréciations des actifs circulants"
    },
    {
        number: 78173,
        system: "developed",
        label: "Stocks et en-cours"
    },
    {
        number: 78174,
        system: "developed",
        label: "Créances"
    },
    {
        number: 786,
        system: "condensed",

        label: "Reprises sur provisions pour risques et dépréciations (à inscrire dans les produits financiers)"
    },
    {
        number: 7865,
        system: "base",
        label: "Reprises sur provisions financières"
    },
    {
        number: 7866,
        system: "base",

        label: "Reprises sur dépréciations des éléments financiers"
    },
    {
        number: 78662,
        system: "developed",
        label: "Immobilisations financières"
    },
    {
        number: 78665,
        system: "developed",
        label: "Valeurs mobilières de placements"
    },
    {
        number: 787,
        system: "condensed",

        label: "Reprises sur provisions et dépréciations (à inscrire dans les produits exceptionnels)"
    },
    {
        number: 7872,
        system: "base",

        label: "Reprises sur provisions réglementées (immobilisations)"
    },
    {
        number: 78725,
        system: "developed",
        label: "Amortissements dérogatoires"
    },
    {
        number: 78726,
        system: "developed",
        label: "Provision spéciale de réévaluation"
    },
    {
        number: 78727,
        system: "developed",
        label: "Plus-values réinvesties"
    },
    {
        number: 7873,
        system: "base",
        label: "Reprises sur provisions réglementées (stocks)"
    },
    {
        number: 7874,
        system: "base",
        label: "Reprises sur autres provisions réglementées"
    },
    {
        number: 7875,
        system: "base",
        label: "Reprises sur provisions exceptionnelles"
    },
    {
        number: 7876,
        system: "base",
        label: "Reprises sur dépréciations exceptionnelles"
    },
    {
        number: 79,
        system: "condensed",
        label: "Transferts de charges"
    },
    {
        number: 791,
        system: "base",
        label: "Transferts de charges d'exploitation"
    },
    {
        number: 796,
        system: "base",
        label: "Transferts de charges financières"
    },
    {
        number: 797,
        system: "base",
        label: "Transferts de charges exceptionnelles"
    },
    {
        number: 8,
        system: "condensed",
        label: "Comptes spéciaux"
    },
    {
        number: 80,
        system: "base",
        label: "Engagements"
    },
    {
        number: 801,
        system: "condensed",
        label: "Engagements donnés par l'entité"
    },
    {
        number: 8011,
        system: "developed",
        label: "Avals, cautions, garanties"
    },
    {
        number: 8014,
        system: "developed",
        label: "Effets circulant sous l'endos de l'entité"
    },
    {
        number: 8016,
        system: "developed",
        label: "Redevances crédit-bail restant à courir"
    },
    {
        number: 80161,
        system: "developed",
        label: "Crédit-bail mobilier"
    },
    {
        number: 80165,
        system: "developed",
        label: "Crédit-bail immobilier"
    },
    {
        number: 8018,
        system: "developed",
        label: "Autres engagements donnés"
    },
    {
        number: 802,
        system: "condensed",
        label: "Engagements reçus par l'entité"
    },
    {
        number: 8021,
        system: "developed",
        label: "Avals, cautions, garanties"
    },
    {
        number: 8024,
        system: "developed",
        label: "Créances escomptées non échues"
    },
    {
        number: 8026,
        system: "developed",
        label: "Engagements reçus pour utilisation en crédit-bail"
    },
    {
        number: 80261,
        system: "developed",
        label: "Crédit-bail mobilier"
    },
    {
        number: 80265,
        system: "developed",
        label: "Crédit-bail immobilier"
    },
    {
        number: 8028,
        system: "developed",
        label: "Autres engagements reçus"
    },
    {
        number: 809,
        system: "condensed",
        label: "Contrepartie des engagements"
    },
    {
        number: 8091,
        system: "developed",
        label: "Contrepartie 801"
    },
    {
        number: 8092,
        system: "developed",
        label: "Contrepartie 802"
    },
    {
        number: 88,
        system: "base",
        label: "Résultat en instance d'affectation"
    },
    {
        number: 89,
        system: "base",
        label: "Bilan"
    },
    {
        number: 890,
        system: "base",
        label: "Bilan d'ouverture"
    },
    {
        number: 891,
        system: "base",
        label: "Bilan de clôture"
    }
]
