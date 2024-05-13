

export type DefaultStatement = {
    number: number
    label: string
    accounts: number[]
    statements: DefaultStatement[]
}

export const defaultStatements: DefaultStatement[] = [
    {
        number: 1,
        label: "Produits d'exploitation",
        accounts: [],
        statements: [
            {
                number: 11,
                label: "Ventes de marchandises",
                accounts: [
                    707,
                    7071,
                    7072,
                    7097
                ],
                statements: []
            },
            {
                number: 12,
                label: "Production vendue (biens et services)",
                accounts: [
                    701,
                    7011,
                    7012,
                    702,
                    703,
                    704,
                    7041,
                    7042,
                    705,
                    706,
                    708,
                    7081,
                    7082,
                    7083,
                    7084,
                    7085,
                    7086,
                    7087,
                    7088,
                    7091,
                    7092,
                    7094,
                    7095,
                    7096,
                    7098
                ],
                statements: []
            },
            {
                number: 13,
                label: "Production stockée",
                accounts: [
                    71,
                    713,
                    7133,
                    71331,
                    71335,
                    7134,
                    71341,
                    71345,
                    7135,
                    71351,
                    71355,
                    71358
                ],
                statements: []
            },
            {
                number: 14,
                label: "Production immobilisée",
                accounts: [
                    72,
                    721,
                    722
                ],
                statements: []
            },
            {
                number: 15,
                label: "Subventions d'exploitation",
                accounts: [
                    74
                ],
                statements: []
            },
            {
                number: 16,
                label: "Autres produits",
                accounts: [
                    75,
                    751,
                    7511,
                    7516,
                    7518,
                    752,
                    753,
                    754,
                    755,
                    7551,
                    7555,
                    756,
                    758,
                    781,
                    7811,
                    78111,
                    78112,
                    7815,
                    7816,
                    78161,
                    78162,
                    7817,
                    78173,
                    78174,
                    791
                ],
                statements: []
            }
        ]
    },
    {
        number: 2,
        label: "Charges d'exploitation",
        accounts: [],
        statements: [
            {
                number: 21,
                label: "Achats de marchandises",
                accounts: [
                    607,
                    6071,
                    6072,
                    6097
                ],
                statements: []
            },
            {
                number: 22,
                label: "Variation de stock (marchandises)",
                accounts: [
                    6037
                ],
                statements: []
            },
            {
                number: 23,
                label: "Achats d'approvisionnements",
                accounts: [
                    601,
                    6011,
                    6012,
                    6017,
                    602,
                    6021,
                    60211,
                    60212,
                    6022,
                    60221,
                    60222,
                    60223,
                    60224,
                    60225,
                    6026,
                    60261,
                    60265,
                    60267,
                    6091,
                    6092
                ],
                statements: []
            },
            {
                number: 24,
                label: "Variation de stock d'approvisionnements",
                accounts: [
                    6031,
                    6032
                ],
                statements: []
            },
            {
                number: 25,
                label: "Autres charges externes",
                accounts: [
                    604,
                    605,
                    606,
                    6061,
                    6063,
                    6064,
                    6068,
                    608,
                    6094,
                    6095,
                    6096,
                    6098,
                    61,
                    611,
                    612,
                    6122,
                    6125,
                    613,
                    6132,
                    6135,
                    6136,
                    614,
                    615,
                    6152,
                    6155,
                    6156,
                    616,
                    6161,
                    6162,
                    6163,
                    61636,
                    61637,
                    61638,
                    6164,
                    6165,
                    617,
                    618,
                    6181,
                    6183,
                    6185,
                    619,
                    62,
                    621,
                    6211,
                    6214,
                    622,
                    6221,
                    6222,
                    6224,
                    6225,
                    6226,
                    6227,
                    6228,
                    623,
                    6231,
                    6232,
                    6233,
                    6234,
                    6235,
                    6236,
                    6237,
                    6238,
                    624,
                    6241,
                    6242,
                    6243,
                    6244,
                    6247,
                    6248,
                    625,
                    6251,
                    6255,
                    6256,
                    6257,
                    626,
                    627,
                    6271,
                    6272,
                    6275,
                    6276,
                    6278,
                    628,
                    6281,
                    6284,
                    629
                ],
                statements: []
            },
            {
                number: 26,
                label: "Impôts, taxes et versements assimilés",
                accounts: [
                    63,
                    631,
                    6311,
                    6312,
                    6313,
                    6314,
                    6318,
                    633,
                    6331,
                    6332,
                    6333,
                    6334,
                    6335,
                    6338,
                    635,
                    6351,
                    63511,
                    63512,
                    63513,
                    63514,
                    6352,
                    6353,
                    6354,
                    63541,
                    637,
                    6371,
                    6372,
                    6374,
                    6378
                ],
                statements: []
            },
            {
                number: 27,
                label: "Rémunérations du personnel",
                accounts: [
                    641,
                    6411,
                    6412,
                    6413,
                    6414,
                    6415,
                    644,
                    6481
                ],
                statements: []
            },
            {
                number: 28,
                label: "Charges sociales",
                accounts: [
                    645,
                    6451,
                    6452,
                    6453,
                    6454,
                    6458,
                    646,
                    647,
                    6471,
                    6472,
                    6473,
                    6474,
                    6475,
                    6482
                ],
                statements: []
            },
            {
                number: 29,
                label: "Dotations aux amortissements",
                accounts: [
                    6811,
                    68111,
                    68112,
                    6812
                ],
                statements: []
            },
            {
                number: 210,
                label: "Dotations aux dépréciations",
                accounts: [
                    6816,
                    68161,
                    68162,
                    6817,
                    68173,
                    68174
                ],
                statements: []
            },
            {
                number: 211,
                label: "Dotations aux provisions",
                accounts: [
                    6815
                ],
                statements: []
            },
            {
                number: 212,
                label: "Autres charges",
                accounts: [
                    651,
                    6511,
                    6516,
                    6518,
                    653,
                    654,
                    6541,
                    6544,
                    656,
                    658
                ],
                statements: []
            }
        ]
    },
    {
        number: 3,
        label: "Produits financiers",
        accounts: [],
        statements: [
            {
                number: 31,
                label: "Participations",
                accounts: [
                    761,
                    7611,
                    7612,
                    7616,
                    7617
                ],
                statements: []
            },
            {
                number: 32,
                label: "Autres valeurs mobilières et créances de l'actif immobilisé",
                accounts: [
                    762,
                    7621,
                    7626,
                    7627
                ],
                statements: []
            },
            {
                number: 33,
                label: "Autres intérêts et produits assimilés",
                accounts: [
                    763,
                    7631,
                    7638,
                    764,
                    765,
                    768
                ],
                statements: []
            },
            {
                number: 34,
                label: "Reprises sur provisions et transferts de charges",
                accounts: [
                    786,
                    7865,
                    7866,
                    78662,
                    78665,
                    796
                ],
                statements: []
            },
            {
                number: 35,
                label: "Différences positives de change",
                accounts: [
                    766
                ],
                statements: []
            },
            {
                number: 36,
                label: "Produits nets sur cessions de valeurs mobilières de placement",
                accounts: [
                    767
                ],
                statements: []
            }
        ]
    },
    {
        number: 4,
        label: "Charges financières",
        accounts: [],
        statements: [
            {
                number: 41,
                label: "Dotations aux amortissements et aux provisions",
                accounts: [
                    686,
                    6861,
                    6865,
                    6866,
                    68662,
                    68665,
                    6868
                ],
                statements: []
            },
            {
                number: 42,
                label: "Intérêts et charges assimilés",
                accounts: [
                    661,
                    6611,
                    66116,
                    66117,
                    6612,
                    6615,
                    6616,
                    6617,
                    6618,
                    66181,
                    66188,
                    664,
                    665,
                    668
                ],
                statements: []
            },
            {
                number: 43,
                label: "Différences négatives de change",
                accounts: [
                    666
                ],
                statements: []
            },
            {
                number: 44,
                label: "Charges nettes sur cessions de valeurs mobilières de placement",
                accounts: [
                    667
                ],
                statements: []
            }
        ]
    },
    {
        number: 5,
        label: "Quotes-part de résultat sur opérations faites en commun (Bénéfice transféré et perte supportée)",
        accounts: [
            755
        ],
        statements: []
    },
    {
        number: 6,
        label: "Quotes-part de résultat sur opérations faites en commun (Perte transférée et bénéfice attribué)",
        accounts: [
            655,
            6551,
            6555
        ],
        statements: []
    },
    {
        number: 7,
        label: "Produits exceptionnels",
        accounts: [],
        statements: [
            {
                number: 71,
                label: "Sur opérations de gestion",
                accounts: [
                    771,
                    7711,
                    7713,
                    7714,
                    7715,
                    7717,
                    7718
                ],
                statements: []
            },
            {
                number: 72,
                label: "Sur opérations de capital",
                accounts: [
                    775,
                    7751,
                    7752,
                    7756,
                    7758,
                    777,
                    778,
                    7781,
                    7782,
                    7783,
                    7788
                ],
                statements: []
            },
            {
                number: 73,
                label: "Reprises sur provisions et transferts de charges",
                accounts: [
                    787,
                    7872,
                    78725,
                    78726,
                    78727,
                    7873,
                    7874,
                    7875,
                    7876,
                    797
                ],
                statements: []
            },
        ]
    },
    {
        number: 8,
        label: "Charges exceptionnelles",
        accounts: [],
        statements: [
            {
                number: 81,
                label: "Sur opérations de gestion",
                accounts: [
                    671,
                    6711,
                    6712,
                    6713,
                    6714,
                    6715,
                    6717,
                    6718
                ],
                statements: []
            },
            {
                number: 82,
                label: "Sur opérations de capital",
                accounts: [
                    675,
                    6751,
                    6752,
                    6756,
                    6758,
                    678,
                    6781,
                    6782,
                    6783,
                    6788
                ],
                statements: []
            },
            {
                number: 83,
                label: "Dotations aux amortissements et aux provisions",
                accounts: [
                    687,
                    6871,
                    6872,
                    68725,
                    6873,
                    6874,
                    6875,
                    6876
                ],
                statements: []
            },
        ]
    },
    {
        number: 9,
        label: "Participation des salariés aux résultats de l'entreprise",
        accounts: [
            691
        ],
        statements: []
    },
    {
        number: 10,
        label: "Impôts sur les bénéfices",
        accounts: [
            695,
            6951,
            6952,
            6954,
            696,
            698,
            6981,
            6989,
            699
        ],
        statements: []
    }
]
