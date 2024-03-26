

export type DefaultAccount = {
    number: number
    label: string
    accounts: DefaultAccount[]
    system: "base" | "condensed" | "developed"
}

export const defaultAccounts: DefaultAccount[] = [
    {
        number: 1,
        label: "Comptes de capitaux",
        system: "condensed",
        accounts: [
            {
                number: 10,
                label: "Capital et réserves",
                system: "base",
                accounts: [
                    {
                        number: 101,
                        label: "Capital",
                        system: "condensed",
                        accounts: [
                            {
                                number: 1011,
                                label: "Capital souscrit - non appelé",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1012,
                                label: "Capital souscrit - appelé, non versé",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1013,
                                label: "Capital souscrit - appelé, versé",
                                system: "developed",
                                accounts: [
                                    {
                                        number: 10131,
                                        label: "Capital non amorti",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 10132,
                                        label: "Capital amorti",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 1018,
                                label: "Capital souscrit soumis à des réglementations particulières",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 102,
                        label: "Fonds fiduciaires",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 104,
                        label: "Primes liées au capital social",
                        system: "base",
                        accounts: [
                            {
                                number: 1041,
                                label: "Primes d'émission",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1042,
                                label: "Primes de fusion",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1043,
                                label: "Primes d'apport",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1044,
                                label: "Primes de conversion d'obligations en actions",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1045,
                                label: "Bons de souscription d'actions",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 105,
                        label: "Écarts de réévaluation",
                        system: "condensed",
                        accounts: [
                            {
                                number: 1051,
                                label: "Réserve spéciale de réévaluation",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1052,
                                label: "Écart de réévaluation libre",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1053,
                                label: "Réserve de réévaluation",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1055,
                                label: "Écarts de réévaluation (autres opérations légales)",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1057,
                                label: "Autres écarts de réévaluation en France",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1058,
                                label: "Autres écarts de réévaluation à l'étranger",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 106,
                        label: "Réserves",
                        system: "base",
                        accounts: [
                            {
                                number: 1061,
                                label: "Réserve légale",
                                system: "condensed",
                                accounts: [
                                    {
                                        number: 10611,
                                        label: "Réserve légale proprement dite",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 10612,
                                        label: "Plus-values nettes à long terme",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 1062,
                                label: "Réserves indisponibles",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 1063,
                                label: "Réserves statutaires ou contractuelles",
                                system: "condensed",
                                accounts: []
                            },
                            {
                                number: 1064,
                                label: "Réserves réglementées",
                                system: "condensed",
                                accounts: [
                                    {
                                        number: 10641,
                                        label: "Plus-values nettes à long terme",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 10643,
                                        label: "Réserves consécutives à l'octroi de subventions d'investissement",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 10648,
                                        label: "Autres réserves réglementées",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 1068,
                                label: "Autres réserves",
                                system: "condensed",
                                accounts: [
                                    {
                                        number: 10681,
                                        label: "Réserve de propre assureur",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 10688,
                                        label: "Réserves diverses",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 107,
                        label: "Écart d'équivalence",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 108,
                        label: "Compte de l'exploitant",
                        system: "condensed",
                        accounts: []
                    },
                    {
                        number: 109,
                        label: "Actionnaires : Capital souscrit - non appelé",
                        system: "base",
                        accounts: []
                    }
                ]
            },
            {
                number: 11,
                label: "Report à nouveau (solde créditeur ou débiteur)",
                system: "base",
                accounts: [
                    {
                        number: 110,
                        label: "Report à nouveau (solde créditeur)",
                        system: "developed",
                        accounts: []
                    },
                    {
                        number: 119,
                        label: "Report à nouveau (solde débiteur)",
                        system: "developed",
                        accounts: []
                    }
                ]
            },
            {
                number: 12,
                label: "Résultat de l'exercice (bénéfice ou perte)",
                system: "condensed",
                accounts: [
                    {
                        number: 120,
                        label: "Résultat de l'exercice (bénéfice)",
                        system: "developed",
                        accounts: []
                    },
                    {
                        number: 129,
                        label: "Résultat de l'exercice (perte)",
                        system: "developed",
                        accounts: []
                    }
                ]
            },
            {
                number: 13,
                label: "Subventions d'investissement",
                system: "base",
                accounts: [
                    {
                        number: 131,
                        label: "Subventions d'équipement",
                        system: "base",
                        accounts: [
                            {
                                number: 1311,
                                label: "État",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1312,
                                label: "Régions",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1313,
                                label: "Départements",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1314,
                                label: "Communes",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1315,
                                label: "Collectivités publiques",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1316,
                                label: "Entreprises publiques",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1317,
                                label: "Entreprises et organismes privés",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1318,
                                label: "Autres",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 138,
                        label: "Autres subventions d'investissement (même ventilation que celle du compte 131)",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 139,
                        label: "Subventions d'investissement inscrites au compte de résultat",
                        system: "base",
                        accounts: [
                            {
                                number: 1391,
                                label: "Subventions d'équipement",
                                system: "base",
                                accounts: [
                                    {
                                        number: 13911,
                                        label: "État",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 13912,
                                        label: "Régions",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 13913,
                                        label: "Départements",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 13914,
                                        label: "Communes",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 13915,
                                        label: "Collectivités publiques",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 13916,
                                        label: "Entreprises publiques",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 13917,
                                        label: "Entreprises et organismes privés",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 13918,
                                        label: "Autres",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 1398,
                                label: "Autres subventions d'investissement (même ventilation que celle du compte 1391)",
                                system: "base",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 14,
                label: "Provisions réglementées",
                system: "base",
                accounts: [
                    {
                        number: 142,
                        label: "Provisions réglementées relatives aux immobilisations",
                        system: "base",
                        accounts: [
                            {
                                number: 1423,
                                label: "Provisions pour reconstitution des gisements miniers et pétroliers",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1424,
                                label: "Provisions pour investissement (participation des salariés)",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 143,
                        label: "Provisions réglementées relatives aux stocks",
                        system: "base",
                        accounts: [
                            {
                                number: 1431,
                                label: "Hausse des prix",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1432,
                                label: "Fluctuation des cours",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 144,
                        label: "Provisions réglementées relatives aux autres éléments de l'actif",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 145,
                        label: "Amortissements dérogatoires",
                        system: "condensed",
                        accounts: []
                    },
                    {
                        number: 146,
                        label: "Provision spéciale de réévaluation",
                        system: "condensed",
                        accounts: []
                    },
                    {
                        number: 147,
                        label: "Plus-values réinvesties",
                        system: "condensed",
                        accounts: []
                    },
                    {
                        number: 148,
                        label: "Autres provisions réglementées",
                        system: "condensed",
                        accounts: []
                    }
                ]
            },
            {
                number: 15,
                label: "Provisions pour risques et charges",
                system: "condensed",
                accounts: [
                    {
                        number: 151,
                        label: "Provisions pour risques",
                        system: "base",
                        accounts: [
                            {
                                number: 1511,
                                label: "Provisions pour litiges",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1512,
                                label: "Provisions pour garanties données aux clients",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1513,
                                label: "Provisions pour pertes sur marchés à terme",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1514,
                                label: "Provisions pour amendes et pénalités",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1515,
                                label: "Provisions pour pertes de change",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1516,
                                label: "Provisions pour pertes sur contrats",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1518,
                                label: "Autres provisions pour risques",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 153,
                        label: "Provisions pour pensions et obligations similaires",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 154,
                        label: "Provisions pour restructurations",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 155,
                        label: "Provisions pour impôts",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 156,
                        label: "Provisions pour renouvellement des immobilisations (entreprises concessionnaires)",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 157,
                        label: "Provisions pour charges à répartir sur plusieurs exercices",
                        system: "base",
                        accounts: [
                            {
                                number: 1572,
                                label: "Provisions pour gros entretien ou grandes révisions",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 158,
                        label: "Autres provisions pour charges",
                        system: "base",
                        accounts: [
                            {
                                number: 1581,
                                label: "Provisions pour remises en état",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 16,
                label: "Emprunts et dettes assimilées",
                system: "condensed",
                accounts: [
                    {
                        number: 161,
                        label: "Emprunts obligataires convertibles",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 162,
                        label: "Obligations représentatives de passifs nets remis en fiducie",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 163,
                        label: "Autres emprunts obligataires",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 164,
                        label: "Émprunts auprès des établissements de crédit",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 165,
                        label: "Dépôts et cautionnements reçus",
                        system: "base",
                        accounts: [
                            {
                                number: 1651,
                                label: "Dépôts",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1655,
                                label: "Cautionnements",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 166,
                        label: "Participation des salariés aux résultats",
                        system: "developed",
                        accounts: [
                            {
                                number: 1661,
                                label: "Comptes bloqués",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1662,
                                label: "Fonds de participation",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 167,
                        label: "Emprunts et dettes assortis de conditions particulières",
                        system: "base",
                        accounts: [
                            {
                                number: 1671,
                                label: "Émissions de titres participatifs",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 1674,
                                label: "Avances conditionnées de l'État",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 1675,
                                label: "Emprunts participatifs",
                                system: "base",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 168,
                        label: "Autres emprunts et dettes assimilées",
                        system: "base",
                        accounts: [
                            {
                                number: 1681,
                                label: "Autres emprunts",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1685,
                                label: "Rentes viagères capitalisées",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1687,
                                label: "Autres dettes",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1688,
                                label: "Intérêts courus",
                                system: "developed",
                                accounts: [
                                    {
                                        number: 16881,
                                        label: "Sur emprunts obligataires convertibles",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 16883,
                                        label: "Sur autres emprunts obligataires",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 16884,
                                        label: "Sur emprunts auprès des établissements de crédit",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 16885,
                                        label: "Sur dépôts et cautionnements reçus",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 16886,
                                        label: "Sur participation des salariés aux résultats",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 16887,
                                        label: "Sur emprunts et dettes assortis de conditions particulières",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 16888,
                                        label: "Sur autres emprunts et dettes assimilées",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 169,
                        label: "Primes de remboursement des obligations",
                        system: "base",
                        accounts: []
                    }
                ]
            },
            {
                number: 17,
                label: "Dettes rattachées à des participations",
                system: "base",
                accounts: [
                    {
                        number: 171,
                        label: "Dettes rattachées à des participations (groupe)",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 174,
                        label: "Dettes rattachées à des participations (hors groupe)",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 178,
                        label: "Dettes rattachées à des sociétés en participation",
                        system: "base",
                        accounts: [
                            {
                                number: 1781,
                                label: "Principal",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 1788,
                                label: "Intérêts courus",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 18,
                label: "Comptes de liaison des établissements et sociétés en participation",
                system: "base",
                accounts: [
                    {
                        number: 181,
                        label: "Comptes de liaison des établissements",
                        system: "developed",
                        accounts: []
                    },
                    {
                        number: 186,
                        label: "Biens et prestations de services échangés entre établissements (charges)",
                        system: "developed",
                        accounts: []
                    },
                    {
                        number: 187,
                        label: "Biens et prestations de services échangés entre établissements (produits)",
                        system: "developed",
                        accounts: []
                    },
                    {
                        number: 188,
                        label: "Comptes de liaison des sociétés en participation",
                        system: "developed",
                        accounts: []
                    }
                ]
            }
        ]
    },
    {
        number: 2,
        label: "Comptes d'immobilisations",
        system: "condensed",
        accounts: [
            {
                number: 20,
                label: "Immobilisations incorporelles",
                system: "condensed",
                accounts: [
                    {
                        number: 201,
                        label: "Frais d'établissement",
                        system: "condensed",
                        accounts: [
                            {
                                number: 2011,
                                label: "Frais de constitution",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 2012,
                                label: "Frais de premier établissement",
                                system: "developed",
                                accounts: [
                                    {
                                        number: 20121,
                                        label: "Frais de prospection",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 20122,
                                        label: "Frais de publicité",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 2013,
                                label: "Frais d'augmentation de capital et d'opérations diverses (fusions, scissions, transformations)",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 203,
                        label: "Frais de recherche et de développement",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 205,
                        label: "Concessions et droits similaires, brevets, licences, marques, procédés, logiciels, droits et valeurs similaires",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 206,
                        label: "Droit au bail",
                        system: "condensed",
                        accounts: []
                    },
                    {
                        number: 207,
                        label: "Fonds commercial",
                        system: "condensed",
                        accounts: []
                    },
                    {
                        number: 208,
                        label: "Autres immobilisations incorporelles",
                        system: "condensed",
                        accounts: [
                            {
                                number: 2081,
                                label: "Mali de fusion sur actifs incorporels",
                                system: "base",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 21,
                label: "Immobilisations corporelles",
                system: "condensed",
                accounts: [
                    {
                        number: 211,
                        label: "Terrains",
                        system: "base",
                        accounts: [
                            {
                                number: 2111,
                                label: "Terrains nus",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2112,
                                label: "Terrains aménagés",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2113,
                                label: "Sous-sols et sursols",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2114,
                                label: "Terrains de de carrières (tréfonds)",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2115,
                                label: "Terrains bâtis",
                                system: "base",
                                accounts: [
                                    {
                                        number: 21151,
                                        label: "Ensembles immobiliers industriels (A, B, ...)",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 21155,
                                        label: "Ensembles immobiliers administratifs et commerciaux (A, B, ...)",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 21158,
                                        label: "Autres ensembles immobiliers",
                                        system: "developed",
                                        accounts: [
                                            {
                                                number: 211581,
                                                label: "affectés aux opérations professionnelles (A, B, ...)",
                                                system: "developed",
                                                accounts: []
                                            },
                                            {
                                                number: 211588,
                                                label: "affectés aux opérations non professionnelles (A, B, ...)",
                                                system: "developed",
                                                accounts: []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                number: 2116,
                                label: "Compte d'ordre sur immobilisations",
                                system: "base",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 212,
                        label: "Agencements et aménagements de terrains (même ventilation que celle du compte 211)",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 213,
                        label: "Constructions",
                        system: "base",
                        accounts: [
                            {
                                number: 2131,
                                label: "Bâtiments",
                                system: "base",
                                accounts: [
                                    {
                                        number: 21311,
                                        label: "Ensembles immobiliers industriels (A, B, ...)",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 21315,
                                        label: "Ensembles immobiliers administratifs et commerciaux (A, B, ...)",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 21318,
                                        label: "Autres ensembles immobiliers",
                                        system: "developed",
                                        accounts: [
                                            {
                                                number: 213181,
                                                label: "affectés aux opérations professionnelles (A, B, ...)",
                                                system: "developed",
                                                accounts: []
                                            },
                                            {
                                                number: 213188,
                                                label: "affectés aux opérations non professionnelles (A, B, ...)",
                                                system: "developed",
                                                accounts: []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                number: 2135,
                                label: "Installations générales - agencements - aménagements des constructions",
                                system: "base",
                                accounts: [
                                    {
                                        number: 21351,
                                        label: "Ensembles immobiliers industriels (A, B, ...)",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 21355,
                                        label: "Ensembles immobiliers administratifs et commerciaux (A, B, ...)",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 21358,
                                        label: "Autres ensembles immobiliers",
                                        system: "developed",
                                        accounts: [
                                            {
                                                number: 213581,
                                                label: "affectés aux opérations professionnelles (A, B)",
                                                system: "developed",
                                                accounts: []
                                            },
                                            {
                                                number: 213588,
                                                label: "affectés aux opérations non professionnelles (A, B)",
                                                system: "developed",
                                                accounts: []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                number: 2138,
                                label: "Ouvrages d'infrastructure",
                                system: "base",
                                accounts: [
                                    {
                                        number: 21381,
                                        label: "Voies de terre",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 21382,
                                        label: "Voies de fer",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 21383,
                                        label: "Voies d'eau",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 21384,
                                        label: "Barrages",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 21385,
                                        label: "Pistes d'aérodromes",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 214,
                        label: "Constructions sur sol d'autrui (même ventilation que celle du compte 213)",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 215,
                        label: "Installations techniques, matériels et outillage industriels",
                        system: "base",
                        accounts: [
                            {
                                number: 2151,
                                label: "Installations complexes spécialisées",
                                system: "base",
                                accounts: [
                                    {
                                        number: 21511,
                                        label: "sur sol propre",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 21514,
                                        label: "sur sol d'autrui",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 2153,
                                label: "Installations à caractère spécifique",
                                system: "base",
                                accounts: [
                                    {
                                        number: 21531,
                                        label: "sur sol propre",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 21534,
                                        label: "sur sol d'autrui",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 2154,
                                label: "Matériel industriel",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2155,
                                label: "Outillage industriel",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2157,
                                label: "Agencements et aménagements du matériel et outillage industriels",
                                system: "base",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 218,
                        label: "Autres immobilisations corporelles",
                        system: "base",
                        accounts: [
                            {
                                number: 2181,
                                label: "Installations générales, agencements, aménagements divers",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2182,
                                label: "Matériel de transport",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2183,
                                label: "Matériel de bureau et matériel informatique",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2184,
                                label: "Mobilier",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2185,
                                label: "Cheptel",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2186,
                                label: "Emballages récupérables",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2187,
                                label: "Mali de fusions sur actifs corporels",
                                system: "base",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 22,
                label: "Immobilisations mises en concession",
                system: "base",
                accounts: []
            },
            {
                number: 23,
                label: "Immobilisations en cours",
                system: "condensed",
                accounts: [
                    {
                        number: 231,
                        label: "Immobilisations corporelles en cours",
                        system: "base",
                        accounts: [
                            {
                                number: 2312,
                                label: "Terrains",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 2313,
                                label: "Constructions",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 2315,
                                label: "Installations techniques, matériel et outillage industriels",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 2318,
                                label: "Autres immobilisations corporelles",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 232,
                        label: "Immobilisations incorporelles en cours",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 237,
                        label: "Avances et acomptes versés sur immobilisations incorporelles",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 238,
                        label: "Avances et acomptes versés sur commandes d'immobilisations corporelles",
                        system: "base",
                        accounts: [
                            {
                                number: 2382,
                                label: "Terrains",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 2383,
                                label: "Constructions",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 2385,
                                label: "Installations techniques, matériel et outillage industriels",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 2388,
                                label: "Autres immobilisations corporelles",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 25,
                label: "Parts dans des entreprises liées et créances sur des entreprises liées",
                system: "base",
                accounts: []
            },
            {
                number: 26,
                label: "Participations et créances rattachées à des participations",
                system: "base",
                accounts: [
                    {
                        number: 261,
                        label: "Titres de participation",
                        system: "base",
                        accounts: [
                            {
                                number: 2611,
                                label: "Actions",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 2618,
                                label: "Autres titres",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 266,
                        label: "Autres formes de participation",
                        system: "base",
                        accounts: [
                            {
                                number: 2661,
                                label: "Droits représentatifs d'actifs nets remis en fiducie",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 267,
                        label: "Créances rattachées à des participations",
                        system: "base",
                        accounts: [
                            {
                                number: 2671,
                                label: "Créances rattachées à des participations (groupe)",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 2674,
                                label: "Créances rattachées à des participations (hors groupe)",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 2675,
                                label: "Versements représentatifs d'apports non capitalisés (appel de fonds)",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 2676,
                                label: "Avances consolidables",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 2677,
                                label: "Autres créances rattachées à des participations",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 2678,
                                label: "Intérêts courus",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 268,
                        label: "Créances rattachées à des sociétés en participation",
                        system: "base",
                        accounts: [
                            {
                                number: 2681,
                                label: "Principal",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 2688,
                                label: "Intérêts courus",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 269,
                        label: "Versements restant à effectuer sur titres de participation non libérés",
                        system: "base",
                        accounts: []
                    }
                ]
            },
            {
                number: 27,
                label: "Autres immobilisations financières",
                system: "condensed",
                accounts: [
                    {
                        number: 271,
                        label: "Titres immobilisés autres que les titres immobilisés de l'activité de portefeuille (droit de propriété)",
                        system: "base",
                        accounts: [
                            {
                                number: 2711,
                                label: "Actions",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 2718,
                                label: "Autres titres",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 272,
                        label: "Titres immobilisés (droit de créance)",
                        system: "base",
                        accounts: [
                            {
                                number: 2721,
                                label: "Obligations",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 2722,
                                label: "Bons",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 273,
                        label: "Titres immobilisés de l'activité de portefeuille",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 274,
                        label: "Prêts",
                        system: "base",
                        accounts: [
                            {
                                number: 2741,
                                label: "Prêts participatifs",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 2742,
                                label: "Prêts aux associés",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 2743,
                                label: "Prêts au personnel",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 2748,
                                label: "Autres prêts",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 275,
                        label: "Dépôts et cautionnements versés",
                        system: "base",
                        accounts: [
                            {
                                number: 2751,
                                label: "Dépôts",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 2755,
                                label: "Cautionnements",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 276,
                        label: "Autres créances immobilisées",
                        system: "base",
                        accounts: [
                            {
                                number: 2761,
                                label: "Créances diverses",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 2768,
                                label: "Intérêts courus",
                                system: "developed",
                                accounts: [
                                    {
                                        number: 27682,
                                        label: "sur titres immobilisés (droit de créance)",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 27684,
                                        label: "sur prêts",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 27685,
                                        label: "sur dépôts et cautionnements",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 27688,
                                        label: "sur créances diverses",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 277,
                        label: "Actions propres ou parts propres",
                        system: "base",
                        accounts: [
                            {
                                number: 2771,
                                label: "Actions propres ou parts propres",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 2772,
                                label: "Actions propres ou parts propres en voie d'annulation",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 278,
                        label: "Mali de fusion sur actifs financiers",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 279,
                        label: "Versements restant à effectuer sur titres immobilisés non libérés",
                        system: "base",
                        accounts: []
                    }
                ]
            },
            {
                number: 28,
                label: "Amortissements des immobilisations",
                system: "base",
                accounts: [
                    {
                        number: 280,
                        label: "Amortissements des immobilisations incorporelles",
                        system: "condensed",
                        accounts: [
                            {
                                number: 2801,
                                label: "Frais d'établissement (même ventilation que celle du compte 201)",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2803,
                                label: "Frais de recherche et de développement",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2805,
                                label: "Concessions et droits similaires, brevets, licences, logiciels, droits et valeurs similaires",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2807,
                                label: "Fonds commercial",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2808,
                                label: "Autres immobilisations incorporelles",
                                system: "base",
                                accounts: [
                                    {
                                        number: 28081,
                                        label: "Amortissements du mali de fusion sur actifs incorporels",
                                        system: "base",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 281,
                        label: "Amortissements des immobilisations corporelles",
                        system: "condensed",
                        accounts: [
                            {
                                number: 2812,
                                label: "Agencements, aménagements de terrains (même ventilation que celle du compte 212)",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2813,
                                label: "Constructions (même ventilation que celle du compte 213)",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2814,
                                label: "Constructions sur sol d'autrui (même ventilation que celle du compte 214)",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2815,
                                label: "Installations, matériel et outillage industriels (même ventilation que celle du compte 215)",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2818,
                                label: "Autres immobilisations corporelles (même ventilation que celle du compte 218)",
                                system: "base",
                                accounts: [
                                    {
                                        number: 28187,
                                        label: "Amortissement du mali de fusion sur actifs corporels",
                                        system: "base",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 282,
                        label: "Amortissements des immobilisations mises en concession",
                        system: "base",
                        accounts: []
                    }
                ]
            },
            {
                number: 29,
                label: "Dépréciations des immobilisations",
                system: "base",
                accounts: [
                    {
                        number: 290,
                        label: "Dépréciations des immobilisations incorporelles",
                        system: "condensed",
                        accounts: [
                            {
                                number: 2905,
                                label: "Marques, procédés, droits et valeurs similaires",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2906,
                                label: "Droit au bail",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2907,
                                label: "Fonds commercial",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2908,
                                label: "Autres immobilisations incorporelles",
                                system: "base",
                                accounts: [
                                    {
                                        number: 29081,
                                        label: "Dépréciation du mali de fusion sur actifs incorporels",
                                        system: "base",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 291,
                        label: "Dépréciations des immobilisations corporelles (même ventilation que celle du compte 21)",
                        system: "condensed",
                        accounts: [
                            {
                                number: 29187,
                                label: "Dépréciation du mali de fusion sur actifs corporels",
                                system: "base",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 292,
                        label: "Dépréciations des immobilisations mises en concession",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 293,
                        label: "Dépréciations des immobilisations en cours",
                        system: "base",
                        accounts: [
                            {
                                number: 2931,
                                label: "Immobilisations corporelles en cours",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2932,
                                label: "Immobilisations incorporelles en cours",
                                system: "base",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 296,
                        label: "Dépréciations des participations et créances rattachées à des participations",
                        system: "base",
                        accounts: [
                            {
                                number: 2961,
                                label: "Titres de participation",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2966,
                                label: "Autres formes de participation",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2967,
                                label: "Créances rattachées à des participations (même ventilation que celle du compte 267)",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2968,
                                label: "Créances rattachées à des sociétés en participation (même ventilation que celle du compte 268)",
                                system: "base",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 297,
                        label: "Dépréciations des autres immobilisations financières",
                        system: "condensed",
                        accounts: [
                            {
                                number: 2971,
                                label: "Titres immobilisés autres que les titres immobilisés de l'activité de portefeuille, droit de propriété (même ventilation que celle du compte 271)",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2972,
                                label: "Droit de créance (même ventilation que celle du compte 272)",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2973,
                                label: "Titres immobilisés de l'activité de portefeuille",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2974,
                                label: "Prêts (même ventilation que celle du compte 274)",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2975,
                                label: "Dépôts et cautionnements versés (même ventilation que celle du compte 275)",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2976,
                                label: "Autres créances immobilisées (même ventilation que celle du compte 276)",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 2978,
                                label: "Dépréciation du mali de fusion sur actifs financiers",
                                system: "base",
                                accounts: [
                                    {
                                        number: 29787,
                                        label: "Dépréciation du mali de fusion sur actifs financiers",
                                        system: "base",
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
        label: "Comptes de stocks et en-cours",
        system: "condensed",
        accounts: [
            {
                number: 31,
                label: "Matières premières et fournitures",
                system: "condensed",
                accounts: [
                    {
                        number: 311,
                        label: "Matières (ou groupe) A",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 312,
                        label: "Matières (ou groupe) B",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 317,
                        label: "Fournitures A, B, C, ...",
                        system: "base",
                        accounts: []
                    }
                ]
            },
            {
                number: 32,
                label: "Autres approvisionnements",
                system: "condensed",
                accounts: [
                    {
                        number: 321,
                        label: "Matières consommables",
                        system: "base",
                        accounts: [
                            {
                                number: 3211,
                                label: "Matières (ou groupe) C",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 3212,
                                label: "Matières (ou groupe) D",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 322,
                        label: "Fournitures consommables",
                        system: "base",
                        accounts: [
                            {
                                number: 3221,
                                label: "Combustibles",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 3222,
                                label: "Produits d'entretien",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 3223,
                                label: "Fournitures d'atelier et d'usine",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 3224,
                                label: "Fournitures de magasin",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 3225,
                                label: "Fournitures de bureau",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 326,
                        label: "Emballages",
                        system: "base",
                        accounts: [
                            {
                                number: 3261,
                                label: "Emballages perdus",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 3265,
                                label: "Emballages récupérables non identifiables",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 3267,
                                label: "Emballages à usage mixte",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 33,
                label: "En-cours de production de biens",
                system: "condensed",
                accounts: [
                    {
                        number: 331,
                        label: "Produits en cours",
                        system: "base",
                        accounts: [
                            {
                                number: 3311,
                                label: "Produits en cours P1",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 3312,
                                label: "Produits en cours P2",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 335,
                        label: "Travaux en cours",
                        system: "base",
                        accounts: [
                            {
                                number: 3351,
                                label: "Travaux en cours T1",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 3352,
                                label: "Travaux en cours T2",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 34,
                label: "En-cours de production de services",
                system: "condensed",
                accounts: [
                    {
                        number: 341,
                        label: "Études en cours",
                        system: "base",
                        accounts: [
                            {
                                number: 3411,
                                label: "Études en cours E1",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 3412,
                                label: "Études en cours E2",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 345,
                        label: "Prestations de services en cours",
                        system: "base",
                        accounts: [
                            {
                                number: 3451,
                                label: "Prestations de services S1",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 3452,
                                label: "Prestations de services S2",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 35,
                label: "Stocks de produits",
                system: "condensed",
                accounts: [
                    {
                        number: 351,
                        label: "Produits intermédiaires",
                        system: "base",
                        accounts: [
                            {
                                number: 3511,
                                label: "Produits intermédiaires (ou groupe) A",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 3512,
                                label: "Produits intermédiaires (ou groupe) B",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 355,
                        label: "Produits finis",
                        system: "base",
                        accounts: [
                            {
                                number: 3551,
                                label: "Produits finis (ou groupe) A",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 3552,
                                label: "Produits finis (ou groupe) B",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 358,
                        label: "Produits résiduels (ou matières de récupération)",
                        system: "base",
                        accounts: [
                            {
                                number: 3581,
                                label: "Déchets",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 3585,
                                label: "Rebuts",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 3586,
                                label: "Matières de récupération",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 36,
                label: "Stocks provenant d'immobilisations",
                system: "base",
                accounts: []
            },
            {
                number: 37,
                label: "Stocks de marchandises",
                system: "condensed",
                accounts: [
                    {
                        number: 371,
                        label: "Marchandises (ou groupe) A",
                        system: "developed",
                        accounts: []
                    },
                    {
                        number: 372,
                        label: "Marchandises (ou groupe) B",
                        system: "developed",
                        accounts: []
                    }
                ]
            },
            {
                number: 38,
                label: "Stocks en voie d'acheminement, mis en dépôt ou donnés en consignation",
                system: "base",
                accounts: []
            },
            {
                number: 39,
                label: "Dépréciations des stocks et en-cours",
                system: "base",
                accounts: [
                    {
                        number: 391,
                        label: "Dépréciations des matières premières (et fournitures)",
                        system: "condensed",
                        accounts: [
                            {
                                number: 3911,
                                label: "Matières (ou groupe) A",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 3912,
                                label: "Matières (ou groupe) B",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 3917,
                                label: "Fournitures A, B, C, ...",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 392,
                        label: "Dépréciations des autres approvisionnements",
                        system: "condensed",
                        accounts: [
                            {
                                number: 3921,
                                label: "Matières consommables (même ventilation que celle du compte 321)",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 3922,
                                label: "Fournitures consommables (même ventilation que celle du compte 322)",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 3926,
                                label: "Emballages (même ventilation que celle du compte 326)",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 393,
                        label: "Dépréciations des en-cours de production de biens",
                        system: "condensed",
                        accounts: [
                            {
                                number: 3931,
                                label: "Produits en cours (même ventilation que celle du compte 331)",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 3935,
                                label: "Travaux en cours (même ventilation que celle du compte 335)",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 394,
                        label: "Dépréciations des en-cours de production de services",
                        system: "condensed",
                        accounts: [
                            {
                                number: 3941,
                                label: "Études en cours (même ventilation que celle du compte 341)",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 3945,
                                label: "Prestations de services en cours (même ventilation que celle du compte 345)",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 395,
                        label: "Dépréciations des stocks de produits",
                        system: "condensed",
                        accounts: [
                            {
                                number: 3951,
                                label: "Produits intermédiaires (même ventilation que celle du compte 351)",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 3955,
                                label: "Produits finis (même ventilation que celle du compte 355)",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 397,
                        label: "Dépréciations des stocks de marchandises",
                        system: "condensed",
                        accounts: [
                            {
                                number: 3971,
                                label: "Marchandise (ou groupe) A",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 3972,
                                label: "Marchandise (ou groupe) B",
                                system: "developed",
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
        label: "Comptes de tiers",
        system: "condensed",
        accounts: [
            {
                number: 40,
                label: "Fournisseurs et comptes rattachés",
                system: "base",
                accounts: [
                    {
                        number: 400,
                        label: "Fournisseurs et comptes rattachés",
                        system: "condensed",
                        accounts: []
                    },
                    {
                        number: 401,
                        label: "Fournisseurs",
                        system: "base",
                        accounts: [
                            {
                                number: 4011,
                                label: "Fournisseurs - Achats de biens et prestations de services",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4017,
                                label: "Fournisseurs - Retenues de garantie",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 403,
                        label: "Fournisseurs - Effets à payer",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 404,
                        label: "Fournisseurs d'immobilisations",
                        system: "base",
                        accounts: [
                            {
                                number: 4041,
                                label: "Fournisseurs - Achats d'immobilisations",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4047,
                                label: "Fournisseurs d'immobilisations - Retenues de garantie",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 405,
                        label: "Fournisseurs d'immobilisations - Effets à payer",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 408,
                        label: "Fournisseurs - Factures non parvenues",
                        system: "base",
                        accounts: [
                            {
                                number: 4081,
                                label: "Fournisseurs",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4084,
                                label: "Fournisseurs d'immobilisations",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4088,
                                label: "Fournisseurs - Intérêts courus",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 409,
                        label: "Fournisseurs débiteurs",
                        system: "condensed",
                        accounts: [
                            {
                                number: 4091,
                                label: "Fournisseurs - Avances et acomptes versés sur commandes",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 4096,
                                label: "Fournisseurs - Créances pour emballages et matériel à rendre",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 4097,
                                label: "Fournisseurs - Autres avoirs",
                                system: "base",
                                accounts: [
                                    {
                                        number: 40971,
                                        label: "Fournisseurs d'exploitation",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 40974,
                                        label: "Fournisseurs d'immobilisations",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 4098,
                                label: "Rabais, remises, ristournes à obtenir et autres avoirs non encore reçus",
                                system: "base",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 41,
                label: "Clients et comptes rattachés",
                system: "base",
                accounts: [
                    {
                        number: 410,
                        label: "Clients et comptes rattachés",
                        system: "condensed",
                        accounts: []
                    },
                    {
                        number: 411,
                        label: "Clients",
                        system: "base",
                        accounts: [
                            {
                                number: 4111,
                                label: "Clients - Ventes de biens ou de prestations de services",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4117,
                                label: "Clients - Retenues de garantie",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 413,
                        label: "Clients - Effets à recevoir",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 416,
                        label: "Clients douteux ou litigieux",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 418,
                        label: "Clients - Produits non encore facturés",
                        system: "base",
                        accounts: [
                            {
                                number: 4181,
                                label: "Clients - Factures à établir",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4188,
                                label: "Clients - Intérêts courus",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 419,
                        label: "Clients créditeurs",
                        system: "condensed",
                        accounts: [
                            {
                                number: 4191,
                                label: "Clients - Avances et acomptes reçus sur commandes",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 4196,
                                label: "Clients - Dettes sur emballages et matériels consignés",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 4197,
                                label: "Clients - Autres avoirs",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 4198,
                                label: "Rabais, remises, ristournes à accorder et autres avoirs à établir",
                                system: "base",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 42,
                label: "Personnel et comptes rattachés",
                system: "base",
                accounts: [
                    {
                        number: 421,
                        label: "Personnel - Rémunérations dues",
                        system: "condensed",
                        accounts: []
                    },
                    {
                        number: 422,
                        label: "Comités d'entreprises, d'établissement, ...",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 424,
                        label: "Participation des salariés aux résultats",
                        system: "base",
                        accounts: [
                            {
                                number: 4246,
                                label: "Réserve spéciale",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4248,
                                label: "Comptes courants",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 425,
                        label: "Personnel - Avances et acomptes",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 426,
                        label: "Personnel - Dépôts",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 427,
                        label: "Personnel - Oppositions",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 428,
                        label: "Personnel - Charges à payer et produits à recevoir",
                        system: "condensed",
                        accounts: [
                            {
                                number: 4282,
                                label: "Dettes provisionnées pour congés à payer",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4284,
                                label: "Dettes provisionnées pour participation des salariés aux résultats",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4286,
                                label: "Autres charges à payer",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4287,
                                label: "Produits à recevoir",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 43,
                label: "Sécurité sociale et autres organismes sociaux",
                system: "condensed",
                accounts: [
                    {
                        number: 431,
                        label: "Sécurité sociale",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 437,
                        label: "Autres organismes sociaux",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 438,
                        label: "Organismes sociaux - Charges à payer et produits à recevoir",
                        system: "base",
                        accounts: [
                            {
                                number: 4382,
                                label: "Charges sociales sur congés à payer",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4386,
                                label: "Autres charges à payer",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4387,
                                label: "Produits à recevoir",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 44,
                label: "État et autres collectivités publiques",
                system: "base",
                accounts: [
                    {
                        number: 441,
                        label: "État - Subventions à recevoir",
                        system: "base",
                        accounts: [
                            {
                                number: 4411,
                                label: "Subventions d'investissement",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4417,
                                label: "Subventions d'exploitation",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4418,
                                label: "Subventions d'équilibre",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4419,
                                label: "Avances sur subventions",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 442,
                        label: "Contributions, impôts et taxes recouvrés pour le compte de l'État",
                        system: "base",
                        accounts: [
                            {
                                number: 4421,
                                label: "Prélèvements à la source (Impôt sur le revenu)",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 4422,
                                label: "Prélèvements forfaitaires non libératoires",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 4423,
                                label: "Retenues et prélèvements sur les distributions",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 4424,
                                label: "Obligataires",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4425,
                                label: "Associés",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 443,
                        label: "Opérations particulières avec l'État, les collectivités publiques, les organismes internationaux",
                        system: "base",
                        accounts: [
                            {
                                number: 4431,
                                label: "Créances sur l'État résultant de la suppression de la règle du décalage d'un mois en matière de TVA",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 4438,
                                label: "Intérêts courus sur créances figurant au 4431",
                                system: "base",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 444,
                        label: "État - Impôts sur les bénéfices",
                        system: "condensed",
                        accounts: []
                    },
                    {
                        number: 445,
                        label: "État - Taxes sur le chiffre d'affaires",
                        system: "condensed",
                        accounts: [
                            {
                                number: 4452,
                                label: "TVA due intracommunautaire",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 4455,
                                label: "Taxes sur le chiffre d'affaires à décaisser",
                                system: "base",
                                accounts: [
                                    {
                                        number: 44551,
                                        label: "TVA à décaisser",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 44558,
                                        label: "Taxes assimilées à la TVA",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 4456,
                                label: "Taxes sur le chiffre d'affaires déductibles",
                                system: "base",
                                accounts: [
                                    {
                                        number: 44562,
                                        label: "TVA sur immobilisations",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 44563,
                                        label: "TVA transférée par d'autres entreprises",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 44566,
                                        label: "TVA sur autres biens et services",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 44567,
                                        label: "Crédit de TVA à reporter",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 44568,
                                        label: "Taxes assimilées à la TVA",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 4457,
                                label: "Taxes sur le chiffre d'affaires collectées par l'entreprise",
                                system: "base",
                                accounts: [
                                    {
                                        number: 44571,
                                        label: "TVA collectée",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 44578,
                                        label: "Taxes assimilées à la TVA",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 4458,
                                label: "Taxes sur le chiffre d'affaires à régulariser ou en attente",
                                system: "base",
                                accounts: [
                                    {
                                        number: 44581,
                                        label: "Acomptes - Régime simplifié d'imposition",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 44582,
                                        label: "Acomptes - Régime de forfait",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 44583,
                                        label: "Remboursement de taxes sur le chiffre d'affaires demandé",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 44584,
                                        label: "TVA récupérée d'avance",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 44586,
                                        label: "Taxes sur le chiffre d'affaires sur factures non parvenues",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 44587,
                                        label: "Taxes sur le chiffre d'affaires sur factures à établir",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 446,
                        label: "Obligations cautionnées",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 447,
                        label: "Autres impôts, taxes et versements assimilés",
                        system: "condensed",
                        accounts: []
                    },
                    {
                        number: 448,
                        label: "État - Charges à payer et produits à recevoir",
                        system: "base",
                        accounts: [
                            {
                                number: 4482,
                                label: "Charges fiscales sur congés à payer",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4486,
                                label: "Charges à payer",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4487,
                                label: "Produits à recevoir",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 449,
                        label: "Quotas d'émission à acquérir",
                        system: "base",
                        accounts: []
                    }
                ]
            },
            {
                number: 45,
                label: "Groupe et associés",
                system: "condensed",
                accounts: [
                    {
                        number: 451,
                        label: "Groupe",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 455,
                        label: "Associés - Comptes courants",
                        system: "condensed",
                        accounts: [
                            {
                                number: 4551,
                                label: "Principal",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4558,
                                label: "Intérêts courus",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 456,
                        label: "Associés - Opérations sur le capital",
                        system: "base",
                        accounts: [
                            {
                                number: 4561,
                                label: "Associés - Comptes d'apport en société",
                                system: "developed",
                                accounts: [
                                    {
                                        number: 45611,
                                        label: "Apports en nature",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 45615,
                                        label: "Apports en numéraire",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 4562,
                                label: "Apporteurs - Capital appelé, non versé",
                                system: "developed",
                                accounts: [
                                    {
                                        number: 45621,
                                        label: "Actionnaires - Capital souscrit et appelé, non versé",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 45625,
                                        label: "Associés - Capital appelé, non versé",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 4563,
                                label: "Associés - Versements reçus sur augmentation de capital",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4564,
                                label: "Associés - Versements anticipés",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4566,
                                label: "Actionnaires défaillants",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4567,
                                label: "Associés - Capital à rembourser",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 457,
                        label: "Associés - Dividendes à payer",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 458,
                        label: "Associés - Opérations faites en commun et en GIE",
                        system: "base",
                        accounts: [
                            {
                                number: 4581,
                                label: "Opérations courantes",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4588,
                                label: "Intérêts courus",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 46,
                label: "Débiteurs divers et créditeurs divers",
                system: "condensed",
                accounts: [
                    {
                        number: 462,
                        label: "Créances sur cessions d'immobilisations",
                        system: "developed",
                        accounts: []
                    },
                    {
                        number: 464,
                        label: "Dettes sur acquisitions de valeurs mobilières de placement",
                        system: "developed",
                        accounts: []
                    },
                    {
                        number: 465,
                        label: "Créances sur cessions de valeurs mobilières de placement",
                        system: "developed",
                        accounts: []
                    },
                    {
                        number: 467,
                        label: "Autres comptes débiteurs ou créditeurs",
                        system: "developed",
                        accounts: []
                    },
                    {
                        number: 468,
                        label: "Divers - Charges à payer et produits à recevoir",
                        system: "developed",
                        accounts: [
                            {
                                number: 4686,
                                label: "Charges à payer",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4687,
                                label: "Produits à recevoir",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 47,
                label: "Comptes transitoires ou d'attente",
                system: "condensed",
                accounts: [
                    {
                        number: 471,
                        label: "Comptes d'attente",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 472,
                        label: "Comptes d'attente",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 473,
                        label: "Comptes d'attente",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 474,
                        label: "Différences d'évaluation de jetons sur des passifs",
                        system: "base",
                        accounts: [
                            {
                                number: 4746,
                                label: "Différence d'évaluation de jetons sur des passifs - Actif",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4747,
                                label: "Différence d'évaluation de jetons sur des passifs - Passif",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 475,
                        label: "Comptes d'attente",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 476,
                        label: "Différence de conversion - Actif",
                        system: "base",
                        accounts: [
                            {
                                number: 4761,
                                label: "Diminution des créances",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4762,
                                label: "Augmentation des dettes",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4768,
                                label: "Différences compensées par couverture de change",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 477,
                        label: "Différences de conversion - Passif",
                        system: "base",
                        accounts: [
                            {
                                number: 4771,
                                label: "Augmentation des créances",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4772,
                                label: "Diminution des dettes",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4778,
                                label: "Différences compensées par couverture de change",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 478,
                        label: "Autres comptes transitoires",
                        system: "base",
                        accounts: [
                            {
                                number: 4786,
                                label: "Différences d'évaluation - Actif",
                                system: "developed",
                                accounts: [
                                    {
                                        number: 47861,
                                        label: "Différences d'évaluation sur instruments financier à terme - Actif",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 47862,
                                        label: "Différences d'évaluation sur jetons détenus - Actif",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 4787,
                                label: "Différences d'évaluation - Passif",
                                system: "developed",
                                accounts: [
                                    {
                                        number: 47871,
                                        label: "Différences d'évaluation sur instruments financier à terme - Passif",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 47872,
                                        label: "Différences d'évaluation sur jetons détenus - Passif",
                                        system: "developed",
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
                system: "base",
                accounts: [
                    {
                        number: 481,
                        label: "Charges à répartir sur plusieurs exercices",
                        system: "condensed",
                        accounts: [
                            {
                                number: 4811,
                                label: "Charges différées",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4812,
                                label: "Frais d'acquisition des immobilisations",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4816,
                                label: "Frais d'émission des emprunts",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4818,
                                label: "Charges à étaler",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 486,
                        label: "Charges constatées d'avance",
                        system: "condensed",
                        accounts: []
                    },
                    {
                        number: 487,
                        label: "Produits constatés d'avance",
                        system: "condensed",
                        accounts: [
                            {
                                number: 4871,
                                label: "Produits constatés d'avance sur jetons émis",
                                system: "base",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 488,
                        label: "Comptes de répartition périodique des charges et des produits",
                        system: "base",
                        accounts: [
                            {
                                number: 4886,
                                label: "Charges",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4887,
                                label: "Produits",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 489,
                        label: "Quotas d'émission alloués par l'État",
                        system: "base",
                        accounts: []
                    }
                ]
            },
            {
                number: 49,
                label: "Dépréciations des comptes de tiers",
                system: "base",
                accounts: [
                    {
                        number: 491,
                        label: "Dépréciations des comptes de clients",
                        system: "condensed",
                        accounts: []
                    },
                    {
                        number: 495,
                        label: "Dépréciations des comptes du groupe et des associés",
                        system: "base",
                        accounts: [
                            {
                                number: 4951,
                                label: "Comptes du groupe",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 4955,
                                label: "Comptes courants des associés",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 4958,
                                label: "Opérations faites en commun et en GIE",
                                system: "base",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 496,
                        label: "Dépréciations des comptes de débiteurs divers",
                        system: "condensed",
                        accounts: [
                            {
                                number: 4962,
                                label: "Créances sur cessions d'immobilisations",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4965,
                                label: "Créances sur cessions de valeurs mobilières de placement",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 4967,
                                label: "Autres comptes débiteurs",
                                system: "developed",
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
        label: "Comptes financiers",
        system: "condensed",
        accounts: [
            {
                number: 50,
                label: "Valeurs mobilières de placement",
                system: "condensed",
                accounts: [
                    {
                        number: 501,
                        label: "Parts dans des entreprises liées",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 502,
                        label: "Actions propres",
                        system: "base",
                        accounts: [
                            {
                                number: 5021,
                                label: "Actions destinées à être attribuées aux employés et affectées à des plans déterminés",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 5022,
                                label: "Actions disponibles pour être attribuées aux employés ou pour la régularisation des cours de bourse",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 503,
                        label: "Actions",
                        system: "base",
                        accounts: [
                            {
                                number: 5031,
                                label: "Titres cotés",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 5035,
                                label: "Titres non cotés",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 504,
                        label: "Autres titres conférant un droit de propriété",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 505,
                        label: "Obligations et bons émis par la société et rachetés par elle",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 506,
                        label: "Obligations",
                        system: "base",
                        accounts: [
                            {
                                number: 5061,
                                label: "Titres cotés",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 5065,
                                label: "Titres non cotés",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 507,
                        label: "Bons du Trésor et bons de caisse à court terme",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 508,
                        label: "Autres valeurs mobilières de placement et autres créances assimilées",
                        system: "base",
                        accounts: [
                            {
                                number: 5081,
                                label: "Autres valeurs mobilières",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 5082,
                                label: "Bons de souscription",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 5088,
                                label: "Intérêts courus sur obligations, bons et valeurs assimilés",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 509,
                        label: "Versements restant à effectuer sur valeurs mobilières de placement non libérées",
                        system: "base",
                        accounts: []
                    }
                ]
            },
            {
                number: 51,
                label: "Banques, établissements financiers et assimilés",
                system: "condensed",
                accounts: [
                    {
                        number: 511,
                        label: "Valeurs à l'encaissement",
                        system: "base",
                        accounts: [
                            {
                                number: 5111,
                                label: "Coupons échus à l'encaissement",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 5112,
                                label: "Chèques à encaisser",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 5113,
                                label: "Effets à l'encaissement",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 5114,
                                label: "Effets à l'escompte",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 512,
                        label: "Banques",
                        system: "base",
                        accounts: [
                            {
                                number: 5121,
                                label: "Comptes en monnaie nationale",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 5124,
                                label: "Comptes en devises",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 514,
                        label: "Chèques postaux",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 515,
                        label: "Caisses du Trésor et des établissements publics",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 516,
                        label: "Sociétés de bourse",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 517,
                        label: "Autres organismes financiers",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 518,
                        label: "Intérêts courus",
                        system: "base",
                        accounts: [
                            {
                                number: 5181,
                                label: "Intérêts courus à payer",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 5188,
                                label: "Intérêts courus à recevoir",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 519,
                        label: "Concours bancaires courants",
                        system: "base",
                        accounts: [
                            {
                                number: 5191,
                                label: "Crédit de mobilisation de créances commerciales",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 5193,
                                label: "Mobilisation de créances nées à l'étranger",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 5198,
                                label: "Intérêts courus sur concours bancaires courants",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 52,
                label: "Instruments financiers à terme et jetons détenus",
                system: "base",
                accounts: [
                    {
                        number: 521,
                        label: "Instruments financiers à terme",
                        system: "developed",
                        accounts: []
                    },
                    {
                        number: 522,
                        label: "Jetons détenus",
                        system: "developed",
                        accounts: []
                    },
                    {
                        number: 523,
                        label: "Jetons auto-détenus",
                        system: "developed",
                        accounts: []
                    },
                    {
                        number: 524,
                        label: "Jetons empruntés",
                        system: "developed",
                        accounts: []
                    }
                ]
            },
            {
                number: 53,
                label: "Caisse",
                system: "condensed",
                accounts: [
                    {
                        number: 531,
                        label: "Caisse siège social",
                        system: "base",
                        accounts: [
                            {
                                number: 5311,
                                label: "Caisse en monnaie nationale",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 5314,
                                label: "Caisse en devises",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 532,
                        label: "Caisse succursale (ou usine) A",
                        system: "developed",
                        accounts: []
                    },
                    {
                        number: 533,
                        label: "Caisse succursale (ou usine) B",
                        system: "developed",
                        accounts: []
                    }
                ]
            },
            {
                number: 54,
                label: "Régies d'avance et accréditifs",
                system: "condensed",
                accounts: []
            },
            {
                number: 58,
                label: "Virements internes",
                system: "condensed",
                accounts: []
            },
            {
                number: 59,
                label: "Dépréciations des comptes financiers",
                system: "base",
                accounts: [
                    {
                        number: 590,
                        label: "Dépréciations des valeurs mobilières de placement",
                        system: "condensed",
                        accounts: [
                            {
                                number: 5903,
                                label: "Actions",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 5904,
                                label: "Autres titres conférant un droit de propriété",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 5906,
                                label: "Obligations",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 5908,
                                label: "Autres valeurs mobilières de placement et créances assimilées",
                                system: "base",
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
        label: "Comptes de charges",
        system: "condensed",
        accounts: [
            {
                number: 60,
                label: "Achats (sauf 603)",
                system: "condensed",
                accounts: [
                    {
                        number: 601,
                        label: "Achats stockés - Matières premières (et fournitures)",
                        system: "base",
                        accounts: [
                            {
                                number: 6011,
                                label: "Matières (ou groupe) A",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6012,
                                label: "Matières (ou groupe) B",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6017,
                                label: "Fournitures A, B, C, ...",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 602,
                        label: "Achats stockés - Autres approvisionnements",
                        system: "base",
                        accounts: [
                            {
                                number: 6021,
                                label: "Matières consommables",
                                system: "base",
                                accounts: [
                                    {
                                        number: 60211,
                                        label: "Matières (ou groupe) C",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 60212,
                                        label: "Matières (ou groupe) D",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 6022,
                                label: "Fournitures consommables",
                                system: "base",
                                accounts: [
                                    {
                                        number: 60221,
                                        label: "Combustibles",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 60222,
                                        label: "Produits d'entretien",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 60223,
                                        label: "Fournitures d'atelier et d'usine",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 60224,
                                        label: "Fournitures de magasin",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 60225,
                                        label: "Fourniture de bureau",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 6026,
                                label: "Emballages",
                                system: "base",
                                accounts: [
                                    {
                                        number: 60261,
                                        label: "Emballages perdus",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 60265,
                                        label: "Emballages récupérables non identifiables",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 60267,
                                        label: "Emballages à usage mixte",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 603,
                        label: "Variations des stocks (approvisionnements et marchandises)",
                        system: "condensed",
                        accounts: [
                            {
                                number: 6031,
                                label: "Variation des stocks de matières premières (et fournitures)",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 6032,
                                label: "Variation des stocks des autres approvisionnements",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 6037,
                                label: "Variation des stocks de marchandises",
                                system: "base",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 604,
                        label: "Achats d'études et prestations de services",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 605,
                        label: "Achats de matériel, équipements et travaux",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 606,
                        label: "Achats non stockés de matière et fournitures",
                        system: "base",
                        accounts: [
                            {
                                number: 6061,
                                label: "Fournitures non stockables (eau, énergie, ...)",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6063,
                                label: "Fournitures d'entretien et de petit équipement",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6064,
                                label: "Fournitures administratives",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6068,
                                label: "Autres matières et fournitures",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 607,
                        label: "Achats de marchandises",
                        system: "base",
                        accounts: [
                            {
                                number: 6071,
                                label: "Marchandise (ou groupe) A",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6072,
                                label: "Marchandise (ou groupe) B",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 608,
                        label: "Récapitulation des frais accessoires incorporés aux achats",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 609,
                        label: "Rabais, remises et ristournes obtenus sur achats",
                        system: "base",
                        accounts: [
                            {
                                number: 6091,
                                label: "de matières premières (et fournitures)",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6092,
                                label: "d'autres approvisionnements stockés",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6094,
                                label: "d'études et prestations de services",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6095,
                                label: "de matériel, équipements et travaux",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6096,
                                label: "d'approvisionnements non stockés",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6097,
                                label: "de marchandises",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6098,
                                label: "Rabais, remises et ristournes non affectés",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 61,
                label: "Services extérieurs",
                system: "condensed",
                accounts: [
                    {
                        number: 611,
                        label: "Sous-traitance générale",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 612,
                        label: "Redevances de crédit-bail",
                        system: "base",
                        accounts: [
                            {
                                number: 6122,
                                label: "Crédit-bail mobilier",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 6125,
                                label: "Crédit-bail immobilier",
                                system: "base",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 613,
                        label: "Locations",
                        system: "base",
                        accounts: [
                            {
                                number: 6132,
                                label: "Locations immobilières",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6135,
                                label: "Locations mobilières",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6136,
                                label: "Malis sur emballages",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 614,
                        label: "Charges locatives et de copropriété",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 615,
                        label: "Entretien et réparations",
                        system: "base",
                        accounts: [
                            {
                                number: 6152,
                                label: "sur biens immobiliers",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6155,
                                label: "sur biens mobiliers",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6156,
                                label: "Maintenance",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 616,
                        label: "Primes d'assurances",
                        system: "base",
                        accounts: [
                            {
                                number: 6161,
                                label: "Multirisques",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6162,
                                label: "Assurance obligatoire dommage construction",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6163,
                                label: "Assurance transport",
                                system: "developed",
                                accounts: [
                                    {
                                        number: 61636,
                                        label: "sur achats",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 61637,
                                        label: "sur ventes",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 61638,
                                        label: "sur autres biens",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 6164,
                                label: "Risques d'exploitation",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6165,
                                label: "Insolvabilité clients",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 617,
                        label: "Études et recherches",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 618,
                        label: "Divers",
                        system: "base",
                        accounts: [
                            {
                                number: 6181,
                                label: "Documentation générale",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6183,
                                label: "Documentation technique",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6185,
                                label: "Frais de colloques, séminaires, conférences",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 619,
                        label: "Rabais, remises et ristournes obtenus sur services extérieurs",
                        system: "base",
                        accounts: []
                    }
                ]
            },
            {
                number: 62,
                label: "Autres services extérieurs",
                system: "condensed",
                accounts: [
                    {
                        number: 621,
                        label: "Personnel extérieur à l'entreprise",
                        system: "base",
                        accounts: [
                            {
                                number: 6211,
                                label: "Personnel intérimaire",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6214,
                                label: "Personnel détaché ou prêté à l'entreprise",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 622,
                        label: "Rémunérations d'intermédiaires et honoraires",
                        system: "base",
                        accounts: [
                            {
                                number: 6221,
                                label: "Commissions et courtages sur achats",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6222,
                                label: "Commissions et courtages sur ventes",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6224,
                                label: "Rémunérations des transitaires",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6225,
                                label: "Rémunérations d'affacturage",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6226,
                                label: "Honoraires",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6227,
                                label: "Frais d'actes et de contentieux",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6228,
                                label: "Divers",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 623,
                        label: "Publicité, publications, relations publiques",
                        system: "base",
                        accounts: [
                            {
                                number: 6231,
                                label: "Annonces et insertions",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6232,
                                label: "Échantillons",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6233,
                                label: "Foires et expositions",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6234,
                                label: "Cadeaux à la clientèle",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6235,
                                label: "Primes",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6236,
                                label: "Catalogues et imprimés",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6237,
                                label: "Publications",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6238,
                                label: "Divers (pourboires, dons courants, ...)",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 624,
                        label: "Transports de biens et transports collectifs du personnel",
                        system: "base",
                        accounts: [
                            {
                                number: 6241,
                                label: "Transports sur achats",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6242,
                                label: "Transports sur ventes",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6243,
                                label: "Transports entre établissements ou chantiers",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6244,
                                label: "Transports administratifs",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6247,
                                label: "Transports collectifs du personnel",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6248,
                                label: "Divers",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 625,
                        label: "Déplacements, missions et réceptions",
                        system: "base",
                        accounts: [
                            {
                                number: 6251,
                                label: "Voyages et déplacements",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6255,
                                label: "Frais de déménagement",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6256,
                                label: "Missions",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6257,
                                label: "Réceptions",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 626,
                        label: "Frais postaux et de télécommunications",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 627,
                        label: "Services bancaires et assimilés",
                        system: "base",
                        accounts: [
                            {
                                number: 6271,
                                label: "Frais sur titres (achat, vente, garde)",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6272,
                                label: "Commissions et frais sur émission d'emprunts",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6275,
                                label: "Frais sur effets",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6276,
                                label: "Location de coffres",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6278,
                                label: "Autres frais et commissions sur prestations de services",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 628,
                        label: "Divers",
                        system: "base",
                        accounts: [
                            {
                                number: 6281,
                                label: "Concours divers (cotisations, ...)",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6284,
                                label: "Frais de recrutement de personnel",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 629,
                        label: "Rabais, remises et ristournes obtenus sur autres services extérieurs",
                        system: "base",
                        accounts: []
                    }
                ]
            },
            {
                number: 63,
                label: "Impôts, taxes et versements assimilés",
                system: "condensed",
                accounts: [
                    {
                        number: 631,
                        label: "Impôts, taxes et versements assimilés sur rémunérations (administrations des impôts)",
                        system: "base",
                        accounts: [
                            {
                                number: 6311,
                                label: "Taxe sur les salaires",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6312,
                                label: "Taxe d'apprentissage",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6313,
                                label: "Participation des employeurs à la formation professionnelle continue",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6314,
                                label: "Cotisation pour défaut d'investissement obligatoire dans la construction",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6318,
                                label: "Autres",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 633,
                        label: "Impôts, taxes et versements assimilés sur rémunérations (autres organismes)",
                        system: "base",
                        accounts: [
                            {
                                number: 6331,
                                label: "Versement de transport",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6332,
                                label: "Allocations logement",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6333,
                                label: "Contribution unique des employeurs à la formation professionnelle",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6334,
                                label: "Participation des employeurs à l'effort de construction",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6335,
                                label: "Versements libératoires ouvrant droit à l'exonération de la taxe d'apprentissage",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6338,
                                label: "Autres",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 635,
                        label: "Autres impôts, taxes et versements assimilés (administrations des impôts)",
                        system: "base",
                        accounts: [
                            {
                                number: 6351,
                                label: "Impôts directs (sauf impôts sur les bénéfices)",
                                system: "developed",
                                accounts: [
                                    {
                                        number: 63511,
                                        label: "Contribution économique territoriale",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 63512,
                                        label: "Taxes foncières",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 63513,
                                        label: "Autres impôts locaux",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 63514,
                                        label: "Taxe sur les véhicules des sociétés",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 6352,
                                label: "Taxe sur le chiffre d'affaires non récupérables",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6353,
                                label: "Impôts indirects",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6354,
                                label: "Droits d'enregistrement et de timbre",
                                system: "developed",
                                accounts: [
                                    {
                                        number: 63541,
                                        label: "Droits de mutation",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 6358,
                                label: "Autres droits",
                                system: "base",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 637,
                        label: "Autres impôts, taxes et versements assimilés (autres organismes)",
                        system: "base",
                        accounts: [
                            {
                                number: 6371,
                                label: "Contribution sociale de solidarité à la charge des sociétés",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6372,
                                label: "Taxes perçues par les organismes publics internationaux",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6374,
                                label: "Impôts et taxes exigibles à l'Étranger",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6378,
                                label: "Taxes diverses",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 64,
                label: "Charges de personnel",
                system: "base",
                accounts: [
                    {
                        number: 641,
                        label: "Rémunérations du personnel",
                        system: "condensed",
                        accounts: [
                            {
                                number: 6411,
                                label: "Salaires, appointements",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6412,
                                label: "Congés payés",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6413,
                                label: "Primes et gratifications",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6414,
                                label: "Indemnités et avantages divers",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6415,
                                label: "Supplément familial",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 644,
                        label: "Rémunération du travail de l'exploitant",
                        system: "condensed",
                        accounts: []
                    },
                    {
                        number: 645,
                        label: "Charges de sécurité sociale et de prévoyance",
                        system: "condensed",
                        accounts: [
                            {
                                number: 6451,
                                label: "Cotisations à l'URSSAF",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6452,
                                label: "Cotisations aux mutuelles",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6453,
                                label: "Cotisations aux caisses de retraites",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6454,
                                label: "Cotisations aux ASSEDIC",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6458,
                                label: "Cotisations aux autres organismes sociaux",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 646,
                        label: "Cotisations sociales personnelles de l'exploitant",
                        system: "condensed",
                        accounts: []
                    },
                    {
                        number: 647,
                        label: "Autres charges sociales",
                        system: "base",
                        accounts: [
                            {
                                number: 6471,
                                label: "Prestations directes",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6472,
                                label: "Versements aux comités d'entreprise et d'établissement",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6473,
                                label: "Versements aux comités d'hygiène et de sécurité",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6474,
                                label: "Versements aux autres œuvres sociales",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6475,
                                label: "Médecine du travail, pharmacie",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 648,
                        label: "Autres charges de personnel",
                        system: "base",
                        accounts: []
                    }
                ]
            },
            {
                number: 65,
                label: "Autres charges de gestion courante",
                system: "condensed",
                accounts: [
                    {
                        number: 651,
                        label: "Redevances pour concessions, brevets, licences, marques, procédés, logiciels, droits et valeurs similaires",
                        system: "base",
                        accounts: [
                            {
                                number: 6511,
                                label: "Redevances pour concessions, brevets, licences, marques, procédés, logiciels",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6516,
                                label: "Droits d'auteur et de reproduction",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6518,
                                label: "Autres droits et valeurs similaires",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 653,
                        label: "Jetons de présence",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 654,
                        label: "Pertes sur créances irrécouvrables",
                        system: "base",
                        accounts: [
                            {
                                number: 6541,
                                label: "Créances de l'exercice",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6544,
                                label: "Créances des exercices antérieurs",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 655,
                        label: "Quote-part de résultat sur opérations faites en commun",
                        system: "base",
                        accounts: [
                            {
                                number: 6551,
                                label: "Quote-part de bénéfice transférée (comptabilité du gérant)",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6555,
                                label: "Quote-part de perte supportée (comptabilité des associés non gérants)",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 656,
                        label: "Pertes de change sur créances commerciales",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 658,
                        label: "Charges diverses de gestion courante",
                        system: "base",
                        accounts: []
                    }
                ]
            },
            {
                number: 66,
                label: "Charges financières",
                system: "condensed",
                accounts: [
                    {
                        number: 661,
                        label: "Charges d'intérêts",
                        system: "base",
                        accounts: [
                            {
                                number: 6611,
                                label: "Intérêts des emprunts et dettes",
                                system: "developed",
                                accounts: [
                                    {
                                        number: 66116,
                                        label: "des emprunts et dettes assimilées",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 66117,
                                        label: "des dettes rattachées à des participations",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 6612,
                                label: "Charges de la fiducie, résultat de la période",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6615,
                                label: "Intérêts des comptes courants et des dépôts créditeurs",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6616,
                                label: "Intérêts bancaires et sur opérations de financement (escompte, ...)",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6617,
                                label: "Intérêts des obligations cautionnées",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6618,
                                label: "Intérêts des autres dettes",
                                system: "developed",
                                accounts: [
                                    {
                                        number: 66181,
                                        label: "des dettes commerciales",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 66188,
                                        label: "des dettes diverses",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 664,
                        label: "Pertes sur créances liées à des participations",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 665,
                        label: "Escomptes accordés",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 666,
                        label: "Pertes de change financières",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 667,
                        label: "Charges nettes sur cessions de valeurs mobilières de placement",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 668,
                        label: "Autres charges financières",
                        system: "base",
                        accounts: []
                    }
                ]
            },
            {
                number: 67,
                label: "Charges exceptionnelles",
                system: "condensed",
                accounts: [
                    {
                        number: 671,
                        label: "Charges exceptionnelles sur opérations de gestion",
                        system: "base",
                        accounts: [
                            {
                                number: 6711,
                                label: "Pénalités sur marchés (et dédits payés sur achats et ventes)",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6712,
                                label: "Pénalités, amendes fiscales et pénales",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6713,
                                label: "Dons, libéralités",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6714,
                                label: "Créances devenues irrécouvrables dans l'exercice",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6715,
                                label: "Subventions accordées",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6717,
                                label: "Rappel d'impôts (autres qu'impôts sur les bénéfices)",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6718,
                                label: "Autres charges exceptionnelles sur opérations de gestion",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 672,
                        label: "(Compte à la disposition des entités pour enregistrer, en cours d'exercice, les charges sur exercices antérieurs)",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 674,
                        label: "Opérations de constitution ou liquidation des fiducies",
                        system: "base",
                        accounts: [
                            {
                                number: 6741,
                                label: "Opérations liées à la constitution de fiducie - Transfert des éléments",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6742,
                                label: "Opérations liées à la liquidation de la fiducie",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 675,
                        label: "Valeurs comptables des éléments d'actif cédés",
                        system: "base",
                        accounts: [
                            {
                                number: 6751,
                                label: "Immobilisations incorporelles",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6752,
                                label: "Immobilisations corporelles",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6756,
                                label: "Immobilisations financières",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6758,
                                label: "Autres éléments d'actif",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 678,
                        label: "Autres charges exceptionnelles",
                        system: "base",
                        accounts: [
                            {
                                number: 6781,
                                label: "Malis provenant de clauses d'indexation",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6782,
                                label: "Lots",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6783,
                                label: "Malis provenant du rachat par l'entreprise d'actions et obligations émises par elle-même",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6788,
                                label: "Charges exceptionnelles diverses",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 68,
                label: "Dotations aux amortissements, aux dépréciations et aux provisions",
                system: "base",
                accounts: [
                    {
                        number: 681,
                        label: "Dotations aux amortissements, aux dépréciations et aux provisions - Charges d'exploitation",
                        system: "condensed",
                        accounts: [
                            {
                                number: 6811,
                                label: "Dotations aux amortissements sur immobilisations incorporelles et corporelles",
                                system: "base",
                                accounts: [
                                    {
                                        number: 68111,
                                        label: "Immobilisations incorporelles",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 68112,
                                        label: "Immobilisations corporelles",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 6812,
                                label: "Dotations aux amortissements des charges d'exploitation à répartir",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 6815,
                                label: "Dotations aux provisions d'exploitation",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 6816,
                                label: "Dotations pour dépréciations des immobilisations incorporelles et corporelles",
                                system: "base",
                                accounts: [
                                    {
                                        number: 68161,
                                        label: "Immobilisations incorporelles",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 68162,
                                        label: "Immobilisations corporelles",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 6817,
                                label: "Dotations pour dépréciations des actifs circulants",
                                system: "base",
                                accounts: [
                                    {
                                        number: 68173,
                                        label: "Stocks et en-cours",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 68174,
                                        label: "Créances",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 686,
                        label: "Dotations aux amortissements, aux dépréciations et aux provisions - Charges financières",
                        system: "condensed",
                        accounts: [
                            {
                                number: 6861,
                                label: "Dotations aux amortissements des primes de remboursement des obligations",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 6865,
                                label: "Dotations aux provisions financières",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 6866,
                                label: "Dotations pour dépréciations des éléments financiers",
                                system: "base",
                                accounts: [
                                    {
                                        number: 68662,
                                        label: "Immobilisations financières",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 68665,
                                        label: "Valeurs mobilières de placement",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 6868,
                                label: "Autres dotations",
                                system: "base",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 687,
                        label: "Dotations aux amortissements, aux dépréciations et aux provisions - Charges exceptionnelles",
                        system: "condensed",
                        accounts: [
                            {
                                number: 6871,
                                label: "Dotations aux amortissements exceptionnels des immobilisations",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 6872,
                                label: "Dotations aux provisions réglementées (immobilisations)",
                                system: "base",
                                accounts: [
                                    {
                                        number: 68725,
                                        label: "Amortissements dérogatoires",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 6873,
                                label: "Dotations aux provisions réglementées (stocks)",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 6874,
                                label: "Dotations aux autres provisions réglementées",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 6875,
                                label: "Dotations aux provisions exceptionnelles",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 6876,
                                label: "Dotations pour dépréciations exceptionnelles",
                                system: "base",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 69,
                label: "Participation des salariés - Impôts sur les bénéfices et assimilés",
                system: "base",
                accounts: [
                    {
                        number: 691,
                        label: "Participation des salariés aux résultats",
                        system: "condensed",
                        accounts: []
                    },
                    {
                        number: 695,
                        label: "Impôts sur les bénéfices",
                        system: "condensed",
                        accounts: [
                            {
                                number: 6951,
                                label: "Impôts dus en France",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6952,
                                label: "Contribution additionnelle à l'impôt sur les bénéfices",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 6954,
                                label: "Impôts dus à l'étranger",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 696,
                        label: "Suppléments d'impôt sur les sociétés liés aux distributions",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 698,
                        label: "Intégration fiscale",
                        system: "base",
                        accounts: [
                            {
                                number: 6981,
                                label: "Intégration fiscale - Charges",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 6989,
                                label: "Intégration fiscale - Produits",
                                system: "base",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 699,
                        label: "Produits - Reports en arrière des déficits",
                        system: "condensed",
                        accounts: []
                    }
                ]
            }
        ]
    },
    {
        number: 7,
        label: "Comptes de produits",
        system: "condensed",
        accounts: [
            {
                number: 70,
                label: "Ventes de produits fabriqués, prestations de services, marchandises",
                system: "base",
                accounts: [
                    {
                        number: 701,
                        label: "Ventes de produits finis",
                        system: "condensed",
                        accounts: [
                            {
                                number: 7011,
                                label: "Produits finis (ou groupe) A",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7012,
                                label: "Produits finis (ou groupe) B",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 702,
                        label: "Ventes de produits intermédiaires",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 703,
                        label: "Ventes de produits résiduels",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 704,
                        label: "Travaux",
                        system: "base",
                        accounts: [
                            {
                                number: 7041,
                                label: "Travaux de catégorie (ou activité) A",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 7042,
                                label: "Travaux de catégorie (ou activité) B",
                                system: "base",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 705,
                        label: "Études",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 706,
                        label: "Prestations de services",
                        system: "condensed",
                        accounts: []
                    },
                    {
                        number: 707,
                        label: "Ventes de marchandises",
                        system: "condensed",
                        accounts: [
                            {
                                number: 7071,
                                label: "Marchandises (ou groupe) A",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7072,
                                label: "Marchandises (ou groupe) B",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 708,
                        label: "Produits des activités annexes",
                        system: "condensed",
                        accounts: [
                            {
                                number: 7081,
                                label: "Produits des services exploités dans l'intérêt du personnel",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7082,
                                label: "Commissions et courtages",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7083,
                                label: "Locations diverses",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7084,
                                label: "Mise à disposition de personnel facturée",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7085,
                                label: "Ports et frais accessoires facturés",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7086,
                                label: "Bonis sur reprises d'emballages consignés",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7087,
                                label: "Bonifications obtenues des clients et primes sur ventes",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7088,
                                label: "Autres produits d'activités annexes (cessions d'approvisionnements, ...)",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 709,
                        label: "Rabais, remises et ristournes accordés par l'entreprise",
                        system: "condensed",
                        accounts: [
                            {
                                number: 7091,
                                label: "sur ventes de produits finis",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7092,
                                label: "sur ventes de produits intermédiaires",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7094,
                                label: "sur travaux",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7095,
                                label: "sur études",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7096,
                                label: "sur prestations de services",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7097,
                                label: "sur ventes de marchandises",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7098,
                                label: "sur produits des activités annexes",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 71,
                label: "Production stockée (ou déstockage)",
                system: "base",
                accounts: []
            },
            {
                number: 713,
                label: "Variation des stocks (en-cours de production, produits)",
                system: "condensed",
                accounts: [
                    {
                        number: 7133,
                        label: "Variation des en-cours de production de biens",
                        system: "base",
                        accounts: [
                            {
                                number: 71331,
                                label: "Produits en cours",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 71335,
                                label: "Travaux en cours",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 7134,
                        label: "Variation des en-cours de production de services",
                        system: "base",
                        accounts: [
                            {
                                number: 71341,
                                label: "Études en cours",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 71345,
                                label: "Prestations de services en cours",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 7135,
                        label: "Variation des stocks de produits",
                        system: "base",
                        accounts: [
                            {
                                number: 71351,
                                label: "Produits intermédiaires",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 71355,
                                label: "Produits finis",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 71358,
                                label: "Produits résiduels",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 72,
                label: "Production immobilisée",
                system: "condensed",
                accounts: [
                    {
                        number: 721,
                        label: "Immobilisations incorporelles",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 722,
                        label: "Immobilisations corporelles",
                        system: "base",
                        accounts: []
                    }
                ]
            },
            {
                number: 74,
                label: "Subventions d'exploitation",
                system: "condensed",
                accounts: []
            },
            {
                number: 75,
                label: "Autres produits de gestion courante",
                system: "condensed",
                accounts: [
                    {
                        number: 751,
                        label: "Redevances pour concessions, brevets, licences, marques, procédés, logiciels, droits et valeurs similaires",
                        system: "base",
                        accounts: [
                            {
                                number: 7511,
                                label: "Redevances pour concessions, brevets, licences, marques, procédés, logiciels",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7516,
                                label: "Droits d'auteur et de reproduction",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7518,
                                label: "Autres droits et valeurs similaires",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 752,
                        label: "Revenus des immeubles non affectés à des activités professionnelles",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 753,
                        label: "Jetons de présence et rémunérations d'administrateurs, gérants",
                        system: "condensed",
                        accounts: []
                    },
                    {
                        number: 754,
                        label: "Ristournes perçues des coopératives (provenant des excédents)",
                        system: "condensed",
                        accounts: []
                    },
                    {
                        number: 755,
                        label: "Quote-parts de résultat sur opérations faites en commun",
                        system: "condensed",
                        accounts: [
                            {
                                number: 7551,
                                label: "Quote-part de perte transférée (comptabilité du gérant)",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7555,
                                label: "Quote-part de bénéfice attribuée (comptabilité des associés non-gérants)",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 756,
                        label: "Gains de change sur créances commerciales",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 758,
                        label: "Produits divers de gestion courante",
                        system: "base",
                        accounts: []
                    }
                ]
            },
            {
                number: 76,
                label: "Produits financiers",
                system: "condensed",
                accounts: [
                    {
                        number: 761,
                        label: "Produits de participations",
                        system: "base",
                        accounts: [
                            {
                                number: 7611,
                                label: "Revenus des titres de participation",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7612,
                                label: "Produits de la fiducie, résultat de la période",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7616,
                                label: "Revenus sur autres formes de participation",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7617,
                                label: "Revenus des créances rattachées à des participations",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 762,
                        label: "Produits des autres immobilisations financières",
                        system: "base",
                        accounts: [
                            {
                                number: 7621,
                                label: "Revenus des titres immobilisés",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7626,
                                label: "Revenus des prêts",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7627,
                                label: "Revenus des créances immobilisées",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 763,
                        label: "Revenus des autres créances",
                        system: "base",
                        accounts: [
                            {
                                number: 7631,
                                label: "Revenus des créances commerciales",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7638,
                                label: "Revenus des créances diverses",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 764,
                        label: "Revenus des valeurs mobilières de placement",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 765,
                        label: "Escomptes obtenus",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 766,
                        label: "Gains de change financiers",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 767,
                        label: "Produits nets sur cessions de valeurs mobilières de placement",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 768,
                        label: "Autres produits financiers",
                        system: "base",
                        accounts: []
                    }
                ]
            },
            {
                number: 77,
                label: "Produits exceptionnels",
                system: "condensed",
                accounts: [
                    {
                        number: 771,
                        label: "Produits exceptionnels sur opérations de gestion",
                        system: "base",
                        accounts: [
                            {
                                number: 7711,
                                label: "Dédits et pénalités perçus sur achats et sur ventes",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7713,
                                label: "Libéralités reçues",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7714,
                                label: "Rentrées sur créances amorties",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7715,
                                label: "Subventions d'équilibre",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7717,
                                label: "Dégrèvements d'impôts autres qu'impôts sur les bénéfices",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7718,
                                label: "Autres produits exceptionnels sur opérations de gestion",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 772,
                        label: "(Compte à la disposition des entités pour enregistrer, en cours d'exercice, les produits sur exercices antérieurs)",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 774,
                        label: "Opérations de constitution ou liquidation des fiducies",
                        system: "base",
                        accounts: [
                            {
                                number: 7741,
                                label: "Opérations liées à la constitution de fiducie - Transfert des éléments",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7742,
                                label: "Opérations liées à la liquidation de la fiducie",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 775,
                        label: "Produits des cessions d'éléments d'actif",
                        system: "base",
                        accounts: [
                            {
                                number: 7751,
                                label: "Immobilisations incorporelles",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7752,
                                label: "Immobilisations corporelles",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7756,
                                label: "Immobilisations financières",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7758,
                                label: "Autres éléments d'actif",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 777,
                        label: "Quote-part des subventions d'investissement virée au résultat de l'exercice",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 778,
                        label: "Autres produits exceptionnels",
                        system: "base",
                        accounts: [
                            {
                                number: 7781,
                                label: "Bonis provenant de clauses d'indexation",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7782,
                                label: "Lots",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7783,
                                label: "Bonis provenant du rachat par l'entreprise d'actions et d'obligations émises par elle-même",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 7788,
                                label: "Produits exceptionnels divers",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 78,
                label: "Reprises sur amortissements, dépréciations et provisions",
                system: "base",
                accounts: [
                    {
                        number: 781,
                        label: "Reprises sur amortissements, dépréciations et provisions (à inscrire dans les produits d'exploitation)",
                        system: "condensed",
                        accounts: [
                            {
                                number: 7811,
                                label: "Reprises sur amortissements des immobilisations incorporelles et corporelles",
                                system: "base",
                                accounts: [
                                    {
                                        number: 78111,
                                        label: "Immobilisations incorporelles",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 78112,
                                        label: "Immobilisations corporelles",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 7815,
                                label: "Reprises sur provisions d'exploitation",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 7816,
                                label: "Reprises sur dépréciations des immobilisations incorporelles et corporelles",
                                system: "base",
                                accounts: [
                                    {
                                        number: 78161,
                                        label: "Immobilisations incorporelles",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 78162,
                                        label: "Immobilisations corporelles",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 7817,
                                label: "Reprises sur dépréciations des actifs circulants",
                                system: "base",
                                accounts: [
                                    {
                                        number: 78173,
                                        label: "Stocks et en-cours",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 78174,
                                        label: "Créances",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 786,
                        label: "Reprises sur provisions pour risques et dépréciations (à inscrire dans les produits financiers)",
                        system: "condensed",
                        accounts: [
                            {
                                number: 7865,
                                label: "Reprises sur provisions financières",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 7866,
                                label: "Reprises sur dépréciations des éléments financiers",
                                system: "base",
                                accounts: [
                                    {
                                        number: 78662,
                                        label: "Immobilisations financières",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 78665,
                                        label: "Valeurs mobilières de placements",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        number: 787,
                        label: "Reprises sur provisions et dépréciations (à inscrire dans les produits exceptionnels)",
                        system: "condensed",
                        accounts: [
                            {
                                number: 7872,
                                label: "Reprises sur provisions réglementées (immobilisations)",
                                system: "base",
                                accounts: [
                                    {
                                        number: 78725,
                                        label: "Amortissements dérogatoires",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 78726,
                                        label: "Provision spéciale de réévaluation",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 78727,
                                        label: "Plus-values réinvesties",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 7873,
                                label: "Reprises sur provisions réglementées (stocks)",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 7874,
                                label: "Reprises sur autres provisions réglementées",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 7875,
                                label: "Reprises sur provisions exceptionnelles",
                                system: "base",
                                accounts: []
                            },
                            {
                                number: 7876,
                                label: "Reprises sur dépréciations exceptionnelles",
                                system: "base",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 79,
                label: "Transferts de charges",
                system: "condensed",
                accounts: [
                    {
                        number: 791,
                        label: "Transferts de charges d'exploitation",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 796,
                        label: "Transferts de charges financières",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 797,
                        label: "Transferts de charges exceptionnelles",
                        system: "base",
                        accounts: []
                    }
                ]
            }
        ]
    },
    {
        number: 8,
        label: "Comptes spéciaux",
        system: "condensed",
        accounts: [
            {
                number: 80,
                label: "Engagements",
                system: "base",
                accounts: [
                    {
                        number: 801,
                        label: "Engagements donnés par l'entité",
                        system: "condensed",
                        accounts: [
                            {
                                number: 8011,
                                label: "Avals, cautions, garanties",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 8014,
                                label: "Effets circulant sous l'endos de l'entité",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 8016,
                                label: "Redevances crédit-bail restant à courir",
                                system: "developed",
                                accounts: [
                                    {
                                        number: 80161,
                                        label: "Crédit-bail mobilier",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 80165,
                                        label: "Crédit-bail immobilier",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 8018,
                                label: "Autres engagements donnés",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 802,
                        label: "Engagements reçus par l'entité",
                        system: "condensed",
                        accounts: [
                            {
                                number: 8021,
                                label: "Avals, cautions, garanties",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 8024,
                                label: "Créances escomptées non échues",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 8026,
                                label: "Engagements reçus pour utilisation en crédit-bail",
                                system: "developed",
                                accounts: [
                                    {
                                        number: 80261,
                                        label: "Crédit-bail mobilier",
                                        system: "developed",
                                        accounts: []
                                    },
                                    {
                                        number: 80265,
                                        label: "Crédit-bail immobilier",
                                        system: "developed",
                                        accounts: []
                                    }
                                ]
                            },
                            {
                                number: 8028,
                                label: "Autres engagements reçus",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    },
                    {
                        number: 809,
                        label: "Contrepartie des engagements",
                        system: "condensed",
                        accounts: [
                            {
                                number: 8091,
                                label: "Contrepartie 801",
                                system: "developed",
                                accounts: []
                            },
                            {
                                number: 8092,
                                label: "Contrepartie 802",
                                system: "developed",
                                accounts: []
                            }
                        ]
                    }
                ]
            },
            {
                number: 88,
                label: "Résultat en instance d'affectation",
                system: "base",
                accounts: []
            },
            {
                number: 89,
                label: "Bilan",
                system: "base",
                accounts: [
                    {
                        number: 890,
                        label: "Bilan d'ouverture",
                        system: "base",
                        accounts: []
                    },
                    {
                        number: 891,
                        label: "Bilan de clôture",
                        system: "base",
                        accounts: []
                    }
                ]
            }
        ]
    }
]
