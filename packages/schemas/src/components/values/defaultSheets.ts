

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

export const defaultSheets: DefaultSheet[] = [
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
        label: "Actif immobilisé",
        numberParent: undefined,
        accounts: []
    },
    {
        side: "asset",
        number: 21,
        label: "Immobilisations incorporelles",
        numberParent: 2,
        accounts: []
    },
    {
        side: "asset",
        number: 211,
        label: "Frais d'établissement",
        numberParent: 21,
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
            }
        ]
    },
    {
        side: "asset",
        number: 212,
        label: "Frais de recherche et développement",
        numberParent: 21,
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
            }
        ]
    },
    {
        side: "asset",
        number: 213,
        label: "Concessions, brevets, licences, marques, procédés, logiciels, droits et valeurs similaires",
        numberParent: 21,
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
            }
        ]
    },
    {
        side: "asset",
        number: 214,
        label: "Fonds commercial",
        numberParent: 21,
        accounts: [
            {
                number: 206,
                flow: "debit",
                isAllowance: false
            },
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
                number: 2906,
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
        number: 215,
        label: "Autres",
        numberParent: 21,
        accounts: [
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
                number: 2808,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 28081,
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
        number: 216,
        label: "Immobilisations incorporelles en cours",
        numberParent: 21,
        accounts: [
            {
                number: 232,
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
        number: 217,
        label: "Avances et acomptes",
        numberParent: 21,
        accounts: [
            {
                number: 237,
                flow: "debit",
                isAllowance: false
            }
        ]
    },
    {
        side: "asset",
        number: 22,
        label: "Immobilisations corporelles",
        numberParent: 2,
        accounts: []
    },
    {
        side: "asset",
        number: 221,
        label: "Terrains",
        numberParent: 22,
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
                number: 21151,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 21155,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 21158,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 211581,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 211588,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2116,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 212,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2812,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 222,
        label: "Constructions",
        numberParent: 22,
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
                number: 21311,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 21315,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 21318,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 213181,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 213188,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2135,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 21351,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 21355,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 21358,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 213581,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 213588,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2138,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 21381,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 21382,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 21383,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 21384,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 21385,
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
            }
        ]
    },
    {
        side: "asset",
        number: 223,
        label: "Installations techniques, matériel et outillage industriels",
        numberParent: 22,
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
            }
        ]
    },
    {
        side: "asset",
        number: 224,
        label: "Autres",
        numberParent: 22,
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
                number: 282,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 292,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 2818,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 28181,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 28182,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 28183,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 28187,
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
        number: 225,
        label: "Immobilisations corporelles en cours",
        numberParent: 22,
        accounts: [
            {
                number: 231,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2312,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2313,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2315,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2318,
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
        number: 226,
        label: "Avances et acomptes",
        numberParent: 22,
        accounts: [
            {
                number: 238,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2382,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2383,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2385,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 2388,
                flow: "debit",
                isAllowance: false
            }
        ]
    },
    {
        side: "asset",
        number: 23,
        label: "Immobilisations mises en concession",
        numberParent: 2,
        accounts: []
    },
    {
        side: "asset",
        number: 231,
        label: "Immobilisations mises en concession",
        numberParent: 23,
        accounts: [
            {
                number: 22,
                flow: "debit",
                isAllowance: false
            }
        ]
    },
    {
        side: "asset",
        number: 24,
        label: "Immobilisations financières",
        numberParent: 2,
        accounts: []
    },
    {
        side: "asset",
        number: 241,
        label: "Participations",
        numberParent: 24,
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
                number: 2966,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 242,
        label: "Créances rattachées à des participations",
        numberParent: 24,
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
                number: 269,
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
        number: 243,
        label: "Parts dans des entreprises liées et créances sur des entreprises liées",
        numberParent: 24,
        accounts: [
            {
                number: 25,
                flow: "debit",
                isAllowance: false
            }
        ]
    },
    {
        side: "asset",
        number: 244,
        label: "Titres immobilisés de l'activité de portefeuille",
        numberParent: 24,
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
        number: 245,
        label: "Autres titres immobilisés",
        numberParent: 24,
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
        number: 246,
        label: "Prêts",
        numberParent: 24,
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
        number: 247,
        label: "Actions ou parts propres",
        numberParent: 24,
        accounts: [
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
            }
        ]
    },
    {
        side: "asset",
        number: 248,
        label: "Autres",
        numberParent: 24,
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
                number: 278,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 279,
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
                number: 2978,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 29787,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 3,
        label: "Actif circulant",
        numberParent: undefined,
        accounts: []
    },
    {
        side: "asset",
        number: 31,
        label: "Stocks et en-cours",
        numberParent: 3,
        accounts: []
    },
    {
        side: "asset",
        number: 311,
        label: "Matières premières et autres approvisionnements",
        numberParent: 31,
        accounts: [
            {
                number: 31,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 311,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 312,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 317,
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
                number: 3211,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 3212,
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
                number: 3911,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 3912,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 3917,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 392,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 3921,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 3922,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 3926,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 312,
        label: "En-cours de production (biens et services)",
        numberParent: 31,
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
                number: 3311,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 3312,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 335,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 3351,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 3352,
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
                number: 3411,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 3412,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 345,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 3451,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 3452,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 393,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 3931,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 3935,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 394,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 3941,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 3945,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 313,
        label: "Produits intermédiaires et finis",
        numberParent: 31,
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
                number: 3511,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 3512,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 355,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 3551,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 3552,
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
            },
            {
                number: 3951,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 3955,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 314,
        label: "Stocks provenant d'immobilisations",
        numberParent: 31,
        accounts: [
            {
                number: 36,
                flow: "debit",
                isAllowance: false
            }
        ]
    },
    {
        side: "asset",
        number: 315,
        label: "Marchandises",
        numberParent: 31,
        accounts: [
            {
                number: 37,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 371,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 372,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 397,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 3971,
                flow: "credit",
                isAllowance: true
            },
            {
                number: 3972,
                flow: "credit",
                isAllowance: true
            }
        ]
    },
    {
        side: "asset",
        number: 316,
        label: "Stocks en voie d'acheminement, mis en dépôt ou donnés en consignation",
        numberParent: 31,
        accounts: [
            {
                number: 38,
                flow: "debit",
                isAllowance: false
            }
        ]
    },
    {
        side: "asset",
        number: 317,
        label: "Avances et acomptes versés sur commandes",
        numberParent: 31,
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
        number: 32,
        label: "Créances",
        numberParent: 3,
        accounts: []
    },
    {
        side: "asset",
        number: 321,
        label: "Créances clients et comptes rattachés",
        numberParent: 32,
        accounts: [
            {
                number: 410,
                flow: "debit",
                isAllowance: false
            },
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
        number: 322,
        label: "Autres",
        numberParent: 32,
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
                number: 4287,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4387,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 441,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4411,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4417,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4418,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4419,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 443,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 444,
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
                number: 445662,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 445663,
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
                number: 44581,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 44582,
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
                number: 4487,
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
                number: 4687,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4786,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 47861,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 47862,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 489,
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
        number: 323,
        label: "Capital souscrit - appelé, non versé",
        numberParent: 32,
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
        number: 33,
        label: "Valeurs mobilières de placement",
        numberParent: 3,
        accounts: []
    },
    {
        side: "asset",
        number: 331,
        label: "Actions propres",
        numberParent: 33,
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
        number: 332,
        label: "Autres titres",
        numberParent: 33,
        accounts: [
            {
                number: 501,
                flow: "debit",
                isAllowance: false
            },
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
                number: 59,
                flow: "credit",
                isAllowance: true
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
        number: 333,
        label: "Instruments financiers à terme et jetons détenus",
        numberParent: 33,
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
        number: 334,
        label: "Disponibilités",
        numberParent: 33,
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
                number: 514,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 515,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 516,
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
            },
            {
                number: 531,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 5311,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 5314,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 532,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 533,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 54,
                flow: "debit",
                isAllowance: false
            }
        ]
    },
    {
        side: "asset",
        number: 335,
        label: "Charges constatées d'avance",
        numberParent: 33,
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
        number: 34,
        label: "Dettes",
        numberParent: 3,
        accounts: []
    },
    {
        side: "asset",
        number: 341,
        label: "Comptes de répartition périodique des charges",
        numberParent: 34,
        accounts: [
            {
                number: 4886,
                flow: "debit",
                isAllowance: false
            }
        ]
    },
    {
        side: "asset",
        number: 4,
        label: "Charges à répartir sur plusieurs exercices",
        numberParent: undefined,
        accounts: [
            {
                number: 481,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4811,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4812,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4816,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4818,
                flow: "debit",
                isAllowance: false
            }
        ]
    },
    {
        side: "asset",
        number: 5,
        label: "Charges à répartir sur plusieurs exercices",
        numberParent: undefined,
        accounts: [
            {
                number: 481,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4811,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4812,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4816,
                flow: "debit",
                isAllowance: false
            },
            {
                number: 4818,
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
        label: "Écarts de conversion et différences d'évaluation",
        numberParent: undefined,
        accounts: [
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
        label: "Primes d'émission, de fusion, d'apport,...",
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
            },
            {
                number: 1051,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1052,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1053,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1055,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1057,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1058,
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
        label: "Réserve légale",
        numberParent: 1,
        accounts: [
            {
                number: 1061,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 10611,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 10612,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 16,
        label: "Réserves statutaires ou contractuelles",
        numberParent: 1,
        accounts: [
            {
                number: 1063,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 17,
        label: "Réserves réglementées",
        numberParent: 1,
        accounts: [
            {
                number: 1062,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1064,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 10641,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 10643,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 10648,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 18,
        label: "Réserves",
        numberParent: 1,
        accounts: []
    },
    {
        side: "liability",
        number: 181,
        label: "Autres",
        numberParent: 18,
        accounts: [
            {
                number: 1068,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 10681,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 10688,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 19,
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
        number: 110,
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
                number: 129,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 111,
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
                number: 1311,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1312,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1313,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1314,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1315,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1316,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1317,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1318,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 138,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 139,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1391,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 13911,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 13912,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 13913,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 13914,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 13915,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 13916,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 13917,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 13918,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1398,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 112,
        label: "Provisions réglementées",
        numberParent: 1,
        accounts: [
            {
                number: 14,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 142,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1423,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1424,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 143,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1431,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1432,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 144,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 145,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 146,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 147,
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
                number: 1513,
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
                number: 153,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 154,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 155,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 156,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 157,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1572,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 158,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1581,
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
                number: 16881,
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
                number: 16883,
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
                number: 16884,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 512,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 514,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 517,
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
                number: 102,
                flow: "credit",
                isAllowance: false
            },
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
                number: 1671,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1674,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1675,
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
                number: 16885,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 16886,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 16887,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 16888,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 17,
                flow: "credit",
                isAllowance: false
            },
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
                number: 1781,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 1788,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 426,
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
                number: 456,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4561,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 45611,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 45615,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4563,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4564,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4566,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4567,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 35,
        label: "Comptes de liaison",
        numberParent: 3,
        accounts: [
            {
                number: 18,
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
                number: 427,
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
                number: 43,
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
                number: 4424,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4425,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 443,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4431,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4438,
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
                number: 4453,
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
                number: 4482,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4486,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 449,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 457,
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
                number: 464,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 467,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 4686,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 47871,
                flow: "credit",
                isAllowance: false
            },
            {
                number: 47872,
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
        label: "Instruments financiers à terme",
        numberParent: 3,
        accounts: [
            {
                number: 52,
                flow: "credit",
                isAllowance: false
            },
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
        number: 312,
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
        number: 313,
        label: "Comptes de répartition périodique des produits",
        numberParent: 3,
        accounts: [
            {
                number: 4887,
                flow: "credit",
                isAllowance: false
            }
        ]
    },
    {
        side: "liability",
        number: 4,
        label: "Écarts de conversion et différences d'évaluation",
        numberParent: undefined,
        accounts: [
            {
                number: 4747,
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
