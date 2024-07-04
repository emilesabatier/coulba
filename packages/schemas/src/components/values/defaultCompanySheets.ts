

export type DefaultSheet = {
    side: "asset" | "liability"
    number: number
    label: string
    numberParent: number | undefined
    accounts: Array<{
        number: number
        flow: "debit" | "credit"
        isAllowance: boolean
    }>
}

export const defaultCompanySheets: DefaultSheet[] = [
    {
        side: "asset",
        number: 1,
        label: "Capital souscrit non appelé",
        numberParent: undefined,
        accounts: [
            {
                number: 109,
                flow: "debit",
                isAllowance: false
            }
        ]
    },
    {
        side: "asset",
        number: 2,
        label: "Frais d'établissement",
        numberParent: undefined,
        accounts: [
            {
                number: 201,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2011,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2012,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 20121,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 20122,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2013,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2801,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 2901,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 3,
        label: "Actif immobilisé",
        numberParent: undefined,
        accounts: []
    },
    {
        side: "asset",
        number: 31,
        label: "Immobilisations incorporelles",
        numberParent: 3,
        accounts: []
    },
    {
        side: "asset",
        number: 311,
        label: "Frais de développement",
        numberParent: 31,
        accounts: [
            {
                number: 203,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2803,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 2903,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 312,
        label: "Concessions, brevets, licences, marques, procédés, solutions informatiques, droits et valeurs similaires",
        numberParent: 31,
        accounts: [
            {
                number: 205,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2805,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 2905,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 229,
                flow: "debit",
                isAllowance: true
            },
            {
                number: 282,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 292,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 313,
        label: "Fonds commercial",
        numberParent: 31,
        accounts: [
            {
                number: 207,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2807,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 2907,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 314,
        label: "Autres immobilisations incorporelles",
        numberParent: 31,
        accounts: [
            {
                number: 206,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 208,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2081,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2806,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 2808,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 2906,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 2908,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 29081,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 315,
        label: "Immobilisations incorporelles en cours, avances et acomptes",
        numberParent: 31,
        accounts: [
            {
                number: 232,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 237,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2932,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 32,
        label: "Immobilisations corporelles",
        numberParent: 3,
        accounts: []
    },
    {
        side: "asset",
        number: 321,
        label: "Terrains",
        numberParent: 32,
        accounts: [
            {
                number: 211,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2111,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2112,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2113,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2114,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2115,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 212,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2911,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 2812,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 2912,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 322,
        label: "Constructions",
        numberParent: 32,
        accounts: [
            {
                number: 213,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2131,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2135,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2138,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 214,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2813,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 2814,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 2913,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 2914,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 323,
        label: "Installations techniques, matériel et outillage industriels",
        numberParent: 32,
        accounts: [
            {
                number: 215,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2151,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 21511,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 21514,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2153,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 21531,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 21534,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2154,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2155,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2157,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2815,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 2915,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 324,
        label: "Autres immbolisations corporelles",
        numberParent: 32,
        accounts: [
            {
                number: 218,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2181,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2182,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2183,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2184,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2185,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2186,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2187,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2818,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 28187,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 2918,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 29187,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 325,
        label: "Immobilisations corporelles en cours, avances et acomptes",
        numberParent: 32,
        accounts: [
            {
                number: 231,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 238,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2931,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 33,
        label: "Immobilisations financières",
        numberParent: 3,
        accounts: []
    },
    {
        side: "asset",
        number: 331,
        label: "Participations",
        numberParent: 33,
        accounts: [
            {
                number: 261,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2611,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2618,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 262,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 266,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2661,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2961,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 2962,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 2966,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 332,
        label: "Créances rattachées à des participations",
        numberParent: 33,
        accounts: [
            {
                number: 267,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2671,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2674,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2675,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2676,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2677,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2678,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 268,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2681,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2688,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2967,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 2968,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 333,
        label: "Titres immobilisés de l'activité de portefeuille",
        numberParent: 33,
        accounts: [
            {
                number: 273,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2973,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 334,
        label: "Autres titres immobilisés",
        numberParent: 33,
        accounts: [
            {
                number: 271,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2711,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2718,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 272,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2721,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2722,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 27682,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 277,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2771,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2772,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2971,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 2972,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 335,
        label: "Prêts",
        numberParent: 33,
        accounts: [
            {
                number: 274,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2741,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2742,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2743,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2748,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 27684,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2974,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 336,
        label: "Autres immobilisations financières",
        numberParent: 33,
        accounts: [
            {
                number: 275,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2751,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2755,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2761,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 27685,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 27688,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2975,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 2976,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 278,
                flow: "debit",
                isAllowance: false
            }
        ]
    },
    {
        side: "asset",
        number: 4,
        label: "Actif circulant",
        numberParent: undefined,
        accounts: []
    },
    {
        side: "asset",
        number: 41,
        label: "Stocks et en-cours",
        numberParent: 4,
        accounts: []
    },
    {
        side: "asset",
        number: 411,
        label: "Matières premières et autres approvisionnements",
        numberParent: 41,
        accounts: [
            {
                number: 31,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 32,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 321,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 322,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 3221,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 3222,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 3223,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 3224,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 3225,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 326,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 3261,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 3265,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 3267,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 391,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 392,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 412,
        label: "En-cours de production",
        numberParent: 41,
        accounts: [
            {
                number: 33,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 331,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 335,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 34,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 341,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 345,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 393,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 394,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 413,
        label: "Produits finis",
        numberParent: 41,
        accounts: [
            {
                number: 35,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 351,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 355,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 358,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 3581,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 3585,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 3586,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 395,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 414,
        label: "Marchandises",
        numberParent: 41,
        accounts: [
            {
                number: 37,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 397,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 415,
        label: "Avances et acomptes versés sur commandes",
        numberParent: 41,
        accounts: [
            {
                number: 4091,
                flow: "debit",
                isAllowance: false
            }
        ]
    },
    {
        side: "asset",
        number: 42,
        label: "Créances",
        numberParent: 4,
        accounts: []
    },
    {
        side: "asset",
        number: 421,
        label: "Créances clients et comptes rattachés",
        numberParent: 42,
        accounts: [
            {
                number: 411,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4111,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4117,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 413,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 416,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 418,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4181,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4188,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 491,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 422,
        label: "Autres créances",
        numberParent: 42,
        accounts: [
            {
                number: 4096,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4097,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 40971,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 40974,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4098,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 425,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 439,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 441,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 442,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4421,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4422,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4423,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 444,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4455,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 44551,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 44558,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4456,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 44562,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 44563,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 44566,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 44567,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 44568,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4457,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 44571,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 44578,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 44581,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 44583,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 44586,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 451,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 455,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 456,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4561,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 45611,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 45615,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4563,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4564,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4566,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4567,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 458,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4581,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4588,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 462,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 465,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 467,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 478,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4781,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 495,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 4951,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 4955,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 4958,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 496,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 4962,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 4965,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 4967,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 423,
        label: "Charges constatées d'avance",
        numberParent: 42,
        accounts: [
            {
                number: 486,
                flow: "debit",
                isAllowance: false
            }
        ]
    },
    {
        side: "asset",
        number: 424,
        label: "Capital souscrit appelé, non versé",
        numberParent: 42,
        accounts: [
            {
                number: 4562,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 45621,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 45625,
                flow: "debit",
                isAllowance: false
            }
        ]
    },
    {
        side: "asset",
        number: 43,
        label: "Valeurs mobilières de placement",
        numberParent: 4,
        accounts: []
    },
    {
        side: "asset",
        number: 431,
        label: "Actions propres",
        numberParent: 43,
        accounts: [
            {
                number: 502,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 5021,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 5022,
                flow: "debit",
                isAllowance: false
            }
        ]
    },
    {
        side: "asset",
        number: 432,
        label: "Autres titres",
        numberParent: 43,
        accounts: [
            {
                number: 503,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 5031,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 5035,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 504,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 505,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 506,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 5061,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 5065,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 507,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 508,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 5081,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 5082,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 5088,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 590,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 5903,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 5904,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 5906,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 5908,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 433,
        label: "Instruments financiers à terme et jetons détenus",
        numberParent: 43,
        accounts: [
            {
                number: 52,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 521,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 522,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 523,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 524,
                flow: "debit",
                isAllowance: false
            }
        ]
    },
    {
        side: "asset",
        number: 434,
        label: "Disponibilités",
        numberParent: 43,
        accounts: [
            {
                number: 511,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 5111,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 5112,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 5113,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 5114,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 512,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 5121,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 5124,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 517,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 518,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 5181,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 5188,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 53,
                flow: "debit",
                isAllowance: false
            }
        ]
    },
    {
        side: "asset",
        number: 5,
        label: "Frais d'émission des emprunts",
        numberParent: undefined,
        accounts: [
            {
                number: 481,
                flow: "debit",
                isAllowance: false
            }
        ]
    },
    {
        side: "asset",
        number: 6,
        label: "Primes de remboursement des emprunts",
        numberParent: undefined,
        accounts: [
            {
                number: 169,
                flow: "debit",
                isAllowance: false
            }
        ]
    },
    {
        side: "asset",
        number: 7,
        label: "Écarts de conversion et différences d'évaluation - Actif",
        numberParent: undefined,
        accounts: [
            {
                number: 474,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4741,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4742,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4746,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 476,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4761,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4762,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4768,
                flow: "debit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 1,
        label: "Capitaux propres",
        numberParent: undefined,
        accounts: []
    },
    {
        side: "liability",
        number: 11,
        label: "Capital",
        numberParent: 1,
        accounts: [
            {
                number: 101,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 102,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1011,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1012,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1013,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 10131,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 10132,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1018,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 108,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 12,
        label: "Primes d'émission, de fusion, d'apport",
        numberParent: 1,
        accounts: [
            {
                number: 104,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1041,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1042,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1043,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1044,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1045,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 13,
        label: "Écarts de réévaluation",
        numberParent: 1,
        accounts: [
            {
                number: 105,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 14,
        label: "Écart d'équivalence",
        numberParent: 1,
        accounts: [
            {
                number: 107,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 15,
        label: "Réserves",
        numberParent: 1,
        accounts: []
    },
    {
        side: "liability",
        number: 151,
        label: "Réserve légale",
        numberParent: 15,
        accounts: [
            {
                number: 1061,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 152,
        label: "Réserves statutaires ou contractuelles",
        numberParent: 15,
        accounts: [
            {
                number: 1062,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1063,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 153,
        label: "Réserves réglementées",
        numberParent: 15,
        accounts: [
            {
                number: 1064,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 154,
        label: "Autres réserves",
        numberParent: 15,
        accounts: [
            {
                number: 1068,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 16,
        label: "Report à nouveau",
        numberParent: 1,
        accounts: [
            {
                number: 11,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 110,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 119,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 17,
        label: "Résultat de l'exercice",
        numberParent: 1,
        accounts: [
            {
                number: 12,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 120,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1209,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 129,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 18,
        label: "Subventions d'investissement",
        numberParent: 1,
        accounts: [
            {
                number: 13,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 131,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 139,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 19,
        label: "Provisions réglementées",
        numberParent: 1,
        accounts: [
            {
                number: 14,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 143,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 145,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 148,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 2,
        label: "Provisions",
        numberParent: undefined,
        accounts: []
    },
    {
        side: "liability",
        number: 21,
        label: "Provisions pour risques",
        numberParent: 2,
        accounts: [
            {
                number: 151,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1511,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1512,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1514,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1515,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1516,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1518,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 22,
        label: "Provisions pour charges",
        numberParent: 2,
        accounts: [
            {
                number: 152,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1521,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1522,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1523,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1524,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1525,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1526,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1527,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 3,
        label: "Dettes",
        numberParent: undefined,
        accounts: []
    },
    {
        side: "liability",
        number: 31,
        label: "Emprunts obligataires convertibles",
        numberParent: 3,
        accounts: [
            {
                number: 161,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1618,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 32,
        label: "Autres emprunts obligataires",
        numberParent: 3,
        accounts: [
            {
                number: 163,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1638,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 33,
        label: "Emprunts et dettes auprès des établissements de crédit",
        numberParent: 3,
        accounts: [
            {
                number: 164,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1648,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 511,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 512,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 517,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 518,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 519,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 5191,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 5193,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 5198,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 34,
        label: "Emprunts et dettes financières diverses",
        numberParent: 3,
        accounts: [
            {
                number: 162,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 165,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1651,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1655,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1658,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 166,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1661,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1662,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1668,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1671,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 16718,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1674,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 16748,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1675,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 16758,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 168,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1681,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1685,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1687,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1688,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 17,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 35,
        label: "Instruments financiers à terme",
        numberParent: 3,
        accounts: [
            {
                number: 521,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 522,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 523,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 524,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 36,
        label: "Avances et acomptes reçus sur commandes en cours",
        numberParent: 3,
        accounts: [
            {
                number: 4191,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 37,
        label: "Dettes fournisseurs et comptes rattachés",
        numberParent: 3,
        accounts: [
            {
                number: 401,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4011,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4017,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 403,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4081,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4088,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 38,
        label: "Dettes fiscales et sociales",
        numberParent: 3,
        accounts: [
            {
                number: 421,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 422,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 424,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4246,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4248,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 426,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 427,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 428,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4282,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4284,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4286,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 431,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 437,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 438,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4382,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4386,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 441,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 442,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4421,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4422,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4423,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 444,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4452,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4455,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 44551,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 44558,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4456,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 44562,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 44563,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 44566,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 44567,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 44568,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4457,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 44571,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 44578,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4458,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 44584,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 44587,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 446,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 447,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4481,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 44811,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 44812,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4482,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 449,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 39,
        label: "Dettes sur immobilisations et comptes rattachés",
        numberParent: 3,
        accounts: [
            {
                number: 269,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 279,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 404,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4041,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4047,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 405,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4084,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 310,
        label: "Autres dettes",
        numberParent: 3,
        accounts: [
            {
                number: 171,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 174,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 178,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 181,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 186,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 187,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 188,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4196,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4197,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4198,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 451,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 455,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4551,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4558,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 457,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4562,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 464,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 468,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 509,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 311,
        label: "Produits constatés d'avance",
        numberParent: 3,
        accounts: [
            {
                number: 487,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4871,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 4,
        label: "Écarts de conversion et différences d'évaluation - Passif",
        numberParent: undefined,
        accounts: [
            {
                number: 475,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4751,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4752,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4756,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 477,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4771,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4772,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4778,
                flow: "credit",
                isAllowance: false
            }
        ]
    }
]
