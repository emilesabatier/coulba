

export type DefaultSheet = {
    side: "asset" | "liability"
    number: number
    label: string
    accounts: number[]
    sheets: DefaultSheet[]
}

export const defaultSheets: DefaultSheet[] = [
    {
        side: "asset",
        number: 1,
        label: "Capital souscrit non appelé",
        accounts: [
            109
        ],
        sheets: []
    },
    {
        side: "asset",
        number: 2,
        label: "Actif immobilisé",
        accounts: [],
        sheets: [
            {
                side: "asset",
                number: 1,
                label: "Immobilisations incorporelles",
                accounts: [],
                sheets: [
                    {
                        side: "asset",
                        number: 1,
                        label: "Frais d'établissement",
                        accounts: [
                            201,
                            2011,
                            2012,
                            20121,
                            20122,
                            2013,
                            2801
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 2,
                        label: "Frais de recherche et développement",
                        accounts: [
                            203,
                            2803
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 3,
                        label: "Concessions, brevets, licences, marques, procédés, logiciels, droits et valeurs similaires",
                        accounts: [
                            205,
                            2805,
                            2905
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 4,
                        label: "Fonds commercial",
                        accounts: [
                            206,
                            207,
                            2807,
                            2906,
                            2907
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 5,
                        label: "Autres",
                        accounts: [
                            208,
                            2081,
                            2808,
                            28081,
                            2908,
                            29081
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 6,
                        label: "Immobilisations incorporelles en cours",
                        accounts: [
                            232,
                            2932
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 7,
                        label: "Avances et acomptes",
                        accounts: [
                            237
                        ],
                        sheets: []
                    }
                ]
            },
            {
                side: "asset",
                number: 2,
                label: "Immobilisations corporelles",
                accounts: [],
                sheets: [
                    {
                        side: "asset",
                        number: 1,
                        label: "Terrains",
                        accounts: [
                            211,
                            2111,
                            2112,
                            2113,
                            2114,
                            21141,
                            2115,
                            21151,
                            21155,
                            21158,
                            211581,
                            211588,
                            2116,
                            212,
                            2812
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 2,
                        label: "Constructions",
                        accounts: [
                            213,
                            2131,
                            21311,
                            21315,
                            21318,
                            213181,
                            213188,
                            2135,
                            21351,
                            21355,
                            21358,
                            213581,
                            213588,
                            2138,
                            21381,
                            21382,
                            21383,
                            21384,
                            21385,
                            214,
                            2813,
                            2814
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 3,
                        label: "Installations techniques, matériel et outillage industriels",
                        accounts: [
                            215,
                            2151,
                            21511,
                            21514,
                            2153,
                            21531,
                            21534,
                            2154,
                            2155,
                            2157,
                            2815
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 4,
                        label: "Autres",
                        accounts: [
                            218,
                            2181,
                            2182,
                            2183,
                            2184,
                            2185,
                            2186,
                            2187,
                            282,
                            292,
                            2818,
                            28181,
                            28182,
                            28183,
                            28184,
                            28187,
                            29187
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 5,
                        label: "Immobilisations corporelles en cours",
                        accounts: [
                            231,
                            2312,
                            2313,
                            2315,
                            2318,
                            2931
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 6,
                        label: "Avances et acomptes",
                        accounts: [
                            238,
                            2382,
                            2383,
                            2385,
                            2388
                        ],
                        sheets: []
                    }
                ]
            },
            {
                side: "asset",
                number: 3,
                label: "Immobilisations mises en concession",
                accounts: [],
                sheets: [
                    {
                        side: "asset",
                        number: 1,
                        label: "Immobilisations mises en concession",
                        accounts: [
                            22
                        ],
                        sheets: []
                    },
                ]
            },
            {
                side: "asset",
                number: 4,
                label: "Immobilisations financières",
                accounts: [],
                sheets: [
                    {
                        side: "asset",
                        number: 1,
                        label: "Participations",
                        accounts: [
                            261,
                            2611,
                            2618,
                            266,
                            2661,
                            2961,
                            2966
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 2,
                        label: "Créances rattachées à des participations",
                        accounts: [
                            267,
                            2671,
                            2674,
                            2675,
                            2676,
                            2677,
                            2678,
                            268,
                            2681,
                            2688,
                            269,
                            2967,
                            2968
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 3,
                        label: "Parts dans des entreprises liées et créances sur des entreprises liées",
                        accounts: [
                            25
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 4,
                        label: "Titres immobilisés de l'activité de portefeuille",
                        accounts: [
                            273,
                            2973
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 5,
                        label: "Autres titres immobilisés",
                        accounts: [
                            271,
                            2711,
                            2718,
                            272,
                            2721,
                            2722,
                            27682,
                            2971,
                            2972
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 6,
                        label: "Prêts",
                        accounts: [
                            274,
                            2741,
                            2742,
                            2743,
                            2748,
                            27684,
                            2974
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 7,
                        label: "Actions ou parts propres",
                        accounts: [
                            277,
                            2771,
                            2772
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 8,
                        label: "Autres",
                        accounts: [
                            275,
                            2751,
                            2755,
                            2761,
                            27685,
                            27688,
                            278,
                            279,
                            2975,
                            2976,
                            2978,
                            29787
                        ],
                        sheets: []
                    },
                ]
            }
        ]
    },
    {
        side: "asset",
        number: 3,
        label: "Actif circulant",
        accounts: [],
        sheets: [
            {
                side: "asset",
                number: 1,
                label: "Stocks et en-cours",
                accounts: [],
                sheets: [
                    {
                        side: "asset",
                        number: 1,
                        label: "Matières premières et autres approvisionnements",
                        accounts: [
                            31,
                            311,
                            312,
                            317,
                            32,
                            321,
                            3211,
                            3212,
                            322,
                            3221,
                            3222,
                            3223,
                            3224,
                            3225,
                            326,
                            3261,
                            3265,
                            3267,
                            391,
                            3911,
                            3912,
                            3917,
                            392,
                            3921,
                            3922,
                            3926
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 2,
                        label: "En-cours de production [biens et services]",
                        accounts: [
                            33,
                            331,
                            3311,
                            3312,
                            335,
                            3351,
                            3352,
                            34,
                            341,
                            3411,
                            3412,
                            345,
                            3451,
                            3452,
                            393,
                            3931,
                            3935,
                            394,
                            3941,
                            3945
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 3,
                        label: "Produits intermédiaires et finis",
                        accounts: [
                            35,
                            351,
                            3511,
                            3512,
                            355,
                            3551,
                            3552,
                            358,
                            3581,
                            3585,
                            3586,
                            395,
                            3951,
                            3955
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 4,
                        label: "Stocks provenant d'immobilisations",
                        accounts: [
                            36
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 5,
                        label: "Marchandises",
                        accounts: [
                            37,
                            371,
                            372,
                            397,
                            3971,
                            3972
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 6,
                        label: "Stocks en voie d'acheminement, mis en dépôt ou donnés en consignation",
                        accounts: [
                            38
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 7,
                        label: "Avances et acomptes versés sur commandes",
                        accounts: [
                            4091
                        ],
                        sheets: []
                    },
                ]
            },
            {
                side: "asset",
                number: 2,
                label: "Créances",
                accounts: [],
                sheets: [
                    {
                        side: "asset",
                        number: 1,
                        label: "Créances Clients et comptes rattachés",
                        accounts: [
                            410,
                            411,
                            4111,
                            4117,
                            413,
                            416,
                            418,
                            4181,
                            4188,
                            491
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 2,
                        label: "Autres",
                        accounts: [
                            4096,
                            4097,
                            40971,
                            40974,
                            4098,
                            425,
                            4287,
                            4387,
                            441,
                            4411,
                            4417,
                            4418,
                            4419,
                            443,
                            444,
                            4456,
                            44562,
                            44563,
                            44566,
                            445662,
                            445663,
                            44567,
                            44568,
                            44581,
                            44582,
                            44583,
                            44586,
                            4487,
                            451,
                            455,
                            456,
                            4561,
                            45611,
                            45615,
                            4563,
                            4564,
                            4566,
                            4567,
                            458,
                            4581,
                            4588,
                            462,
                            465,
                            467,
                            4687,
                            4786,
                            47861,
                            47862,
                            489,
                            495,
                            4951,
                            4955,
                            4958,
                            496,
                            4962,
                            4965,
                            4967
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 3,
                        label: "Capital souscrit - appelé, non versé",
                        accounts: [
                            4562,
                            45621,
                            45625
                        ],
                        sheets: []
                    }
                ]
            },
            {
                side: "asset",
                number: 3,
                label: "Valeurs mobilières de placement",
                accounts: [],
                sheets: [
                    {
                        side: "asset",
                        number: 1,
                        label: "Actions propres",
                        accounts: [
                            502,
                            5021,
                            5022
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 2,
                        label: "Autres titres",
                        accounts: [
                            501,
                            503,
                            5031,
                            5035,
                            504,
                            505,
                            506,
                            5061,
                            5065,
                            507,
                            508,
                            5081,
                            5082,
                            5088,
                            59,
                            590,
                            5903,
                            5904,
                            5906,
                            5908
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 3,
                        label: "Instruments financiers à terme et jetons détenus",
                        accounts: [
                            52,
                            521,
                            522,
                            523,
                            524
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 4,
                        label: "Disponibilités",
                        accounts: [
                            511,
                            5111,
                            5112,
                            5113,
                            5114,
                            512,
                            5121,
                            5124,
                            514,
                            515,
                            516,
                            517,
                            518,
                            5181,
                            5188,
                            53,
                            531,
                            5311,
                            5314,
                            532,
                            533,
                            54
                        ],
                        sheets: []
                    },
                    {
                        side: "asset",
                        number: 5,
                        label: "Charges constatées d'avance",
                        accounts: [
                            486
                        ],
                        sheets: []
                    }
                ]
            },
            {
                side: "asset",
                number: 4,
                label: "Dettes",
                accounts: [],
                sheets: [
                    {
                        side: "asset",
                        number: 1,
                        label: "Comptes de répartition périodique des charges",
                        accounts: [
                            4886
                        ],
                        sheets: []
                    }
                ]
            }
        ]
    },
    {
        side: "asset",
        number: 4,
        label: "Charges à répartir sur plusieurs exercices",
        accounts: [
            481,
            4811,
            4812,
            4816,
            4818
        ],
        sheets: []
    },
    {
        side: "asset",
        number: 5,
        label: "Charges à répartir sur plusieurs exercices",
        accounts: [
            481,
            4811,
            4812,
            4816,
            4818
        ],
        sheets: []
    },
    {
        side: "asset",
        number: 6,
        label: "Primes de remboursement des emprunts",
        accounts: [
            169
        ],
        sheets: []
    },
    {
        side: "asset",
        number: 7,
        label: "Écarts de conversion et différences d'évaluation",
        accounts: [
            4746,
            476,
            4761,
            4762,
            4768
        ],
        sheets: []
    },
    {
        side: "liability",
        number: 1,
        label: "Capitaux propres",
        accounts: [],
        sheets: [{
            side: "liability",
            number: 1,
            label: "Capital",
            accounts: [
                101,
                1011,
                1012,
                1013,
                10131,
                10132,
                1018,
                108
            ],
            sheets: []
        },
        {
            side: "liability",
            number: 2,
            label: "Primes d'émission, de fusion, d'apport,...",
            accounts: [
                104,
                1041,
                1042,
                1043,
                1044,
                1045
            ],
            sheets: []
        },
        {
            side: "liability",
            number: 3,
            label: "Écarts de réévaluation",
            accounts: [
                105,
                1051,
                1052,
                1053,
                1055,
                1057,
                1058
            ],
            sheets: []
        },
        {
            side: "liability",
            number: 4,
            label: "Écart d'équivalence",
            accounts: [
                107
            ],
            sheets: []
        },
        {
            side: "liability",
            number: 5,
            label: "Réserve légale",
            accounts: [
                1061,
                10611,
                10612
            ],
            sheets: []
        },
        {
            side: "liability",
            number: 6,
            label: "Réserves statutaires ou contractuelles",
            accounts: [
                1063
            ],
            sheets: []
        },
        {
            side: "liability",
            number: 7,
            label: "Réserves réglementées",
            accounts: [
                1062,
                1064,
                10641,
                10643,
                10648
            ],
            sheets: []
        },
        {
            side: "liability",
            number: 8,
            label: "Réserves",
            accounts: [],
            sheets: [
                {
                    side: "liability",
                    number: 1,
                    label: "Autres",
                    accounts: [
                        1068,
                        10681,
                        10688
                    ],
                    sheets: []
                },
            ]
        },
        {
            side: "liability",
            number: 9,
            label: "Report à nouveau",
            accounts: [
                11,
                110,
                119
            ],
            sheets: []
        },
        {
            side: "liability",
            number: 10,
            label: "Résultat de l'exercice",
            accounts: [
                12,
                120,
                129
            ],
            sheets: []
        },
        {
            side: "liability",
            number: 11,
            label: "Subventions d'investissement",
            accounts: [
                13,
                131,
                1311,
                1312,
                1313,
                1314,
                1315,
                1316,
                1317,
                1318,
                138,
                139,
                1391,
                13911,
                13912,
                13913,
                13914,
                13915,
                13916,
                13917,
                13918,
                1398
            ],
            sheets: []
        },
        {
            side: "liability",
            number: 12,
            label: "Provisions réglementées",
            accounts: [
                14,
                142,
                1423,
                1424,
                143,
                1431,
                1432,
                144,
                145,
                146,
                147,
                148
            ],
            sheets: []
        }]
    },
    {
        side: "liability",
        number: 2,
        label: "Provisions",
        accounts: [],
        sheets: [{
            side: "liability",
            number: 1,
            label: "Provisions pour risques",
            accounts: [
                151,
                1511,
                1512,
                1513,
                1514,
                1515,
                1516,
                1518
            ],
            sheets: []
        },
        {
            side: "liability",
            number: 2,
            label: "Provisions pour charges",
            accounts: [
                153,
                154,
                155,
                156,
                157,
                1572,
                158,
                1581,
                1582
            ],
            sheets: []
        }]
    },
    {
        side: "liability",
        number: 3,
        label: "Dettes",
        accounts: [],
        sheets: [
            {
                side: "liability",
                number: 1,
                label: "Emprunts obligataires convertibles",
                accounts: [
                    161,
                    16881
                ],
                sheets: []
            },
            {
                side: "liability",
                number: 2,
                label: "Autres emprunts obligataires",
                accounts: [
                    163,
                    16883
                ],
                sheets: []
            },
            {
                side: "liability",
                number: 3,
                label: "Emprunts et dettes auprès des établissements de crédit",
                accounts: [
                    164,
                    16884,
                    512,
                    514,
                    517,
                    5186,
                    519,
                    5191,
                    5193,
                    5198
                ],
                sheets: []
            },
            {
                side: "liability",
                number: 4,
                label: "Emprunts et dettes financières diverses",
                accounts: [
                    165,
                    1651,
                    1655,
                    166,
                    1661,
                    1662,
                    1671,
                    1674,
                    1675,
                    168,
                    1681,
                    1685,
                    1687,
                    16885,
                    16886,
                    16887,
                    16888,
                    17,
                    171,
                    174,
                    178,
                    1781,
                    1788,
                    426,
                    451,
                    455,
                    4551,
                    4558,
                    456,
                    4561,
                    45611,
                    45615,
                    4563,
                    4564,
                    4566,
                    4567
                ],
                sheets: []
            },
            {
                side: "liability",
                number: 5,
                label: "Comptes de liaison",
                accounts: [
                    18,
                    181,
                    186,
                    187,
                    188
                ],
                sheets: []
            },
            {
                side: "liability",
                number: 6,
                label: "Avances et acomptes reçus sur commandes en cours",
                accounts: [
                    4191
                ],
                sheets: []
            },
            {
                side: "liability",
                number: 7,
                label: "Dettes fournisseurs et comptes rattachés",
                accounts: [
                    401,
                    4011,
                    4017,
                    403,
                    4081,
                    4088
                ],
                sheets: []
            },
            {
                side: "liability",
                number: 8,
                label: "Dettes fiscales et sociales",
                accounts: [
                    421,
                    422,
                    424,
                    4246,
                    4248,
                    427,
                    4282,
                    4284,
                    4286,
                    43,
                    431,
                    437,
                    438,
                    4382,
                    4386,
                    442,
                    4421,
                    4422,
                    4423,
                    4424,
                    4425,
                    443,
                    4431,
                    4438,
                    444,
                    4452,
                    4453,
                    4455,
                    44551,
                    44558,
                    4457,
                    44571,
                    44578,
                    44584,
                    44587,
                    446,
                    447,
                    4482,
                    4486,
                    449,
                    457
                ],
                sheets: []
            },
            {
                side: "liability",
                number: 9,
                label: "Dettes sur immobilisations et comptes rattachés",
                accounts: [
                    269,
                    279,
                    404,
                    4041,
                    4047,
                    405,
                    4084
                ],
                sheets: []
            },
            {
                side: "liability",
                number: 10,
                label: "Autres dettes",
                accounts: [
                    4196,
                    4197,
                    4198,
                    464,
                    467,
                    4686,
                    4787,
                    47871,
                    47872,
                    509
                ],
                sheets: []
            },
            {
                side: "liability",
                number: 11,
                label: "Instruments financiers à terme",
                accounts: [
                    52,
                    521,
                    522,
                    523,
                    524
                ],
                sheets: []
            },
            {
                side: "liability",
                number: 12,
                label: "Produits constatés d'avance",
                accounts: [
                    487,
                    4871
                ],
                sheets: []
            },
            {
                side: "liability",
                number: 13,
                label: "Comptes de répartition périodique des produits",
                accounts: [
                    4887
                ],
                sheets: []
            }
        ]
    },
    {
        side: "liability",
        number: 4,
        label: "Écarts de conversion et différences d'évaluation",
        accounts: [
            4747,
            477,
            4771,
            4772,
            4778
        ],
        sheets: []
    },
]
