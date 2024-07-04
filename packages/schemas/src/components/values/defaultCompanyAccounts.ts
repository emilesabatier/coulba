

export type DefaultAccount = {
    number: number
    isMandatory: boolean
    isClass: boolean,
    isSelectable: boolean
    type: "sheet" | "statement" | "special"
    label: string,
}

export const defaultCompanyAccounts: DefaultAccount[] = [
    {
        number: 1,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Comptes de capitaux"
    },
    {
        number: 10,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Capital et réserves"
    },
    {
        number: 101,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Capital"
    },
    {
        number: 1011,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Capital souscrit - non appelé"
    },
    {
        number: 1012,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Capital souscrit - appelé, non versé"
    },
    {
        number: 1013,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Capital souscrit - appelé, versé"
    },
    {
        number: 10131,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Capital non amorti"
    },
    {
        number: 10132,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Capital amorti"
    },
    {
        number: 1018,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Capital souscrit soumis à des réglementations particulières"
    },
    {
        number: 102,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fonds fiduciaires"
    },
    {
        number: 104,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Primes liées au capital social"
    },
    {
        number: 1041,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Primes d'émission"
    },
    {
        number: 1042,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Primes de fusion"
    },
    {
        number: 1043,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Primes d'apport"
    },
    {
        number: 1044,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Primes de conversion d'obligations en actions"
    },
    {
        number: 1045,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Bons de souscription d'actions"
    },
    {
        number: 105,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Écarts de réévaluation"
    },
    {
        number: 106,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "sheet",
        label: "Réserves"
    },
    {
        number: 1061,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Réserve légale"
    },
    {
        number: 1062,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Réserves indisponibles"
    },
    {
        number: 1063,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Réserves statutaires ou contractuelles"
    },
    {
        number: 1064,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Réserves réglementées"
    },
    {
        number: 1068,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres réserves"
    },
    {
        number: 107,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Écart d'équivalence"
    },
    {
        number: 108,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Compte de l'exploitant"
    },
    {
        number: 109,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Actionnaires : capital souscrit - non appelé"
    },
    {
        number: 11,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Report à nouveau (solde créditeur ou débiteur)"
    },
    {
        number: 110,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Report à nouveau - solde créditeur"
    },
    {
        number: 119,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Report à nouveau - solde débiteur"
    },
    {
        number: 12,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Résultat de l'exercice"
    },
    {
        number: 120,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Résultat de l'exercice - bénéfice"
    },
    {
        number: 1209,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Acomptes sur dividendes"
    },
    {
        number: 129,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Résultat de l'exercice - perte"
    },
    {
        number: 13,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Subventions d'investissement"
    },
    {
        number: 131,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Subventions d'investissement octroyées"
    },
    {
        number: 139,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Subventions d'investissement inscrites au compte de résultat"
    },
    {
        number: 14,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Provisions réglementées"
    },
    {
        number: 143,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Provisions réglementées pour hausse de prix"
    },
    {
        number: 145,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Amortissements dérogatoires"
    },
    {
        number: 148,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres provisions réglementées"
    },
    {
        number: 15,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Provisions pour risques et charges"
    },
    {
        number: 151,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Provisions pour risques"
    },
    {
        number: 1511,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Provisions pour litiges"
    },
    {
        number: 1512,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Provisions pour garanties données aux clients"
    },
    {
        number: 1514,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Provisions pour amendes et pénalités"
    },
    {
        number: 1515,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Provisions pour pertes de change"
    },
    {
        number: 1516,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Provisions pour pertes sur contrats"
    },
    {
        number: 1518,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres provisions pour risques"
    },
    {
        number: 152,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Provisions pour charges"
    },
    {
        number: 1521,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Provisions pour pensions et obligations similaires"
    },
    {
        number: 1522,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Provisions pour restructurations"
    },
    {
        number: 1523,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Provisions pour impôts"
    },
    {
        number: 1524,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Provisions pour renouvellement des immobilisations - entreprises concessionnaires"
    },
    {
        number: 1525,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Provisions pour gros entretien ou grandes révisions"
    },
    {
        number: 1526,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Provisions pour remise en état"
    },
    {
        number: 1527,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres provisions pour charges"
    },
    {
        number: 16,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Emprunts et dettes assimilées"
    },
    {
        number: 161,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Emprunts obligataires convertibles"
    },
    {
        number: 1618,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Intérêts courus sur emprunts obligataires convertibles"
    },
    {
        number: 162,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Obligations représentatives de passifs nets remis en fiducie"
    },
    {
        number: 163,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres emprunts obligataires"
    },
    {
        number: 1638,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Intérêts courus sur autres emprunts obligataires"
    },
    {
        number: 164,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Emprunts auprès des établissements de crédit"
    },
    {
        number: 1648,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Intérêts courus sur emprunts auprès des établissements de crédit"
    },
    {
        number: 165,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Dépôts et cautionnements reçus"
    },
    {
        number: 1651,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Dépôts"
    },
    {
        number: 1655,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Cautionnements"
    },
    {
        number: 1658,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Intérêts courus sur dépôts et cautionnements reçus"
    },
    {
        number: 166,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Participation des salariés aux résultats"
    },
    {
        number: 1661,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Comptes bloqués"
    },
    {
        number: 1662,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fonds de participation"
    },
    {
        number: 1668,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Intérêts courus sur participation des salariés aux résultats"
    },
    {
        number: 167,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "sheet",
        label: "Emprunts et dettes assortis de conditions particulières"
    },
    {
        number: 1671,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Émissions de titres participatifs"
    },
    {
        number: 16718,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Intérêts courus sur titres participatifs"
    },
    {
        number: 1674,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Avances conditionnées de l'État"
    },
    {
        number: 16748,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Intérêts courus sur avances conditionnées"
    },
    {
        number: 1675,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Emprunts participatifs"
    },
    {
        number: 16758,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Intérêts courus sur emprunts participatifs"
    },
    {
        number: 168,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres emprunts et dettes assimilées"
    },
    {
        number: 1681,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres emprunts"
    },
    {
        number: 1685,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Rentes viagères capitalisées"
    },
    {
        number: 1687,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres dettes"
    },
    {
        number: 1688,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Intérêts courus sur autres emprunts et dettes assimilées"
    },
    {
        number: 169,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Primes de remboursement des emprunts"
    },
    {
        number: 17,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Dettes rattachées à des participations"
    },
    {
        number: 171,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Dettes rattachées à des participations - groupe"
    },
    {
        number: 174,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Dettes rattachées à des participations - hors groupe"
    },
    {
        number: 178,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Dettes rattachées à des sociétés en participation"
    },
    {
        number: 18,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Comptes de liaison des établissements et sociétés en participation"
    },
    {
        number: 181,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Comptes de liaison des établissements"
    },
    {
        number: 186,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Biens et prestations de services échangés entre établissements - charges"
    },
    {
        number: 187,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Biens et prestations de services échangés entre établissements - produits"
    },
    {
        number: 188,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Comptes de liaison des sociétés en participation"
    },
    {
        number: 2,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Comptes d'immobilisations"
    },
    {
        number: 20,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Immobilisations incorporelles et frais d'établissement"
    },
    {
        number: 201,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Frais d'établissement"
    },
    {
        number: 2011,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Frais de constitution"
    },
    {
        number: 2012,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Frais de premier établissement"
    },
    {
        number: 20121,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Frais de prospection"
    },
    {
        number: 20122,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Frais de publicité"
    },
    {
        number: 2013,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Frais d'augmentation de capital et d'opérations diverses - fusions, scissions, transformations"
    },
    {
        number: 203,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Frais de développement"
    },
    {
        number: 205,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Concessions et droits similaires, brevets, licences, marques, procédés, solutions informatiques, droits et valeurs similaires"
    },
    {
        number: 206,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Droit au bail"
    },
    {
        number: 207,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fonds commercial"
    },
    {
        number: 208,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres immobilisations incorporelles"
    },
    {
        number: 2081,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Mali de fusion sur actifs incorporels"
    },
    {
        number: 21,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Immobilisations corporelles"
    },
    {
        number: 211,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Terrains"
    },
    {
        number: 2111,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Terrains nus"
    },
    {
        number: 2112,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Terrains aménagés"
    },
    {
        number: 2113,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Sous-sols et sur-sols"
    },
    {
        number: 2114,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Terrains de carrières (Tréfonds)"
    },
    {
        number: 2115,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Terrains bâtis"
    },
    {
        number: 212,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Agencements et aménagements de terrains (même ventilation que celle du compte 211)"
    },
    {
        number: 213,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Constructions"
    },
    {
        number: 2131,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Bâtiments"
    },
    {
        number: 2135,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Installations générales - agencements - aménagements des constructions"
    },
    {
        number: 2138,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Ouvrages d'infrastructure"
    },
    {
        number: 214,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Constructions sur sol d'autrui (même ventilation que celle du compte 213)"
    },
    {
        number: 215,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Installations techniques, matériels et outillages industriels"
    },
    {
        number: 2151,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Installations complexes spécialisées"
    },
    {
        number: 21511,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Installations complexes spécialisées sur sol propre"
    },
    {
        number: 21514,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Installations complexes spécialisées sur sol d'autrui"
    },
    {
        number: 2153,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Installations à caractère spécifique"
    },
    {
        number: 21531,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Installations à caractère spécifique sur sol propre"
    },
    {
        number: 21534,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Installations à caractère spécifique sur sol d'autrui"
    },
    {
        number: 2154,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Matériels industriels"
    },
    {
        number: 2155,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Outillages industriels"
    },
    {
        number: 2157,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Agencements et aménagements des matériels et outillages industriels"
    },
    {
        number: 218,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres immobilisations corporelles"
    },
    {
        number: 2181,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Installations générales, agencements, aménagements divers"
    },
    {
        number: 2182,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Matériel de transport"
    },
    {
        number: 2183,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Matériel de bureau et matériel informatique"
    },
    {
        number: 2184,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Mobilier"
    },
    {
        number: 2185,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Cheptel"
    },
    {
        number: 2186,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Emballages récupérables"
    },
    {
        number: 2187,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Mali de fusions sur actifs corporels"
    },
    {
        number: 22,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Immobilisations mises en concession"
    },
    {
        number: 229,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Droits du concédant"
    },
    {
        number: 23,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Immobilisations en cours, avances et acomptes"
    },
    {
        number: 231,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Immobilisations corporelles en cours"
    },
    {
        number: 232,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Immobilisations incorporelles en cours"
    },
    {
        number: 237,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Avances et acomptes versés sur commandes d'immobilisations incorporelles"
    },
    {
        number: 238,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Avances et acomptes versés sur commandes d'immobilisations corporelles"
    },
    {
        number: 26,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Participations et créances rattachées à des participations"
    },
    {
        number: 261,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Titres de participation"
    },
    {
        number: 2611,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Actions"
    },
    {
        number: 2618,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres titres"
    },
    {
        number: 262,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Titres évalués par équivalence"
    },
    {
        number: 266,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres formes de participation"
    },
    {
        number: 2661,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Droits représentatifs d'actifs nets remis en fiducie"
    },
    {
        number: 267,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Créances rattachées à des participations"
    },
    {
        number: 2671,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Créances rattachées à des participations - groupe"
    },
    {
        number: 2674,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Créances rattachées à des participations - hors groupe"
    },
    {
        number: 2675,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Versements représentatifs d'apports non capitalisés - appel de fonds"
    },
    {
        number: 2676,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Avances consolidables"
    },
    {
        number: 2677,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres créances rattachées à des participations"
    },
    {
        number: 2678,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Intérêts courus"
    },
    {
        number: 268,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Créances rattachées à des sociétés en participation"
    },
    {
        number: 2681,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Principal"
    },
    {
        number: 2688,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Intérêts courus"
    },
    {
        number: 269,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Versements restant à effectuer sur titres de participation non libérés"
    },
    {
        number: 27,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Autres immobilisations financières"
    },
    {
        number: 271,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Titres immobilisés autres que les titres immobilisés de l'activité de portefeuille (droit de propriété)"
    },
    {
        number: 2711,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Actions"
    },
    {
        number: 2718,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres titres"
    },
    {
        number: 272,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Titres immobilisés (droit de créance)"
    },
    {
        number: 2721,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Obligations"
    },
    {
        number: 2722,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Bons"
    },
    {
        number: 273,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Titres immobilisés de l'activité de portefeuille"
    },
    {
        number: 274,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Prêts"
    },
    {
        number: 2741,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Prêts participatifs"
    },
    {
        number: 2742,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Prêts aux associés"
    },
    {
        number: 2743,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Prêts au personnel"
    },
    {
        number: 2748,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres prêts"
    },
    {
        number: 275,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Dépôts et cautionnements versés"
    },
    {
        number: 2751,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Dépôts"
    },
    {
        number: 2755,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Cautionnements"
    },
    {
        number: 276,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "sheet",
        label: "Autres créances immobilisées"
    },
    {
        number: 2761,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Créances diverses"
    },
    {
        number: 2768,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "sheet",
        label: "Intérêts courus"
    },
    {
        number: 27682,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Intérêts courus sur titres immobilisés (droit de créance)"
    },
    {
        number: 27684,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Intérêts courus sur prêts"
    },
    {
        number: 27685,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Intérêts courus sur dépôts et cautionnements"
    },
    {
        number: 27688,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Intérêts courus sur créances diverses"
    },
    {
        number: 277,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Actions propres ou parts propres"
    },
    {
        number: 2771,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Actions propres ou parts propres"
    },
    {
        number: 2772,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Actions propres ou parts propres en voie d'annulation"
    },
    {
        number: 278,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Mali de fusion sur actifs financiers"
    },
    {
        number: 279,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Versements restant à effectuer sur titres immobilisés non libérés"
    },
    {
        number: 28,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Amortissements des immobilisations"
    },
    {
        number: 280,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "sheet",
        label: "Amortissements des immobilisations incorporelles et des frais d'établissement (même ventilation que celle du compte 20)"
    },
    {
        number: 2801,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Frais d'établissement (même ventilation que celle du compte 201)"
    },
    {
        number: 2803,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Frais de développement"
    },
    {
        number: 2805,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Concessions et droits similaires, brevets, licences, solutions informatiques, droits et valeurs similaires"
    },
    {
        number: 2806,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Droit au bail"
    },
    {
        number: 2807,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fonds commercial"
    },
    {
        number: 2808,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres immobilisations incorporelles"
    },
    {
        number: 281,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "sheet",
        label: "Amortissements des immobilisations corporelles (même ventilation que celle du compte 21)"
    },
    {
        number: 2812,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Agencements, aménagements de terrains (même ventilation que celle du compte 212)"
    },
    {
        number: 2813,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Constructions (même ventilation que celle du compte 213)"
    },
    {
        number: 2814,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Constructions sur sol d'autrui (même ventilation que celle du compte 214)"
    },
    {
        number: 2815,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Installations, matériels et outillages industriels (même ventilation que celle du compte 215)"
    },
    {
        number: 2818,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres immobilisations corporelles (même ventilation que celle du compte 218)"
    },
    {
        number: 28187,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Amortissement du mali de fusion sur actifs corporels"
    },
    {
        number: 282,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Amortissements des immobilisations mises en concession"
    },
    {
        number: 29,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Dépréciations des immobilisations"
    },
    {
        number: 290,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "sheet",
        label: "Dépréciations des immobilisations incorporelles"
    },
    {
        number: 2901,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Frais d'établissement"
    },
    {
        number: 2903,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Frais de développement"
    },
    {
        number: 2905,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Marques, procédés, droits et valeurs similaires"
    },
    {
        number: 2906,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Droit au bail"
    },
    {
        number: 2907,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fonds commercial"
    },
    {
        number: 2908,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres immobilisations incorporelles"
    },
    {
        number: 29081,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Dépréciation du mali de fusion sur actifs incorporels"
    },
    {
        number: 291,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "sheet",
        label: "Dépréciations des immobilisations corporelles"
    },
    {
        number: 2911,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Terrains"
    },
    {
        number: 2912,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Agencements et aménagements de terrains"
    },
    {
        number: 2913,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Constructions"
    },
    {
        number: 2914,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Constructions sur sol d'autrui"
    },
    {
        number: 2915,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Installations techniques, matériels et outillages industriels"
    },
    {
        number: 2918,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres immobilisations corporelles"
    },
    {
        number: 29187,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Dépréciation du mali de fusion sur actifs corporels"
    },
    {
        number: 292,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Dépréciations des immobilisations mises en concession"
    },
    {
        number: 293,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "sheet",
        label: "Dépréciations des immobilisations en cours"
    },
    {
        number: 2931,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Immobilisations corporelles en cours"
    },
    {
        number: 2932,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Immobilisations incorporelles en cours"
    },
    {
        number: 296,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "sheet",
        label: "Dépréciations des participations et créances rattachées à des participations"
    },
    {
        number: 2961,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Titres de participation"
    },
    {
        number: 2962,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Titres évalués par équivalence"
    },
    {
        number: 2966,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres formes de participation"
    },
    {
        number: 2967,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "sheet",
        label: "Créances rattachées à des participations (même ventilation que celle du compte 267)"
    },
    {
        number: 2968,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Créances rattachées à des sociétés en participation (même ventilation que celle du compte 268)"
    },
    {
        number: 297,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "sheet",
        label: "Dépréciations des autres immobilisations financières"
    },
    {
        number: 2971,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Titres immobilisés autres que les titres immobilisés de l'activité de portefeuille (droit de propriété)"
    },
    {
        number: 2972,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Titres immobilisés (droit de créance)"
    },
    {
        number: 2973,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Titres immobilisés de l'activité de portefeuille"
    },
    {
        number: 2974,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Prêts"
    },
    {
        number: 2975,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Dépôts et cautionnements versés"
    },
    {
        number: 2976,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres créances immobilisées "
    },
    {
        number: 3,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Comptes de stocks et en-cours"
    },
    {
        number: 31,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Matières premières et fournitures"
    },
    {
        number: 32,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Autres approvisionnements"
    },
    {
        number: 321,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Matières consommables"
    },
    {
        number: 322,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fournitures consommables"
    },
    {
        number: 3221,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Combustibles"
    },
    {
        number: 3222,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Produits d'entretien"
    },
    {
        number: 3223,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fournitures d'atelier et d'usine"
    },
    {
        number: 3224,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fournitures de magasin"
    },
    {
        number: 3225,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fournitures de bureau"
    },
    {
        number: 326,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Emballages"
    },
    {
        number: 3261,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Emballages perdus"
    },
    {
        number: 3265,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Emballages récupérables non identifiables"
    },
    {
        number: 3267,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Emballages à usage mixte"
    },
    {
        number: 33,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "En-cours de production de biens"
    },
    {
        number: 331,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Produits en cours"
    },
    {
        number: 335,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Travaux en cours"
    },
    {
        number: 34,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "En-cours de production de services"
    },
    {
        number: 341,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Études en cours"
    },
    {
        number: 345,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Prestations de services en cours"
    },
    {
        number: 35,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Stocks de produits"
    },
    {
        number: 351,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Produits intermédiaires"
    },
    {
        number: 355,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Produits finis"
    },
    {
        number: 358,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Produits résiduels ou matières de récupération"
    },
    {
        number: 3581,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Déchets"
    },
    {
        number: 3585,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Rebuts"
    },
    {
        number: 3586,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Matières de récupération"
    },
    {
        number: 36,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Stocks provenant d'immobilisations"
    },
    {
        number: 37,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Stocks de marchandises"
    },
    {
        number: 38,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Stocks en voie d'acheminement, mis en dépôt ou donnés en consignation"
    },
    {
        number: 39,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Dépréciations des stocks et en-cours"
    },
    {
        number: 391,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Dépréciations des matières premières et fournitures"
    },
    {
        number: 392,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Dépréciations des autres approvisionnements"
    },
    {
        number: 393,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Dépréciations des en-cours de production de biens"
    },
    {
        number: 394,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Dépréciations des en-cours de production de services"
    },
    {
        number: 395,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Dépréciations des stocks de produits"
    },
    {
        number: 397,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Dépréciations des stocks de marchandises"
    },
    {
        number: 4,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Comptes de tiers"
    },
    {
        number: 40,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Fournisseurs et comptes rattachés"
    },
    {
        number: 401,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fournisseurs"
    },
    {
        number: 4011,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fournisseurs - Achats de biens et prestations de services"
    },
    {
        number: 4017,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fournisseurs - Retenues de garantie"
    },
    {
        number: 403,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fournisseurs - Effets à payer"
    },
    {
        number: 404,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fournisseurs d'immobilisations"
    },
    {
        number: 4041,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fournisseurs - Achats d'immobilisations"
    },
    {
        number: 4047,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fournisseurs d'immobilisations - Retenues de garantie"
    },
    {
        number: 405,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fournisseurs d'immobilisations - Effets à payer"
    },
    {
        number: 408,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "sheet",
        label: "Fournisseurs - Factures non parvenues"
    },
    {
        number: 4081,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fournisseurs"
    },
    {
        number: 4084,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fournisseurs d'immobilisations"
    },
    {
        number: 4088,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fournisseurs - Intérêts courus"
    },
    {
        number: 409,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "sheet",
        label: "Fournisseurs débiteurs"
    },
    {
        number: 4091,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fournisseurs - Avances et acomptes versés sur commandes"
    },
    {
        number: 4096,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fournisseurs - Créances pour emballages et matériel à rendre"
    },
    {
        number: 4097,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fournisseurs - Autres avoirs"
    },
    {
        number: 40971,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fournisseurs d'exploitation"
    },
    {
        number: 40974,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Fournisseurs d'immobilisations"
    },
    {
        number: 4098,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Rabais, remises, ristournes à obtenir et autres avoirs non encore reçus"
    },
    {
        number: 41,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Clients et comptes rattachés"
    },
    {
        number: 411,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Clients"
    },
    {
        number: 4111,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Clients - Ventes de biens ou de prestations de services"
    },
    {
        number: 4117,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Clients - Retenues de garantie"
    },
    {
        number: 413,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Clients - Effets à recevoir"
    },
    {
        number: 416,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Clients douteux ou litigieux"
    },
    {
        number: 418,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Clients - Produits non encore facturés"
    },
    {
        number: 4181,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Clients - Factures à établir"
    },
    {
        number: 4188,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Clients - Intérêts courus"
    },
    {
        number: 419,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "sheet",
        label: "Clients créditeurs"
    },
    {
        number: 4191,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Clients - Avances et acomptes reçus sur commandes"
    },
    {
        number: 4196,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Clients - Dettes sur emballages et matériels consignés"
    },
    {
        number: 4197,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Clients - Autres avoirs"
    },
    {
        number: 4198,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Rabais, remises, ristournes à accorder et autres avoirs à établir"
    },
    {
        number: 42,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Personnel et comptes rattachés"
    },
    {
        number: 421,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Personnel - Rémunérations dues"
    },
    {
        number: 422,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Comité social et économique"
    },
    {
        number: 424,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Participation des salariés aux résultats"
    },
    {
        number: 4246,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Réserve spéciale"
    },
    {
        number: 4248,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Comptes courants"
    },
    {
        number: 425,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Personnel - Avances et acomptes et autres comptes débiteurs"
    },
    {
        number: 426,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Personnel - Dépôts"
    },
    {
        number: 427,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Personnel - Oppositions"
    },
    {
        number: 428,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Personnel - Charges à payer"
    },
    {
        number: 4282,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Dettes provisionnées pour congés à payer"
    },
    {
        number: 4284,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Dettes provisionnées pour participation des salariés aux résultats"
    },
    {
        number: 4286,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres charges à payer"
    },
    {
        number: 43,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Sécurité sociale et autres organismes sociaux"
    },
    {
        number: 431,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Sécurité sociale"
    },
    {
        number: 437,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres organismes sociaux"
    },
    {
        number: 438,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Organismes sociaux - Charges à payer"
    },
    {
        number: 4382,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Charges sociales sur congés à payer"
    },
    {
        number: 4386,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres charges à payer"
    },
    {
        number: 439,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Organismes sociaux - Produits à recevoir"
    },
    {
        number: 44,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "État et autres collectivités publiques"
    },
    {
        number: 441,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "État - Subventions et aides à recevoir"
    },
    {
        number: 442,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Contributions, impôts et taxes recouvrés pour le compte de l'État"
    },
    {
        number: 4421,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Prélèvements à la source (Impôt sur le revenu)"
    },
    {
        number: 4422,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Prélèvements forfaitaires non libératoires"
    },
    {
        number: 4423,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Retenues et prélèvements sur les distributions"
    },
    {
        number: 444,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "État - Impôts sur les bénéfices"
    },
    {
        number: 445,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "sheet",
        label: "État - Taxes sur le chiffre d'affaires"
    },
    {
        number: 4452,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "TVA due intracommunautaire"
    },
    {
        number: 4455,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Taxes sur le chiffre d'affaires à décaisser"
    },
    {
        number: 44551,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "TVA à décaisser"
    },
    {
        number: 44558,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Taxes assimilées à la TVA"
    },
    {
        number: 4456,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Taxes sur le chiffre d'affaires déductibles"
    },
    {
        number: 44562,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "TVA sur immobilisations"
    },
    {
        number: 44563,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "TVA transférée par d'autres entreprises"
    },
    {
        number: 44566,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "TVA sur autres biens et services"
    },
    {
        number: 44567,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Crédit de TVA à reporter"
    },
    {
        number: 44568,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Taxes assimilées à la TVA"
    },
    {
        number: 4457,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Taxes sur le chiffre d'affaires collectées"
    },
    {
        number: 44571,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "TVA collectée"
    },
    {
        number: 44578,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Taxes assimilées à la TVA"
    },
    {
        number: 4458,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Taxes sur le chiffre d'affaires à régulariser ou en attente"
    },
    {
        number: 44581,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Acomptes - Régime simplifié d'imposition"
    },
    {
        number: 44583,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Remboursement de taxes sur le chiffre d'affaires demandé"
    },
    {
        number: 44584,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "TVA récupérée d'avance"
    },
    {
        number: 44586,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Taxes sur le chiffre d'affaires sur factures non parvenues"
    },
    {
        number: 44587,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Taxes sur le chiffre d'affaires sur factures à établir"
    },
    {
        number: 446,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Obligations cautionnées"
    },
    {
        number: 447,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres impôts, taxes et versements assimilés"
    },
    {
        number: 448,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "sheet",
        label: "État - Charges à payer et produits à recevoir"
    },
    {
        number: 4481,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "État - Charges à payer"
    },
    {
        number: 44811,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Charges fiscales sur congés à payer"
    },
    {
        number: 44812,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Charges à payer"
    },
    {
        number: 4482,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "État - Produits à recevoir"
    },
    {
        number: 449,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Quotas d'émission à acquérir"
    },
    {
        number: 45,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Groupe et associés"
    },
    {
        number: 451,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Groupe"
    },
    {
        number: 455,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Associés - Comptes courants"
    },
    {
        number: 4551,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Principal"
    },
    {
        number: 4558,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Intérêts courus"
    },
    {
        number: 456,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Associés - Opérations sur le capital"
    },
    {
        number: 4561,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Associés - Comptes d'apport en société"
    },
    {
        number: 45611,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Apports en nature"
    },
    {
        number: 45615,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Apports en numéraire"
    },
    {
        number: 4562,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Apporteurs - Capital appelé, non versé"
    },
    {
        number: 45621,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Actionnaires - Capital souscrit et appelé, non versé"
    },
    {
        number: 45625,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Associés - Capital appelé, non versé"
    },
    {
        number: 4563,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Associés - Versements reçus sur augmentation de capital"
    },
    {
        number: 4564,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Associés - Versements anticipés"
    },
    {
        number: 4566,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Actionnaires défaillants"
    },
    {
        number: 4567,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Associés - Capital à rembourser"
    },
    {
        number: 457,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Associés - Dividendes à payer"
    },
    {
        number: 458,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Associés - Opérations faites en commun et en GIE"
    },
    {
        number: 4581,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Opérations courantes"
    },
    {
        number: 4588,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Intérêts courus"
    },
    {
        number: 46,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Débiteurs divers et créditeurs divers"
    },
    {
        number: 462,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Créances sur cessions d'immobilisations"
    },
    {
        number: 464,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Dettes sur acquisitions de valeurs mobilières de placement"
    },
    {
        number: 465,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Créances sur cessions de valeurs mobilières de placement"
    },
    {
        number: 467,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Divers comptes débiteurs et produits à recevoir"
    },
    {
        number: 468,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Divers comptes créditeurs et charges à payer"
    },
    {
        number: 47,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Comptes transitoires ou d'attente"
    },
    {
        number: 471,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Compte d'attente"
    },
    {
        number: 472,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Compte d'attente"
    },
    {
        number: 473,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Compte d'attente"
    },
    {
        number: 474,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Différences d'évaluation - Actif"
    },
    {
        number: 4741,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Différences d'évaluation sur instruments financiers à terme - Actif"
    },
    {
        number: 4742,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Différences d'évaluation sur jetons détenus - Actif"
    },
    {
        number: 4746,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Différences d'évaluation de jetons sur des passifs - Actif"
    },
    {
        number: 475,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Différences d'évaluation - Passif"
    },
    {
        number: 4751,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Différences d'évaluation sur instruments financiers à terme - Passif"
    },
    {
        number: 4752,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Différences d'évaluation sur jetons détenus - Passif"
    },
    {
        number: 4756,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Différences d'évaluation de jetons sur des passifs - Passif"
    },
    {
        number: 476,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Différence de conversion - Actif"
    },
    {
        number: 4761,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Diminution des créances"
    },
    {
        number: 4762,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Augmentation des dettes"
    },
    {
        number: 4768,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Différences compensées par couverture de change"
    },
    {
        number: 477,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Différences de conversion - Passif"
    },
    {
        number: 4771,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Augmentation des créances"
    },
    {
        number: 4772,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Diminution des dettes"
    },
    {
        number: 4778,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Différences compensées par couverture de change"
    },
    {
        number: 478,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres comptes transitoires"
    },
    {
        number: 4781,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Mali de fusion sur actif circulant"
    },
    {
        number: 48,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Comptes de régularisation"
    },
    {
        number: 481,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Frais d'émission des emprunts"
    },
    {
        number: 486,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Charges constatées d'avance"
    },
    {
        number: 487,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Produits constatés d'avance"
    },
    {
        number: 4871,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Produits constatés d'avance sur jetons émis"
    },
    {
        number: 488,
        isMandatory: false,
        isClass: false,
        isSelectable: false,
        type: "sheet",
        label: "Comptes de répartition périodique des charges et des produits"
    },
    {
        number: 4886,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Charges"
    },
    {
        number: 4887,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Produits"
    },
    {
        number: 49,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Dépréciations des comptes de tiers"
    },
    {
        number: 491,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Dépréciations des comptes de clients"
    },
    {
        number: 495,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Dépréciations des comptes du groupe et des associés"
    },
    {
        number: 4951,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Comptes du groupe"
    },
    {
        number: 4955,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Comptes courants des associés"
    },
    {
        number: 4958,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Opérations faites en commun et en GIE"
    },
    {
        number: 496,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Dépréciations des comptes de débiteurs divers"
    },
    {
        number: 4962,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Créances sur cessions d'immobilisations"
    },
    {
        number: 4965,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Créances sur cessions de valeurs mobilières de placement"
    },
    {
        number: 4967,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres comptes débiteurs"
    },
    {
        number: 5,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Comptes financiers"
    },
    {
        number: 50,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Valeurs mobilières de placement"
    },
    {
        number: 502,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Actions propres"
    },
    {
        number: 5021,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Actions destinées à être attribuées aux employés et affectées à des plans déterminés"
    },
    {
        number: 5022,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Actions disponibles pour être attribuées aux employés ou pour la régularisation des cours de bourse"
    },
    {
        number: 503,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Actions"
    },
    {
        number: 5031,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Titres cotés"
    },
    {
        number: 5035,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Titres non cotés"
    },
    {
        number: 504,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres titres conférant un droit de propriété"
    },
    {
        number: 505,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Obligations et bons émis par la société et rachetés par elle"
    },
    {
        number: 506,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Obligations"
    },
    {
        number: 5061,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Titres cotés"
    },
    {
        number: 5065,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Titres non cotés"
    },
    {
        number: 507,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Bons du Trésor et bons de caisse à court terme"
    },
    {
        number: 508,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres valeurs mobilières de placement et autres créances assimilées"
    },
    {
        number: 5081,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres valeurs mobilières"
    },
    {
        number: 5082,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Bons de souscription"
    },
    {
        number: 5088,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Intérêts courus sur obligations, bons et valeurs assimilés"
    },
    {
        number: 509,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Versements restant à effectuer sur valeurs mobilières de placement non libérées"
    },
    {
        number: 51,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Banques, établissements financiers et assimilés"
    },
    {
        number: 511,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Valeurs à l'encaissement"
    },
    {
        number: 5111,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Coupons échus à l'encaissement"
    },
    {
        number: 5112,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Chèques à encaisser"
    },
    {
        number: 5113,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Effets à l'encaissement"
    },
    {
        number: 5114,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Effets à l'escompte"
    },
    {
        number: 512,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Banques"
    },
    {
        number: 5121,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Comptes en euros"
    },
    {
        number: 5124,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Comptes en devises"
    },
    {
        number: 517,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres organismes financiers"
    },
    {
        number: 518,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Intérêts courus"
    },
    {
        number: 5181,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Intérêts courus à payer"
    },
    {
        number: 5188,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Intérêts courus à recevoir"
    },
    {
        number: 519,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Concours bancaires courants"
    },
    {
        number: 5191,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Crédit de mobilisation de créances commerciales"
    },
    {
        number: 5193,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Mobilisation de créances nées à l'étranger"
    },
    {
        number: 5198,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Intérêts courus sur concours bancaires courants"
    },
    {
        number: 52,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Instruments financiers à terme et jetons détenus"
    },
    {
        number: 521,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Instruments financiers à terme"
    },
    {
        number: 522,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Jetons détenus"
    },
    {
        number: 523,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Jetons auto-détenus"
    },
    {
        number: 524,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Jetons empruntés"
    },
    {
        number: 53,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Caisse"
    },
    {
        number: 58,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Virements internes"
    },
    {
        number: 59,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "sheet",
        label: "Dépréciations des comptes financiers"
    },
    {
        number: 590,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Dépréciations des valeurs mobilières de placement"
    },
    {
        number: 5903,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Actions"
    },
    {
        number: 5904,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres titres conférant un droit de propriété"
    },
    {
        number: 5906,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Obligations"
    },
    {
        number: 5908,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "sheet",
        label: "Autres valeurs mobilières de placement et créances assimilées"
    },
    {
        number: 6,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "statement",
        label: "Comptes de charges"
    },
    {
        number: 60,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "statement",
        label: "Achats (sauf 603)"
    },
    {
        number: 601,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Achats stockés - Matières premières (et fournitures)"
    },
    {
        number: 602,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Achats stockés - Autres approvisionnements"
    },
    {
        number: 6021,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Matières consommables"
    },
    {
        number: 6022,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Fournitures consommables"
    },
    {
        number: 60221,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Combustibles"
    },
    {
        number: 60222,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Produits d'entretien"
    },
    {
        number: 60223,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Fournitures d'atelier et d'usine"
    },
    {
        number: 60224,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Fournitures de magasin"
    },
    {
        number: 60225,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Fourniture de bureau"
    },
    {
        number: 6026,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Emballages"
    },
    {
        number: 60261,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Emballages perdus"
    },
    {
        number: 60262,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Malis sur emballage"
    },
    {
        number: 60265,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Emballages récupérables non identifiables"
    },
    {
        number: 60267,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Emballages à usage mixte"
    },
    {
        number: 603,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "statement",
        label: "Variation des stocks d'approvisionnements et de marchandises"
    },
    {
        number: 6031,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Variation des stocks de matières premières et fournitures"
    },
    {
        number: 6032,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Variation des stocks des autres approvisionnements"
    },
    {
        number: 6037,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Variation des stocks de marchandises"
    },
    {
        number: 604,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Achats d'études et prestations de services"
    },
    {
        number: 605,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Achats de matériel, équipements et travaux"
    },
    {
        number: 606,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Achats non stockés de matière et fournitures"
    },
    {
        number: 6061,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Fournitures non stockables (eau, énergie, etc.)"
    },
    {
        number: 6063,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Fournitures d'entretien et de petit équipement"
    },
    {
        number: 6064,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Fournitures administratives"
    },
    {
        number: 6068,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Autres matières et fournitures"
    },
    {
        number: 607,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Achats de marchandises"
    },
    {
        number: 608,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Frais accessoires incorporés aux achats"
    },
    {
        number: 609,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Rabais, remises et ristournes obtenus sur achats"
    },
    {
        number: 6098,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Rabais, remises et ristournes non affectés"
    },
    {
        number: 61,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "statement",
        label: "Services extérieurs"
    },
    {
        number: 611,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Sous-traitance générale"
    },
    {
        number: 612,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "statement",
        label: "Redevances de crédit-bail"
    },
    {
        number: 6122,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Crédit-bail mobilier"
    },
    {
        number: 6125,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Crédit-bail immobilier"
    },
    {
        number: 613,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Locations"
    },
    {
        number: 6132,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Locations immobilières"
    },
    {
        number: 6135,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Locations mobilières"
    },
    {
        number: 614,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Charges locatives et de copropriété"
    },
    {
        number: 615,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Entretien et réparations"
    },
    {
        number: 6152,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Entretien et réparation sur biens immobiliers"
    },
    {
        number: 6155,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Entretien et réparation sur biens mobiliers"
    },
    {
        number: 6156,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Maintenance"
    },
    {
        number: 616,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Primes d'assurances"
    },
    {
        number: 6161,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Multirisques"
    },
    {
        number: 6162,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Assurance obligatoire dommage construction"
    },
    {
        number: 6163,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Assurance - transport"
    },
    {
        number: 61636,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "sur achats"
    },
    {
        number: 61637,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "sur ventes"
    },
    {
        number: 61638,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "sur autres biens"
    },
    {
        number: 6164,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Risques d'exploitation"
    },
    {
        number: 6165,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Insolvabilité clients"
    },
    {
        number: 617,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Études et recherches"
    },
    {
        number: 618,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Divers"
    },
    {
        number: 6181,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Documentation générale"
    },
    {
        number: 6183,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Documentation technique"
    },
    {
        number: 6185,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Frais de colloques, séminaires, conférences"
    },
    {
        number: 619,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Rabais, remises et ristournes obtenus sur services extérieurs"
    },
    {
        number: 62,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "statement",
        label: "Autres services extérieurs"
    },
    {
        number: 621,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Personnel extérieur à l'entreprise"
    },
    {
        number: 6211,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Personnel intérimaire"
    },
    {
        number: 6214,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Personnel détaché ou prêté à l'entité"
    },
    {
        number: 622,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Rémunérations d'intermédiaires et honoraires"
    },
    {
        number: 6221,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Commissions et courtages sur achats"
    },
    {
        number: 6222,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Commissions et courtages sur ventes"
    },
    {
        number: 6224,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Rémunérations des transitaires"
    },
    {
        number: 6225,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Rémunérations d'affacturage"
    },
    {
        number: 6226,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Honoraires"
    },
    {
        number: 6227,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Frais d'actes et de contentieux"
    },
    {
        number: 6228,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Divers"
    },
    {
        number: 623,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Publicité, publications, relations publiques"
    },
    {
        number: 6231,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Annonces et insertions"
    },
    {
        number: 6232,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Échantillons"
    },
    {
        number: 6233,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Foires et expositions"
    },
    {
        number: 6234,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Cadeaux à la clientèle"
    },
    {
        number: 6235,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Primes"
    },
    {
        number: 6236,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Catalogues et imprimés"
    },
    {
        number: 6237,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Publications"
    },
    {
        number: 6238,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Divers (pourboires, dons courants)"
    },
    {
        number: 624,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Transports de biens et transports collectifs du personnel"
    },
    {
        number: 6241,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Transports sur achats"
    },
    {
        number: 6242,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Transports sur ventes"
    },
    {
        number: 6243,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Transports entre établissements ou chantiers"
    },
    {
        number: 6244,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Transports administratifs"
    },
    {
        number: 6247,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Transports collectifs du personnel"
    },
    {
        number: 6248,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Divers"
    },
    {
        number: 625,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Déplacements, missions et réceptions"
    },
    {
        number: 6251,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Voyages et déplacements"
    },
    {
        number: 6255,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Frais de déménagement"
    },
    {
        number: 6256,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Missions"
    },
    {
        number: 6257,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Réceptions"
    },
    {
        number: 626,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Frais postaux et de télécommunications"
    },
    {
        number: 627,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Services bancaires et assimilés"
    },
    {
        number: 6271,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Frais sur titres (achat, vente, garde)"
    },
    {
        number: 6272,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Commissions et frais sur émission d'emprunts"
    },
    {
        number: 6275,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Frais sur effets"
    },
    {
        number: 6276,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Location de coffres"
    },
    {
        number: 6278,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Autres frais et commissions sur prestations de services"
    },
    {
        number: 628,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Divers"
    },
    {
        number: 6281,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Concours divers (cotisations)"
    },
    {
        number: 6284,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Frais de recrutement de personnel"
    },
    {
        number: 629,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Rabais, remises et ristournes obtenus sur autres services extérieurs"
    },
    {
        number: 63,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "statement",
        label: "Impôts, taxes et versements assimilés"
    },
    {
        number: 631,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Impôts, taxes et versements assimilés sur rémunérations (administrations des impôts)"
    },
    {
        number: 6311,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Taxe sur les salaires"
    },
    {
        number: 6314,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Cotisation pour défaut d'investissement obligatoire dans la construction"
    },
    {
        number: 6318,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Autres"
    },
    {
        number: 633,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Impôts, taxes et versements assimilés sur rémunérations (autres organismes)"
    },
    {
        number: 6331,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Versement de transport"
    },
    {
        number: 6332,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Allocations logement"
    },
    {
        number: 6333,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Contribution unique des employeurs à la formation professionnelle"
    },
    {
        number: 6334,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Participation des employeurs à l'effort de construction"
    },
    {
        number: 6335,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Versements libératoires ouvrant droit à l'exonération de la taxe d'apprentissage"
    },
    {
        number: 6338,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Autres"
    },
    {
        number: 635,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Autres impôts, taxes et versements assimilés (administrations des impôts)"
    },
    {
        number: 6351,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Impôts directs (sauf impôts sur les bénéfices)"
    },
    {
        number: 63511,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Contribution économique territoriale"
    },
    {
        number: 63512,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Taxes foncières"
    },
    {
        number: 63513,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Autres impôts locaux"
    },
    {
        number: 63514,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Taxe sur les véhicules des sociétés"
    },
    {
        number: 6352,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Taxe sur le chiffre d'affaires non récupérables"
    },
    {
        number: 6353,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Impôts indirects"
    },
    {
        number: 6354,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Droits d'enregistrement et de timbre"
    },
    {
        number: 63541,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Droits de mutation"
    },
    {
        number: 6358,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Autres droits"
    },
    {
        number: 637,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Autres impôts, taxes et versements assimilés (autres organismes)"
    },
    {
        number: 6371,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Contribution sociale de solidarité à la charge des sociétés"
    },
    {
        number: 6372,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Taxes perçues par les organismes publics internationaux"
    },
    {
        number: 6374,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Impôts et taxes exigibles à l'Étranger"
    },
    {
        number: 6378,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Taxes diverses"
    },
    {
        number: 638,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Rappel d'impôts (autres qu'impôts sur les bénéfices)"
    },
    {
        number: 64,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "statement",
        label: "Charges de personnel"
    },
    {
        number: 641,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Rémunérations du personnel"
    },
    {
        number: 6411,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Salaires, appointements"
    },
    {
        number: 6412,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Congés payés"
    },
    {
        number: 6413,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Primes et gratifications"
    },
    {
        number: 6414,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Indemnités et avantages divers"
    },
    {
        number: 6415,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Supplément familial"
    },
    {
        number: 644,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Rémunération du travail de l'exploitant"
    },
    {
        number: 645,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Charges de sécurité sociale et de prévoyance"
    },
    {
        number: 6451,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Cotisations à l'URSSAF"
    },
    {
        number: 6452,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Cotisations aux mutuelles"
    },
    {
        number: 6453,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Cotisations aux caisses de retraites"
    },
    {
        number: 6454,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Cotisations à Pôle Emploi"
    },
    {
        number: 6458,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Cotisations aux autres organismes sociaux"
    },
    {
        number: 646,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Cotisations sociales personnelles de l'exploitant"
    },
    {
        number: 647,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Autres charges sociales"
    },
    {
        number: 6471,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Prestations directes"
    },
    {
        number: 6472,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Versements au comité social et économique"
    },
    {
        number: 6474,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Versements aux autres œuvres sociales"
    },
    {
        number: 6475,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Médecine du travail, pharmacie"
    },
    {
        number: 648,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Autres charges de personnel"
    },
    {
        number: 649,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Remboursements de charges de personnel"
    },
    {
        number: 65,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "statement",
        label: "Autres charges de gestion courante"
    },
    {
        number: 651,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Redevances pour concessions, brevets, licences, marques, procédés, solutions informatiques, droits et valeurs similaires"
    },
    {
        number: 6511,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Redevances pour concessions, brevets, licences, marques, procédés, solutions informatiques"
    },
    {
        number: 6516,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Droits d'auteur et de reproduction"
    },
    {
        number: 6518,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Autres droits et valeurs similaires"
    },
    {
        number: 653,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Rémunérations de l'activité des administrateurs et des gérants"
    },
    {
        number: 654,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Pertes sur créances irrécouvrables"
    },
    {
        number: 6541,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Créances de l'exercice"
    },
    {
        number: 6544,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Créances des exercices antérieurs"
    },
    {
        number: 655,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Quote-part de résultat sur opérations faites en commun"
    },
    {
        number: 6551,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Quote-part de bénéfice transférée - comptabilité du gérant"
    },
    {
        number: 6555,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Quote-part de perte supportée - comptabilité des associés non gérants"
    },
    {
        number: 656,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Pertes de change sur créances et dettes commerciales"
    },
    {
        number: 657,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Valeurs comptables des immobilisations incorporelles et corporelles cédées"
    },
    {
        number: 658,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Pénalités et autres charges"
    },
    {
        number: 6581,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Pénalités sur marchés (et dédits payés sur achats et ventes)"
    },
    {
        number: 6582,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Pénalités, amendes fiscales et pénales"
    },
    {
        number: 6583,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Malis provenant de clauses d'indexation"
    },
    {
        number: 6584,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Lots"
    },
    {
        number: 6588,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Pénalités et autres charges"
    },
    {
        number: 66,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "statement",
        label: "Charges financières"
    },
    {
        number: 661,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Charges d'intérêts"
    },
    {
        number: 6611,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Intérêts des emprunts et dettes"
    },
    {
        number: 66116,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Intérêts des emprunts et dettes assimilées"
    },
    {
        number: 66117,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Intérêts des dettes rattachées à des participations"
    },
    {
        number: 6612,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Charges de la fiducie, résultat de la période"
    },
    {
        number: 6615,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Intérêts des comptes courants et des dépôts créditeurs"
    },
    {
        number: 6616,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Intérêts bancaires et sur opérations de financement (escompte, ...)"
    },
    {
        number: 6617,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Intérêts des obligations cautionnées"
    },
    {
        number: 6618,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Intérêts des autres dettes"
    },
    {
        number: 66181,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Intérêts des dettes commerciales"
    },
    {
        number: 66188,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Intérêts des dettes diverses"
    },
    {
        number: 664,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Pertes sur créances liées à des participations"
    },
    {
        number: 665,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Escomptes accordés"
    },
    {
        number: 666,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Pertes de change financières"
    },
    {
        number: 667,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "statement",
        label: "Charges nettes sur cessions de valeurs mobilières de placement"
    },
    {
        number: 6671,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Valeurs comptables des immobilisations financières cédées"
    },
    {
        number: 6672,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Charges nettes sur cessions de titres immobilisés de l'activité de portefeuille"
    },
    {
        number: 6673,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Charges nettes sur cessions de valeurs mobilières de placement"
    },
    {
        number: 6674,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Charges nettes sur cessions de jetons"
    },
    {
        number: 668,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Autres charges financières"
    },
    {
        number: 6683,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Mali provenant du rachat par l'entité d'actions et obligations émises par elle-même"
    },
    {
        number: 67,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "statement",
        label: "Charges exceptionnelles"
    },
    {
        number: 672,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Charges sur exercices antérieurs"
    },
    {
        number: 678,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Autres charges exceptionnelles"
    },
    {
        number: 68,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "statement",
        label: "Dotations aux amortissements, aux dépréciations et aux provisions"
    },
    {
        number: 681,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "statement",
        label: "Dotations aux amortissements, aux dépréciations et aux provisions (à inscrire dans les charges d'exploitation)"
    },
    {
        number: 6811,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Dotations aux amortissements sur immobilisations incorporelles et corporelles"
    },
    {
        number: 68111,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Immobilisations incorporelles et frais d'établissement"
    },
    {
        number: 68112,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Immobilisations corporelles"
    },
    {
        number: 6815,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Dotations aux provisions d'exploitation"
    },
    {
        number: 6816,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Dotations pour dépréciations des immobilisations incorporelles et corporelles"
    },
    {
        number: 68161,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Immobilisations incorporelles"
    },
    {
        number: 68162,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Immobilisations corporelles"
    },
    {
        number: 6817,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Dotations pour dépréciations des actifs circulants"
    },
    {
        number: 68173,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Stocks et en-cours"
    },
    {
        number: 68174,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Créances"
    },
    {
        number: 686,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Dotations aux amortissements, aux dépréciations et aux provisions (à inscrire dans les charges financières)"
    },
    {
        number: 6861,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Dotations aux amortissements des primes de remboursement des obligations"
    },
    {
        number: 6862,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Dotations aux amortissements des frais d'émission des emprunts"
    },
    {
        number: 6865,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Dotations aux provisions financières"
    },
    {
        number: 6866,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Dotations pour dépréciations des éléments financiers"
    },
    {
        number: 68662,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Immobilisations financières"
    },
    {
        number: 68665,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Valeurs mobilières de placement"
    },
    {
        number: 687,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "statement",
        label: "Dotations aux amortissements, aux dépréciations et aux provisions (à inscrire dans les charges exceptionnelles)"
    },
    {
        number: 6871,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Dotations aux amortissements exceptionnels des immobilisations"
    },
    {
        number: 6872,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Dotations aux provisions réglementées (immobilisations)"
    },
    {
        number: 68725,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Amortissements dérogatoires"
    },
    {
        number: 6873,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Dotations aux provisions réglementées (stocks)"
    },
    {
        number: 6874,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Dotations aux autres provisions réglementées"
    },
    {
        number: 6875,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Dotations aux provisions exceptionnelles"
    },
    {
        number: 6876,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Dotations pour dépréciations exceptionnelles"
    },
    {
        number: 69,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "statement",
        label: "Participation des salariés - Impôts sur les bénéfices et assimilés"
    },
    {
        number: 691,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Participation des salariés aux résultats"
    },
    {
        number: 695,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Impôts sur les bénéfices"
    },
    {
        number: 6951,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Impôts dus en France"
    },
    {
        number: 6952,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Contribution additionnelle à l'impôt sur les bénéfices"
    },
    {
        number: 6954,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Impôts dus à l'étranger"
    },
    {
        number: 696,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Suppléments d'impôt sur les sociétés liés aux distributions"
    },
    {
        number: 698,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "statement",
        label: "Intégration fiscale"
    },
    {
        number: 6981,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Intégration fiscale - Charges"
    },
    {
        number: 6989,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Intégration fiscale - Produits"
    },
    {
        number: 699,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Produits - Reports en arrière des déficits"
    },
    {
        number: 7,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "statement",
        label: "Comptes de produits"
    },
    {
        number: 70,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "statement",
        label: "Ventes de produits fabriqués, prestations de services, marchandises"
    },
    {
        number: 701,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Ventes de produits finis"
    },
    {
        number: 702,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Ventes de produits intermédiaires"
    },
    {
        number: 703,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Ventes de produits résiduels"
    },
    {
        number: 704,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Travaux"
    },
    {
        number: 705,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Études"
    },
    {
        number: 706,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Prestations de services"
    },
    {
        number: 707,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Ventes de marchandises"
    },
    {
        number: 708,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Produits des activités annexes"
    },
    {
        number: 7081,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Produits des services exploités dans l'intérêt du personnel"
    },
    {
        number: 7082,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Commissions et courtages"
    },
    {
        number: 7083,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Locations diverses"
    },
    {
        number: 7084,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Mise à disposition de personnel facturée"
    },
    {
        number: 7085,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Ports et frais accessoires facturés"
    },
    {
        number: 7086,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Bonis sur reprises d'emballages consignés"
    },
    {
        number: 7087,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Bonifications obtenues des clients et primes sur ventes"
    },
    {
        number: 7088,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Autres produits d'activités annexes (cessions d'approvisionnements, ...)"
    },
    {
        number: 709,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "statement",
        label: "Rabais, remises et ristournes accordés"
    },
    {
        number: 7091,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Rabais, remises et ristournes accordés sur ventes de produits finis"
    },
    {
        number: 7092,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Rabais, remises et ristournes accordés sur ventes de produits intermédiaires"
    },
    {
        number: 7094,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Rabais, remises et ristournes accordés sur travaux"
    },
    {
        number: 7095,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Rabais, remises et ristournes accordés sur études"
    },
    {
        number: 7096,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Rabais, remises et ristournes accordés sur prestations de services"
    },
    {
        number: 7097,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Rabais, remises et ristournes accordés sur ventes de marchandises"
    },
    {
        number: 7098,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Rabais, remises et ristournes accordés sur produits des activités annexes"
    },
    {
        number: 71,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "statement",
        label: "Production stockée (ou déstockage)"
    },
    {
        number: 713,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "statement",
        label: "Variation des stocks des en-cours de production et de produits"
    },
    {
        number: 7133,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Variation des en-cours de production de biens"
    },
    {
        number: 71331,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Produits en cours"
    },
    {
        number: 71335,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Travaux en cours"
    },
    {
        number: 7134,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Variation des en-cours de production de services"
    },
    {
        number: 71341,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Études en cours"
    },
    {
        number: 71345,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Prestations de services en cours"
    },
    {
        number: 7135,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Variation des stocks de produits"
    },
    {
        number: 71351,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Produits intermédiaires"
    },
    {
        number: 71355,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Produits finis"
    },
    {
        number: 71358,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Produits résiduels"
    },
    {
        number: 72,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "statement",
        label: "Production immobilisée"
    },
    {
        number: 721,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Immobilisations incorporelles"
    },
    {
        number: 722,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Immobilisations corporelles"
    },
    {
        number: 74,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "statement",
        label: "Subventions"
    },
    {
        number: 741,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Subventions d'exploitation"
    },
    {
        number: 742,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Subventions d'équilibre"
    },
    {
        number: 747,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Quote-part des subventions d'investissement virée au résultat de l'exercice"
    },
    {
        number: 75,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "statement",
        label: "Autres produits de gestion courante"
    },
    {
        number: 751,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Redevances pour concessions, brevets, licences, marques, procédés, solutions informatiques, droits et valeurs similaires"
    },
    {
        number: 7511,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Redevances pour concessions, brevets, licences, marques, procédés, solutions informatiques"
    },
    {
        number: 7516,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Droits d'auteur et de reproduction"
    },
    {
        number: 7518,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Autres droits et valeurs similaires"
    },
    {
        number: 752,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Revenus des immeubles non affectés à des activités professionnelles"
    },
    {
        number: 753,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Rémunérations de l'activité des administrateurs et des gérants"
    },
    {
        number: 754,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Ristournes perçues des coopératives provenant des excédents"
    },
    {
        number: 755,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Quote-parts de résultat sur opérations faites en commun"
    },
    {
        number: 7551,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Quote-part de perte transférée - comptabilité du gérant"
    },
    {
        number: 7555,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Quote-part de bénéfice attribuée - comptabilité des associés non-gérants"
    },
    {
        number: 756,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Gains de change sur créances et dettes commerciales"
    },
    {
        number: 757,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Produits des cessions d'immobilisations incorporelles et corporelles"
    },
    {
        number: 758,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Indemnités et autres produits"
    },
    {
        number: 7581,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Dédits et pénalités perçus sur achats et ventes"
    },
    {
        number: 7582,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Libéralités reçues"
    },
    {
        number: 7583,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Rentrées sur créances amorties"
    },
    {
        number: 7584,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Dégrèvements d'impôts autres qu'impôts sur les bénéfices"
    },
    {
        number: 7585,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Bonis provenant de clauses d'indexation"
    },
    {
        number: 7586,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Lots"
    },
    {
        number: 7587,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Indemnités d'assurance"
    },
    {
        number: 7588,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Opérations de constitution ou liquidation des fiducies"
    },
    {
        number: 76,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "statement",
        label: "Produits financiers"
    },
    {
        number: 761,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Produits de participations"
    },
    {
        number: 7611,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Revenus des titres de participation"
    },
    {
        number: 7612,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Produits de la fiducie, résultat de la période"
    },
    {
        number: 7616,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Revenus sur autres formes de participation"
    },
    {
        number: 7617,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Revenus des créances rattachées à des participations"
    },
    {
        number: 762,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Produits des autres immobilisations financières"
    },
    {
        number: 7621,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Revenus des titres immobilisés"
    },
    {
        number: 7626,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Revenus des prêts"
    },
    {
        number: 7627,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Revenus des créances immobilisées"
    },
    {
        number: 763,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Revenus des autres créances"
    },
    {
        number: 7631,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Revenus des créances commerciales"
    },
    {
        number: 7638,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Revenus des créances diverses"
    },
    {
        number: 764,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Revenus des valeurs mobilières de placement"
    },
    {
        number: 765,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Escomptes obtenus"
    },
    {
        number: 766,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Gains de change financiers"
    },
    {
        number: 767,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "statement",
        label: "Produits sur cession d'éléments financiers"
    },
    {
        number: 7671,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Produits des cessions d'immobilisations financières"
    },
    {
        number: 7672,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Produits nets sur cessions de titres immobilisés de l'activité de portefeuille"
    },
    {
        number: 7673,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Produits nets sur cessions de valeurs mobilières de placement"
    },
    {
        number: 7674,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Produits nets sur cessions de jetons"
    },
    {
        number: 768,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Autres produits financiers"
    },
    {
        number: 7683,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Bonis provenant du rachat par l'entreprise d'actions et d'obligations émises par elle-même"
    },
    {
        number: 77,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "statement",
        label: "Produits exceptionnels"
    },
    {
        number: 772,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Produits sur exercices antérieurs"
    },
    {
        number: 778,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Autres produits exceptionnels"
    },
    {
        number: 78,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "statement",
        label: "Reprises sur amortissements, dépréciations et provisions"
    },
    {
        number: 781,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "statement",
        label: "Reprises sur amortissements, dépréciations et provisions (à inscrire dans les produits d'exploitation)"
    },
    {
        number: 7811,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Reprises sur amortissements des immobilisations incorporelles et corporelles"
    },
    {
        number: 78111,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Immobilisations incorporelles"
    },
    {
        number: 78112,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Immobilisations corporelles"
    },
    {
        number: 7815,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Reprises sur provisions d'exploitation"
    },
    {
        number: 7816,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Reprises sur dépréciations des immobilisations incorporelles et corporelles"
    },
    {
        number: 78161,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Immobilisations incorporelles"
    },
    {
        number: 78162,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Immobilisations corporelles"
    },
    {
        number: 7817,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Reprises sur dépréciations des actifs circulants"
    },
    {
        number: 78173,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Stocks et en-cours"
    },
    {
        number: 78174,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Créances"
    },
    {
        number: 786,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Reprises sur dépréciations et provisions (à inscrire dans les produits financiers)"
    },
    {
        number: 7865,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Reprises sur provisions financières"
    },
    {
        number: 7866,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Reprises sur dépréciations des éléments financiers"
    },
    {
        number: 78662,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Immobilisations financières"
    },
    {
        number: 78665,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Valeurs mobilières de placements"
    },
    {
        number: 787,
        isMandatory: true,
        isClass: false,
        isSelectable: false,
        type: "statement",
        label: "Reprises sur dépréciations et provisions (à inscrire dans les produits exceptionnels)"
    },
    {
        number: 7872,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Reprises sur provisions réglementées (immobilisations)"
    },
    {
        number: 78725,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Amortissements dérogatoires"
    },
    {
        number: 7873,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Reprises sur provisions réglementées (stocks)"
    },
    {
        number: 7874,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Reprises sur autres provisions réglementées"
    },
    {
        number: 7875,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Reprises sur provisions exceptionnelles"
    },
    {
        number: 7876,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "statement",
        label: "Reprises sur dépréciations exceptionnelles"
    },
    {
        number: 8,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "special",
        label: "Comptes spéciaux"
    },
    {
        number: 80,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "special",
        label: "Engagements"
    },
    {
        number: 801,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "special",
        label: "Engagements donnés par l'entité"
    },
    {
        number: 8011,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "special",
        label: "Avals, cautions, garanties"
    },
    {
        number: 8014,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "special",
        label: "Effets circulant sous l'endos de l'entité"
    },
    {
        number: 8016,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "special",
        label: "Redevances crédit-bail restant à courir"
    },
    {
        number: 80161,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "special",
        label: "Crédit-bail mobilier"
    },
    {
        number: 80165,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "special",
        label: "Crédit-bail immobilier"
    },
    {
        number: 8018,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "special",
        label: "Autres engagements donnés"
    },
    {
        number: 802,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "special",
        label: "Engagements reçus par l'entité"
    },
    {
        number: 8021,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "special",
        label: "Avals, cautions, garanties"
    },
    {
        number: 8024,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "special",
        label: "Créances escomptées non échues"
    },
    {
        number: 8026,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "special",
        label: "Engagements reçus pour utilisation en crédit-bail"
    },
    {
        number: 80261,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "special",
        label: "Crédit-bail mobilier"
    },
    {
        number: 80265,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "special",
        label: "Crédit-bail immobilier"
    },
    {
        number: 8028,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "special",
        label: "Autres engagements reçus"
    },
    {
        number: 809,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "special",
        label: "Contrepartie des engagements"
    },
    {
        number: 8091,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "special",
        label: "Contrepartie 801"
    },
    {
        number: 8092,
        isMandatory: false,
        isClass: false,
        isSelectable: true,
        type: "special",
        label: "Contrepartie 802"
    },
    {
        number: 88,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "special",
        label: "Résultat en instance d'affectation"
    },
    {
        number: 89,
        isMandatory: true,
        isClass: true,
        isSelectable: false,
        type: "special",
        label: "Bilan"
    },
    {
        number: 890,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "special",
        label: "Bilan d'ouverture"
    },
    {
        number: 891,
        isMandatory: true,
        isClass: false,
        isSelectable: true,
        type: "special",
        label: "Bilan de clôture"
    }
]
