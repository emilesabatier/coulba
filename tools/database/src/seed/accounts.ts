

export type DefaultAccount = {
    number: number
    label: string
    accounts: DefaultAccount[]
}

export const defaultAccounts: DefaultAccount[] = [
    {
        number: 1,
        label: "Capitaux",
        accounts: [
            {
                number: 10,
                label: "Capital et réserves",
                accounts: [
                    {
                        number: 101,
                        label: "Capital",
                        accounts: [
                            {
                                number: 1011,
                                label: "Capital souscrit - non appelé",
                                accounts: []
                            },
                            {
                                number: 1012,
                                label: "Capital souscrit - appelé, non versé",
                                accounts: []
                            },
                            {
                                number: 1013,
                                label: "Capital souscrit - appelé, versé",
                                accounts: [
                                    {
                                        number: 10131,
                                        label: "Capital non amorti",
                                        accounts: []
                                    },
                                    {
                                        number: 10132,
                                        label: "Capital amorti",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 1018,
                                label: "Capital souscrit soumis à des réglementations particulières",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 102,
                        label: "Fonds fiduciaires",
                        accounts: []
                    },
                    {
                        number: 104,
                        label: "Primes liées au capital social",
                        accounts: [
                            {
                                number: 1041,
                                label: "Primes d'émission",
                                accounts: []
                            },
                            {
                                number: 1042,
                                label: "Primes de fusion",
                                accounts: []
                            },
                            {
                                number: 1043,
                                label: "Primes d'apport",
                                accounts: []
                            },
                            {
                                number: 1044,
                                label: "Primes de conversion d'obligations en actions",
                                accounts: []
                            },
                            {
                                number: 1045,
                                label: "Bons de souscription d'actions",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 105,
                        label: "Écarts de réévaluation",
                        accounts: [
                            {
                                number: 1051,
                                label: "Réserve spéciale de réévaluation",
                                accounts: []
                            },
                            {
                                number: 1052,
                                label: "Écart de réévaluation libre",
                                accounts: []
                            },
                            {
                                number: 1053,
                                label: "Réserve de réévaluation",
                                accounts: []
                            },
                            {
                                number: 1055,
                                label: "Écarts de réévaluation (autres opérations légales)",
                                accounts: []
                            },
                            {
                                number: 1057,
                                label: "Autres écarts de réévaluation en France",
                                accounts: []
                            },
                            {
                                number: 1058,
                                label: "Autres écarts de réévaluation à l'étranger",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 106,
                        label: "Réserves",
                        accounts: [
                            {
                                number: 1061,
                                label: "Réserve légale",
                                accounts: []
                            },
                            {
                                number: 10611,
                                label: "Réserve légale proprement dite",
                                accounts: []
                            },
                            {
                                number: 10612,
                                label: "Plus-values nettes à long terme",
                                accounts: []
                            },
                            {
                                number: 1062,
                                label: "Réserves indisponibles",
                                accounts: []
                            },
                            {
                                number: 1063,
                                label: "Réserves statutaires ou contractuelles",
                                accounts: []
                            },
                            {
                                number: 1064,
                                label: "Réserves réglementées",
                                accounts: [
                                    {
                                        number: 10641,
                                        label: "Plus-values nettes à long terme",
                                        accounts: []
                                    },
                                    {
                                        number: 10643,
                                        label: "Réserves consécutives à l'octroi de subventions d'investissement",
                                        accounts: []
                                    },
                                    {
                                        number: 10648,
                                        label: "Autres réserves réglementées",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 1068,
                                label: "Autres réserves",
                                accounts: [
                                    {
                                        number: 10681,
                                        label: "Réserve de propre assureur",
                                        accounts: []
                                    },
                                    {
                                        number: 10688,
                                        label: "Réserves diverses",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 107,
                        label: "Écart d'équivalence",
                        accounts: []
                    },
                    {
                        number: 108,
                        label: "Compte de l'exploitant",
                        accounts: []
                    },
                    {
                        number: 109,
                        label: "Actionnaires : Capital souscrit - non appelé",
                        accounts: []
                    }
                ]
            },
            {
                number: 11,
                label: "Report à nouveau",
                accounts: [
                    {
                        number: 110,
                        label: "Report à nouveau (solde créditeur)",
                        accounts: []
                    },
                    {
                        number: 119,
                        label: "Report à nouveau (solde débiteur)",
                        accounts: []
                    }
                ]
            },
            {
                number: 12,
                label: "Résultat net de l'exercice",
                accounts: [
                    {
                        number: 120,
                        label: "Résultat de l'exercice (bénéfice)",
                        accounts: []
                    },
                    {
                        number: 129,
                        label: "Résultat de l'exercice (perte)",
                        accounts: []
                    }
                ]
            },
            {
                number: 13,
                label: "Subventions d'investissement",
                accounts: [
                    {
                        number: 131,
                        label: "Subventions d'équipement",
                        accounts: [
                            {
                                number: 1311,
                                label: "État",
                                accounts: []
                            },
                            {
                                number: 1312,
                                label: "Régions",
                                accounts: []
                            },
                            {
                                number: 1313,
                                label: "Départements",
                                accounts: []
                            },
                            {
                                number: 1314,
                                label: "Communes",
                                accounts: []
                            },
                            {
                                number: 1315,
                                label: "Collectivités publiques",
                                accounts: []
                            },
                            {
                                number: 1316,
                                label: "Entreprises publiques",
                                accounts: []
                            },
                            {
                                number: 1317,
                                label: "Entreprises et organismes privés",
                                accounts: []
                            },
                            {
                                number: 1318,
                                label: "Autres",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 138,
                        label: "Autres subventions d'investissement (même ventilation que celle du compte 131)",
                        accounts: []
                    },
                    {
                        number: 139,
                        label: "Subventions d'investissement inscrites au compte de résultat",
                        accounts: [
                            {
                                number: 1391,
                                label: "Subventions d'équipement",
                                accounts: [
                                    {
                                        number: 13911,
                                        label: "État",
                                        accounts: []
                                    },
                                    {
                                        number: 13912,
                                        label: "Régions",
                                        accounts: []
                                    },
                                    {
                                        number: 13913,
                                        label: "Départements",
                                        accounts: []
                                    },
                                    {
                                        number: 13914,
                                        label: "Communes",
                                        accounts: []
                                    },
                                    {
                                        number: 13915,
                                        label: "Collectivités publiques",
                                        accounts: []
                                    },
                                    {
                                        number: 13916,
                                        label: "Entreprises publiques",
                                        accounts: []
                                    },
                                    {
                                        number: 13917,
                                        label: "Entreprises et organismes privés",
                                        accounts: []
                                    },
                                    {
                                        number: 13918,
                                        label: "Autres",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 1398,
                                label: "Autres subventions d'investissement (même ventilation que celle du compte 1391)",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 14,
                label: "Provisions réglementées",
                accounts: [
                    {
                        number: 142,
                        label: "Provisions réglementées relatives aux immobilisations",
                        accounts: [
                            {
                                number: 1423,
                                label: "Provisions pour reconstitution des gisements miniers et pétroliers",
                                accounts: []
                            },
                            {
                                number: 1424,
                                label: "Provisions pour investissement (participation des salariés)",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 143,
                        label: "Provisions réglementées relatives aux stocks",
                        accounts: [
                            {
                                number: 1431,
                                label: "Hausse des prix",
                                accounts: []
                            },
                            {
                                number: 1432,
                                label: "Fluctuation des cours",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 144,
                        label: "Provisions réglementées relatives aux autres éléments de l'actif",
                        accounts: []
                    },
                    {
                        number: 145,
                        label: "Amortissements dérogatoires",
                        accounts: []
                    },
                    {
                        number: 146,
                        label: "Provision spéciale de réévaluation",
                        accounts: []
                    },
                    {
                        number: 147,
                        label: "Plus-values réinvesties",
                        accounts: []
                    },
                    {
                        number: 148,
                        label: "Autres provisions réglementées",
                        accounts: []
                    }
                ]
            },
            {
                number: 15,
                label: "Provisions pour risques et charges",
                accounts: [
                    {
                        number: 151,
                        label: "Provisions pour risques",
                        accounts: [
                            {
                                number: 1511,
                                label: "Provisions pour litiges",
                                accounts: []
                            },
                            {
                                number: 1512,
                                label: "Provisions pour garanties données aux clients",
                                accounts: []
                            },
                            {
                                number: 1513,
                                label: "Provisions pour pertes sur marchés à terme",
                                accounts: []
                            },
                            {
                                number: 1514,
                                label: "Provisions pour amendes et pénalités",
                                accounts: []
                            },
                            {
                                number: 1515,
                                label: "Provisions pour pertes de change",
                                accounts: []
                            },
                            {
                                number: 1516,
                                label: "Provisions pour pertes sur contrats",
                                accounts: []
                            },
                            {
                                number: 1518,
                                label: "Autres provisions pour risques",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 153,
                        label: "Provisions pour pensions et obligations similaires",
                        accounts: []
                    },
                    {
                        number: 154,
                        label: "Provisions pour restructurations",
                        accounts: []
                    },
                    {
                        number: 155,
                        label: "Provisions pour impôts",
                        accounts: []
                    },
                    {
                        number: 156,
                        label: "Provisions pour renouvellement des immobilisations (entreprises concessionnaires)",
                        accounts: []
                    },
                    {
                        number: 157,
                        label: "Provisions pour charges à répartir sur plusieurs exercices",
                        accounts: [
                            {
                                number: 1572,
                                label: "Provisions pour gros entretien ou grandes révisions",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 158,
                        label: "Autres provisions pour charges",
                        accounts: [
                            {
                                number: 1581,
                                label: "Provisions pour remises en état",
                                accounts: []
                            },
                            {
                                number: 1582,
                                label: "Provisions pour charges sociales et fiscales sur congés à payer",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 16,
                label: "Emprunts et dettes assimilées",
                accounts: [
                    {
                        number: 161,
                        label: "Emprunts obligataires convertibles",
                        accounts: []
                    },
                    {
                        number: 162,
                        label: "Obligations représentatives de passifs nets remis en fiducie",
                        accounts: []
                    },
                    {
                        number: 163,
                        label: "Autres emprunts obligataires",
                        accounts: []
                    },
                    {
                        number: 164,
                        label: "Émprunts auprès des établissements de crédit",
                        accounts: []
                    },
                    {
                        number: 165,
                        label: "Dépôts et cautionnements reçus",
                        accounts: [
                            {
                                number: 1651,
                                label: "Dépôts",
                                accounts: []
                            },
                            {
                                number: 1655,
                                label: "Cautionnements",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 166,
                        label: "Participation des salariés aux résultats",
                        accounts: [
                            {
                                number: 1661,
                                label: "Comptes bloqués",
                                accounts: []
                            },
                            {
                                number: 1662,
                                label: "Fonds de participation",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 167,
                        label: "Emprunts et dettes assortis de conditions particulières",
                        accounts: [
                            {
                                number: 1671,
                                label: "Émissions de titres participatifs",
                                accounts: []
                            },
                            {
                                number: 1674,
                                label: "Avances conditionnées de l'État",
                                accounts: []
                            },
                            {
                                number: 1675,
                                label: "Emprunts participatifs",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 168,
                        label: "Autres emprunts et dettes assimilées",
                        accounts: [
                            {
                                number: 1681,
                                label: "Autres emprunts",
                                accounts: []
                            },
                            {
                                number: 1685,
                                label: "Rentes viagères capitalisées",
                                accounts: []
                            },
                            {
                                number: 1687,
                                label: "Autres dettes",
                                accounts: []
                            },
                            {
                                number: 1688,
                                label: "Intérêts courus",
                                accounts: [
                                    {
                                        number: 16881,
                                        label: "Sur emprunts obligataires convertibles",
                                        accounts: []
                                    },
                                    {
                                        number: 16883,
                                        label: "Sur autres emprunts obligataires",
                                        accounts: []
                                    },
                                    {
                                        number: 16884,
                                        label: "Sur emprunts auprès des établissements de crédit",
                                        accounts: []
                                    },
                                    {
                                        number: 16885,
                                        label: "Sur dépôts et cautionnements reçus",
                                        accounts: []
                                    },
                                    {
                                        number: 16886,
                                        label: "Sur participation des salariés aux résultats",
                                        accounts: []
                                    },
                                    {
                                        number: 16887,
                                        label: "Sur emprunts et dettes assortis de conditions particulières",
                                        accounts: []
                                    },
                                    {
                                        number: 16888,
                                        label: "Sur autres emprunts et dettes assimilées",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 169,
                        label: "Primes de remboursement des obligations",
                        accounts: []
                    }
                ]
            },
            {
                number: 17,
                label: "Dettes rattachées à des participations",
                accounts: [
                    {
                        number: 171,
                        label: "Dettes rattachées à des participations (groupe)",
                        accounts: []
                    },
                    {
                        number: 174,
                        label: "Dettes rattachées à des participations (hors groupe)",
                        accounts: []
                    },
                    {
                        number: 178,
                        label: "Dettes rattachées à des sociétés en participation",
                        accounts: [
                            {
                                number: 1781,
                                label: "Principal",
                                accounts: []
                            },
                            {
                                number: 1788,
                                label: "Intérêts courus",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 18,
                label: "Comptes de liaison des établissements et sociétés en participation",
                accounts: [
                    {
                        number: 181,
                        label: "Comptes de liaison des établissements",
                        accounts: []
                    },
                    {
                        number: 186,
                        label: "Biens et prestations de services échangés entre établissements (charges)",
                        accounts: []
                    },
                    {
                        number: 187,
                        label: "Biens et prestations de services échangés entre établissements (produits)",
                        accounts: []
                    },
                    {
                        number: 188,
                        label: "Comptes de liaison des sociétés en participation",
                        accounts: []
                    }
                ]
            }
        ]
    },
    {
        number: 2,
        label: "Immobilisations",
        accounts: [
            {
                number: 20,
                label: "Immobilisations incorporelles",
                accounts: [
                    {
                        number: 201,
                        label: "Frais d'établissement",
                        accounts: [
                            {
                                number: 2011,
                                label: "Frais de constitution",
                                accounts: []
                            },
                            {
                                number: 2012,
                                label: "Frais de premier établissement",
                                accounts: [
                                    {
                                        number: 20121,
                                        label: "Frais de prospection",
                                        accounts: []
                                    },
                                    {
                                        number: 20122,
                                        label: "Frais de publicité",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 2013,
                                label: "Frais d'augmentation de capital et d'opérations diverses (fusions, scissions, transformations)",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 203,
                        label: "Frais de recherche et de développement",
                        accounts: []
                    },
                    {
                        number: 205,
                        label: "Concessions et droits similaires, brevets, licences, marques, procédés, logiciels, droits et valeurs similaires",
                        accounts: []
                    },
                    {
                        number: 206,
                        label: "Droit au bail",
                        accounts: []
                    },
                    {
                        number: 207,
                        label: "Fonds commercial",
                        accounts: []
                    },
                    {
                        number: 208,
                        label: "Autres immobilisations incorporelles",
                        accounts: [
                            {
                                number: 2081,
                                label: "Mali de fusion sur actifs incorporels",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 21,
                label: "Immobilisations corporelles",
                accounts: [
                    {
                        number: 211,
                        label: "Terrains",
                        accounts: [
                            {
                                number: 2111,
                                label: "Terrains nus",
                                accounts: []
                            },
                            {
                                number: 2112,
                                label: "Terrains aménagés",
                                accounts: []
                            },
                            {
                                number: 2113,
                                label: "Sous-sols et sursols",
                                accounts: []
                            },
                            {
                                number: 2114,
                                label: "Terrains de gisement",
                                accounts: [
                                    {
                                        number: 21141,
                                        label: "Carrières",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 2115,
                                label: "Terrains bâtis",
                                accounts: [
                                    {
                                        number: 21151,
                                        label: "Ensembles immobiliers industriels (A, B, ...)",
                                        accounts: []
                                    },
                                    {
                                        number: 21155,
                                        label: "Ensembles immobiliers administratifs et commerciaux (A, B, ...)",
                                        accounts: []
                                    },
                                    {
                                        number: 21158,
                                        label: "Autres ensembles immobiliers",
                                        accounts: [
                                            {
                                                number: 211581,
                                                label: "affectés aux opérations professionnelles (A, B, ...)",
                                                accounts: []
                                            },
                                            {
                                                number: 211588,
                                                label: "affectés aux opérations non professionnelles (A, B, ...)",
                                                accounts: []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                number: 2116,
                                label: "Compte d'ordre sur immobilisations",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 212,
                        label: "Agencements et aménagements de terrains (même ventilation que celle du compte 211)",
                        accounts: []
                    },
                    {
                        number: 213,
                        label: "Constructions",
                        accounts: [
                            {
                                number: 2131,
                                label: "Bâtiments",
                                accounts: [
                                    {
                                        number: 21311,
                                        label: "Ensembles immobiliers industriels (A, B, ...)",
                                        accounts: []
                                    },
                                    {
                                        number: 21315,
                                        label: "Ensembles immobiliers administratifs et commerciaux (A, B, ...)",
                                        accounts: []
                                    },
                                    {
                                        number: 21318,
                                        label: "Autres ensembles immobiliers",
                                        accounts: [
                                            {
                                                number: 213181,
                                                label: "affectés aux opérations professionnelles (A, B, ...)",
                                                accounts: []
                                            },
                                            {
                                                number: 213188,
                                                label: "affectés aux opérations non professionnelles (A, B, ...)",
                                                accounts: []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                number: 2135,
                                label: "Installations générales - agencements - aménagements des constructions",
                                accounts: [
                                    {
                                        number: 21351,
                                        label: "Ensembles immobiliers industriels (A, B, ...)",
                                        accounts: []
                                    },
                                    {
                                        number: 21355,
                                        label: "Ensembles immobiliers administratifs et commerciaux (A, B, ...)",
                                        accounts: []
                                    },
                                    {
                                        number: 21358,
                                        label: "Autres ensembles immobiliers",
                                        accounts: [
                                            {
                                                number: 213581,
                                                label: "affectés aux opérations professionnelles (A, B)",
                                                accounts: []
                                            },
                                            {
                                                number: 213588,
                                                label: "affectés aux opérations non professionnelles (A, B)",
                                                accounts: []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                number: 2138,
                                label: "Ouvrages d'infrastructure",
                                accounts: [
                                    {
                                        number: 21381,
                                        label: "Voies de terre",
                                        accounts: []
                                    },
                                    {
                                        number: 21382,
                                        label: "Voies de fer",
                                        accounts: []
                                    },
                                    {
                                        number: 21383,
                                        label: "Voies d'eau",
                                        accounts: []
                                    },
                                    {
                                        number: 21384,
                                        label: "Barrages",
                                        accounts: []
                                    },
                                    {
                                        number: 21385,
                                        label: "Pistes d'aérodromes",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 214,
                        label: "Constructions sur sol d'autrui (même ventilation que celle du compte 213)",
                        accounts: []
                    },
                    {
                        number: 215,
                        label: "Installations techniques, matériels et outillage industriels",
                        accounts: [
                            {
                                number: 2151,
                                label: "Installations complexes spécialisées",
                                accounts: [
                                    {
                                        number: 21511,
                                        label: "sur sol propre",
                                        accounts: []
                                    },
                                    {
                                        number: 21514,
                                        label: "sur sol d'autrui",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 2153,
                                label: "Installations à caractère spécifique",
                                accounts: [
                                    {
                                        number: 21531,
                                        label: "sur sol propre",
                                        accounts: []
                                    },
                                    {
                                        number: 21534,
                                        label: "sur sol d'autrui",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 2154,
                                label: "Matériel industriel",
                                accounts: []
                            },
                            {
                                number: 2155,
                                label: "Outillage industriel",
                                accounts: []
                            },
                            {
                                number: 2157,
                                label: "Agencements et aménagements du matériel et outillage industriels",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 218,
                        label: "Autres immobilisations corporelles",
                        accounts: [
                            {
                                number: 2181,
                                label: "Installations générales, agencements, aménagements divers",
                                accounts: []
                            },
                            {
                                number: 2182,
                                label: "Matériel de transport",
                                accounts: []
                            },
                            {
                                number: 2183,
                                label: "Matériel de bureau et matériel informatique",
                                accounts: []
                            },
                            {
                                number: 2184,
                                label: "Mobilier",
                                accounts: []
                            },
                            {
                                number: 2185,
                                label: "Cheptel",
                                accounts: []
                            },
                            {
                                number: 2186,
                                label: "Emballages récupérables",
                                accounts: []
                            },
                            {
                                number: 2187,
                                label: "Mali de fusions sur actifs corporels",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 22,
                label: "Immobilisations mises en concession",
                accounts: []
            },
            {
                number: 23,
                label: "Immobilisations en cours",
                accounts: [
                    {
                        number: 231,
                        label: "Immobilisations corporelles en cours",
                        accounts: [
                            {
                                number: 2312,
                                label: "Terrains",
                                accounts: []
                            },
                            {
                                number: 2313,
                                label: "Constructions",
                                accounts: []
                            },
                            {
                                number: 2315,
                                label: "Installations techniques, matériel et outillage industriels",
                                accounts: []
                            },
                            {
                                number: 2318,
                                label: "Autres immobilisations corporelles",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 232,
                        label: "Immobilisations incorporelles en cours",
                        accounts: []
                    },
                    {
                        number: 237,
                        label: "Avances et acomptes versés sur immobilisations incorporelles",
                        accounts: []
                    },
                    {
                        number: 238,
                        label: "Avances et acomptes versés sur commandes d'immobilisations corporelles",
                        accounts: [
                            {
                                number: 2382,
                                label: "Terrains",
                                accounts: []
                            },
                            {
                                number: 2383,
                                label: "Constructions",
                                accounts: []
                            },
                            {
                                number: 2385,
                                label: "Installations techniques, matériel et outillage industriels",
                                accounts: []
                            },
                            {
                                number: 2388,
                                label: "Autres immobilisations corporelles",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 25,
                label: "Parts dans des entreprises liées et créances sur des entreprises liées",
                accounts: []
            },
            {
                number: 26,
                label: "Participations et créances rattachées à des participations",
                accounts: [
                    {
                        number: 261,
                        label: "Titres de participation",
                        accounts: [
                            {
                                number: 2611,
                                label: "Actions",
                                accounts: []
                            },
                            {
                                number: 2618,
                                label: "Autres titres",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 266,
                        label: "Autres formes de participation",
                        accounts: [
                            {
                                number: 2661,
                                label: "Droits représentatifs d'actifs nets remis en fiducie",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 267,
                        label: "Créances rattachées à des participations",
                        accounts: [
                            {
                                number: 2671,
                                label: "Créances rattachées à des participations (groupe)",
                                accounts: []
                            },
                            {
                                number: 2674,
                                label: "Créances rattachées à des participations (hors groupe)",
                                accounts: []
                            },
                            {
                                number: 2675,
                                label: "Versements représentatifs d'apports non capitalisés (appel de fonds)",
                                accounts: []
                            },
                            {
                                number: 2676,
                                label: "Avances consolidables",
                                accounts: []
                            },
                            {
                                number: 2677,
                                label: "Autres créances rattachées à des participations",
                                accounts: []
                            },
                            {
                                number: 2678,
                                label: "Intérêts courus",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 268,
                        label: "Créances rattachées à des sociétés en participation",
                        accounts: [
                            {
                                number: 2681,
                                label: "Principal",
                                accounts: []
                            },
                            {
                                number: 2688,
                                label: "Intérêts courus",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 269,
                        label: "Versements restant à effectuer sur titres de participation non libérés",
                        accounts: []
                    }
                ]
            },
            {
                number: 27,
                label: "Autres immobilisations financières",
                accounts: [
                    {
                        number: 271,
                        label: "Titres immobilisés autres que les titres immobilisés de l'activité de portefeuille (droit de propriété)",
                        accounts: [
                            {
                                number: 2711,
                                label: "Actions",
                                accounts: []
                            },
                            {
                                number: 2718,
                                label: "Autres titres",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 272,
                        label: "Titres immobilisés (droit de créance)",
                        accounts: [
                            {
                                number: 2721,
                                label: "Obligations",
                                accounts: []
                            },
                            {
                                number: 2722,
                                label: "Bons",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 273,
                        label: "Titres immobilisés de l'activité de portefeuille",
                        accounts: []
                    },
                    {
                        number: 274,
                        label: "Prêts",
                        accounts: [
                            {
                                number: 2741,
                                label: "Prêts participatifs",
                                accounts: []
                            },
                            {
                                number: 2742,
                                label: "Prêts aux associés",
                                accounts: []
                            },
                            {
                                number: 2743,
                                label: "Prêts au personnel",
                                accounts: []
                            },
                            {
                                number: 2748,
                                label: "Autres prêts",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 275,
                        label: "Dépôts et cautionnements versés",
                        accounts: [
                            {
                                number: 2751,
                                label: "Dépôts",
                                accounts: []
                            },
                            {
                                number: 2755,
                                label: "Cautionnements",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 276,
                        label: "Autres créances immobilisées",
                        accounts: [
                            {
                                number: 2761,
                                label: "Créances diverses",
                                accounts: []
                            },
                            {
                                number: 2768,
                                label: "Intérêts courus",
                                accounts: [
                                    {
                                        number: 27682,
                                        label: "sur titres immobilisés (droit de créance)",
                                        accounts: []
                                    },
                                    {
                                        number: 27684,
                                        label: "sur prêts",
                                        accounts: []
                                    },
                                    {
                                        number: 27685,
                                        label: "sur dépôts et cautionnements",
                                        accounts: []
                                    },
                                    {
                                        number: 27688,
                                        label: "sur créances diverses",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 277,
                        label: "Actions propres ou parts propres",
                        accounts: [
                            {
                                number: 2771,
                                label: "Actions propres ou parts propres",
                                accounts: []
                            },
                            {
                                number: 2772,
                                label: "Actions propres ou parts propres en voie d'annulation",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 278,
                        label: "Mali de fusion sur actifs financiers",
                        accounts: []
                    },
                    {
                        number: 279,
                        label: "Versements restant à effectuer sur titres immobilisés non libérés",
                        accounts: []
                    }
                ]
            },
            {
                number: 28,
                label: "Amortissements des immobilisations",
                accounts: [
                    {
                        number: 280,
                        label: "Amortissements des immobilisations incorporelles",
                        accounts: [
                            {
                                number: 2801,
                                label: "Frais d'établissement (même ventilation que celle du compte 201)",
                                accounts: []
                            },
                            {
                                number: 2803,
                                label: "Frais de recherche et de développement",
                                accounts: []
                            },
                            {
                                number: 2805,
                                label: "Concessions et droits similaires, brevets, licences, logiciels, droits et valeurs similaires",
                                accounts: []
                            },
                            {
                                number: 2807,
                                label: "Fonds commercial",
                                accounts: []
                            },
                            {
                                number: 2808,
                                label: "Autres immobilisations incorporelles",
                                accounts: [
                                    {
                                        number: 28081,
                                        label: "Amortissements du mali de fusion sur actifs incorporels",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 281,
                        label: "Amortissements des immobilisations corporelles",
                        accounts: [
                            {
                                number: 2812,
                                label: "Agencements, aménagements de terrains (même ventilation que celle du compte 212)",
                                accounts: []
                            },
                            {
                                number: 2813,
                                label: "Constructions (même ventilation que celle du compte 213)",
                                accounts: []
                            },
                            {
                                number: 2814,
                                label: "Constructions sur sol d'autrui (même ventilation que celle du compte 214)",
                                accounts: []
                            },
                            {
                                number: 2815,
                                label: "Installations, matériel et outillage industriels (même ventilation que celle du compte 215)",
                                accounts: []
                            },
                            {
                                number: 2818,
                                label: "Autres immobilisations corporelles (même ventilation que celle du compte 218)",
                                accounts: [
                                    {
                                        number: 28187,
                                        label: "Amortissement du mali de fusion sur actifs corporels",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 282,
                        label: "Amortissements des immobilisations mises en concession",
                        accounts: []
                    }
                ]
            },
            {
                number: 29,
                label: "Dépréciations des immobilisations",
                accounts: [
                    {
                        number: 290,
                        label: "Dépréciations des immobilisations incorporelles",
                        accounts: [
                            {
                                number: 2905,
                                label: "Marques, procédés, droits et valeurs similaires",
                                accounts: []
                            },
                            {
                                number: 2906,
                                label: "Droit au bail",
                                accounts: []
                            },
                            {
                                number: 2907,
                                label: "Fonds commercial",
                                accounts: []
                            },
                            {
                                number: 2908,
                                label: "Autres immobilisations incorporelles",
                                accounts: [
                                    {
                                        number: 29081,
                                        label: "Dépréciation du mali de fusion sur actifs incorporels",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 291,
                        label: "Dépréciations des immobilisations corporelles (même ventilation que celle du compte 21)",
                        accounts: [
                            {
                                number: 29187,
                                label: "Dépréciation du mali de fusion sur actifs corporels",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 292,
                        label: "Dépréciations des immobilisations mises en concession",
                        accounts: []
                    },
                    {
                        number: 293,
                        label: "Dépréciations des immobilisations en cours",
                        accounts: [
                            {
                                number: 2931,
                                label: "Immobilisations corporelles en cours",
                                accounts: []
                            },
                            {
                                number: 2932,
                                label: "Immobilisations incorporelles en cours",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 296,
                        label: "Dépréciations des participations et créances rattachées à des participations",
                        accounts: [
                            {
                                number: 2961,
                                label: "Titres de participation",
                                accounts: []
                            },
                            {
                                number: 2966,
                                label: "Autres formes de participation",
                                accounts: []
                            },
                            {
                                number: 2967,
                                label: "Créances rattachées à des participations (même ventilation que celle du compte 267)",
                                accounts: []
                            },
                            {
                                number: 2968,
                                label: "Créances rattachées à des sociétés en participation (même ventilation que celle du compte 268)",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 297,
                        label: "Dépréciations des autres immobilisations financières",
                        accounts: [
                            {
                                number: 2971,
                                label: "Titres immobilisés autres que les titres immobilisés de l'activité de portefeuille, droit de propriété (même ventilation que celle du compte 271)",
                                accounts: []
                            },
                            {
                                number: 2972,
                                label: "Droit de créance (même ventilation que celle du compte 272)",
                                accounts: []
                            },
                            {
                                number: 2973,
                                label: "Titres immobilisés de l'activité de portefeuille",
                                accounts: []
                            },
                            {
                                number: 2974,
                                label: "Prêts (même ventilation que celle du compte 274)",
                                accounts: []
                            },
                            {
                                number: 2975,
                                label: "Dépôts et cautionnements versés (même ventilation que celle du compte 275)",
                                accounts: []
                            },
                            {
                                number: 2976,
                                label: "Autres créances immobilisées (même ventilation que celle du compte 276)",
                                accounts: []
                            },
                            {
                                number: 2978,
                                label: "Dépréciation du mali de fusion sur actifs financiers",
                                accounts: [
                                    {
                                        number: 29787,
                                        label: "Dépréciation du mali de fusion sur actifs financiers",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        number: 3,
        label: "Stocks et en-cours",
        accounts: [
            {
                number: 31,
                label: "Matières premières et fournitures",
                accounts: [
                    {
                        number: 311,
                        label: "Matières (ou groupe) A",
                        accounts: []
                    },
                    {
                        number: 312,
                        label: "Matières (ou groupe) B",
                        accounts: []
                    },
                    {
                        number: 317,
                        label: "Fournitures A, B, C, ...",
                        accounts: []
                    }
                ]
            },
            {
                number: 32,
                label: "Autres approvisionnements",
                accounts: [
                    {
                        number: 321,
                        label: "Matières consommables",
                        accounts: [
                            {
                                number: 3211,
                                label: "Matières (ou groupe) C",
                                accounts: []
                            },
                            {
                                number: 3212,
                                label: "Matières (ou groupe) D",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 322,
                        label: "Fournitures consommables",
                        accounts: [
                            {
                                number: 3221,
                                label: "Combustibles",
                                accounts: []
                            },
                            {
                                number: 3222,
                                label: "Produits d'entretien",
                                accounts: []
                            },
                            {
                                number: 3223,
                                label: "Fournitures d'atelier et d'usine",
                                accounts: []
                            },
                            {
                                number: 3224,
                                label: "Fournitures de magasin",
                                accounts: []
                            },
                            {
                                number: 3225,
                                label: "Fournitures de bureau",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 326,
                        label: "Emballages",
                        accounts: [
                            {
                                number: 3261,
                                label: "Emballages perdus",
                                accounts: []
                            },
                            {
                                number: 3265,
                                label: "Emballages récupérables non identifiables",
                                accounts: []
                            },
                            {
                                number: 3267,
                                label: "Emballages à usage mixte",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 33,
                label: "En-cours de production de biens",
                accounts: [
                    {
                        number: 331,
                        label: "Produits en cours",
                        accounts: [
                            {
                                number: 3311,
                                label: "Produits en cours P1",
                                accounts: []
                            },
                            {
                                number: 3312,
                                label: "Produits en cours P2",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 335,
                        label: "Travaux en cours",
                        accounts: [
                            {
                                number: 3351,
                                label: "Travaux en cours T1",
                                accounts: []
                            },
                            {
                                number: 3352,
                                label: "Travaux en cours T2",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 34,
                label: "En-cours de production de services",
                accounts: [
                    {
                        number: 341,
                        label: "Études en cours",
                        accounts: [
                            {
                                number: 3411,
                                label: "Études en cours E1",
                                accounts: []
                            },
                            {
                                number: 3412,
                                label: "Études en cours E2",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 345,
                        label: "Prestations de services en cours",
                        accounts: [
                            {
                                number: 3451,
                                label: "Prestations de services S1",
                                accounts: []
                            },
                            {
                                number: 3452,
                                label: "Prestations de services S2",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 35,
                label: "Stocks de produits",
                accounts: [
                    {
                        number: 351,
                        label: "Produits intermédiaires",
                        accounts: [
                            {
                                number: 3511,
                                label: "Produits intermédiaires (ou groupe) A",
                                accounts: []
                            },
                            {
                                number: 3512,
                                label: "Produits intermédiaires (ou groupe) B",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 355,
                        label: "Produits finis",
                        accounts: [
                            {
                                number: 3551,
                                label: "Produits finis (ou groupe) A",
                                accounts: []
                            },
                            {
                                number: 3552,
                                label: "Produits finis (ou groupe) B",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 358,
                        label: "Produits résiduels (ou matières de récupération)",
                        accounts: [
                            {
                                number: 3581,
                                label: "Déchets",
                                accounts: []
                            },
                            {
                                number: 3585,
                                label: "Rebuts",
                                accounts: []
                            },
                            {
                                number: 3586,
                                label: "Matières de récupération",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 36,
                label: "Stocks provenant d'immobilisations",
                accounts: []
            },
            {
                number: 37,
                label: "Stocks de marchandises",
                accounts: [
                    {
                        number: 371,
                        label: "Marchandises (ou groupe) A",
                        accounts: []
                    },
                    {
                        number: 372,
                        label: "Marchandises (ou groupe) B",
                        accounts: []
                    }
                ]
            },
            {
                number: 38,
                label: "Stocks en voie d'acheminement, mis en dépôt ou donnés en consignation",
                accounts: []
            },
            {
                number: 39,
                label: "Provisions pour dépréciations des stocks et en-cours",
                accounts: [
                    {
                        number: 391,
                        label: "Provisions pour dépréciations des matières premières (et fournitures)",
                        accounts: [
                            {
                                number: 3911,
                                label: "Matières (ou groupe) A",
                                accounts: []
                            },
                            {
                                number: 3912,
                                label: "Matières (ou groupe) B",
                                accounts: []
                            },
                            {
                                number: 3917,
                                label: "Fournitures A, B, C, ...",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 392,
                        label: "Provisions pour dépréciations des autres approvisionnements",
                        accounts: [
                            {
                                number: 3921,
                                label: "Matières consommables (même ventilation que celle du compte 321)",
                                accounts: []
                            },
                            {
                                number: 3922,
                                label: "Fournitures consommables (même ventilation que celle du compte 322)",
                                accounts: []
                            },
                            {
                                number: 3926,
                                label: "Emballages (même ventilation que celle du compte 326)",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 393,
                        label: "Provisions pour dépréciations des en-cours de production de biens",
                        accounts: [
                            {
                                number: 3931,
                                label: "Produits en cours (même ventilation que celle du compte 331)",
                                accounts: []
                            },
                            {
                                number: 3935,
                                label: "Travaux en cours (même ventilation que celle du compte 335)",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 394,
                        label: "Provisions pour dépréciations des en-cours de production de services",
                        accounts: [
                            {
                                number: 3941,
                                label: "Études en cours (même ventilation que celle du compte 341)",
                                accounts: []
                            },
                            {
                                number: 3945,
                                label: "Prestations de services en cours (même ventilation que celle du compte 345)",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 395,
                        label: "Provisions pour dépréciations des stocks de produits",
                        accounts: [
                            {
                                number: 3951,
                                label: "Produits intermédiaires (même ventilation que celle du compte 351)",
                                accounts: []
                            },
                            {
                                number: 3955,
                                label: "Produits finis (même ventilation que celle du compte 355)",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 397,
                        label: "Provisions pour dépréciations des stocks de marchandises",
                        accounts: [
                            {
                                number: 3971,
                                label: "Marchandise (ou groupe) A",
                                accounts: []
                            },
                            {
                                number: 3972,
                                label: "Marchandise (ou groupe) B",
                                accounts: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        number: 4,
        label: "Tiers",
        accounts: [
            {
                number: 40,
                label: "Fournisseurs et comptes rattachés",
                accounts: [
                    {
                        number: 400,
                        label: "Fournisseurs et comptes rattachés",
                        accounts: []
                    },
                    {
                        number: 401,
                        label: "Fournisseurs",
                        accounts: [
                            {
                                number: 4011,
                                label: "Fournisseurs - Achats de biens et prestations de services",
                                accounts: []
                            },
                            {
                                number: 4017,
                                label: "Fournisseurs - Retenues de garantie",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 403,
                        label: "Fournisseurs - Éffets à payer",
                        accounts: []
                    },
                    {
                        number: 404,
                        label: "Fournisseurs d'immobilisations",
                        accounts: [
                            {
                                number: 4041,
                                label: "Fournisseurs - Achats d'immobilisations",
                                accounts: []
                            },
                            {
                                number: 4047,
                                label: "Fournisseurs d'immobilisations - Retenues de garantie",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 405,
                        label: "Fournisseurs d'immobilisations - Éffets à payer",
                        accounts: []
                    },
                    {
                        number: 408,
                        label: "Fournisseurs - Factures non parvenues",
                        accounts: [
                            {
                                number: 4081,
                                label: "Fournisseurs",
                                accounts: []
                            },
                            {
                                number: 4084,
                                label: "Fournisseurs d'immobilisations",
                                accounts: []
                            },
                            {
                                number: 4088,
                                label: "Fournisseurs - Intérêts courus",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 409,
                        label: "Fournisseurs débiteurs",
                        accounts: [
                            {
                                number: 4091,
                                label: "Fournisseurs - Avances et acomptes versés sur commandes",
                                accounts: []
                            },
                            {
                                number: 4096,
                                label: "Fournisseurs - Créances pour emballages et matériel à rendre",
                                accounts: []
                            },
                            {
                                number: 4097,
                                label: "Fournisseurs - Autres avoirs",
                                accounts: [
                                    {
                                        number: 40971,
                                        label: "Fournisseurs d'exploitation",
                                        accounts: []
                                    },
                                    {
                                        number: 40974,
                                        label: "Fournisseurs d'immobilisations",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 4098,
                                label: "Rabais, remises, ristournes à obtenir et autres avoirs non encore reçus",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 41,
                label: "Clients et comptes rattachés",
                accounts: [
                    {
                        number: 410,
                        label: "Clients et comptes rattachés",
                        accounts: []
                    },
                    {
                        number: 411,
                        label: "Clients",
                        accounts: [
                            {
                                number: 4111,
                                label: "Clients - Ventes de biens ou de prestations de services",
                                accounts: []
                            },
                            {
                                number: 4117,
                                label: "Clients - Retenues de garantie",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 413,
                        label: "Clients - Éffets à recevoir",
                        accounts: []
                    },
                    {
                        number: 416,
                        label: "Clients douteux ou litigieux",
                        accounts: []
                    },
                    {
                        number: 418,
                        label: "Clients - Produits non encore facturés",
                        accounts: [
                            {
                                number: 4181,
                                label: "Clients - Factures à établir",
                                accounts: []
                            },
                            {
                                number: 4188,
                                label: "Clients - Intérêts courus",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 419,
                        label: "Clients créditeurs",
                        accounts: [
                            {
                                number: 4191,
                                label: "Clients - Avances et acomptes reçus sur commandes",
                                accounts: []
                            },
                            {
                                number: 4196,
                                label: "Clients - Dettes sur emballages et matériels consignés",
                                accounts: []
                            },
                            {
                                number: 4197,
                                label: "Clients - Autres avoirs",
                                accounts: []
                            },
                            {
                                number: 4198,
                                label: "Rabais, remises, ristournes à accorder et autres avoirs à établir",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 42,
                label: "Personnel et comptes rattachés",
                accounts: [
                    {
                        number: 421,
                        label: "Personnel - Rémunérations dues",
                        accounts: []
                    },
                    {
                        number: 422,
                        label: "Comités d'entreprises, d'établissement, …",
                        accounts: []
                    },
                    {
                        number: 424,
                        label: "Participation des salariés aux résultats",
                        accounts: [
                            {
                                number: 4246,
                                label: "Réserve spéciale",
                                accounts: []
                            },
                            {
                                number: 4248,
                                label: "Comptes courants",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 425,
                        label: "Personnel - Avances et acomptes",
                        accounts: []
                    },
                    {
                        number: 426,
                        label: "Personnel - Dépôts",
                        accounts: []
                    },
                    {
                        number: 427,
                        label: "Personnel - Oppositions",
                        accounts: []
                    },
                    {
                        number: 428,
                        label: "Personnel - Charges à payer et produits à recevoir",
                        accounts: [
                            {
                                number: 4282,
                                label: "Dettes provisionnées pour congés à payer",
                                accounts: []
                            },
                            {
                                number: 4284,
                                label: "Dettes provisionnées pour participation des salariés aux résultats",
                                accounts: []
                            },
                            {
                                number: 4286,
                                label: "Autres charges à payer",
                                accounts: []
                            },
                            {
                                number: 4287,
                                label: "Produits à recevoir",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 43,
                label: "Sécurité sociale et autres organismes sociaux",
                accounts: [
                    {
                        number: 431,
                        label: "Sécurité sociale",
                        accounts: []
                    },
                    {
                        number: 437,
                        label: "Autres organismes sociaux",
                        accounts: []
                    },
                    {
                        number: 438,
                        label: "Organismes sociaux - Charges à payer et produits à recevoir",
                        accounts: [
                            {
                                number: 4382,
                                label: "Charges sociales sur congés à payer",
                                accounts: []
                            },
                            {
                                number: 4386,
                                label: "Autres charges à payer",
                                accounts: []
                            },
                            {
                                number: 4387,
                                label: "Produits à recevoir",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 44,
                label: "État et autres collectivités publiques",
                accounts: [
                    {
                        number: 441,
                        label: "État - Subventions à recevoir",
                        accounts: [
                            {
                                number: 4411,
                                label: "Subventions d'investissement",
                                accounts: []
                            },
                            {
                                number: 4417,
                                label: "Subventions d'exploitation",
                                accounts: []
                            },
                            {
                                number: 4418,
                                label: "Subventions d'équilibre",
                                accounts: []
                            },
                            {
                                number: 4419,
                                label: "Avances sur subventions",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 442,
                        label: "Contributions, impôts et taxes recouvrés pour le compte de l'État",
                        accounts: [
                            {
                                number: 4421,
                                label: "Prélèvements à la source (Impôt sur le revenu)",
                                accounts: []
                            },
                            {
                                number: 4422,
                                label: "Prélèvements forfaitaires non libératoires",
                                accounts: []
                            },
                            {
                                number: 4423,
                                label: "Retenues et prélèvements sur les distributions",
                                accounts: []
                            },
                            {
                                number: 4424,
                                label: "Obligataires",
                                accounts: []
                            },
                            {
                                number: 4425,
                                label: "Associés",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 443,
                        label: "Opérations particulières avec l'État les collectivités publiques, les organismes internationaux",
                        accounts: [
                            {
                                number: 4431,
                                label: "Créances sur l'État résultant de la suppression de la règle du décalage d'un mois en matière de TVA",
                                accounts: []
                            },
                            {
                                number: 4438,
                                label: "Intérêts courus sur créances figurant au 4431",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 444,
                        label: "État - Impôts sur les bénéfices",
                        accounts: []
                    },
                    {
                        number: 445,
                        label: "État - Taxes sur le chiffre d'affaires",
                        accounts: [
                            {
                                number: 4452,
                                label: "TVA due intracommunautaire",
                                accounts: []
                            },
                            {
                                number: 4455,
                                label: "Taxes sur le chiffre d'affaires à décaisser",
                                accounts: [
                                    {
                                        number: 44551,
                                        label: "TVA à décaisser",
                                        accounts: []
                                    },
                                    {
                                        number: 44558,
                                        label: "Taxes assimilées à la TVA",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 4456,
                                label: "Taxes sur le chiffre d'affaires déductibles",
                                accounts: [
                                    {
                                        number: 44562,
                                        label: "TVA sur immobilisations",
                                        accounts: []
                                    },
                                    {
                                        number: 44563,
                                        label: "TVA transférée par d'autres entreprises",
                                        accounts: []
                                    },
                                    {
                                        number: 44566,
                                        label: "TVA sur autres biens et services",
                                        accounts: []
                                    },
                                    {
                                        number: 44567,
                                        label: "Crédit de TVA à reporter",
                                        accounts: []
                                    },
                                    {
                                        number: 44568,
                                        label: "Taxes assimilées à la TVA",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 4457,
                                label: "Taxes sur le chiffre d'affaires collectées par l'entreprise",
                                accounts: [
                                    {
                                        number: 44571,
                                        label: "TVA collectée",
                                        accounts: []
                                    },
                                    {
                                        number: 44578,
                                        label: "Taxes assimilées à la TVA",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 4458,
                                label: "Taxes sur le chiffre d'affaires à régulariser ou en attente",
                                accounts: [
                                    {
                                        number: 44581,
                                        label: "Acomptes - Régime simplifié d'imposition",
                                        accounts: []
                                    },
                                    {
                                        number: 44582,
                                        label: "Acomptes - Régime de forfait",
                                        accounts: []
                                    },
                                    {
                                        number: 44583,
                                        label: "Remboursement de taxes sur le chiffre d'affaires demandé",
                                        accounts: []
                                    },
                                    {
                                        number: 44584,
                                        label: "TVA récupérée d'avance",
                                        accounts: []
                                    },
                                    {
                                        number: 44586,
                                        label: "Taxes sur le chiffre d'affaires sur factures non parvenues",
                                        accounts: []
                                    },
                                    {
                                        number: 44587,
                                        label: "Taxes sur le chiffre d'affaires sur factures à établir",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 446,
                        label: "Obligations cautionnées",
                        accounts: []
                    },
                    {
                        number: 447,
                        label: "Autres impôts, taxes et versements assimilés",
                        accounts: []
                    },
                    {
                        number: 448,
                        label: "État - Charges à payer et produits à recevoir",
                        accounts: [
                            {
                                number: 4482,
                                label: "Charges fiscales sur congés à payer",
                                accounts: []
                            },
                            {
                                number: 4486,
                                label: "Charges à payer",
                                accounts: []
                            },
                            {
                                number: 4487,
                                label: "Produits à recevoir",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 449,
                        label: "Quotas d'émission à acquérir",
                        accounts: []
                    }
                ]
            },
            {
                number: 45,
                label: "Groupe et associés",
                accounts: [
                    {
                        number: 451,
                        label: "Groupe",
                        accounts: []
                    },
                    {
                        number: 455,
                        label: "Associés - Comptes courants",
                        accounts: [
                            {
                                number: 4551,
                                label: "Principal",
                                accounts: []
                            },
                            {
                                number: 4558,
                                label: "Intérêts courus",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 456,
                        label: "Associés - Opérations sur le capital",
                        accounts: [
                            {
                                number: 4561,
                                label: "Associés - Comptes d'apport en société",
                                accounts: [
                                    {
                                        number: 45611,
                                        label: "Apports en nature",
                                        accounts: []
                                    },
                                    {
                                        number: 45615,
                                        label: "Apports en numéraire",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 4562,
                                label: "Apporteurs - Capital appelé, non versé",
                                accounts: [
                                    {
                                        number: 45621,
                                        label: "Actionnaires - Capital souscrit et appelé, non versé",
                                        accounts: []
                                    },
                                    {
                                        number: 45625,
                                        label: "Associés - Capital appelé, non versé",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 4563,
                                label: "Associés - Versements reçus sur augmentation de capital",
                                accounts: []
                            },
                            {
                                number: 4564,
                                label: "Associés - Versements anticipés",
                                accounts: []
                            },
                            {
                                number: 4566,
                                label: "Actionnaires défaillants",
                                accounts: []
                            },
                            {
                                number: 4567,
                                label: "Associés - Capital à rembourser",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 457,
                        label: "Associés - Dividendes à payer",
                        accounts: []
                    },
                    {
                        number: 458,
                        label: "Associés - Opérations faites en commun et en GIE",
                        accounts: [
                            {
                                number: 4581,
                                label: "Opérations courantes",
                                accounts: []
                            },
                            {
                                number: 4588,
                                label: "Intérêts courus",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 46,
                label: "Débiteurs divers et créditeurs divers",
                accounts: [
                    {
                        number: 462,
                        label: "Créances sur cessions d'immobilisations",
                        accounts: []
                    },
                    {
                        number: 464,
                        label: "Dettes sur acquisitions de valeurs mobilières de placement",
                        accounts: []
                    },
                    {
                        number: 465,
                        label: "Créances sur cessions de valeurs mobilières de placement",
                        accounts: []
                    },
                    {
                        number: 467,
                        label: "Autres comptes débiteurs ou créditeurs",
                        accounts: []
                    },
                    {
                        number: 468,
                        label: "Divers - Charges à payer et produits à recevoir",
                        accounts: [
                            {
                                number: 4686,
                                label: "Charges à payer",
                                accounts: []
                            },
                            {
                                number: 4687,
                                label: "Produits à recevoir",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 47,
                label: "Comptes transitoires ou d'attente",
                accounts: [
                    {
                        number: 471,
                        label: "Comptes d'attente",
                        accounts: []
                    },
                    {
                        number: 472,
                        label: "Comptes d'attente",
                        accounts: []
                    },
                    {
                        number: 473,
                        label: "Comptes d'attente",
                        accounts: []
                    },
                    {
                        number: 474,
                        label: "Différences d'évaluation de jetons sur des passifs",
                        accounts: [
                            {
                                number: 4746,
                                label: "Différence d'évaluation de jetons sur des passifs - Actif",
                                accounts: []
                            },
                            {
                                number: 4747,
                                label: "Différence d'évaluation de jetons sur des passifs - Passif",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 475,
                        label: "Comptes d'attente",
                        accounts: []
                    },
                    {
                        number: 476,
                        label: "Différence de conversion - Actif",
                        accounts: [
                            {
                                number: 4761,
                                label: "Diminution des créances",
                                accounts: []
                            },
                            {
                                number: 4762,
                                label: "Augmentation des dettes",
                                accounts: []
                            },
                            {
                                number: 4768,
                                label: "Différences compensées par couverture de change",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 477,
                        label: "Différences de conversion - Passif",
                        accounts: [
                            {
                                number: 4771,
                                label: "Augmentation des créances",
                                accounts: []
                            },
                            {
                                number: 4772,
                                label: "Diminution des dettes",
                                accounts: []
                            },
                            {
                                number: 4778,
                                label: "Différences compensées par couverture de change",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 478,
                        label: "Autres comptes transitoires",
                        accounts: [
                            {
                                number: 4786,
                                label: "Différences d'évaluation - Actif",
                                accounts: [
                                    {
                                        number: 47861,
                                        label: "Différences d'évaluation sur instruments financier à terme - Actif",
                                        accounts: []
                                    },
                                    {
                                        number: 47862,
                                        label: "Différences d'évaluation sur jetons détenus - Actif",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 4787,
                                label: "Différences d'évaluation - Passif",
                                accounts: [
                                    {
                                        number: 47871,
                                        label: "Différences d'évaluation sur instruments financier à terme - Passif",
                                        accounts: []
                                    },
                                    {
                                        number: 47872,
                                        label: "Différences d'évaluation sur jetons détenus - Passif",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                number: 48,
                label: "Comptes de régularisation",
                accounts: [
                    {
                        number: 481,
                        label: "Charges à répartir sur plusieurs exercices",
                        accounts: [
                            {
                                number: 4811,
                                label: "Charges différées",
                                accounts: []
                            },
                            {
                                number: 4812,
                                label: "Frais d'acquisition des immobilisations",
                                accounts: []
                            },
                            {
                                number: 4816,
                                label: "Frais d'émission des emprunts",
                                accounts: []
                            },
                            {
                                number: 4818,
                                label: "Charges à étaler",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 486,
                        label: "Charges constatées d'avance",
                        accounts: []
                    },
                    {
                        number: 487,
                        label: "Produits constatés d'avance",
                        accounts: [
                            {
                                number: 4871,
                                label: "Produits constatés d'avance sur jetons émis",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 488,
                        label: "Comptes de répartition périodique des charges et des produits",
                        accounts: [
                            {
                                number: 4886,
                                label: "Charges",
                                accounts: []
                            },
                            {
                                number: 4887,
                                label: "Produits",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 489,
                        label: "Quotas d'émission alloués par l'État",
                        accounts: []
                    }
                ]
            },
            {
                number: 49,
                label: "Dépréciations des comptes de tiers",
                accounts: [
                    {
                        number: 491,
                        label: "Provisions pour dépréciations des comptes de clients",
                        accounts: []
                    },
                    {
                        number: 495,
                        label: "Provisions pour dépréciations des comptes du groupe et des associés",
                        accounts: [
                            {
                                number: 4951,
                                label: "Comptes du groupe",
                                accounts: []
                            },
                            {
                                number: 4955,
                                label: "Comptes courants des associés",
                                accounts: []
                            },
                            {
                                number: 4958,
                                label: "Opérations faites en commun et en GIE",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 496,
                        label: "Provisions pour dépréciations des comptes de débiteurs divers",
                        accounts: [
                            {
                                number: 4962,
                                label: "Créances sur cessions d'immobilisations",
                                accounts: []
                            },
                            {
                                number: 4965,
                                label: "Créances sur cessions de valeurs mobilières de placement",
                                accounts: []
                            },
                            {
                                number: 4967,
                                label: "Autres comptes débiteurs",
                                accounts: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        number: 5,
        label: "Financiers",
        accounts: [
            {
                number: 50,
                label: "Valeurs mobilières de placement",
                accounts: [
                    {
                        number: 501,
                        label: "Parts dans des entreprises liées",
                        accounts: []
                    },
                    {
                        number: 502,
                        label: "Actions propres",
                        accounts: [
                            {
                                number: 5021,
                                label: "Actions destinées à être attribuées aux employés et affectées à des plans déterminés",
                                accounts: []
                            },
                            {
                                number: 5022,
                                label: "Actions disponibles pour être attribuées aux employés ou pour la régularisation des cours de bourse",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 503,
                        label: "Actions",
                        accounts: [
                            {
                                number: 5031,
                                label: "Titres cotés",
                                accounts: []
                            },
                            {
                                number: 5035,
                                label: "Titres non cotés",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 504,
                        label: "Autres titres conférant un droit de propriété",
                        accounts: []
                    },
                    {
                        number: 505,
                        label: "Obligations et bons émis par la société et rachetés par elle",
                        accounts: []
                    },
                    {
                        number: 506,
                        label: "Obligations",
                        accounts: [
                            {
                                number: 5061,
                                label: "Titres cotés",
                                accounts: []
                            },
                            {
                                number: 5065,
                                label: "Titres non cotés",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 507,
                        label: "Bons du Trésor et bons de caisse à court terme",
                        accounts: []
                    },
                    {
                        number: 508,
                        label: "Autres valeurs mobilières de placement et autres créances assimilées",
                        accounts: [
                            {
                                number: 5081,
                                label: "Autres valeurs mobilières",
                                accounts: []
                            },
                            {
                                number: 5082,
                                label: "Bons de souscription",
                                accounts: []
                            },
                            {
                                number: 5088,
                                label: "Intérêts courus sur obligations, bons et valeurs assimilés",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 509,
                        label: "Versements restant à effectuer sur valeurs mobilières de placement non libérées",
                        accounts: []
                    }
                ]
            },
            {
                number: 51,
                label: "Banques, établissements financiers et assimilés",
                accounts: [
                    {
                        number: 511,
                        label: "Valeurs à l'encaissement",
                        accounts: [
                            {
                                number: 5111,
                                label: "Coupons échus à l'encaissement",
                                accounts: []
                            },
                            {
                                number: 5112,
                                label: "Chèques à encaisser",
                                accounts: []
                            },
                            {
                                number: 5113,
                                label: "Effets à l'encaissement",
                                accounts: []
                            },
                            {
                                number: 5114,
                                label: "Effets à l'escompte",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 512,
                        label: "Banques",
                        accounts: [
                            {
                                number: 5121,
                                label: "Comptes en euros (monnaie nationale)",
                                accounts: []
                            },
                            {
                                number: 5124,
                                label: "Comptes en devises",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 514,
                        label: "Chèques postaux",
                        accounts: []
                    },
                    {
                        number: 515,
                        label: "Caisses du Trésor et des établissements publics",
                        accounts: []
                    },
                    {
                        number: 516,
                        label: "Sociétés de bourse",
                        accounts: []
                    },
                    {
                        number: 517,
                        label: "Autres organismes financiers",
                        accounts: []
                    },
                    {
                        number: 518,
                        label: "Intérêts courus",
                        accounts: [
                            {
                                number: 5181,
                                label: "Intérêts courus à payer",
                                accounts: []
                            },
                            {
                                number: 5188,
                                label: "Intérêts courus à recevoir",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 519,
                        label: "Concours bancaires courants",
                        accounts: [
                            {
                                number: 5191,
                                label: "Crédit de mobilisation de créances commerciales",
                                accounts: []
                            },
                            {
                                number: 5193,
                                label: "Mobilisation de créances nées à l'étranger",
                                accounts: []
                            },
                            {
                                number: 5198,
                                label: "Intérêts courus sur concours bancaires courants",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 52,
                label: "Instruments financiers à terme et jetons détenus",
                accounts: [
                    {
                        number: 521,
                        label: "Instruments financiers à terme",
                        accounts: []
                    },
                    {
                        number: 522,
                        label: "Jetons détenus",
                        accounts: []
                    },
                    {
                        number: 523,
                        label: "Jetons auto-détenus",
                        accounts: []
                    },
                    {
                        number: 524,
                        label: "Jetons empruntés",
                        accounts: []
                    }
                ]
            },
            {
                number: 53,
                label: "Caisse",
                accounts: [
                    {
                        number: 531,
                        label: "Caisse siège social",
                        accounts: [
                            {
                                number: 5311,
                                label: "Caisse en euros (monnaie nationale)",
                                accounts: []
                            },
                            {
                                number: 5314,
                                label: "Caisse en devises",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 532,
                        label: "Caisse succursale (ou usine) A",
                        accounts: []
                    },
                    {
                        number: 533,
                        label: "Caisse succursale (ou usine) B",
                        accounts: []
                    }
                ]
            },
            {
                number: 54,
                label: "Régies d'avance et accréditifs",
                accounts: []
            },
            {
                number: 58,
                label: "Virements internes",
                accounts: [
                    {
                        number: 580,
                        label: "Virement internes",
                        accounts: []
                    }
                ]
            },
            {
                number: 59,
                label: "Provisions pour dépréciations des comptes financiers",
                accounts: [
                    {
                        number: 590,
                        label: "Provisions pour dépréciations des valeurs mobilières de placement",
                        accounts: [
                            {
                                number: 5903,
                                label: "Actions",
                                accounts: []
                            },
                            {
                                number: 5904,
                                label: "Autres titres conférant un droit de propriété",
                                accounts: []
                            },
                            {
                                number: 5906,
                                label: "Obligations",
                                accounts: []
                            },
                            {
                                number: 5908,
                                label: "Autres valeurs mobilières de placement et créances assimilées",
                                accounts: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        number: 6,
        label: "Charges",
        accounts: [
            {
                number: 60,
                label: "Achats (sauf 603)",
                accounts: [
                    {
                        number: 601,
                        label: "Achats stockés - Matières premières (et fournitures)",
                        accounts: [
                            {
                                number: 6011,
                                label: "Matières (ou groupe) A",
                                accounts: []
                            },
                            {
                                number: 6012,
                                label: "Matières (ou groupe) B",
                                accounts: []
                            },
                            {
                                number: 6017,
                                label: "Fournitures A, B, C, ...",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 602,
                        label: "Achats stockés - Autres approvisionnements",
                        accounts: [
                            {
                                number: 6021,
                                label: "Matières consommables",
                                accounts: [
                                    {
                                        number: 60211,
                                        label: "Matières (ou groupe) C",
                                        accounts: []
                                    },
                                    {
                                        number: 60212,
                                        label: "Matières (ou groupe) D",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 6022,
                                label: "Fournitures consommables",
                                accounts: [
                                    {
                                        number: 60221,
                                        label: "Combustibles",
                                        accounts: []
                                    },
                                    {
                                        number: 60222,
                                        label: "Produits d'entretien",
                                        accounts: []
                                    },
                                    {
                                        number: 60223,
                                        label: "Fournitures d'atelier et d'usine",
                                        accounts: []
                                    },
                                    {
                                        number: 60224,
                                        label: "Fournitures de magasin",
                                        accounts: []
                                    },
                                    {
                                        number: 60225,
                                        label: "Fourniture de bureau",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 6026,
                                label: "Emballages",
                                accounts: [
                                    {
                                        number: 60261,
                                        label: "Emballages perdus",
                                        accounts: []
                                    },
                                    {
                                        number: 60265,
                                        label: "Emballages récupérables non identifiables",
                                        accounts: []
                                    },
                                    {
                                        number: 60267,
                                        label: "Emballages à usage mixte",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 603,
                        label: "Variations des stocks (approvisionnements et marchandises)",
                        accounts: [
                            {
                                number: 6031,
                                label: "Variation des stocks de matières premières (et fournitures)",
                                accounts: []
                            },
                            {
                                number: 6032,
                                label: "Variation des stocks des autres approvisionnements",
                                accounts: []
                            },
                            {
                                number: 6037,
                                label: "Variation des stocks de marchandises",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 604,
                        label: "Achats d'études et prestations de services",
                        accounts: []
                    },
                    {
                        number: 605,
                        label: "Achats de matériel, équipements et travaux",
                        accounts: []
                    },
                    {
                        number: 606,
                        label: "Achats non stockés de matière et fournitures",
                        accounts: [
                            {
                                number: 6061,
                                label: "Fournitures non stockables (eau, énergie, …)",
                                accounts: []
                            },
                            {
                                number: 6063,
                                label: "Fournitures d'entretien et de petit équipement",
                                accounts: []
                            },
                            {
                                number: 6064,
                                label: "Fournitures administratives",
                                accounts: []
                            },
                            {
                                number: 6068,
                                label: "Autres matières et fournitures",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 607,
                        label: "Achats de marchandises",
                        accounts: [
                            {
                                number: 6071,
                                label: "Marchandise (ou groupe) A",
                                accounts: []
                            },
                            {
                                number: 6072,
                                label: "Marchandise (ou groupe) B",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 608,
                        label: "Récapitulation des frais accessoires incorporés aux achats",
                        accounts: []
                    },
                    {
                        number: 609,
                        label: "Rabais, remises et ristournes obtenus sur achats",
                        accounts: [
                            {
                                number: 6091,
                                label: "de matières premières (et fournitures)",
                                accounts: []
                            },
                            {
                                number: 6092,
                                label: "d'autres approvisionnements stockés",
                                accounts: []
                            },
                            {
                                number: 6094,
                                label: "d'études et prestations de services",
                                accounts: []
                            },
                            {
                                number: 6095,
                                label: "de matériel, équipements et travaux",
                                accounts: []
                            },
                            {
                                number: 6096,
                                label: "d'approvisionnements non stockés",
                                accounts: []
                            },
                            {
                                number: 6097,
                                label: "de marchandises",
                                accounts: []
                            },
                            {
                                number: 6098,
                                label: "Rabais, remises et ristournes non affectés",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 61,
                label: "Services extérieurs",
                accounts: [
                    {
                        number: 611,
                        label: "Sous-traitance générale",
                        accounts: []
                    },
                    {
                        number: 612,
                        label: "Redevances de crédit-bail",
                        accounts: [
                            {
                                number: 6122,
                                label: "Crédit-bail mobilier",
                                accounts: []
                            },
                            {
                                number: 6125,
                                label: "Crédit-bail immobilier",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 613,
                        label: "Locations",
                        accounts: [
                            {
                                number: 6132,
                                label: "Locations immobilières",
                                accounts: []
                            },
                            {
                                number: 6135,
                                label: "Locations mobilières",
                                accounts: []
                            },
                            {
                                number: 6136,
                                label: "Malis sur emballages",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 614,
                        label: "Charges locatives et de copropriété",
                        accounts: []
                    },
                    {
                        number: 615,
                        label: "Entretien et réparations",
                        accounts: [
                            {
                                number: 6152,
                                label: "sur biens immobiliers",
                                accounts: []
                            },
                            {
                                number: 6155,
                                label: "sur biens mobiliers",
                                accounts: []
                            },
                            {
                                number: 6156,
                                label: "Maintenance",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 616,
                        label: "Primes d'assurances",
                        accounts: [
                            {
                                number: 6161,
                                label: "Multirisques",
                                accounts: []
                            },
                            {
                                number: 6162,
                                label: "Assurance obligatoire dommage construction",
                                accounts: []
                            },
                            {
                                number: 6163,
                                label: "Assurance transport",
                                accounts: [
                                    {
                                        number: 61636,
                                        label: "sur achats",
                                        accounts: []
                                    },
                                    {
                                        number: 61637,
                                        label: "sur ventes",
                                        accounts: []
                                    },
                                    {
                                        number: 61638,
                                        label: "sur autres biens",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 6164,
                                label: "Risques d'exploitation",
                                accounts: []
                            },
                            {
                                number: 6165,
                                label: "Insolvabilité clients",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 617,
                        label: "Études et recherches",
                        accounts: []
                    },
                    {
                        number: 618,
                        label: "Divers",
                        accounts: [
                            {
                                number: 6181,
                                label: "Documentation générale",
                                accounts: []
                            },
                            {
                                number: 6183,
                                label: "Documentation technique",
                                accounts: []
                            },
                            {
                                number: 6185,
                                label: "Frais de colloques, séminaires, conférences",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 619,
                        label: "Rabais, remises et ristournes obtenus sur services extérieurs",
                        accounts: []
                    }
                ]
            },
            {
                number: 62,
                label: "Autres services extérieurs",
                accounts: [
                    {
                        number: 621,
                        label: "Personnel extérieur à l'entreprise",
                        accounts: [
                            {
                                number: 6211,
                                label: "Personnel intérimaire",
                                accounts: []
                            },
                            {
                                number: 6214,
                                label: "Personnel détaché ou prêté à l'entreprise",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 622,
                        label: "Rémunérations d'intermédiaires et honoraires",
                        accounts: [
                            {
                                number: 6221,
                                label: "Commissions et courtages sur achats",
                                accounts: []
                            },
                            {
                                number: 6222,
                                label: "Commissions et courtages sur ventes",
                                accounts: []
                            },
                            {
                                number: 6224,
                                label: "Rémunérations des transitaires",
                                accounts: []
                            },
                            {
                                number: 6225,
                                label: "Rémunérations d'affacturage",
                                accounts: []
                            },
                            {
                                number: 6226,
                                label: "Honoraires",
                                accounts: []
                            },
                            {
                                number: 6227,
                                label: "Frais d'actes et de contentieux",
                                accounts: []
                            },
                            {
                                number: 6228,
                                label: "Divers",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 623,
                        label: "Publicité, publications, relations publiques",
                        accounts: [
                            {
                                number: 6231,
                                label: "Annonces et insertions",
                                accounts: []
                            },
                            {
                                number: 6232,
                                label: "Échantillons",
                                accounts: []
                            },
                            {
                                number: 6233,
                                label: "Foires et expositions",
                                accounts: []
                            },
                            {
                                number: 6234,
                                label: "Cadeaux à la clientèle",
                                accounts: []
                            },
                            {
                                number: 6235,
                                label: "Primes",
                                accounts: []
                            },
                            {
                                number: 6236,
                                label: "Catalogues et imprimés",
                                accounts: []
                            },
                            {
                                number: 6237,
                                label: "Publications",
                                accounts: []
                            },
                            {
                                number: 6238,
                                label: "Divers (pourboires, dons courants, ...)",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 624,
                        label: "Transports de biens et transports collectifs du personnel",
                        accounts: [
                            {
                                number: 6241,
                                label: "Transports sur achats",
                                accounts: []
                            },
                            {
                                number: 6242,
                                label: "Transports sur ventes",
                                accounts: []
                            },
                            {
                                number: 6243,
                                label: "Transports entre établissements ou chantiers",
                                accounts: []
                            },
                            {
                                number: 6244,
                                label: "Transports administratifs",
                                accounts: []
                            },
                            {
                                number: 6247,
                                label: "Transports collectifs du personnel",
                                accounts: []
                            },
                            {
                                number: 6248,
                                label: "Divers",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 625,
                        label: "Déplacements, missions et réceptions",
                        accounts: [
                            {
                                number: 6251,
                                label: "Voyages et déplacements",
                                accounts: []
                            },
                            {
                                number: 6255,
                                label: "Frais de déménagement",
                                accounts: []
                            },
                            {
                                number: 6256,
                                label: "Missions",
                                accounts: []
                            },
                            {
                                number: 6257,
                                label: "Réceptions",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 626,
                        label: "Frais postaux et de télécommunications",
                        accounts: []
                    },
                    {
                        number: 627,
                        label: "Services bancaires et assimilés",
                        accounts: [
                            {
                                number: 6271,
                                label: "Frais sur titres (achat, vente, garde)",
                                accounts: []
                            },
                            {
                                number: 6272,
                                label: "Commissions et frais sur émission d'emprunts",
                                accounts: []
                            },
                            {
                                number: 6275,
                                label: "Frais sur effets",
                                accounts: []
                            },
                            {
                                number: 6276,
                                label: "Location de coffres",
                                accounts: []
                            },
                            {
                                number: 6278,
                                label: "Autres frais et commissions sur prestations de services",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 628,
                        label: "Divers",
                        accounts: [
                            {
                                number: 6281,
                                label: "Concours divers (cotisations, ...)",
                                accounts: []
                            },
                            {
                                number: 6284,
                                label: "Frais de recrutement de personnel",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 629,
                        label: "Rabais, remises et ristournes obtenus sur autres services extérieurs",
                        accounts: []
                    }
                ]
            },
            {
                number: 63,
                label: "Impôts, taxes et versements assimilés",
                accounts: [
                    {
                        number: 631,
                        label: "Impôts, taxes et versements assimilés sur rémunérations (administrations des impôts)",
                        accounts: [
                            {
                                number: 6311,
                                label: "Taxe sur les salaires",
                                accounts: []
                            },
                            {
                                number: 6312,
                                label: "Taxe d'apprentissage",
                                accounts: []
                            },
                            {
                                number: 6313,
                                label: "Participation des employeurs à la formation professionnelle continue",
                                accounts: []
                            },
                            {
                                number: 6314,
                                label: "Cotisation pour défaut d'investissement obligatoire dans la construction",
                                accounts: []
                            },
                            {
                                number: 6318,
                                label: "Autres",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 633,
                        label: "Impôts, taxes et versements assimilés sur rémunérations (autres organismes)",
                        accounts: [
                            {
                                number: 6331,
                                label: "Versement de transport",
                                accounts: []
                            },
                            {
                                number: 6332,
                                label: "Allocations logement",
                                accounts: []
                            },
                            {
                                number: 6333,
                                label: "Contribution unique des employeurs à la formation professionnelle",
                                accounts: []
                            },
                            {
                                number: 6334,
                                label: "Participation des employeurs à l'effort de construction",
                                accounts: []
                            },
                            {
                                number: 6335,
                                label: "Versements libératoires ouvrant droit à l'exonération de la taxe d'apprentissage",
                                accounts: []
                            },
                            {
                                number: 6338,
                                label: "Autres",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 635,
                        label: "Autres impôts, taxes et versements assimilés (administrations des impôts)",
                        accounts: [
                            {
                                number: 6351,
                                label: "Impôts directs (sauf impôts sur les bénéfices)",
                                accounts: [
                                    {
                                        number: 63511,
                                        label: "Contribution économique territoriale",
                                        accounts: []
                                    },
                                    {
                                        number: 63512,
                                        label: "Taxes foncières",
                                        accounts: []
                                    },
                                    {
                                        number: 63513,
                                        label: "Autres impôts locaux",
                                        accounts: []
                                    },
                                    {
                                        number: 63514,
                                        label: "Taxe sur les véhicules des sociétés",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 6352,
                                label: "Taxe sur le chiffre d'affaires non récupérables",
                                accounts: []
                            },
                            {
                                number: 6353,
                                label: "Impôts indirects",
                                accounts: []
                            },
                            {
                                number: 6354,
                                label: "Droits d'enregistrement et de timbre",
                                accounts: [
                                    {
                                        number: 63541,
                                        label: "Droits de mutation",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 6358,
                                label: "Autres droits",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 637,
                        label: "Autres impôts, taxes et versements assimilés (autres organismes)",
                        accounts: [
                            {
                                number: 6371,
                                label: "Contribution sociale de solidarité à la charge des sociétés",
                                accounts: []
                            },
                            {
                                number: 6372,
                                label: "Taxes perçues par les organismes publics internationaux",
                                accounts: []
                            },
                            {
                                number: 6374,
                                label: "Impôts et taxes exigibles à l'Étranger",
                                accounts: []
                            },
                            {
                                number: 6378,
                                label: "Taxes diverses",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 64,
                label: "Charges de personnel",
                accounts: [
                    {
                        number: 641,
                        label: "Rémunérations du personnel",
                        accounts: [
                            {
                                number: 6411,
                                label: "Salaires, appointements",
                                accounts: []
                            },
                            {
                                number: 6412,
                                label: "Congés payés",
                                accounts: []
                            },
                            {
                                number: 6413,
                                label: "Primes et gratifications",
                                accounts: []
                            },
                            {
                                number: 6414,
                                label: "Indemnités et avantages divers",
                                accounts: []
                            },
                            {
                                number: 6415,
                                label: "Supplément familial",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 644,
                        label: "Rémunération du travail de l'exploitant",
                        accounts: []
                    },
                    {
                        number: 645,
                        label: "Charges de sécurité sociale et de prévoyance",
                        accounts: [
                            {
                                number: 6451,
                                label: "Cotisations à l'URSSAF",
                                accounts: []
                            },
                            {
                                number: 6452,
                                label: "Cotisations aux mutuelles",
                                accounts: []
                            },
                            {
                                number: 6453,
                                label: "Cotisations aux caisses de retraites",
                                accounts: []
                            },
                            {
                                number: 6454,
                                label: "Cotisations aux ASSEDIC",
                                accounts: []
                            },
                            {
                                number: 6458,
                                label: "Cotisations aux autres organismes sociaux",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 646,
                        label: "Cotisations sociales personnelles de l'exploitant",
                        accounts: []
                    },
                    {
                        number: 647,
                        label: "Autres charges sociales",
                        accounts: [
                            {
                                number: 6471,
                                label: "Prestations directes",
                                accounts: []
                            },
                            {
                                number: 6472,
                                label: "Versements aux comités d'entreprise et d'établissement",
                                accounts: []
                            },
                            {
                                number: 6473,
                                label: "Versements aux comités d'hygiène et de sécurité",
                                accounts: []
                            },
                            {
                                number: 6474,
                                label: "Versements aux autres œuvres sociales",
                                accounts: []
                            },
                            {
                                number: 6475,
                                label: "Médecine du travail, pharmacie",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 648,
                        label: "Autres charges de personnel",
                        accounts: []
                    }
                ]
            },
            {
                number: 65,
                label: "Autres charges de gestion courante",
                accounts: [
                    {
                        number: 651,
                        label: "Redevances pour concessions, brevets, licences, marques, procédés, logiciels, droits et valeurs similaires",
                        accounts: [
                            {
                                number: 6511,
                                label: "Redevances pour concessions, brevets, licences, marques, procédés, logiciels",
                                accounts: []
                            },
                            {
                                number: 6516,
                                label: "Droits d'auteur et de reproduction",
                                accounts: []
                            },
                            {
                                number: 6518,
                                label: "Autres droits et valeurs similaires",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 653,
                        label: "Jetons de présence",
                        accounts: []
                    },
                    {
                        number: 654,
                        label: "Pertes sur créances irrécouvrables",
                        accounts: [
                            {
                                number: 6541,
                                label: "Créances de l'exercice",
                                accounts: []
                            },
                            {
                                number: 6544,
                                label: "Créances des exercices antérieurs",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 655,
                        label: "Quote-part de résultat sur opérations faites en commun",
                        accounts: [
                            {
                                number: 6551,
                                label: "Quote-part de bénéfice transférée (comptabilité du gérant)",
                                accounts: []
                            },
                            {
                                number: 6555,
                                label: "Quote-part de perte supportée (comptabilité des associés non gérants)",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 656,
                        label: "Pertes de change sur créances commerciales",
                        accounts: []
                    },
                    {
                        number: 658,
                        label: "Charges diverses de gestion courante",
                        accounts: []
                    }
                ]
            },
            {
                number: 66,
                label: "Charges financières",
                accounts: [
                    {
                        number: 661,
                        label: "Charges d'intérêts",
                        accounts: [
                            {
                                number: 6611,
                                label: "Intérêts des emprunts et dettes",
                                accounts: [
                                    {
                                        number: 66116,
                                        label: "des emprunts et dettes assimilées",
                                        accounts: []
                                    },
                                    {
                                        number: 66117,
                                        label: "des dettes rattachées à des participations",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 6612,
                                label: "Charges de la fiducie, résultat de la période",
                                accounts: []
                            },
                            {
                                number: 6615,
                                label: "Intérêts des comptes courants et des dépôts créditeurs",
                                accounts: []
                            },
                            {
                                number: 6616,
                                label: "Intérêts bancaires et sur opérations de financement (escompte,...)",
                                accounts: []
                            },
                            {
                                number: 6617,
                                label: "Intérêts des obligations cautionnées",
                                accounts: []
                            },
                            {
                                number: 6618,
                                label: "Intérêts des autres dettes",
                                accounts: [
                                    {
                                        number: 66181,
                                        label: "des dettes commerciales",
                                        accounts: []
                                    },
                                    {
                                        number: 66188,
                                        label: "des dettes diverses",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 664,
                        label: "Pertes sur créances liées à des participations",
                        accounts: []
                    },
                    {
                        number: 665,
                        label: "Éscomptes accordés",
                        accounts: []
                    },
                    {
                        number: 666,
                        label: "Pertes de change financières",
                        accounts: []
                    },
                    {
                        number: 667,
                        label: "Charges nettes sur cessions de valeurs mobilières de placement",
                        accounts: []
                    },
                    {
                        number: 668,
                        label: "Autres charges financières",
                        accounts: []
                    }
                ]
            },
            {
                number: 67,
                label: "Charges exceptionnelles",
                accounts: [
                    {
                        number: 671,
                        label: "Charges exceptionnelles sur opérations de gestion",
                        accounts: [
                            {
                                number: 6711,
                                label: "Pénalités sur marchés (et dédits payés sur achats et ventes)",
                                accounts: []
                            },
                            {
                                number: 6712,
                                label: "Pénalités, amendes fiscales et pénales",
                                accounts: []
                            },
                            {
                                number: 6713,
                                label: "Dons, libéralités",
                                accounts: []
                            },
                            {
                                number: 6714,
                                label: "Créances devenues irrécouvrables dans l'exercice",
                                accounts: []
                            },
                            {
                                number: 6715,
                                label: "Subventions accordées",
                                accounts: []
                            },
                            {
                                number: 6717,
                                label: "Rappel d'impôts (autres qu'impôts sur les bénéfices)",
                                accounts: []
                            },
                            {
                                number: 6718,
                                label: "Autres charges exceptionnelles sur opérations de gestion",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 672,
                        label: "(Compte à la disposition des entités pour enregistrer, en cours d'exercice, les charges sur exercices antérieurs)",
                        accounts: []
                    },
                    {
                        number: 674,
                        label: "Opérations de constitution ou liquidation des fiducies",
                        accounts: [
                            {
                                number: 6741,
                                label: "Opérations liées à la constitution de fiducie - Transfert des éléments",
                                accounts: []
                            },
                            {
                                number: 6742,
                                label: "Opérations liées à la liquidation de la fiducie",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 675,
                        label: "Valeurs comptables des éléments d'actif cédés",
                        accounts: [
                            {
                                number: 6751,
                                label: "Immobilisations incorporelles",
                                accounts: []
                            },
                            {
                                number: 6752,
                                label: "Immobilisations corporelles",
                                accounts: []
                            },
                            {
                                number: 6756,
                                label: "Immobilisations financières",
                                accounts: []
                            },
                            {
                                number: 6758,
                                label: "Autres éléments d'actif",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 678,
                        label: "Autres charges exceptionnelles",
                        accounts: [
                            {
                                number: 6781,
                                label: "Malis provenant de clauses d'indexation",
                                accounts: []
                            },
                            {
                                number: 6782,
                                label: "Lots",
                                accounts: []
                            },
                            {
                                number: 6783,
                                label: "Malis provenant du rachat par l'entreprise d'actions et obligations émises par elle-même",
                                accounts: []
                            },
                            {
                                number: 6788,
                                label: "Charges exceptionnelles diverses",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 68,
                label: "Dotations aux amortissements, aux dépréciations et aux provisions",
                accounts: [
                    {
                        number: 681,
                        label: "Dotations aux amortissements, aux dépréciations et aux provisions - Charges d'exploitation",
                        accounts: [
                            {
                                number: 6811,
                                label: "Dotations aux amortissements sur immobilisations incorporelles et corporelles",
                                accounts: [
                                    {
                                        number: 68111,
                                        label: "Immobilisations incorporelles",
                                        accounts: []
                                    },
                                    {
                                        number: 68112,
                                        label: "Immobilisations corporelles",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 6812,
                                label: "Dotations aux amortissements des charges d'exploitation à répartir",
                                accounts: []
                            },
                            {
                                number: 6815,
                                label: "Dotations aux provisions d'exploitation",
                                accounts: []
                            },
                            {
                                number: 6816,
                                label: "Dotations pour dépréciations des immobilisations incorporelles et corporelles",
                                accounts: [
                                    {
                                        number: 68161,
                                        label: "Immobilisations incorporelles",
                                        accounts: []
                                    },
                                    {
                                        number: 68162,
                                        label: "Immobilisations corporelles",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 6817,
                                label: "Dotations pour dépréciations des actifs circulants",
                                accounts: [
                                    {
                                        number: 68173,
                                        label: "Stocks et en-cours",
                                        accounts: []
                                    },
                                    {
                                        number: 68174,
                                        label: "Créances",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 686,
                        label: "Dotations aux amortissements, aux dépréciations et aux provisions - Charges financières",
                        accounts: [
                            {
                                number: 6861,
                                label: "Dotations aux amortissements des primes de remboursement des obligations",
                                accounts: []
                            },
                            {
                                number: 6865,
                                label: "Dotations aux provisions financières",
                                accounts: []
                            },
                            {
                                number: 6866,
                                label: "Dotations pour dépréciations des éléments financiers",
                                accounts: [
                                    {
                                        number: 68662,
                                        label: "Immobilisations financières",
                                        accounts: []
                                    },
                                    {
                                        number: 68665,
                                        label: "Valeurs mobilières de placement",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 6868,
                                label: "Autres dotations",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 687,
                        label: "Dotations aux amortissements, aux dépréciations et aux provisions - Charges exceptionnelles",
                        accounts: [
                            {
                                number: 6871,
                                label: "Dotations aux amortissements exceptionnels des immobilisations",
                                accounts: []
                            },
                            {
                                number: 6872,
                                label: "Dotations aux provisions réglementées (immobilisations)",
                                accounts: [
                                    {
                                        number: 68725,
                                        label: "Amortissements dérogatoires",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 6873,
                                label: "Dotations aux provisions réglementées (stocks)",
                                accounts: []
                            },
                            {
                                number: 6874,
                                label: "Dotations aux autres provisions réglementées",
                                accounts: []
                            },
                            {
                                number: 6875,
                                label: "Dotations aux provisions exceptionnelles",
                                accounts: []
                            },
                            {
                                number: 6876,
                                label: "Dotations pour dépréciations exceptionnelles",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 69,
                label: "Participation des salariés - Impôts sur les bénéfices et assimilés",
                accounts: [
                    {
                        number: 691,
                        label: "Participation des salariés aux résultats",
                        accounts: []
                    },
                    {
                        number: 695,
                        label: "Impôts sur les bénéfices",
                        accounts: [
                            {
                                number: 6951,
                                label: "Impôts dus en France",
                                accounts: []
                            },
                            {
                                number: 6952,
                                label: "Contribution additionnelle à l'impôt sur les bénéfices",
                                accounts: []
                            },
                            {
                                number: 6954,
                                label: "Impôts dus à l'étranger",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 696,
                        label: "Suppléments d'impôt sur les sociétés liés aux distributions",
                        accounts: []
                    },
                    {
                        number: 698,
                        label: "Intégration fiscale",
                        accounts: [
                            {
                                number: 6981,
                                label: "Intégration fiscale - Charges",
                                accounts: []
                            },
                            {
                                number: 6989,
                                label: "Intégration fiscale - Produits",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 699,
                        label: "Produits - Reports en arrière des déficits",
                        accounts: []
                    }
                ]
            }
        ]
    },
    {
        number: 7,
        label: "Produits",
        accounts: [
            {
                number: 70,
                label: "Ventes de produits fabriqués, prestations de services, marchandises",
                accounts: [
                    {
                        number: 701,
                        label: "Ventes de produits finis",
                        accounts: [
                            {
                                number: 7011,
                                label: "Produits finis (ou groupe) A",
                                accounts: []
                            },
                            {
                                number: 7012,
                                label: "Produits finis (ou groupe) B",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 702,
                        label: "Ventes de produits intermédiaires",
                        accounts: []
                    },
                    {
                        number: 703,
                        label: "Ventes de produits résiduels",
                        accounts: []
                    },
                    {
                        number: 704,
                        label: "Travaux",
                        accounts: [
                            {
                                number: 7041,
                                label: "Travaux de catégorie (ou activité) A",
                                accounts: []
                            },
                            {
                                number: 7042,
                                label: "Travaux de catégorie (ou activité) B",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 705,
                        label: "Études",
                        accounts: []
                    },
                    {
                        number: 706,
                        label: "Prestations de services",
                        accounts: []
                    },
                    {
                        number: 707,
                        label: "Ventes de marchandises",
                        accounts: [
                            {
                                number: 7071,
                                label: "Marchandises (ou groupe) A",
                                accounts: []
                            },
                            {
                                number: 7072,
                                label: "Marchandises (ou groupe) B",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 708,
                        label: "Produits des activités annexes",
                        accounts: [
                            {
                                number: 7081,
                                label: "Produits des services exploités dans l'intérêt du personnel",
                                accounts: []
                            },
                            {
                                number: 7082,
                                label: "Commissions et courtages",
                                accounts: []
                            },
                            {
                                number: 7083,
                                label: "Locations diverses",
                                accounts: []
                            },
                            {
                                number: 7084,
                                label: "Mise à disposition de personnel facturée",
                                accounts: []
                            },
                            {
                                number: 7085,
                                label: "Ports et frais accessoires facturés",
                                accounts: []
                            },
                            {
                                number: 7086,
                                label: "Bonis sur reprises d'emballages consignés",
                                accounts: []
                            },
                            {
                                number: 7087,
                                label: "Bonifications obtenues des clients et primes sur ventes",
                                accounts: []
                            },
                            {
                                number: 7088,
                                label: "Autres produits d'activités annexes (cessions d'approvisionnements, ...)",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 709,
                        label: "Rabais, remises et ristournes accordés par l'entreprise",
                        accounts: [
                            {
                                number: 7091,
                                label: "sur ventes de produits finis",
                                accounts: []
                            },
                            {
                                number: 7092,
                                label: "sur ventes de produits intermédiaires",
                                accounts: []
                            },
                            {
                                number: 7094,
                                label: "sur travaux",
                                accounts: []
                            },
                            {
                                number: 7095,
                                label: "sur études",
                                accounts: []
                            },
                            {
                                number: 7096,
                                label: "sur prestations de services",
                                accounts: []
                            },
                            {
                                number: 7097,
                                label: "sur ventes de marchandises",
                                accounts: []
                            },
                            {
                                number: 7098,
                                label: "sur produits des activités annexes",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 71,
                label: "Production stockée (ou déstockage)",
                accounts: []
            },
            {
                number: 713,
                label: "Variation des stocks (en-cours de production, produits)",
                accounts: [
                    {
                        number: 7133,
                        label: "Variation des en-cours de production de biens",
                        accounts: [
                            {
                                number: 71331,
                                label: "Produits en cours",
                                accounts: []
                            },
                            {
                                number: 71335,
                                label: "Travaux en cours",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 7134,
                        label: "Variation des en-cours de production de services",
                        accounts: [
                            {
                                number: 71341,
                                label: "Études en cours",
                                accounts: []
                            },
                            {
                                number: 71345,
                                label: "Prestations de services en cours",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 7135,
                        label: "Variation des stocks de produits",
                        accounts: [
                            {
                                number: 71351,
                                label: "Produits intermédiaires",
                                accounts: []
                            },
                            {
                                number: 71355,
                                label: "Produits finis",
                                accounts: []
                            },
                            {
                                number: 71358,
                                label: "Produits résiduels",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 72,
                label: "Production immobilisée",
                accounts: [
                    {
                        number: 721,
                        label: "Immobilisations incorporelles",
                        accounts: []
                    },
                    {
                        number: 722,
                        label: "Immobilisations corporelles",
                        accounts: []
                    }
                ]
            },
            {
                number: 74,
                label: "Subventions d'exploitation",
                accounts: []
            },
            {
                number: 75,
                label: "Autres produits de gestion courante",
                accounts: [
                    {
                        number: 751,
                        label: "Redevances pour concessions, brevets, licences, marques, procédés, logiciels, droits et valeurs similaires",
                        accounts: [
                            {
                                number: 7511,
                                label: "Redevances pour concessions, brevets, licences, marques, procédés, logiciels",
                                accounts: []
                            },
                            {
                                number: 7516,
                                label: "Droits d'auteur et de reproduction",
                                accounts: []
                            },
                            {
                                number: 7518,
                                label: "Autres droits et valeurs similaires",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 752,
                        label: "Revenus des immeubles non affectés à des activités professionnelles",
                        accounts: []
                    },
                    {
                        number: 753,
                        label: "Jetons de présence et rémunérations d'administrateurs, gérants",
                        accounts: []
                    },
                    {
                        number: 754,
                        label: "Ristournes perçues des coopératives (provenant des excédents)",
                        accounts: []
                    },
                    {
                        number: 755,
                        label: "Quote-parts de résultat sur opérations faites en commun",
                        accounts: [
                            {
                                number: 7551,
                                label: "Quote-part de perte transférée (comptabilité du gérant)",
                                accounts: []
                            },
                            {
                                number: 7555,
                                label: "Quote-part de bénéfice attribuée (comptabilité des associés non - gérants)",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 756,
                        label: "Gains de change sur créances commerciales",
                        accounts: []
                    },
                    {
                        number: 758,
                        label: "Produits divers de gestion courante",
                        accounts: []
                    }
                ]
            },
            {
                number: 76,
                label: "Produits financiers",
                accounts: [
                    {
                        number: 761,
                        label: "Produits de participations",
                        accounts: [
                            {
                                number: 7611,
                                label: "Revenus des titres de participation",
                                accounts: []
                            },
                            {
                                number: 7612,
                                label: "Produits de la fiducie, résultat de la période",
                                accounts: []
                            },
                            {
                                number: 7616,
                                label: "Revenus sur autres formes de participation",
                                accounts: []
                            },
                            {
                                number: 7617,
                                label: "Revenus des créances rattachées à des participations",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 762,
                        label: "Produits des autres immobilisations financières",
                        accounts: [
                            {
                                number: 7621,
                                label: "Revenus des titres immobilisés",
                                accounts: []
                            },
                            {
                                number: 7626,
                                label: "Revenus des prêts",
                                accounts: []
                            },
                            {
                                number: 7627,
                                label: "Revenus des créances immobilisées",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 763,
                        label: "Revenus des autres créances",
                        accounts: [
                            {
                                number: 7631,
                                label: "Revenus des créances commerciales",
                                accounts: []
                            },
                            {
                                number: 7638,
                                label: "Revenus des créances diverses",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 764,
                        label: "Revenus des valeurs mobilières de placement",
                        accounts: []
                    },
                    {
                        number: 765,
                        label: "Escomptes obtenus",
                        accounts: []
                    },
                    {
                        number: 766,
                        label: "Gains de change financiers",
                        accounts: []
                    },
                    {
                        number: 767,
                        label: "Produits nets sur cessions de valeurs mobilières de placement",
                        accounts: []
                    },
                    {
                        number: 768,
                        label: "Autres produits financiers",
                        accounts: []
                    }
                ]
            },
            {
                number: 77,
                label: "Produits exceptionnels",
                accounts: [
                    {
                        number: 771,
                        label: "Produits exceptionnels sur opérations de gestion",
                        accounts: [
                            {
                                number: 7711,
                                label: "Dédits et pénalités perçus sur achats et sur ventes",
                                accounts: []
                            },
                            {
                                number: 7713,
                                label: "Libéralités reçues",
                                accounts: []
                            },
                            {
                                number: 7714,
                                label: "Rentrées sur créances amorties",
                                accounts: []
                            },
                            {
                                number: 7715,
                                label: "Subventions d'équilibre",
                                accounts: []
                            },
                            {
                                number: 7717,
                                label: "Dégrèvements d'impôts autres qu'impôts sur les bénéfices",
                                accounts: []
                            },
                            {
                                number: 7718,
                                label: "Autres produits exceptionnels sur opérations de gestion",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 772,
                        label: "(Compte à la disposition des entités pour enregistrer, en cours d'exercice, les produits sur exercices antérieurs)",
                        accounts: []
                    },
                    {
                        number: 774,
                        label: "Opérations de constitution ou liquidation des fiducies",
                        accounts: [
                            {
                                number: 7741,
                                label: "Opérations liées à la constitution de fiducie - Transfert des éléments",
                                accounts: []
                            },
                            {
                                number: 7742,
                                label: "Opérations liées à la liquidation de la fiducie",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 775,
                        label: "Produits des cessions d'éléments d'actif",
                        accounts: [
                            {
                                number: 7751,
                                label: "Immobilisations incorporelles",
                                accounts: []
                            },
                            {
                                number: 7752,
                                label: "Immobilisations corporelles",
                                accounts: []
                            },
                            {
                                number: 7756,
                                label: "Immobilisations financières",
                                accounts: []
                            },
                            {
                                number: 7758,
                                label: "Autres éléments d'actif",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 777,
                        label: "Quote-part des subventions d'investissement virée au résultat de l'exercice",
                        accounts: []
                    },
                    {
                        number: 778,
                        label: "Autres produits exceptionnels",
                        accounts: [
                            {
                                number: 7781,
                                label: "Bonis provenant de clauses d'indexation",
                                accounts: []
                            },
                            {
                                number: 7782,
                                label: "Lots",
                                accounts: []
                            },
                            {
                                number: 7783,
                                label: "Bonis provenant du rachat par l'entreprise d'actions et d'obligations émises par elle-même",
                                accounts: []
                            },
                            {
                                number: 7788,
                                label: "Produits exceptionnels divers",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 78,
                label: "Reprises sur amortissements, dépréciations et provisions",
                accounts: [
                    {
                        number: 781,
                        label: "Reprises sur amortissements, dépréciations et provisions (à inscrire dans les produits d'exploitation)",
                        accounts: [
                            {
                                number: 7811,
                                label: "Reprises sur amortissements des immobilisations incorporelles et corporelles",
                                accounts: [
                                    {
                                        number: 78111,
                                        label: "Immobilisations incorporelles",
                                        accounts: []
                                    },
                                    {
                                        number: 78112,
                                        label: "Immobilisations corporelles",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 7815,
                                label: "Reprises sur provisions d'exploitation",
                                accounts: []
                            },
                            {
                                number: 7816,
                                label: "Reprises sur dépréciations des immobilisations incorporelles et corporelles",
                                accounts: [
                                    {
                                        number: 78161,
                                        label: "Immobilisations incorporelles",
                                        accounts: []
                                    },
                                    {
                                        number: 78162,
                                        label: "Immobilisations corporelles",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 7817,
                                label: "Reprises sur dépréciations des actifs circulants",
                                accounts: [
                                    {
                                        number: 78173,
                                        label: "Stocks et en-cours",
                                        accounts: []
                                    },
                                    {
                                        number: 78174,
                                        label: "Créances",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 786,
                        label: "Reprises sur provisions pour risques et dépréciations (à inscrire dans les produits financiers)",
                        accounts: [
                            {
                                number: 7865,
                                label: "Reprises sur provisions financières",
                                accounts: []
                            },
                            {
                                number: 7866,
                                label: "Reprises sur dépréciations des éléments financiers",
                                accounts: [
                                    {
                                        number: 78662,
                                        label: "Immobilisations financières",
                                        accounts: []
                                    },
                                    {
                                        number: 78665,
                                        label: "Valeurs mobilières de placements",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 787,
                        label: "Reprises sur provisions et dépréciations (à inscrire dans les produits exceptionnels)",
                        accounts: [
                            {
                                number: 7872,
                                label: "Reprises sur provisions réglementées (immobilisations)",
                                accounts: [
                                    {
                                        number: 78725,
                                        label: "Amortissements dérogatoires",
                                        accounts: []
                                    },
                                    {
                                        number: 78726,
                                        label: "Provision spéciale de réévaluation",
                                        accounts: []
                                    },
                                    {
                                        number: 78727,
                                        label: "Plus-values réinvesties",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 7873,
                                label: "Reprises sur provisions réglementées (stocks)",
                                accounts: []
                            },
                            {
                                number: 7874,
                                label: "Reprises sur autres provisions réglementées",
                                accounts: []
                            },
                            {
                                number: 7875,
                                label: "Reprises sur provisions exceptionnelles",
                                accounts: []
                            },
                            {
                                number: 7876,
                                label: "Reprises sur dépréciations exceptionnelles",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 79,
                label: "Transferts de charges",
                accounts: [
                    {
                        number: 791,
                        label: "Transferts de charges d'exploitation",
                        accounts: []
                    },
                    {
                        number: 796,
                        label: "Transferts de charges financières",
                        accounts: []
                    },
                    {
                        number: 797,
                        label: "Transferts de charges exceptionnelles",
                        accounts: []
                    }
                ]
            }
        ]
    },
    {
        number: 8,
        label: "Spéciaux",
        accounts: [
            {
                number: 80,
                label: "Engagements",
                accounts: [
                    {
                        number: 801,
                        label: "Engagements donnés par l'entité",
                        accounts: [
                            {
                                number: 8011,
                                label: "Avals, cautions, garanties",
                                accounts: []
                            },
                            {
                                number: 8014,
                                label: "Effets circulant sous l'endos de l'entité",
                                accounts: []
                            },
                            {
                                number: 8016,
                                label: "Redevances crédit-bail restant à courir",
                                accounts: [
                                    {
                                        number: 80161,
                                        label: "Crédit-bail mobilier",
                                        accounts: []
                                    },
                                    {
                                        number: 80165,
                                        label: "Crédit-bail immobilier",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 8018,
                                label: "Autres engagements donnés",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 802,
                        label: "Engagements reçus par l'entité",
                        accounts: [
                            {
                                number: 8021,
                                label: "Avals, cautions, garanties",
                                accounts: []
                            },
                            {
                                number: 8024,
                                label: "Créances escomptées non échues",
                                accounts: []
                            },
                            {
                                number: 8026,
                                label: "Engagements reçus pour utilisation en crédit-bail",
                                accounts: [
                                    {
                                        number: 80261,
                                        label: "Crédit-bail mobilier",
                                        accounts: []
                                    },
                                    {
                                        number: 80265,
                                        label: "Crédit-bail immobilier",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 8028,
                                label: "Autres engagements reçus",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 88,
                label: "Résultat en instance d'affectation",
                accounts: []
            },
            {
                number: 89,
                label: "Bilan",
                accounts: []
            }
        ]
    }
]
