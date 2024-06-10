type DefaultAccount = {
    number: number
    isMandatory: boolean
    label: string
}


export const associationAccounts: DefaultAccount[] = [
    {
        number: 1,
        isMandatory: true,
        label: "Comptes de capitaux"
    },
    {
        number: 10,
        isMandatory: true,
        label: "Fonds propres et réserves"
    },
    {
        number: 101,
        isMandatory: true,
        label: "Capital"
    },
    {
        number: 1011,
        isMandatory: false,
        label: "Capital souscrit - non appelé"
    },
    {
        number: 1012,
        isMandatory: false,
        label: "Capital souscrit - appelé, non versé"
    },
    {
        number: 1013,
        isMandatory: false,
        label: "Capital souscrit - appelé, versé"
    },
    {
        number: 10131,
        isMandatory: false,
        label: "Capital non amorti"
    },
    {
        number: 10132,
        isMandatory: false,
        label: "Capital amorti"
    },
    {
        number: 1018,
        isMandatory: false,
        label: "Capital souscrit soumis à des réglementations particulières"
    },
    {
        number: 102,
        isMandatory: true,
        label: "Fonds propres sans droit de reprise"
    },
    {
        number: 1021,
        isMandatory: true,
        label: "Première situation nette établie"
    },
    {
        number: 1022,
        isMandatory: true,
        label: "Fonds statutaires (à subdiviser en fonction des statuts)"
    },
    {
        number: 1023,
        isMandatory: true,
        label: "Dotations non consomptibles"
    },
    {
        number: 10231,
        isMandatory: false,
        label: "Dotations non consomptibles initiales"
    },
    {
        number: 10232,
        isMandatory: false,
        label: "Dotations non consomptibles complémentaires"
    },
    {
        number: 1024,
        isMandatory: true,
        label: "Autres fonds propres sans droit de reprise"
    },
    {
        number: 103,
        isMandatory: true,
        label: "Fonds propres avec droit de reprise"
    },
    {
        number: 1032,
        isMandatory: false,
        label: "Fonds statutaires (à subdiviser en fonction des statuts)"
    },
    {
        number: 1034,
        isMandatory: false,
        label: "Autres fonds propres avec droit de reprise"
    },
    {
        number: 104,
        isMandatory: true,
        label: "Primes liées au capital social"
    },
    {
        number: 1041,
        isMandatory: false,
        label: "Primes d'émission"
    },
    {
        number: 1042,
        isMandatory: false,
        label: "Primes de fusion"
    },
    {
        number: 1043,
        isMandatory: false,
        label: "Primes d'apport"
    },
    {
        number: 1044,
        isMandatory: false,
        label: "Primes de conversion d'obligations en actions"
    },
    {
        number: 1045,
        isMandatory: false,
        label: "Bons de souscription d'actions"
    },
    {
        number: 105,
        isMandatory: true,
        label: "Écarts de réévaluation"
    },
    {
        number: 1051,
        isMandatory: false,
        label: "Écarts de réévaluation sur des biens sans droit de reprise"
    },
    {
        number: 1052,
        isMandatory: false,
        label: "Écarts de réévaluation sur des biens avec droit de reprise"
    },
    {
        number: 106,
        isMandatory: true,
        label: "Réserves"
    },
    {
        number: 1061,
        isMandatory: true,
        label: "Réserve légale"
    },
    {
        number: 1062,
        isMandatory: true,
        label: "Réserves indisponibles"
    },
    {
        number: 1063,
        isMandatory: true,
        label: "Réserves statutaires ou contractuelles"
    },
    {
        number: 1064,
        isMandatory: true,
        label: "Réserves réglementées"
    },
    {
        number: 1068,
        isMandatory: true,
        label: "Réserves pour projet de l'entité"
    },
    {
        number: 107,
        isMandatory: true,
        label: "Écart d'équivalence"
    },
    {
        number: 108,
        isMandatory: true,
        label: "Dotations consomptibles"
    },
    {
        number: 1081,
        isMandatory: false,
        label: "Dotations consomptibles"
    },
    {
        number: 1089,
        isMandatory: false,
        label: "Dotations consomptibles inscrites au compte de résultat"
    },
    {
        number: 109,
        isMandatory: true,
        label: "Actionnaires : capital souscrit - non appelé"
    },
    {
        number: 11,
        isMandatory: true,
        label: "Report à nouveau (solde créditeur ou débiteur)"
    },
    {
        number: 110,
        isMandatory: true,
        label: "Report à nouveau - solde créditeur"
    },
    {
        number: 119,
        isMandatory: true,
        label: "Report à nouveau - solde débiteur"
    },
    {
        number: 12,
        isMandatory: true,
        label: "Résultat de l'exercice"
    },
    {
        number: 120,
        isMandatory: true,
        label: "Résultat de l'exercice - bénéfice"
    },
    {
        number: 1209,
        isMandatory: false,
        label: "Acomptes sur dividendes"
    },
    {
        number: 129,
        isMandatory: true,
        label: "Résultat de l'exercice - perte"
    },
    {
        number: 13,
        isMandatory: true,
        label: "Subventions d'investissement"
    },
    {
        number: 131,
        isMandatory: true,
        label: "Subventions d'investissement octroyées"
    },
    {
        number: 139,
        isMandatory: true,
        label: "Subventions d'investissement inscrites au compte de résultat"
    },
    {
        number: 14,
        isMandatory: true,
        label: "Provisions réglementées"
    },
    {
        number: 143,
        isMandatory: true,
        label: "Provisions réglementées pour hausse de prix"
    },
    {
        number: 145,
        isMandatory: true,
        label: "Amortissements dérogatoires"
    },
    {
        number: 148,
        isMandatory: true,
        label: "Autres provisions réglementées"
    },
    {
        number: 15,
        isMandatory: true,
        label: "Provisions pour risques et charges"
    },
    {
        number: 151,
        isMandatory: true,
        label: "Provisions pour risques"
    },
    {
        number: 1511,
        isMandatory: false,
        label: "Provisions pour litiges"
    },
    {
        number: 1512,
        isMandatory: false,
        label: "Provisions pour garanties données aux clients"
    },
    {
        number: 1514,
        isMandatory: false,
        label: "Provisions pour amendes et pénalités"
    },
    {
        number: 1515,
        isMandatory: false,
        label: "Provisions pour pertes de change"
    },
    {
        number: 1516,
        isMandatory: false,
        label: "Provisions pour pertes sur contrats"
    },
    {
        number: 1518,
        isMandatory: false,
        label: "Autres provisions pour risques"
    },
    {
        number: 152,
        isMandatory: true,
        label: "Provisions pour charges sur legs ou donations"
    },
    {
        number: 156,
        isMandatory: false,
        label: "Provisions pour remise en état"
    },
    {
        number: 1527,
        isMandatory: false,
        label: "Autres provisions pour charges"
    },
    {
        number: 16,
        isMandatory: true,
        label: "Emprunts et dettes assimilées"
    },
    {
        number: 161,
        isMandatory: true,
        label: "Emprunts obligataires convertibles"
    },
    {
        number: 1618,
        isMandatory: false,
        label: "Intérêts courus sur emprunts obligataires convertibles"
    },
    {
        number: 162,
        isMandatory: false,
        label: "Obligations représentatives de passifs nets remis en fiducie"
    },
    {
        number: 163,
        isMandatory: true,
        label: "Autres emprunts obligataires"
    },
    {
        number: 1631,
        isMandatory: false,
        label: "Titres associatifs et assimilés"
    },
    {
        number: 1638,
        isMandatory: false,
        label: "Intérêts courus sur autres emprunts obligataires"
    },
    {
        number: 164,
        isMandatory: true,
        label: "Emprunts auprès des établissements de crédit"
    },
    {
        number: 1648,
        isMandatory: false,
        label: "Intérêts courus sur emprunts auprès des établissements de crédit"
    },
    {
        number: 165,
        isMandatory: true,
        label: "Dépôts et cautionnements reçus"
    },
    {
        number: 1651,
        isMandatory: false,
        label: "Dépôts"
    },
    {
        number: 1655,
        isMandatory: false,
        label: "Cautionnements"
    },
    {
        number: 1658,
        isMandatory: false,
        label: "Intérêts courus sur dépôts et cautionnements reçus"
    },
    {
        number: 166,
        isMandatory: true,
        label: "Participation des salariés aux résultats"
    },
    {
        number: 1661,
        isMandatory: false,
        label: "Comptes bloqués"
    },
    {
        number: 1662,
        isMandatory: false,
        label: "Fonds de participation"
    },
    {
        number: 1668,
        isMandatory: false,
        label: "Intérêts courus sur participation des salariés aux résultats"
    },
    {
        number: 167,
        isMandatory: true,
        label: "Emprunts et dettes assortis de conditions particulières"
    },
    {
        number: 1671,
        isMandatory: true,
        label: "Émissions de titres participatifs"
    },
    {
        number: 16718,
        isMandatory: false,
        label: "Intérêts courus sur titres participatifs"
    },
    {
        number: 1674,
        isMandatory: true,
        label: "Avances conditionnées de l'État"
    },
    {
        number: 16748,
        isMandatory: false,
        label: "Intérêts courus sur avances conditionnées"
    },
    {
        number: 1675,
        isMandatory: true,
        label: "Emprunts participatifs"
    },
    {
        number: 16758,
        isMandatory: false,
        label: "Intérêts courus sur emprunts participatifs"
    },
    {
        number: 168,
        isMandatory: true,
        label: "Autres emprunts et dettes assimilées"
    },
    {
        number: 1681,
        isMandatory: false,
        label: "Autres emprunts"
    },
    {
        number: 1685,
        isMandatory: false,
        label: "Rentes viagères capitalisées"
    },
    {
        number: 1687,
        isMandatory: false,
        label: "Autres dettes"
    },
    {
        number: 1688,
        isMandatory: false,
        label: "Intérêts courus sur autres emprunts et dettes assimilées"
    },
    {
        number: 169,
        isMandatory: true,
        label: "Primes de remboursement des emprunts"
    },
    {
        number: 17,
        isMandatory: true,
        label: "Dettes rattachées à des participations"
    },
    {
        number: 171,
        isMandatory: false,
        label: "Dettes rattachées à des participations - groupe"
    },
    {
        number: 174,
        isMandatory: false,
        label: "Dettes rattachées à des participations - hors groupe"
    },
    {
        number: 178,
        isMandatory: false,
        label: "Dettes rattachées à des sociétés en participation"
    },
    {
        number: 18,
        isMandatory: true,
        label: "Comptes de liaison des établissements et sociétés en participation"
    },
    {
        number: 181,
        isMandatory: false,
        label: "Comptes de liaison des établissements"
    },
    {
        number: 186,
        isMandatory: false,
        label: "Biens et prestations de services échangés entre établissements - charges"
    },
    {
        number: 187,
        isMandatory: false,
        label: "Biens et prestations de services échangés entre établissements - produits"
    },
    {
        number: 188,
        isMandatory: false,
        label: "Comptes de liaison des sociétés en participation"
    },
    {
        number: 19,
        isMandatory: true,
        label: "Fonds dédiés ou reportés"
    },
    {
        number: 191,
        isMandatory: true,
        label: "Fonds reportés liés aux legs ou donations"
    },
    {
        number: 1911,
        isMandatory: false,
        label: "Legs ou donations"
    },
    {
        number: 1912,
        isMandatory: false,
        label: "Donations temporaires d'usufruit"
    },
    {
        number: 194,
        isMandatory: true,
        label: "Fonds dédiés sur subventions d'exploitation"
    },
    {
        number: 195,
        isMandatory: true,
        label: "Fonds dédiés sur contributions financières d'autres organismes"
    },
    {
        number: 196,
        isMandatory: true,
        label: "Fonds dédiés sur ressources liées à la générosité du public"
    },
    {
        number: 2,
        isMandatory: true,
        label: "Comptes d'immobilisations"
    },
    {
        number: 20,
        isMandatory: true,
        label: "Immobilisations incorporelles et frais d'établissement"
    },
    {
        number: 201,
        isMandatory: true,
        label: "Frais d'établissement"
    },
    {
        number: 2011,
        isMandatory: false,
        label: "Frais de constitution"
    },
    {
        number: 2012,
        isMandatory: false,
        label: "Frais de premier établissement"
    },
    {
        number: 20121,
        isMandatory: false,
        label: "Frais de prospection"
    },
    {
        number: 20122,
        isMandatory: false,
        label: "Frais de publicité"
    },
    {
        number: 2013,
        isMandatory: false,
        label: "Frais d'augmentation de capital et d'opérations diverses - fusions, scissions, transformations"
    },
    {
        number: 203,
        isMandatory: true,
        label: "Frais de développement"
    },
    {
        number: 204,
        isMandatory: true,
        label: "Donations temporaires d'usufruit"
    },
    {
        number: 205,
        isMandatory: true,
        label: "Concessions et droits similaires, brevets, licences, marques, procédés, solutions informatiques, droits et valeurs similaires"
    },
    {
        number: 206,
        isMandatory: true,
        label: "Droit au bail"
    },
    {
        number: 207,
        isMandatory: true,
        label: "Fonds commercial"
    },
    {
        number: 208,
        isMandatory: true,
        label: "Autres immobilisations incorporelles"
    },
    {
        number: 2081,
        isMandatory: false,
        label: "Mali de fusion sur actifs incorporels"
    },
    {
        number: 21,
        isMandatory: true,
        label: "Immobilisations corporelles"
    },
    {
        number: 211,
        isMandatory: true,
        label: "Terrains"
    },
    {
        number: 2111,
        isMandatory: false,
        label: "Terrains nus"
    },
    {
        number: 2112,
        isMandatory: false,
        label: "Terrains aménagés"
    },
    {
        number: 2113,
        isMandatory: false,
        label: "Sous-sols et sur-sols"
    },
    {
        number: 2114,
        isMandatory: false,
        label: "Terrains de carrières (Tréfonds)"
    },
    {
        number: 2115,
        isMandatory: false,
        label: "Terrains bâtis"
    },
    {
        number: 212,
        isMandatory: true,
        label: "Agencements et aménagements de terrains (même ventilation que celle du compte 211)"
    },
    {
        number: 213,
        isMandatory: true,
        label: "Constructions"
    },
    {
        number: 2131,
        isMandatory: false,
        label: "Bâtiments"
    },
    {
        number: 2135,
        isMandatory: false,
        label: "Installations générales - agencements - aménagements des constructions"
    },
    {
        number: 2138,
        isMandatory: false,
        label: "Ouvrages d'infrastructure"
    },
    {
        number: 214,
        isMandatory: true,
        label: "Constructions sur sol d'autrui (même ventilation que celle du compte 213)"
    },
    {
        number: 215,
        isMandatory: true,
        label: "Installations techniques, matériels et outillages industriels"
    },
    {
        number: 2151,
        isMandatory: false,
        label: "Installations complexes spécialisées"
    },
    {
        number: 21511,
        isMandatory: false,
        label: "Installations complexes spécialisées sur sol propre"
    },
    {
        number: 21514,
        isMandatory: false,
        label: "Installations complexes spécialisées sur sol d'autrui"
    },
    {
        number: 2153,
        isMandatory: false,
        label: "Installations à caractère spécifique"
    },
    {
        number: 21531,
        isMandatory: false,
        label: "Installations à caractère spécifique sur sol propre"
    },
    {
        number: 21534,
        isMandatory: false,
        label: "Installations à caractère spécifique sur sol d'autrui"
    },
    {
        number: 2154,
        isMandatory: false,
        label: "Matériels industriels"
    },
    {
        number: 2155,
        isMandatory: false,
        label: "Outillages industriels"
    },
    {
        number: 2157,
        isMandatory: false,
        label: "Agencements et aménagements des matériels et outillages industriels"
    },
    {
        number: 218,
        isMandatory: true,
        label: "Autres immobilisations corporelles"
    },
    {
        number: 2181,
        isMandatory: false,
        label: "Installations générales, agencements, aménagements divers"
    },
    {
        number: 2182,
        isMandatory: false,
        label: "Matériel de transport"
    },
    {
        number: 2183,
        isMandatory: false,
        label: "Matériel de bureau et matériel informatique"
    },
    {
        number: 2184,
        isMandatory: false,
        label: "Mobilier"
    },
    {
        number: 2185,
        isMandatory: false,
        label: "Cheptel"
    },
    {
        number: 2186,
        isMandatory: false,
        label: "Emballages récupérables"
    },
    {
        number: 2187,
        isMandatory: false,
        label: "Mali de fusions sur actifs corporels"
    },
    {
        number: 22,
        isMandatory: true,
        label: "Immobilisations mises en concession"
    },
    {
        number: 229,
        isMandatory: true,
        label: "Droits du concédant"
    },
    {
        number: 23,
        isMandatory: true,
        label: "Immobilisations en cours, avances et acomptes"
    },
    {
        number: 231,
        isMandatory: true,
        label: "Immobilisations corporelles en cours"
    },
    {
        number: 232,
        isMandatory: true,
        label: "Immobilisations incorporelles en cours"
    },
    {
        number: 237,
        isMandatory: true,
        label: "Avances et acomptes versés sur commandes d'immobilisations incorporelles"
    },
    {
        number: 238,
        isMandatory: true,
        label: "Avances et acomptes versés sur commandes d'immobilisations corporelles"
    },
    {
        number: 24,
        isMandatory: true,
        label: "Biens reçus par legs ou donations destinés à être cédés"
    },
    {
        number: 26,
        isMandatory: true,
        label: "Participations et créances rattachées à des participations"
    },
    {
        number: 261,
        isMandatory: true,
        label: "Titres de participation"
    },
    {
        number: 2611,
        isMandatory: false,
        label: "Actions"
    },
    {
        number: 2618,
        isMandatory: false,
        label: "Autres titres"
    },
    {
        number: 262,
        isMandatory: true,
        label: "Titres évalués par équivalence"
    },
    {
        number: 266,
        isMandatory: true,
        label: "Autres formes de participation"
    },
    {
        number: 2661,
        isMandatory: false,
        label: "Droits représentatifs d'actifs nets remis en fiducie"
    },
    {
        number: 267,
        isMandatory: true,
        label: "Créances rattachées à des participations"
    },
    {
        number: 2671,
        isMandatory: false,
        label: "Créances rattachées à des participations - groupe"
    },
    {
        number: 2674,
        isMandatory: false,
        label: "Créances rattachées à des participations - hors groupe"
    },
    {
        number: 2675,
        isMandatory: false,
        label: "Versements représentatifs d'apports non capitalisés - appel de fonds"
    },
    {
        number: 2676,
        isMandatory: false,
        label: "Avances consolidables"
    },
    {
        number: 2677,
        isMandatory: false,
        label: "Autres créances rattachées à des participations"
    },
    {
        number: 2678,
        isMandatory: false,
        label: "Intérêts courus"
    },
    {
        number: 268,
        isMandatory: true,
        label: "Créances rattachées à des sociétés en participation"
    },
    {
        number: 2681,
        isMandatory: false,
        label: "Principal"
    },
    {
        number: 2688,
        isMandatory: false,
        label: "Intérêts courus"
    },
    {
        number: 269,
        isMandatory: true,
        label: "Versements restant à effectuer sur titres de participation non libérés"
    },
    {
        number: 27,
        isMandatory: true,
        label: "Autres immobilisations financières"
    },
    {
        number: 271,
        isMandatory: true,
        label: "Titres immobilisés autres que les titres immobilisés de l'activité de portefeuille (droit de propriété)"
    },
    {
        number: 2711,
        isMandatory: false,
        label: "Actions"
    },
    {
        number: 2718,
        isMandatory: false,
        label: "Autres titres"
    },
    {
        number: 272,
        isMandatory: true,
        label: "Titres immobilisés (droit de créance)"
    },
    {
        number: 2721,
        isMandatory: false,
        label: "Obligations"
    },
    {
        number: 2722,
        isMandatory: false,
        label: "Bons"
    },
    {
        number: 273,
        isMandatory: true,
        label: "Titres immobilisés de l'activité de portefeuille"
    },
    {
        number: 274,
        isMandatory: true,
        label: "Prêts"
    },
    {
        number: 2741,
        isMandatory: false,
        label: "Prêts participatifs"
    },
    {
        number: 2742,
        isMandatory: false,
        label: "Prêts aux partenaires"
    },
    {
        number: 2743,
        isMandatory: false,
        label: "Prêts au personnel"
    },
    {
        number: 2748,
        isMandatory: false,
        label: "Autres prêts"
    },
    {
        number: 275,
        isMandatory: true,
        label: "Dépôts et cautionnements versés"
    },
    {
        number: 2751,
        isMandatory: false,
        label: "Dépôts"
    },
    {
        number: 2755,
        isMandatory: false,
        label: "Cautionnements"
    },
    {
        number: 276,
        isMandatory: true,
        label: "Autres créances immobilisées"
    },
    {
        number: 2761,
        isMandatory: true,
        label: "Créances diverses"
    },
    {
        number: 2768,
        isMandatory: true,
        label: "Intérêts courus"
    },
    {
        number: 27682,
        isMandatory: true,
        label: "Intérêts courus sur titres immobilisés (droit de créance)"
    },
    {
        number: 27684,
        isMandatory: true,
        label: "Intérêts courus sur prêts"
    },
    {
        number: 27685,
        isMandatory: true,
        label: "Intérêts courus sur dépôts et cautionnements"
    },
    {
        number: 27688,
        isMandatory: true,
        label: "Intérêts courus sur créances diverses"
    },
    {
        number: 277,
        isMandatory: true,
        label: "Actions propres ou parts propres"
    },
    {
        number: 2771,
        isMandatory: false,
        label: "Actions propres ou parts propres"
    },
    {
        number: 2772,
        isMandatory: false,
        label: "Actions propres ou parts propres en voie d'annulation"
    },
    {
        number: 278,
        isMandatory: false,
        label: "Mali de fusion sur actifs financiers"
    },
    {
        number: 279,
        isMandatory: true,
        label: "Versements restant à effectuer sur titres immobilisés non libérés"
    },
    {
        number: 28,
        isMandatory: true,
        label: "Amortissements des immobilisations"
    },
    {
        number: 280,
        isMandatory: true,
        label: "Amortissements des immobilisations incorporelles et des frais d'établissement (même ventilation que celle du compte 20)"
    },
    {
        number: 2801,
        isMandatory: true,
        label: "Frais d'établissement (même ventilation que celle du compte 201)"
    },
    {
        number: 2803,
        isMandatory: true,
        label: "Frais de développement"
    },
    {
        number: 2804,
        isMandatory: true,
        label: "Donations temporaires d'usufruit"
    },
    {
        number: 2805,
        isMandatory: true,
        label: "Concessions et droits similaires, brevets, licences, solutions informatiques, droits et valeurs similaires"
    },
    {
        number: 2806,
        isMandatory: true,
        label: "Droit au bail"
    },
    {
        number: 2807,
        isMandatory: true,
        label: "Fonds commercial"
    },
    {
        number: 2808,
        isMandatory: true,
        label: "Autres immobilisations incorporelles"
    },
    {
        number: 281,
        isMandatory: true,
        label: "Amortissements des immobilisations corporelles (même ventilation que celle du compte 21)"
    },
    {
        number: 2812,
        isMandatory: true,
        label: "Agencements, aménagements de terrains (même ventilation que celle du compte 212)"
    },
    {
        number: 2813,
        isMandatory: true,
        label: "Constructions (même ventilation que celle du compte 213)"
    },
    {
        number: 2814,
        isMandatory: true,
        label: "Constructions sur sol d'autrui (même ventilation que celle du compte 214)"
    },
    {
        number: 2815,
        isMandatory: true,
        label: "Installations, matériels et outillages industriels (même ventilation que celle du compte 215)"
    },
    {
        number: 2818,
        isMandatory: true,
        label: "Autres immobilisations corporelles (même ventilation que celle du compte 218)"
    },
    {
        number: 28187,
        isMandatory: false,
        label: "Amortissement du mali de fusion sur actifs corporels"
    },
    {
        number: 282,
        isMandatory: true,
        label: "Amortissements des immobilisations mises en concession"
    },
    {
        number: 29,
        isMandatory: true,
        label: "Dépréciations des immobilisations"
    },
    {
        number: 290,
        isMandatory: true,
        label: "Dépréciations des immobilisations incorporelles"
    },
    {
        number: 2901,
        isMandatory: true,
        label: "Frais d'établissement"
    },
    {
        number: 2903,
        isMandatory: true,
        label: "Frais de développement"
    },
    {
        number: 2905,
        isMandatory: true,
        label: "Marques, procédés, droits et valeurs similaires"
    },
    {
        number: 2906,
        isMandatory: true,
        label: "Droit au bail"
    },
    {
        number: 2907,
        isMandatory: true,
        label: "Fonds commercial"
    },
    {
        number: 2908,
        isMandatory: true,
        label: "Autres immobilisations incorporelles"
    },
    {
        number: 29081,
        isMandatory: false,
        label: "Dépréciation du mali de fusion sur actifs incorporels"
    },
    {
        number: 291,
        isMandatory: true,
        label: "Dépréciations des immobilisations corporelles"
    },
    {
        number: 2911,
        isMandatory: true,
        label: "Terrains"
    },
    {
        number: 2912,
        isMandatory: true,
        label: "Agencements et aménagements de terrains"
    },
    {
        number: 2913,
        isMandatory: true,
        label: "Constructions"
    },
    {
        number: 2914,
        isMandatory: true,
        label: "Constructions sur sol d'autrui"
    },
    {
        number: 2915,
        isMandatory: true,
        label: "Installations techniques, matériels et outillages industriels"
    },
    {
        number: 2918,
        isMandatory: true,
        label: "Autres immobilisations corporelles"
    },
    {
        number: 29187,
        isMandatory: false,
        label: "Dépréciation du mali de fusion sur actifs corporels"
    },
    {
        number: 292,
        isMandatory: true,
        label: "Dépréciations des immobilisations mises en concession"
    },
    {
        number: 293,
        isMandatory: true,
        label: "Dépréciations des immobilisations en cours"
    },
    {
        number: 2931,
        isMandatory: true,
        label: "Immobilisations corporelles en cours"
    },
    {
        number: 2932,
        isMandatory: true,
        label: "Immobilisations incorporelles en cours"
    },
    {
        number: 294,
        isMandatory: true,
        label: "Dépréciations des biens reçus par legs ou donations destinés à être cédés"
    },
    {
        number: 296,
        isMandatory: true,
        label: "Dépréciations des participations et créances rattachées à des participations"
    },
    {
        number: 2961,
        isMandatory: true,
        label: "Titres de participation"
    },
    {
        number: 2962,
        isMandatory: true,
        label: "Titres évalués par équivalence"
    },
    {
        number: 2966,
        isMandatory: true,
        label: "Autres formes de participation"
    },
    {
        number: 2967,
        isMandatory: true,
        label: "Créances rattachées à des participations (même ventilation que celle du compte 267)"
    },
    {
        number: 2968,
        isMandatory: true,
        label: "Créances rattachées à des sociétés en participation (même ventilation que celle du compte 268)"
    },
    {
        number: 297,
        isMandatory: true,
        label: "Dépréciations des autres immobilisations financières"
    },
    {
        number: 2971,
        isMandatory: true,
        label: "Titres immobilisés autres que les titres immobilisés de l'activité de portefeuille (droit de propriété)"
    },
    {
        number: 2972,
        isMandatory: true,
        label: "Titres immobilisés (droit de créance)"
    },
    {
        number: 2973,
        isMandatory: true,
        label: "Titres immobilisés de l'activité de portefeuille"
    },
    {
        number: 2974,
        isMandatory: true,
        label: "Prêts"
    },
    {
        number: 2975,
        isMandatory: true,
        label: "Dépôts et cautionnements versés"
    },
    {
        number: 2976,
        isMandatory: true,
        label: "Autres créances immobilisées "
    },
    {
        number: 3,
        isMandatory: true,
        label: "Comptes de stocks et en-cours"
    },
    {
        number: 31,
        isMandatory: true,
        label: "Matières premières et fournitures"
    },
    {
        number: 32,
        isMandatory: true,
        label: "Autres approvisionnements"
    },
    {
        number: 321,
        isMandatory: true,
        label: "Matières consommables"
    },
    {
        number: 322,
        isMandatory: true,
        label: "Fournitures consommables"
    },
    {
        number: 3221,
        isMandatory: false,
        label: "Combustibles"
    },
    {
        number: 3222,
        isMandatory: false,
        label: "Produits d'entretien"
    },
    {
        number: 3223,
        isMandatory: false,
        label: "Fournitures d'atelier et d'usine"
    },
    {
        number: 3224,
        isMandatory: false,
        label: "Fournitures de magasin"
    },
    {
        number: 3225,
        isMandatory: false,
        label: "Fournitures de bureau"
    },
    {
        number: 326,
        isMandatory: true,
        label: "Emballages"
    },
    {
        number: 3261,
        isMandatory: false,
        label: "Emballages perdus"
    },
    {
        number: 3265,
        isMandatory: false,
        label: "Emballages récupérables non identifiables"
    },
    {
        number: 3267,
        isMandatory: false,
        label: "Emballages à usage mixte"
    },
    {
        number: 33,
        isMandatory: true,
        label: "En-cours de production de biens"
    },
    {
        number: 331,
        isMandatory: true,
        label: "Produits en cours"
    },
    {
        number: 335,
        isMandatory: true,
        label: "Travaux en cours"
    },
    {
        number: 34,
        isMandatory: true,
        label: "En-cours de production de services"
    },
    {
        number: 341,
        isMandatory: true,
        label: "Études en cours"
    },
    {
        number: 345,
        isMandatory: true,
        label: "Prestations de services en cours"
    },
    {
        number: 35,
        isMandatory: true,
        label: "Stocks de produits"
    },
    {
        number: 351,
        isMandatory: true,
        label: "Produits intermédiaires"
    },
    {
        number: 355,
        isMandatory: true,
        label: "Produits finis"
    },
    {
        number: 358,
        isMandatory: true,
        label: "Produits résiduels ou matières de récupération"
    },
    {
        number: 3581,
        isMandatory: false,
        label: "Déchets"
    },
    {
        number: 3585,
        isMandatory: false,
        label: "Rebuts"
    },
    {
        number: 3586,
        isMandatory: false,
        label: "Matières de récupération"
    },
    {
        number: 36,
        isMandatory: true,
        label: "Stocks provenant d'immobilisations"
    },
    {
        number: 37,
        isMandatory: true,
        label: "Stocks de marchandises"
    },
    {
        number: 38,
        isMandatory: true,
        label: "Stocks en voie d'acheminement, mis en dépôt ou donnés en consignation"
    },
    {
        number: 39,
        isMandatory: true,
        label: "Dépréciations des stocks et en-cours"
    },
    {
        number: 391,
        isMandatory: true,
        label: "Dépréciations des matières premières et fournitures"
    },
    {
        number: 392,
        isMandatory: true,
        label: "Dépréciations des autres approvisionnements"
    },
    {
        number: 393,
        isMandatory: true,
        label: "Dépréciations des en-cours de production de biens"
    },
    {
        number: 394,
        isMandatory: true,
        label: "Dépréciations des en-cours de production de services"
    },
    {
        number: 395,
        isMandatory: true,
        label: "Dépréciations des stocks de produits"
    },
    {
        number: 397,
        isMandatory: true,
        label: "Dépréciations des stocks de marchandises"
    },
    {
        number: 4,
        isMandatory: true,
        label: "Comptes de tiers"
    },
    {
        number: 40,
        isMandatory: true,
        label: "Fournisseurs et comptes rattachés"
    },
    {
        number: 401,
        isMandatory: true,
        label: "Fournisseurs"
    },
    {
        number: 4011,
        isMandatory: false,
        label: "Fournisseurs - Achats de biens et prestations de services"
    },
    {
        number: 4017,
        isMandatory: false,
        label: "Fournisseurs - Retenues de garantie"
    },
    {
        number: 403,
        isMandatory: true,
        label: "Fournisseurs - Effets à payer"
    },
    {
        number: 404,
        isMandatory: true,
        label: "Fournisseurs d'immobilisations"
    },
    {
        number: 4041,
        isMandatory: false,
        label: "Fournisseurs - Achats d'immobilisations"
    },
    {
        number: 4047,
        isMandatory: false,
        label: "Fournisseurs d'immobilisations - Retenues de garantie"
    },
    {
        number: 405,
        isMandatory: true,
        label: "Fournisseurs d'immobilisations - Effets à payer"
    },
    {
        number: 408,
        isMandatory: true,
        label: "Fournisseurs - Factures non parvenues"
    },
    {
        number: 4081,
        isMandatory: true,
        label: "Fournisseurs"
    },
    {
        number: 4084,
        isMandatory: true,
        label: "Fournisseurs d'immobilisations"
    },
    {
        number: 4088,
        isMandatory: true,
        label: "Fournisseurs - Intérêts courus"
    },
    {
        number: 409,
        isMandatory: true,
        label: "Fournisseurs débiteurs"
    },
    {
        number: 4091,
        isMandatory: true,
        label: "Fournisseurs - Avances et acomptes versés sur commandes"
    },
    {
        number: 4096,
        isMandatory: true,
        label: "Fournisseurs - Créances pour emballages et matériel à rendre"
    },
    {
        number: 4097,
        isMandatory: true,
        label: "Fournisseurs - Autres avoirs"
    },
    {
        number: 40971,
        isMandatory: false,
        label: "Fournisseurs d'exploitation"
    },
    {
        number: 40974,
        isMandatory: false,
        label: "Fournisseurs d'immobilisations"
    },
    {
        number: 4098,
        isMandatory: true,
        label: "Rabais, remises, ristournes à obtenir et autres avoirs non encore reçus"
    },
    {
        number: 41,
        isMandatory: true,
        label: "Clients, adhérents, usagers et comptes rattachés"
    },
    {
        number: 411,
        isMandatory: true,
        label: "Clients"
    },
    {
        number: 4111,
        isMandatory: false,
        label: "Clients - Ventes de biens ou de prestations de services"
    },
    {
        number: 4117,
        isMandatory: false,
        label: "Clients - Retenues de garantie"
    },
    {
        number: 413,
        isMandatory: true,
        label: "Clients - Effets à recevoir"
    },
    {
        number: 416,
        isMandatory: true,
        label: "Clients douteux ou litigieux"
    },
    {
        number: 418,
        isMandatory: true,
        label: "Clients - Produits non encore facturés"
    },
    {
        number: 4181,
        isMandatory: false,
        label: "Clients - Factures à établir"
    },
    {
        number: 4188,
        isMandatory: false,
        label: "Clients - Intérêts courus"
    },
    {
        number: 419,
        isMandatory: true,
        label: "Clients créditeurs"
    },
    {
        number: 4191,
        isMandatory: true,
        label: "Clients - Avances et acomptes reçus sur commandes"
    },
    {
        number: 4196,
        isMandatory: true,
        label: "Clients - Dettes sur emballages et matériels consignés"
    },
    {
        number: 4197,
        isMandatory: true,
        label: "Clients - Autres avoirs"
    },
    {
        number: 4198,
        isMandatory: true,
        label: "Rabais, remises, ristournes à accorder et autres avoirs à établir"
    },
    {
        number: 42,
        isMandatory: true,
        label: "Personnel et comptes rattachés"
    },
    {
        number: 421,
        isMandatory: true,
        label: "Personnel - Rémunérations dues"
    },
    {
        number: 422,
        isMandatory: true,
        label: "Comité social et économique"
    },
    {
        number: 424,
        isMandatory: true,
        label: "Participation des salariés aux résultats"
    },
    {
        number: 4246,
        isMandatory: false,
        label: "Réserve spéciale"
    },
    {
        number: 4248,
        isMandatory: false,
        label: "Comptes courants"
    },
    {
        number: 425,
        isMandatory: true,
        label: "Personnel - Avances et acomptes et autres comptes débiteurs"
    },
    {
        number: 426,
        isMandatory: true,
        label: "Personnel - Dépôts"
    },
    {
        number: 427,
        isMandatory: true,
        label: "Personnel - Oppositions"
    },
    {
        number: 428,
        isMandatory: true,
        label: "Personnel - Charges à payer"
    },
    {
        number: 4282,
        isMandatory: false,
        label: "Dettes provisionnées pour congés à payer"
    },
    {
        number: 4284,
        isMandatory: false,
        label: "Dettes provisionnées pour participation des salariés aux résultats"
    },
    {
        number: 4286,
        isMandatory: false,
        label: "Autres charges à payer"
    },
    {
        number: 43,
        isMandatory: true,
        label: "Sécurité sociale et autres organismes sociaux"
    },
    {
        number: 431,
        isMandatory: true,
        label: "Sécurité sociale"
    },
    {
        number: 437,
        isMandatory: true,
        label: "Autres organismes sociaux"
    },
    {
        number: 438,
        isMandatory: true,
        label: "Organismes sociaux - Charges à payer"
    },
    {
        number: 4382,
        isMandatory: false,
        label: "Charges sociales sur congés à payer"
    },
    {
        number: 4386,
        isMandatory: false,
        label: "Autres charges à payer"
    },
    {
        number: 439,
        isMandatory: true,
        label: "Organismes sociaux - Produits à recevoir"
    },
    {
        number: 44,
        isMandatory: true,
        label: "État et autres collectivités publiques"
    },
    {
        number: 441,
        isMandatory: true,
        label: "État - Subventions et aides à recevoir"
    },
    {
        number: 442,
        isMandatory: true,
        label: "Contributions, impôts et taxes recouvrés pour le compte de l'État"
    },
    {
        number: 4421,
        isMandatory: false,
        label: "Prélèvements à la source (Impôt sur le revenu)"
    },
    {
        number: 4422,
        isMandatory: false,
        label: "Prélèvements forfaitaires non libératoires"
    },
    {
        number: 4423,
        isMandatory: false,
        label: "Retenues et prélèvements sur les distributions"
    },
    {
        number: 444,
        isMandatory: true,
        label: "État - Impôts sur les bénéfices"
    },
    {
        number: 445,
        isMandatory: true,
        label: "État - Taxes sur le chiffre d'affaires"
    },
    {
        number: 4452,
        isMandatory: true,
        label: "TVA due intracommunautaire"
    },
    {
        number: 4455,
        isMandatory: true,
        label: "Taxes sur le chiffre d'affaires à décaisser"
    },
    {
        number: 44551,
        isMandatory: false,
        label: "TVA à décaisser"
    },
    {
        number: 44558,
        isMandatory: false,
        label: "Taxes assimilées à la TVA"
    },
    {
        number: 4456,
        isMandatory: true,
        label: "Taxes sur le chiffre d'affaires déductibles"
    },
    {
        number: 44562,
        isMandatory: false,
        label: "TVA sur immobilisations"
    },
    {
        number: 44563,
        isMandatory: false,
        label: "TVA transférée par d'autres entreprises"
    },
    {
        number: 44566,
        isMandatory: false,
        label: "TVA sur autres biens et services"
    },
    {
        number: 44567,
        isMandatory: false,
        label: "Crédit de TVA à reporter"
    },
    {
        number: 44568,
        isMandatory: false,
        label: "Taxes assimilées à la TVA"
    },
    {
        number: 4457,
        isMandatory: true,
        label: "Taxes sur le chiffre d'affaires collectées"
    },
    {
        number: 44571,
        isMandatory: false,
        label: "TVA collectée"
    },
    {
        number: 44578,
        isMandatory: false,
        label: "Taxes assimilées à la TVA"
    },
    {
        number: 4458,
        isMandatory: true,
        label: "Taxes sur le chiffre d'affaires à régulariser ou en attente"
    },
    {
        number: 44581,
        isMandatory: false,
        label: "Acomptes - Régime simplifié d'imposition"
    },
    {
        number: 44583,
        isMandatory: false,
        label: "Remboursement de taxes sur le chiffre d'affaires demandé"
    },
    {
        number: 44584,
        isMandatory: false,
        label: "TVA récupérée d'avance"
    },
    {
        number: 44586,
        isMandatory: false,
        label: "Taxes sur le chiffre d'affaires sur factures non parvenues"
    },
    {
        number: 44587,
        isMandatory: false,
        label: "Taxes sur le chiffre d'affaires sur factures à établir"
    },
    {
        number: 446,
        isMandatory: true,
        label: "Obligations cautionnées"
    },
    {
        number: 447,
        isMandatory: true,
        label: "Autres impôts, taxes et versements assimilés"
    },
    {
        number: 448,
        isMandatory: true,
        label: "État - Charges à payer et produits à recevoir"
    },
    {
        number: 4481,
        isMandatory: true,
        label: "État - Charges à payer"
    },
    {
        number: 44811,
        isMandatory: false,
        label: "Charges fiscales sur congés à payer"
    },
    {
        number: 44812,
        isMandatory: false,
        label: "Charges à payer"
    },
    {
        number: 4482,
        isMandatory: true,
        label: "État - Produits à recevoir"
    },
    {
        number: 449,
        isMandatory: false,
        label: "Quotas d'émission à acquérir"
    },
    {
        number: 45,
        isMandatory: true,
        label: "Confédération, fédération, union, entités affiliées"
    },
    {
        number: 451,
        isMandatory: true,
        label: "Groupe"
    },
    {
        number: 455,
        isMandatory: true,
        label: "Partenaires - comptes courants"
    },
    {
        number: 4551,
        isMandatory: false,
        label: "Principal"
    },
    {
        number: 4558,
        isMandatory: false,
        label: "Intérêts courus"
    },
    {
        number: 456,
        isMandatory: true,
        label: "Associés - Opérations sur le capital"
    },
    {
        number: 4561,
        isMandatory: false,
        label: "Associés - Comptes d'apport en société"
    },
    {
        number: 45611,
        isMandatory: false,
        label: "Apports en nature"
    },
    {
        number: 45615,
        isMandatory: false,
        label: "Apports en numéraire"
    },
    {
        number: 4562,
        isMandatory: false,
        label: "Apporteurs - Capital appelé, non versé"
    },
    {
        number: 45621,
        isMandatory: false,
        label: "Actionnaires - Capital souscrit et appelé, non versé"
    },
    {
        number: 45625,
        isMandatory: false,
        label: "Associés - Capital appelé, non versé"
    },
    {
        number: 4563,
        isMandatory: false,
        label: "Associés - Versements reçus sur augmentation de capital"
    },
    {
        number: 4564,
        isMandatory: false,
        label: "Associés - Versements anticipés"
    },
    {
        number: 4566,
        isMandatory: false,
        label: "Actionnaires défaillants"
    },
    {
        number: 4567,
        isMandatory: false,
        label: "Associés - Capital à rembourser"
    },
    {
        number: 457,
        isMandatory: true,
        label: "Associés - Dividendes à payer"
    },
    {
        number: 458,
        isMandatory: true,
        label: "Associés - Opérations faites en commun et en GIE"
    },
    {
        number: 4581,
        isMandatory: false,
        label: "Opérations courantes"
    },
    {
        number: 4588,
        isMandatory: false,
        label: "Intérêts courus"
    },
    {
        number: 46,
        isMandatory: true,
        label: "Débiteurs divers et créditeurs divers"
    },
    {
        number: 461,
        isMandatory: true,
        label: "Créances reçues par legs ou donations"
    },
    {
        number: 462,
        isMandatory: true,
        label: "Créances sur cessions d'immobilisations"
    },
    {
        number: 464,
        isMandatory: true,
        label: "Dettes sur acquisitions de valeurs mobilières de placement"
    },
    {
        number: 465,
        isMandatory: true,
        label: "Créances sur cessions de valeurs mobilières de placement"
    },
    {
        number: 466,
        isMandatory: true,
        label: "Dettes des legs ou donations"
    },
    {
        number: 467,
        isMandatory: true,
        label: "Divers comptes débiteurs et produits à recevoir"
    },
    {
        number: 468,
        isMandatory: true,
        label: "Divers comptes créditeurs et charges à payer"
    },
    {
        number: 4681,
        isMandatory: false,
        label: "Frais des bénévoles"
    },
    {
        number: 47,
        isMandatory: true,
        label: "Comptes transitoires ou d'attente"
    },
    {
        number: 471,
        isMandatory: true,
        label: "Compte d'attente"
    },
    {
        number: 472,
        isMandatory: true,
        label: "Compte d'attente"
    },
    {
        number: 473,
        isMandatory: true,
        label: "Compte d'attente"
    },
    {
        number: 474,
        isMandatory: true,
        label: "Différences d'évaluation - Actif"
    },
    {
        number: 4741,
        isMandatory: false,
        label: "Différences d'évaluation sur instruments financiers à terme - Actif"
    },
    {
        number: 4742,
        isMandatory: false,
        label: "Différences d'évaluation sur jetons détenus - Actif"
    },
    {
        number: 4746,
        isMandatory: false,
        label: "Différences d'évaluation de jetons sur des passifs - Actif"
    },
    {
        number: 475,
        isMandatory: true,
        label: "Différences d'évaluation - Passif"
    },
    {
        number: 4751,
        isMandatory: false,
        label: "Différences d'évaluation sur instruments financiers à terme - Passif"
    },
    {
        number: 4752,
        isMandatory: false,
        label: "Différences d'évaluation sur jetons détenus - Passif"
    },
    {
        number: 4756,
        isMandatory: false,
        label: "Différences d'évaluation de jetons sur des passifs - Passif"
    },
    {
        number: 476,
        isMandatory: true,
        label: "Différence de conversion - Actif"
    },
    {
        number: 4761,
        isMandatory: false,
        label: "Diminution des créances"
    },
    {
        number: 4762,
        isMandatory: false,
        label: "Augmentation des dettes"
    },
    {
        number: 4768,
        isMandatory: false,
        label: "Différences compensées par couverture de change"
    },
    {
        number: 477,
        isMandatory: true,
        label: "Différences de conversion - Passif"
    },
    {
        number: 4771,
        isMandatory: false,
        label: "Augmentation des créances"
    },
    {
        number: 4772,
        isMandatory: false,
        label: "Diminution des dettes"
    },
    {
        number: 4778,
        isMandatory: false,
        label: "Différences compensées par couverture de change"
    },
    {
        number: 478,
        isMandatory: true,
        label: "Autres comptes transitoires"
    },
    {
        number: 4781,
        isMandatory: false,
        label: "Mali de fusion sur actif circulant"
    },
    {
        number: 48,
        isMandatory: true,
        label: "Comptes de régularisation"
    },
    {
        number: 481,
        isMandatory: true,
        label: "Frais d'émission des emprunts"
    },
    {
        number: 486,
        isMandatory: true,
        label: "Charges constatées d'avance"
    },
    {
        number: 487,
        isMandatory: true,
        label: "Produits constatés d'avance"
    },
    {
        number: 4871,
        isMandatory: false,
        label: "Produits constatés d'avance sur jetons émis"
    },
    {
        number: 488,
        isMandatory: false,
        label: "Comptes de répartition périodique des charges et des produits"
    },
    {
        number: 4886,
        isMandatory: false,
        label: "Charges"
    },
    {
        number: 4887,
        isMandatory: false,
        label: "Produits"
    },
    {
        number: 49,
        isMandatory: true,
        label: "Dépréciations des comptes de tiers"
    },
    {
        number: 491,
        isMandatory: true,
        label: "Dépréciations des comptes de clients"
    },
    {
        number: 495,
        isMandatory: true,
        label: "Dépréciations des comptes du groupe et des associés"
    },
    {
        number: 4951,
        isMandatory: false,
        label: "Comptes du groupe"
    },
    {
        number: 4955,
        isMandatory: false,
        label: "Comptes courants des associés"
    },
    {
        number: 4958,
        isMandatory: false,
        label: "Opérations faites en commun et en GIE"
    },
    {
        number: 496,
        isMandatory: true,
        label: "Dépréciations des comptes de débiteurs divers"
    },
    {
        number: 4962,
        isMandatory: false,
        label: "Créances sur cessions d'immobilisations"
    },
    {
        number: 4965,
        isMandatory: false,
        label: "Créances sur cessions de valeurs mobilières de placement"
    },
    {
        number: 4967,
        isMandatory: false,
        label: "Autres comptes débiteurs"
    },
    {
        number: 5,
        isMandatory: true,
        label: "Comptes financiers"
    },
    {
        number: 50,
        isMandatory: true,
        label: "Valeurs mobilières de placement"
    },
    {
        number: 502,
        isMandatory: true,
        label: "Actions propres"
    },
    {
        number: 5021,
        isMandatory: false,
        label: "Actions destinées à être attribuées aux employés et affectées à des plans déterminés"
    },
    {
        number: 5022,
        isMandatory: false,
        label: "Actions disponibles pour être attribuées aux employés ou pour la régularisation des cours de bourse"
    },
    {
        number: 503,
        isMandatory: true,
        label: "Actions"
    },
    {
        number: 5031,
        isMandatory: false,
        label: "Titres cotés"
    },
    {
        number: 5035,
        isMandatory: false,
        label: "Titres non cotés"
    },
    {
        number: 504,
        isMandatory: true,
        label: "Autres titres conférant un droit de propriété"
    },
    {
        number: 505,
        isMandatory: true,
        label: "Obligations et bons émis par la société et rachetés par elle"
    },
    {
        number: 506,
        isMandatory: true,
        label: "Obligations"
    },
    {
        number: 5061,
        isMandatory: false,
        label: "Titres cotés"
    },
    {
        number: 5065,
        isMandatory: false,
        label: "Titres non cotés"
    },
    {
        number: 507,
        isMandatory: true,
        label: "Bons du Trésor et bons de caisse à court terme"
    },
    {
        number: 508,
        isMandatory: true,
        label: "Autres valeurs mobilières de placement et autres créances assimilées"
    },
    {
        number: 5081,
        isMandatory: false,
        label: "Autres valeurs mobilières"
    },
    {
        number: 5082,
        isMandatory: false,
        label: "Bons de souscription"
    },
    {
        number: 5088,
        isMandatory: false,
        label: "Intérêts courus sur obligations, bons et valeurs assimilés"
    },
    {
        number: 509,
        isMandatory: true,
        label: "Versements restant à effectuer sur valeurs mobilières de placement non libérées"
    },
    {
        number: 51,
        isMandatory: true,
        label: "Banques, établissements financiers et assimilés"
    },
    {
        number: 511,
        isMandatory: true,
        label: "Valeurs à l'encaissement"
    },
    {
        number: 5111,
        isMandatory: false,
        label: "Coupons échus à l'encaissement"
    },
    {
        number: 5112,
        isMandatory: false,
        label: "Chèques à encaisser"
    },
    {
        number: 5113,
        isMandatory: false,
        label: "Effets à l'encaissement"
    },
    {
        number: 5114,
        isMandatory: false,
        label: "Effets à l'escompte"
    },
    {
        number: 512,
        isMandatory: true,
        label: "Banques"
    },
    {
        number: 5121,
        isMandatory: false,
        label: "Comptes en euros"
    },
    {
        number: 5124,
        isMandatory: false,
        label: "Comptes en devises"
    },
    {
        number: 517,
        isMandatory: true,
        label: "Autres organismes financiers"
    },
    {
        number: 518,
        isMandatory: true,
        label: "Intérêts courus"
    },
    {
        number: 5181,
        isMandatory: false,
        label: "Intérêts courus à payer"
    },
    {
        number: 5188,
        isMandatory: false,
        label: "Intérêts courus à recevoir"
    },
    {
        number: 519,
        isMandatory: true,
        label: "Concours bancaires courants"
    },
    {
        number: 5191,
        isMandatory: false,
        label: "Crédit de mobilisation de créances commerciales"
    },
    {
        number: 5193,
        isMandatory: false,
        label: "Mobilisation de créances nées à l'étranger"
    },
    {
        number: 5198,
        isMandatory: false,
        label: "Intérêts courus sur concours bancaires courants"
    },
    {
        number: 52,
        isMandatory: true,
        label: "Instruments financiers à terme et jetons détenus"
    },
    {
        number: 521,
        isMandatory: true,
        label: "Instruments financiers à terme"
    },
    {
        number: 522,
        isMandatory: true,
        label: "Jetons détenus"
    },
    {
        number: 523,
        isMandatory: true,
        label: "Jetons auto-détenus"
    },
    {
        number: 524,
        isMandatory: true,
        label: "Jetons empruntés"
    },
    {
        number: 53,
        isMandatory: true,
        label: "Caisse"
    },
    {
        number: 58,
        isMandatory: true,
        label: "Virements internes"
    },
    {
        number: 59,
        isMandatory: true,
        label: "Dépréciations des comptes financiers"
    },
    {
        number: 590,
        isMandatory: true,
        label: "Dépréciations des valeurs mobilières de placement"
    },
    {
        number: 5903,
        isMandatory: false,
        label: "Actions"
    },
    {
        number: 5904,
        isMandatory: false,
        label: "Autres titres conférant un droit de propriété"
    },
    {
        number: 5906,
        isMandatory: false,
        label: "Obligations"
    },
    {
        number: 5908,
        isMandatory: false,
        label: "Autres valeurs mobilières de placement et créances assimilées"
    },
    {
        number: 6,
        isMandatory: true,
        label: "Comptes de charges"
    },
    {
        number: 60,
        isMandatory: true,
        label: "Achats (sauf 603)"
    },
    {
        number: 601,
        isMandatory: true,
        label: "Achats stockés - Matières premières (et fournitures)"
    },
    {
        number: 602,
        isMandatory: true,
        label: "Achats stockés - Autres approvisionnements"
    },
    {
        number: 6021,
        isMandatory: false,
        label: "Matières consommables"
    },
    {
        number: 6022,
        isMandatory: false,
        label: "Fournitures consommables"
    },
    {
        number: 60221,
        isMandatory: false,
        label: "Combustibles"
    },
    {
        number: 60222,
        isMandatory: false,
        label: "Produits d'entretien"
    },
    {
        number: 60223,
        isMandatory: false,
        label: "Fournitures d'atelier et d'usine"
    },
    {
        number: 60224,
        isMandatory: false,
        label: "Fournitures de magasin"
    },
    {
        number: 60225,
        isMandatory: false,
        label: "Fourniture de bureau"
    },
    {
        number: 6026,
        isMandatory: false,
        label: "Emballages"
    },
    {
        number: 60261,
        isMandatory: false,
        label: "Emballages perdus"
    },
    {
        number: 60262,
        isMandatory: false,
        label: "Malis sur emballage"
    },
    {
        number: 60265,
        isMandatory: false,
        label: "Emballages récupérables non identifiables"
    },
    {
        number: 60267,
        isMandatory: false,
        label: "Emballages à usage mixte"
    },
    {
        number: 603,
        isMandatory: true,
        label: "Variation des stocks d'approvisionnements et de marchandises"
    },
    {
        number: 6031,
        isMandatory: true,
        label: "Variation des stocks de matières premières et fournitures"
    },
    {
        number: 6032,
        isMandatory: true,
        label: "Variation des stocks des autres approvisionnements"
    },
    {
        number: 6037,
        isMandatory: true,
        label: "Variation des stocks de marchandises"
    },
    {
        number: 604,
        isMandatory: true,
        label: "Achats d'études et prestations de services"
    },
    {
        number: 605,
        isMandatory: true,
        label: "Achats de matériel, équipements et travaux"
    },
    {
        number: 606,
        isMandatory: true,
        label: "Achats non stockés de matière et fournitures"
    },
    {
        number: 6061,
        isMandatory: false,
        label: "Fournitures non stockables (eau, énergie, etc.)"
    },
    {
        number: 6063,
        isMandatory: false,
        label: "Fournitures d'entretien et de petit équipement"
    },
    {
        number: 6064,
        isMandatory: false,
        label: "Fournitures administratives"
    },
    {
        number: 6068,
        isMandatory: false,
        label: "Autres matières et fournitures"
    },
    {
        number: 607,
        isMandatory: true,
        label: "Achats de marchandises"
    },
    {
        number: 608,
        isMandatory: true,
        label: "Frais accessoires incorporés aux achats"
    },
    {
        number: 609,
        isMandatory: true,
        label: "Rabais, remises et ristournes obtenus sur achats"
    },
    {
        number: 6098,
        isMandatory: false,
        label: "Rabais, remises et ristournes non affectés"
    },
    {
        number: 61,
        isMandatory: true,
        label: "Services extérieurs"
    },
    {
        number: 611,
        isMandatory: true,
        label: "Sous-traitance générale"
    },
    {
        number: 612,
        isMandatory: true,
        label: "Redevances de crédit-bail"
    },
    {
        number: 6122,
        isMandatory: true,
        label: "Crédit-bail mobilier"
    },
    {
        number: 6125,
        isMandatory: true,
        label: "Crédit-bail immobilier"
    },
    {
        number: 613,
        isMandatory: true,
        label: "Locations"
    },
    {
        number: 6132,
        isMandatory: false,
        label: "Locations immobilières"
    },
    {
        number: 6135,
        isMandatory: false,
        label: "Locations mobilières"
    },
    {
        number: 614,
        isMandatory: true,
        label: "Charges locatives et de copropriété"
    },
    {
        number: 615,
        isMandatory: true,
        label: "Entretien et réparations"
    },
    {
        number: 6152,
        isMandatory: false,
        label: "Entretien et réparation sur biens immobiliers"
    },
    {
        number: 6155,
        isMandatory: false,
        label: "Entretien et réparation sur biens mobiliers"
    },
    {
        number: 6156,
        isMandatory: false,
        label: "Maintenance"
    },
    {
        number: 616,
        isMandatory: true,
        label: "Primes d'assurances"
    },
    {
        number: 6161,
        isMandatory: false,
        label: "Multirisques"
    },
    {
        number: 6162,
        isMandatory: false,
        label: "Assurance obligatoire dommage construction"
    },
    {
        number: 6163,
        isMandatory: false,
        label: "Assurance - transport"
    },
    {
        number: 61636,
        isMandatory: false,
        label: "sur achats"
    },
    {
        number: 61637,
        isMandatory: false,
        label: "sur ventes"
    },
    {
        number: 61638,
        isMandatory: false,
        label: "sur autres biens"
    },
    {
        number: 6164,
        isMandatory: false,
        label: "Risques d'exploitation"
    },
    {
        number: 6165,
        isMandatory: false,
        label: "Insolvabilité clients"
    },
    {
        number: 617,
        isMandatory: true,
        label: "Études et recherches"
    },
    {
        number: 618,
        isMandatory: true,
        label: "Divers"
    },
    {
        number: 6181,
        isMandatory: false,
        label: "Documentation générale"
    },
    {
        number: 6183,
        isMandatory: false,
        label: "Documentation technique"
    },
    {
        number: 6185,
        isMandatory: false,
        label: "Frais de colloques, séminaires, conférences"
    },
    {
        number: 619,
        isMandatory: true,
        label: "Rabais, remises et ristournes obtenus sur services extérieurs"
    },
    {
        number: 62,
        isMandatory: true,
        label: "Autres services extérieurs"
    },
    {
        number: 621,
        isMandatory: true,
        label: "Personnel extérieur à l'entreprise"
    },
    {
        number: 6211,
        isMandatory: false,
        label: "Personnel intérimaire"
    },
    {
        number: 6214,
        isMandatory: false,
        label: "Personnel détaché ou prêté à l'entité"
    },
    {
        number: 622,
        isMandatory: true,
        label: "Rémunérations d'intermédiaires et honoraires"
    },
    {
        number: 6221,
        isMandatory: false,
        label: "Commissions et courtages sur achats"
    },
    {
        number: 6222,
        isMandatory: false,
        label: "Commissions et courtages sur ventes"
    },
    {
        number: 6224,
        isMandatory: false,
        label: "Rémunérations des transitaires"
    },
    {
        number: 6225,
        isMandatory: false,
        label: "Rémunérations d'affacturage"
    },
    {
        number: 6226,
        isMandatory: false,
        label: "Honoraires"
    },
    {
        number: 62264,
        isMandatory: false,
        label: "Honoraires sur legs ou donations destinés à être cédés"
    },
    {
        number: 6227,
        isMandatory: false,
        label: "Frais d'actes et de contentieux"
    },
    {
        number: 6228,
        isMandatory: false,
        label: "Divers"
    },
    {
        number: 623,
        isMandatory: true,
        label: "Publicité, publications, relations publiques"
    },
    {
        number: 6231,
        isMandatory: false,
        label: "Annonces et insertions"
    },
    {
        number: 6232,
        isMandatory: false,
        label: "Échantillons"
    },
    {
        number: 6233,
        isMandatory: false,
        label: "Foires et expositions"
    },
    {
        number: 6234,
        isMandatory: false,
        label: "Cadeaux à la clientèle"
    },
    {
        number: 6235,
        isMandatory: false,
        label: "Primes"
    },
    {
        number: 6236,
        isMandatory: false,
        label: "Catalogues et imprimés"
    },
    {
        number: 6237,
        isMandatory: false,
        label: "Publications"
    },
    {
        number: 6238,
        isMandatory: false,
        label: "Divers (pourboires, dons courants)"
    },
    {
        number: 624,
        isMandatory: true,
        label: "Transports de biens et transports collectifs du personnel"
    },
    {
        number: 6241,
        isMandatory: false,
        label: "Transports sur achats"
    },
    {
        number: 6242,
        isMandatory: false,
        label: "Transports sur ventes"
    },
    {
        number: 6243,
        isMandatory: false,
        label: "Transports entre établissements ou chantiers"
    },
    {
        number: 6244,
        isMandatory: false,
        label: "Transports administratifs"
    },
    {
        number: 6247,
        isMandatory: false,
        label: "Transports collectifs du personnel"
    },
    {
        number: 6248,
        isMandatory: false,
        label: "Divers"
    },
    {
        number: 625,
        isMandatory: true,
        label: "Déplacements, missions et réceptions"
    },
    {
        number: 6251,
        isMandatory: false,
        label: "Voyages et déplacements"
    },
    {
        number: 6255,
        isMandatory: false,
        label: "Frais de déménagement"
    },
    {
        number: 6256,
        isMandatory: false,
        label: "Missions"
    },
    {
        number: 6257,
        isMandatory: false,
        label: "Réceptions"
    },
    {
        number: 626,
        isMandatory: true,
        label: "Frais postaux et de télécommunications"
    },
    {
        number: 627,
        isMandatory: true,
        label: "Services bancaires et assimilés"
    },
    {
        number: 6271,
        isMandatory: false,
        label: "Frais sur titres (achat, vente, garde)"
    },
    {
        number: 6272,
        isMandatory: false,
        label: "Commissions et frais sur émission d'emprunts"
    },
    {
        number: 6275,
        isMandatory: false,
        label: "Frais sur effets"
    },
    {
        number: 6276,
        isMandatory: false,
        label: "Location de coffres"
    },
    {
        number: 6278,
        isMandatory: false,
        label: "Autres frais et commissions sur prestations de services"
    },
    {
        number: 628,
        isMandatory: true,
        label: "Divers"
    },
    {
        number: 6281,
        isMandatory: false,
        label: "Concours divers (cotisations)"
    },
    {
        number: 6284,
        isMandatory: false,
        label: "Frais de recrutement de personnel"
    },
    {
        number: 629,
        isMandatory: true,
        label: "Rabais, remises et ristournes obtenus sur autres services extérieurs"
    },
    {
        number: 63,
        isMandatory: true,
        label: "Impôts, taxes et versements assimilés"
    },
    {
        number: 631,
        isMandatory: true,
        label: "Impôts, taxes et versements assimilés sur rémunérations (administrations des impôts)"
    },
    {
        number: 6311,
        isMandatory: false,
        label: "Taxe sur les salaires"
    },
    {
        number: 6314,
        isMandatory: false,
        label: "Cotisation pour défaut d'investissement obligatoire dans la construction"
    },
    {
        number: 6318,
        isMandatory: false,
        label: "Autres"
    },
    {
        number: 633,
        isMandatory: true,
        label: "Impôts, taxes et versements assimilés sur rémunérations (autres organismes)"
    },
    {
        number: 6331,
        isMandatory: false,
        label: "Versement de transport"
    },
    {
        number: 6332,
        isMandatory: false,
        label: "Allocations logement"
    },
    {
        number: 6333,
        isMandatory: false,
        label: "Contribution unique des employeurs à la formation professionnelle"
    },
    {
        number: 6334,
        isMandatory: false,
        label: "Participation des employeurs à l'effort de construction"
    },
    {
        number: 6335,
        isMandatory: false,
        label: "Versements libératoires ouvrant droit à l'exonération de la taxe d'apprentissage"
    },
    {
        number: 6338,
        isMandatory: false,
        label: "Autres"
    },
    {
        number: 635,
        isMandatory: true,
        label: "Autres impôts, taxes et versements assimilés (administrations des impôts)"
    },
    {
        number: 6351,
        isMandatory: false,
        label: "Impôts directs (sauf impôts sur les bénéfices)"
    },
    {
        number: 63511,
        isMandatory: false,
        label: "Contribution économique territoriale"
    },
    {
        number: 63512,
        isMandatory: false,
        label: "Taxes foncières"
    },
    {
        number: 63513,
        isMandatory: false,
        label: "Autres impôts locaux"
    },
    {
        number: 63514,
        isMandatory: false,
        label: "Taxe sur les véhicules des sociétés"
    },
    {
        number: 6352,
        isMandatory: false,
        label: "Taxe sur le chiffre d'affaires non récupérables"
    },
    {
        number: 6353,
        isMandatory: false,
        label: "Impôts indirects"
    },
    {
        number: 6354,
        isMandatory: false,
        label: "Droits d'enregistrement et de timbre"
    },
    {
        number: 63541,
        isMandatory: false,
        label: "Droits de mutation"
    },
    {
        number: 6358,
        isMandatory: true,
        label: "Autres droits"
    },
    {
        number: 637,
        isMandatory: true,
        label: "Autres impôts, taxes et versements assimilés (autres organismes)"
    },
    {
        number: 6371,
        isMandatory: false,
        label: "Contribution sociale de solidarité à la charge des sociétés"
    },
    {
        number: 6372,
        isMandatory: false,
        label: "Taxes perçues par les organismes publics internationaux"
    },
    {
        number: 6374,
        isMandatory: false,
        label: "Impôts et taxes exigibles à l'Étranger"
    },
    {
        number: 6378,
        isMandatory: false,
        label: "Taxes diverses"
    },
    {
        number: 64,
        isMandatory: true,
        label: "Charges de personnel"
    },
    {
        number: 641,
        isMandatory: true,
        label: "Rémunérations du personnel"
    },
    {
        number: 6411,
        isMandatory: false,
        label: "Salaires, appointements"
    },
    {
        number: 6412,
        isMandatory: false,
        label: "Congés payés"
    },
    {
        number: 6413,
        isMandatory: false,
        label: "Primes et gratifications"
    },
    {
        number: 6414,
        isMandatory: false,
        label: "Indemnités et avantages divers"
    },
    {
        number: 6415,
        isMandatory: false,
        label: "Supplément familial"
    },
    {
        number: 644,
        isMandatory: false,
        label: "Rémunération du travail de l'exploitant"
    },
    {
        number: 645,
        isMandatory: true,
        label: "Charges de sécurité sociale et de prévoyance"
    },
    {
        number: 6451,
        isMandatory: false,
        label: "Cotisations à l'URSSAF"
    },
    {
        number: 6452,
        isMandatory: false,
        label: "Cotisations aux mutuelles"
    },
    {
        number: 6453,
        isMandatory: false,
        label: "Cotisations aux caisses de retraites"
    },
    {
        number: 6454,
        isMandatory: false,
        label: "Cotisations à Pôle Emploi"
    },
    {
        number: 6458,
        isMandatory: false,
        label: "Cotisations aux autres organismes sociaux"
    },
    {
        number: 646,
        isMandatory: false,
        label: "Cotisations sociales personnelles de l'exploitant"
    },
    {
        number: 647,
        isMandatory: true,
        label: "Autres charges sociales"
    },
    {
        number: 6471,
        isMandatory: false,
        label: "Prestations directes"
    },
    {
        number: 6472,
        isMandatory: false,
        label: "Versements au comité social et économique"
    },
    {
        number: 6474,
        isMandatory: false,
        label: "Versements aux autres œuvres sociales"
    },
    {
        number: 6475,
        isMandatory: false,
        label: "Médecine du travail, pharmacie"
    },
    {
        number: 648,
        isMandatory: true,
        label: "Autres charges de personnel"
    },
    {
        number: 649,
        isMandatory: true,
        label: "Remboursements de charges de personnel"
    },
    {
        number: 65,
        isMandatory: true,
        label: "Autres charges de gestion courante"
    },
    {
        number: 651,
        isMandatory: true,
        label: "Redevances pour concessions, brevets, licences, marques, procédés, solutions informatiques, droits et valeurs similaires"
    },
    {
        number: 6511,
        isMandatory: false,
        label: "Redevances pour concessions, brevets, licences, marques, procédés, solutions informatiques"
    },
    {
        number: 6516,
        isMandatory: false,
        label: "Droits d'auteur et de reproduction"
    },
    {
        number: 6518,
        isMandatory: false,
        label: "Autres droits et valeurs similaires"
    },
    {
        number: 653,
        isMandatory: true,
        label: "Charges de la générosité du public"
    },
    {
        number: 6531,
        isMandatory: false,
        label: "Autres charges sur legs ou donations"
    },
    {
        number: 654,
        isMandatory: true,
        label: "Pertes sur créances irrécouvrables"
    },
    {
        number: 6541,
        isMandatory: false,
        label: "Créances de l'exercice"
    },
    {
        number: 6544,
        isMandatory: false,
        label: "Créances des exercices antérieurs"
    },
    {
        number: 655,
        isMandatory: true,
        label: "Quote-part de résultat sur opérations faites en commun"
    },
    {
        number: 6551,
        isMandatory: false,
        label: "Quote-part de bénéfice transférée - comptabilité du gérant"
    },
    {
        number: 6555,
        isMandatory: false,
        label: "Quote-part de perte supportée - comptabilité des associés non gérants"
    },
    {
        number: 656,
        isMandatory: true,
        label: "Pertes de change sur créances et dettes commerciales"
    },
    {
        number: 657,
        isMandatory: true,
        label: "Aides financières"
    },
    {
        number: 6571,
        isMandatory: false,
        label: "Aides financières octroyées"
    },
    {
        number: 6572,
        isMandatory: false,
        label: "Quotes-parts de générosité reversée"
    },
    {
        number: 658,
        isMandatory: true,
        label: "Pénalités et autres charges"
    },
    {
        number: 6581,
        isMandatory: false,
        label: "Pénalités sur marchés (et dédits payés sur achats et ventes)"
    },
    {
        number: 6582,
        isMandatory: false,
        label: "Pénalités, amendes fiscales et pénales"
    },
    {
        number: 6583,
        isMandatory: false,
        label: "Malis provenant de clauses d'indexation"
    },
    {
        number: 6584,
        isMandatory: false,
        label: "Lots"
    },
    {
        number: 6588,
        isMandatory: false,
        label: "Pénalités et autres charges"
    },
    {
        number: 66,
        isMandatory: true,
        label: "Charges financières"
    },
    {
        number: 661,
        isMandatory: true,
        label: "Charges d'intérêts"
    },
    {
        number: 6611,
        isMandatory: false,
        label: "Intérêts des emprunts et dettes"
    },
    {
        number: 66116,
        isMandatory: false,
        label: "Intérêts des emprunts et dettes assimilées"
    },
    {
        number: 66117,
        isMandatory: false,
        label: "Intérêts des dettes rattachées à des participations"
    },
    {
        number: 6612,
        isMandatory: false,
        label: "Charges de la fiducie, résultat de la période"
    },
    {
        number: 6615,
        isMandatory: false,
        label: "Intérêts des comptes courants et des dépôts créditeurs"
    },
    {
        number: 6616,
        isMandatory: false,
        label: "Intérêts bancaires et sur opérations de financement (escompte, ...)"
    },
    {
        number: 6617,
        isMandatory: false,
        label: "Intérêts des obligations cautionnées"
    },
    {
        number: 6618,
        isMandatory: false,
        label: "Intérêts des autres dettes"
    },
    {
        number: 66181,
        isMandatory: false,
        label: "Intérêts des dettes commerciales"
    },
    {
        number: 66188,
        isMandatory: false,
        label: "Intérêts des dettes diverses"
    },
    {
        number: 664,
        isMandatory: true,
        label: "Pertes sur créances liées à des participations"
    },
    {
        number: 665,
        isMandatory: true,
        label: "Escomptes accordés"
    },
    {
        number: 666,
        isMandatory: true,
        label: "Pertes de change financières"
    },
    {
        number: 667,
        isMandatory: true,
        label: "Charges nettes sur cessions de valeurs mobilières de placement"
    },
    {
        number: 6671,
        isMandatory: true,
        label: "Valeurs comptables des immobilisations financières cédées"
    },
    {
        number: 6672,
        isMandatory: true,
        label: "Charges nettes sur cessions de titres immobilisés de l'activité de portefeuille"
    },
    {
        number: 6673,
        isMandatory: true,
        label: "Charges nettes sur cessions de valeurs mobilières de placement"
    },
    {
        number: 6674,
        isMandatory: true,
        label: "Charges nettes sur cessions de jetons"
    },
    {
        number: 668,
        isMandatory: true,
        label: "Autres charges financières"
    },
    {
        number: 6683,
        isMandatory: false,
        label: "Mali provenant du rachat par l'entité d'actions et obligations émises par elle-même"
    },
    {
        number: 67,
        isMandatory: true,
        label: "Charges exceptionnelles"
    },
    {
        number: 672,
        isMandatory: true,
        label: "Charges sur exercices antérieurs"
    },
    {
        number: 673,
        isMandatory: true,
        label: "Apports ou affectations en numéraire"
    },
    {
        number: 675,
        isMandatory: true,
        label: "Valeurs comptables des éléments d'actifs cédés"
    },
    {
        number: 6754,
        isMandatory: false,
        label: "Immobilisations reçues par legs ou donations"
    },
    {
        number: 678,
        isMandatory: true,
        label: "Autres charges exceptionnelles"
    },
    {
        number: 68,
        isMandatory: true,
        label: "Dotations aux amortissements, provisions et engagements"
    },
    {
        number: 681,
        isMandatory: true,
        label: "Dotations aux amortissements, aux dépréciations et aux provisions (à inscrire dans les charges d'exploitation)"
    },
    {
        number: 6811,
        isMandatory: true,
        label: "Dotations aux amortissements sur immobilisations incorporelles et corporelles"
    },
    {
        number: 68111,
        isMandatory: false,
        label: "Immobilisations incorporelles et frais d'établissement"
    },
    {
        number: 68112,
        isMandatory: false,
        label: "Immobilisations corporelles"
    },
    {
        number: 6815,
        isMandatory: true,
        label: "Dotations aux provisions d'exploitation"
    },
    {
        number: 6816,
        isMandatory: true,
        label: "Dotations pour dépréciations des immobilisations incorporelles et corporelles"
    },
    {
        number: 68161,
        isMandatory: false,
        label: "Immobilisations incorporelles"
    },
    {
        number: 68162,
        isMandatory: false,
        label: "Immobilisations corporelles"
    },
    {
        number: 68164,
        isMandatory: false,
        label: "Dotations pour dépréciation d'actifs reçus par legs ou donations destinés à être cédés"
    },
    {
        number: 6817,
        isMandatory: true,
        label: "Dotations pour dépréciations des actifs circulants"
    },
    {
        number: 68173,
        isMandatory: false,
        label: "Stocks et en-cours"
    },
    {
        number: 68174,
        isMandatory: false,
        label: "Créances"
    },
    {
        number: 686,
        isMandatory: true,
        label: "Dotations aux amortissements, aux dépréciations et aux provisions (à inscrire dans les charges financières)"
    },
    {
        number: 6861,
        isMandatory: true,
        label: "Dotations aux amortissements des primes de remboursement des obligations"
    },
    {
        number: 6862,
        isMandatory: true,
        label: "Dotations aux amortissements des frais d'émission des emprunts"
    },
    {
        number: 6865,
        isMandatory: true,
        label: "Dotations aux provisions financières"
    },
    {
        number: 6866,
        isMandatory: true,
        label: "Dotations pour dépréciations des éléments financiers"
    },
    {
        number: 68662,
        isMandatory: false,
        label: "Immobilisations financières"
    },
    {
        number: 68665,
        isMandatory: false,
        label: "Valeurs mobilières de placement"
    },
    {
        number: 687,
        isMandatory: true,
        label: "Dotations aux amortissements, aux dépréciations et aux provisions (à inscrire dans les charges exceptionnelles)"
    },
    {
        number: 6871,
        isMandatory: true,
        label: "Dotations aux amortissements exceptionnels des immobilisations"
    },
    {
        number: 6872,
        isMandatory: true,
        label: "Dotations aux provisions réglementées (immobilisations)"
    },
    {
        number: 68725,
        isMandatory: false,
        label: "Amortissements dérogatoires"
    },
    {
        number: 6873,
        isMandatory: true,
        label: "Dotations aux provisions réglementées (stocks)"
    },
    {
        number: 6874,
        isMandatory: true,
        label: "Dotations aux autres provisions réglementées"
    },
    {
        number: 6875,
        isMandatory: true,
        label: "Dotations aux provisions exceptionnelles"
    },
    {
        number: 6876,
        isMandatory: true,
        label: "Dotations pour dépréciations exceptionnelles"
    },
    {
        number: 689,
        isMandatory: true,
        label: "Reports en fonds dédiés"
    },
    {
        number: 6891,
        isMandatory: true,
        label: "Reports en fonds reportés"
    },
    {
        number: 6894,
        isMandatory: true,
        label: "Reports en fonds dédiés sur subventions d’exploitation"
    },
    {
        number: 6895,
        isMandatory: true,
        label: "Reports en fonds dédiés sur contributions financières d'autres organismes"
    },
    {
        number: 6896,
        isMandatory: true,
        label: "Reports en fonds dédiés sur ressources liées à la générosité du public"
    },
    {
        number: 69,
        isMandatory: true,
        label: "Participation des salariés - Impôts sur les bénéfices et assimilés"
    },
    {
        number: 691,
        isMandatory: true,
        label: "Participation des salariés aux résultats"
    },
    {
        number: 695,
        isMandatory: true,
        label: "Impôts sur les bénéfices"
    },
    {
        number: 6951,
        isMandatory: false,
        label: "Impôts dus en France"
    },
    {
        number: 6952,
        isMandatory: false,
        label: "Contribution additionnelle à l'impôt sur les bénéfices"
    },
    {
        number: 6954,
        isMandatory: false,
        label: "Impôts dus à l'étranger"
    },
    {
        number: 696,
        isMandatory: true,
        label: "Suppléments d'impôt sur les sociétés liés aux distributions"
    },
    {
        number: 698,
        isMandatory: true,
        label: "Intégration fiscale"
    },
    {
        number: 6981,
        isMandatory: true,
        label: "Intégration fiscale - Charges"
    },
    {
        number: 6989,
        isMandatory: true,
        label: "Intégration fiscale - Produits"
    },
    {
        number: 699,
        isMandatory: true,
        label: "Produits - Reports en arrière des déficits"
    },
    {
        number: 7,
        isMandatory: true,
        label: "Comptes de produits"
    },
    {
        number: 70,
        isMandatory: true,
        label: "Ventes de produits fabriqués, prestations de services, marchandises"
    },
    {
        number: 701,
        isMandatory: true,
        label: "Ventes de produits finis"
    },
    {
        number: 702,
        isMandatory: true,
        label: "Ventes de produits intermédiaires"
    },
    {
        number: 703,
        isMandatory: true,
        label: "Ventes de produits résiduels"
    },
    {
        number: 704,
        isMandatory: true,
        label: "Travaux"
    },
    {
        number: 705,
        isMandatory: true,
        label: "Études"
    },
    {
        number: 706,
        isMandatory: true,
        label: "Prestations de services"
    },
    {
        number: 7063,
        isMandatory: false,
        label: "Parrainages"
    },
    {
        number: 707,
        isMandatory: true,
        label: "Ventes de marchandises"
    },
    {
        number: 7073,
        isMandatory: false,
        label: "Ventes de dons en nature"
    },
    {
        number: 708,
        isMandatory: true,
        label: "Produits des activités annexes"
    },
    {
        number: 7081,
        isMandatory: false,
        label: "Produits des services exploités dans l'intérêt du personnel"
    },
    {
        number: 7082,
        isMandatory: false,
        label: "Commissions et courtages"
    },
    {
        number: 7083,
        isMandatory: false,
        label: "Locations diverses"
    },
    {
        number: 7084,
        isMandatory: false,
        label: "Mise à disposition de personnel facturée"
    },
    {
        number: 7085,
        isMandatory: false,
        label: "Ports et frais accessoires facturés"
    },
    {
        number: 7086,
        isMandatory: false,
        label: "Bonis sur reprises d'emballages consignés"
    },
    {
        number: 7087,
        isMandatory: false,
        label: "Bonifications obtenues des clients et primes sur ventes"
    },
    {
        number: 7088,
        isMandatory: false,
        label: "Autres produits d'activités annexes (cessions d'approvisionnements, ...)"
    },
    {
        number: 709,
        isMandatory: true,
        label: "Rabais, remises et ristournes accordés"
    },
    {
        number: 7091,
        isMandatory: false,
        label: "Rabais, remises et ristournes accordés sur ventes de produits finis"
    },
    {
        number: 7092,
        isMandatory: false,
        label: "Rabais, remises et ristournes accordés sur ventes de produits intermédiaires"
    },
    {
        number: 7094,
        isMandatory: false,
        label: "Rabais, remises et ristournes accordés sur travaux"
    },
    {
        number: 7095,
        isMandatory: false,
        label: "Rabais, remises et ristournes accordés sur études"
    },
    {
        number: 7096,
        isMandatory: false,
        label: "Rabais, remises et ristournes accordés sur prestations de services"
    },
    {
        number: 7097,
        isMandatory: false,
        label: "Rabais, remises et ristournes accordés sur ventes de marchandises"
    },
    {
        number: 7098,
        isMandatory: false,
        label: "Rabais, remises et ristournes accordés sur produits des activités annexes"
    },
    {
        number: 71,
        isMandatory: true,
        label: "Production stockée (ou déstockage)"
    },
    {
        number: 713,
        isMandatory: true,
        label: "Variation des stocks des en-cours de production et de produits"
    },
    {
        number: 7133,
        isMandatory: true,
        label: "Variation des en-cours de production de biens"
    },
    {
        number: 71331,
        isMandatory: false,
        label: "Produits en cours"
    },
    {
        number: 71335,
        isMandatory: false,
        label: "Travaux en cours"
    },
    {
        number: 7134,
        isMandatory: true,
        label: "Variation des en-cours de production de services"
    },
    {
        number: 71341,
        isMandatory: false,
        label: "Études en cours"
    },
    {
        number: 71345,
        isMandatory: false,
        label: "Prestations de services en cours"
    },
    {
        number: 7135,
        isMandatory: true,
        label: "Variation des stocks de produits"
    },
    {
        number: 71351,
        isMandatory: false,
        label: "Produits intermédiaires"
    },
    {
        number: 71355,
        isMandatory: false,
        label: "Produits finis"
    },
    {
        number: 71358,
        isMandatory: false,
        label: "Produits résiduels"
    },
    {
        number: 72,
        isMandatory: true,
        label: "Production immobilisée"
    },
    {
        number: 721,
        isMandatory: true,
        label: "Immobilisations incorporelles"
    },
    {
        number: 722,
        isMandatory: true,
        label: "Immobilisations corporelles"
    },
    {
        number: 73,
        isMandatory: true,
        label: "Concours publics"
    },
    {
        number: 74,
        isMandatory: true,
        label: "Subventions"
    },
    {
        number: 741,
        isMandatory: true,
        label: "Subventions d'exploitation"
    },
    {
        number: 742,
        isMandatory: true,
        label: "Subventions d'équilibre"
    },
    {
        number: 747,
        isMandatory: true,
        label: "Quote-part des subventions d'investissement virée au résultat de l'exercice"
    },
    {
        number: 75,
        isMandatory: true,
        label: "Autres produits de gestion courante"
    },
    {
        number: 751,
        isMandatory: true,
        label: "Redevances pour concessions, brevets, licences, marques, procédés, solutions informatiques, droits et valeurs similaires"
    },
    {
        number: 7511,
        isMandatory: false,
        label: "Redevances pour concessions, brevets, licences, marques, procédés, solutions informatiques"
    },
    {
        number: 7516,
        isMandatory: false,
        label: "Droits d'auteur et de reproduction"
    },
    {
        number: 7518,
        isMandatory: false,
        label: "Autres droits et valeurs similaires"
    },
    {
        number: 752,
        isMandatory: true,
        label: "Revenus des immeubles non affectés à des activités professionnelles"
    },
    {
        number: 753,
        isMandatory: true,
        label: "Versements des fondateurs ou consommation de la dotation"
    },
    {
        number: 7531,
        isMandatory: false,
        label: "Versements des fondateurs"
    },
    {
        number: 7532,
        isMandatory: false,
        label: "Quotes-parts de dotation consomptible virée au compte de résultat"
    },
    {
        number: 754,
        isMandatory: true,
        label: "Ressources liées à la générosité du public"
    },
    {
        number: 7541,
        isMandatory: true,
        label: "Dons manuels"
    },
    {
        number: 75411,
        isMandatory: false,
        label: "Dons manuels"
    },
    {
        number: 75412,
        isMandatory: false,
        label: "Abandons de frais par les bénévoles"
    },
    {
        number: 7542,
        isMandatory: true,
        label: "Mécénats"
    },
    {
        number: 7543,
        isMandatory: true,
        label: "Legs, donations et assurances-vie"
    },
    {
        number: 75431,
        isMandatory: false,
        label: "Assurances-vie"
    },
    {
        number: 75432,
        isMandatory: false,
        label: "Legs ou donations"
    },
    {
        number: 75433,
        isMandatory: false,
        label: "Autres produits sur legs ou donations"
    },
    {
        number: 755,
        isMandatory: true,
        label: "Contributions financières"
    },
    {
        number: 7551,
        isMandatory: false,
        label: "Contributions financières d'autres organismes"
    },
    {
        number: 7552,
        isMandatory: false,
        label: "Quotes-parts de générosité reçues"
    },
    {
        number: 7555,
        isMandatory: false,
        label: "Quote-part de bénéfice attribuée - comptabilité des associés non-gérants"
    },
    {
        number: 756,
        isMandatory: true,
        label: "Cotisations"
    },
    {
        number: 7561,
        isMandatory: false,
        label: "Cotisations sans contrepartie"
    },
    {
        number: 7562,
        isMandatory: false,
        label: "Cotisations avec contrepartie"
    },
    {
        number: 757,
        isMandatory: true,
        label: "Gains de change sur créances et dettes d'exploitation"
    },
    {
        number: 758,
        isMandatory: true,
        label: "Indemnités et autres produits"
    },
    {
        number: 7581,
        isMandatory: false,
        label: "Dédits et pénalités perçus sur achats et ventes"
    },
    {
        number: 7582,
        isMandatory: false,
        label: "Libéralités reçues"
    },
    {
        number: 7583,
        isMandatory: false,
        label: "Rentrées sur créances amorties"
    },
    {
        number: 7584,
        isMandatory: false,
        label: "Dégrèvements d'impôts autres qu'impôts sur les bénéfices"
    },
    {
        number: 7585,
        isMandatory: false,
        label: "Bonis provenant de clauses d'indexation"
    },
    {
        number: 7586,
        isMandatory: false,
        label: "Lots"
    },
    {
        number: 7587,
        isMandatory: false,
        label: "Indemnités d'assurance"
    },
    {
        number: 7588,
        isMandatory: false,
        label: "Opérations de constitution ou liquidation des fiducies"
    },
    {
        number: 76,
        isMandatory: true,
        label: "Produits financiers"
    },
    {
        number: 761,
        isMandatory: true,
        label: "Produits de participations"
    },
    {
        number: 7611,
        isMandatory: false,
        label: "Revenus des titres de participation"
    },
    {
        number: 7612,
        isMandatory: false,
        label: "Produits de la fiducie, résultat de la période"
    },
    {
        number: 7616,
        isMandatory: false,
        label: "Revenus sur autres formes de participation"
    },
    {
        number: 7617,
        isMandatory: false,
        label: "Revenus des créances rattachées à des participations"
    },
    {
        number: 762,
        isMandatory: true,
        label: "Produits des autres immobilisations financières"
    },
    {
        number: 7621,
        isMandatory: false,
        label: "Revenus des titres immobilisés"
    },
    {
        number: 7626,
        isMandatory: false,
        label: "Revenus des prêts"
    },
    {
        number: 7627,
        isMandatory: false,
        label: "Revenus des créances immobilisées"
    },
    {
        number: 763,
        isMandatory: true,
        label: "Revenus des autres créances"
    },
    {
        number: 7631,
        isMandatory: false,
        label: "Revenus des créances commerciales"
    },
    {
        number: 7638,
        isMandatory: false,
        label: "Revenus des créances diverses"
    },
    {
        number: 764,
        isMandatory: true,
        label: "Revenus des valeurs mobilières de placement"
    },
    {
        number: 765,
        isMandatory: true,
        label: "Escomptes obtenus"
    },
    {
        number: 766,
        isMandatory: true,
        label: "Gains de change financiers"
    },
    {
        number: 767,
        isMandatory: true,
        label: "Produits sur cession d'éléments financiers"
    },
    {
        number: 7671,
        isMandatory: true,
        label: "Produits des cessions d'immobilisations financières"
    },
    {
        number: 7672,
        isMandatory: true,
        label: "Produits nets sur cessions de titres immobilisés de l'activité de portefeuille"
    },
    {
        number: 7673,
        isMandatory: true,
        label: "Produits nets sur cessions de valeurs mobilières de placement"
    },
    {
        number: 7674,
        isMandatory: true,
        label: "Produits nets sur cessions de jetons"
    },
    {
        number: 768,
        isMandatory: true,
        label: "Autres produits financiers"
    },
    {
        number: 7683,
        isMandatory: false,
        label: "Bonis provenant du rachat par l'entreprise d'actions et d'obligations émises par elle-même"
    },
    {
        number: 77,
        isMandatory: true,
        label: "Produits exceptionnels"
    },
    {
        number: 772,
        isMandatory: true,
        label: "Produits sur exercices antérieurs"
    },
    {
        number: 775,
        isMandatory: true,
        label: "Produits des cessions d'éléments d'actifs"
    },
    {
        number: 7754,
        isMandatory: false,
        label: "Immobilisations reçues en legs ou donations destinées à être cédées"
    },
    {
        number: 778,
        isMandatory: true,
        label: "Autres produits exceptionnels"
    },
    {
        number: 78,
        isMandatory: true,
        label: "Reprises sur amortissements, dépréciations et provisions"
    },
    {
        number: 781,
        isMandatory: true,
        label: "Reprises sur amortissements, dépréciations et provisions (à inscrire dans les produits d'exploitation)"
    },
    {
        number: 7811,
        isMandatory: true,
        label: "Reprises sur amortissements des immobilisations incorporelles et corporelles"
    },
    {
        number: 78111,
        isMandatory: false,
        label: "Immobilisations incorporelles"
    },
    {
        number: 78112,
        isMandatory: false,
        label: "Immobilisations corporelles"
    },
    {
        number: 7815,
        isMandatory: true,
        label: "Reprises sur provisions d'exploitation"
    },
    {
        number: 7816,
        isMandatory: true,
        label: "Reprises sur dépréciations des immobilisations incorporelles et corporelles"
    },
    {
        number: 78161,
        isMandatory: false,
        label: "Immobilisations incorporelles"
    },
    {
        number: 78162,
        isMandatory: false,
        label: "Immobilisations corporelles"
    },
    {
        number: 78164,
        isMandatory: false,
        label: "Reprises sur dépréciations d’actifs reçus par legs ou donations destinés à être cédés"
    },
    {
        number: 7817,
        isMandatory: true,
        label: "Reprises sur dépréciations des actifs circulants"
    },
    {
        number: 78173,
        isMandatory: false,
        label: "Stocks et en-cours"
    },
    {
        number: 78174,
        isMandatory: false,
        label: "Créances"
    },
    {
        number: 786,
        isMandatory: true,
        label: "Reprises sur dépréciations et provisions (à inscrire dans les produits financiers)"
    },
    {
        number: 7865,
        isMandatory: true,
        label: "Reprises sur provisions financières"
    },
    {
        number: 7866,
        isMandatory: true,
        label: "Reprises sur dépréciations des éléments financiers"
    },
    {
        number: 78662,
        isMandatory: false,
        label: "Immobilisations financières"
    },
    {
        number: 78665,
        isMandatory: false,
        label: "Valeurs mobilières de placements"
    },
    {
        number: 787,
        isMandatory: true,
        label: "Reprises sur dépréciations et provisions (à inscrire dans les produits exceptionnels)"
    },
    {
        number: 7872,
        isMandatory: true,
        label: "Reprises sur provisions réglementées (immobilisations)"
    },
    {
        number: 78725,
        isMandatory: false,
        label: "Amortissements dérogatoires"
    },
    {
        number: 7873,
        isMandatory: true,
        label: "Reprises sur provisions réglementées (stocks)"
    },
    {
        number: 7874,
        isMandatory: true,
        label: "Reprises sur autres provisions réglementées"
    },
    {
        number: 7875,
        isMandatory: true,
        label: "Reprises sur provisions exceptionnelles"
    },
    {
        number: 7876,
        isMandatory: true,
        label: "Reprises sur dépréciations exceptionnelles"
    },
    {
        number: 789,
        isMandatory: true,
        label: "Utilisations de fonds reportés et de fonds dédiés"
    },
    {
        number: 7891,
        isMandatory: false,
        label: "Utilisations de fonds reportés"
    },
    {
        number: 7894,
        isMandatory: false,
        label: "Utilisations des fonds dédiés sur subventions d'exploitation"
    },
    {
        number: 7895,
        isMandatory: false,
        label: "Utilisations des fonds dédiés sur contributions financières d'autres organismes"
    },
    {
        number: 7896,
        isMandatory: false,
        label: "Utilisations des fonds dédiés sur ressources liées à la générosité du public"
    },
    {
        number: 8,
        isMandatory: true,
        label: "Comptes spéciaux"
    },
    {
        number: 80,
        isMandatory: true,
        label: "Engagements"
    },
    {
        number: 801,
        isMandatory: false,
        label: "Engagements donnés par l'entité"
    },
    {
        number: 8011,
        isMandatory: false,
        label: "Avals, cautions, garanties"
    },
    {
        number: 8014,
        isMandatory: false,
        label: "Effets circulant sous l'endos de l'entité"
    },
    {
        number: 8016,
        isMandatory: false,
        label: "Redevances crédit-bail restant à courir"
    },
    {
        number: 80161,
        isMandatory: false,
        label: "Crédit-bail mobilier"
    },
    {
        number: 80165,
        isMandatory: false,
        label: "Crédit-bail immobilier"
    },
    {
        number: 8018,
        isMandatory: false,
        label: "Autres engagements donnés"
    },
    {
        number: 802,
        isMandatory: false,
        label: "Engagements reçus par l'entité"
    },
    {
        number: 8021,
        isMandatory: false,
        label: "Avals, cautions, garanties"
    },
    {
        number: 8024,
        isMandatory: false,
        label: "Créances escomptées non échues"
    },
    {
        number: 8026,
        isMandatory: false,
        label: "Engagements reçus pour utilisation en crédit-bail"
    },
    {
        number: 80261,
        isMandatory: false,
        label: "Crédit-bail mobilier"
    },
    {
        number: 80265,
        isMandatory: false,
        label: "Crédit-bail immobilier"
    },
    {
        number: 8028,
        isMandatory: false,
        label: "Autres engagements reçus"
    },
    {
        number: 809,
        isMandatory: false,
        label: "Contrepartie des engagements"
    },
    {
        number: 8091,
        isMandatory: false,
        label: "Contrepartie 801"
    },
    {
        number: 8092,
        isMandatory: false,
        label: "Contrepartie 802"
    },
    {
        number: 86,
        isMandatory: true,
        label: " Emplois des contributions volontaires en nature"
    },
    {
        number: 860,
        isMandatory: false,
        label: "Secours en nature"
    },
    {
        number: 861,
        isMandatory: false,
        label: "Mises à disposition gratuite de biens"
    },
    {
        number: 862,
        isMandatory: false,
        label: "Prestations"
    },
    {
        number: 864,
        isMandatory: false,
        label: "Personnel bénévole"
    },
    {
        number: 87,
        isMandatory: true,
        label: "Contributions volontaires en nature"
    },
    {
        number: 870,
        isMandatory: false,
        label: "Dons en nature"
    },
    {
        number: 871,
        isMandatory: false,
        label: "Prestations en nature"
    },
    {
        number: 875,
        isMandatory: false,
        label: "Bénévolat"
    },
    {
        number: 88,
        isMandatory: true,
        label: "Résultat en instance d'affectation"
    },
    {
        number: 89,
        isMandatory: true,
        label: "Bilan"
    },
    {
        number: 890,
        isMandatory: true,
        label: "Bilan d'ouverture"
    },
    {
        number: 891,
        isMandatory: true,
        label: "Bilan de clôture"
    }
]
