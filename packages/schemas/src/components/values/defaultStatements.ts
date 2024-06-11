

export type DefaultStatement = {
    number: number
    label: string
    numberParent: number | undefined
    accounts: number[]
}

export const defaultStatements: DefaultStatement[] = [
    {
        number: 1,
        label: "Produits d'exploitation",
        numberParent: undefined,
        accounts: []
    },
    {
        number: 11,
        label: "Ventes de marchandises",
        numberParent: 1,
        accounts: [707, 7097]
    },
    {
        number: 12,
        label: "Production vendue",
        numberParent: 1,
        accounts: [701, 702, 703, 704, 705, 706, 708, 7081, 7082, 7083, 7084, 7085, 7086, 7087, 7088, 7091, 7092, 7094, 7095, 7096, 7098]
    },
    {
        number: 13,
        label: "Montant net du chiffre d'affaires",
        numberParent: 1,
        accounts: []
    },
    {
        number: 14,
        label: "Production stockée",
        numberParent: 1,
        accounts: [7133, 71331, 71335, 7134, 71341, 71345, 7135, 71351, 71355, 71358]
    },
    {
        number: 15,
        label: "Production immobilisée",
        numberParent: 1,
        accounts: [721, 722]
    },
    {
        number: 16,
        label: "Subventions",
        numberParent: 1,
        accounts: [741, 742, 747]
    },
    {
        number: 17,
        label: "Reprises sur amortissements, dépréciations et provisions",
        numberParent: 1,
        accounts: [7811, 78111, 78112, 7815, 7816, 78161, 78162, 7817, 78173, 78174]
    },
    {
        number: 18,
        label: "Produits des cessions d'immobilisations incorporelles et corporelles",
        numberParent: 1,
        accounts: [757]
    },
    {
        number: 19,
        label: "Autres produits",
        numberParent: 1,
        accounts: [751, 7511, 7516, 7518, 752, 753, 754, 756, 758, 7581, 7582, 7583, 7584, 7585, 7586, 7587, 7588]
    },
    {
        number: 2,
        label: "Charges d'exploitation",
        numberParent: undefined,
        accounts: []
    },
    {
        number: 21,
        label: "Achats de marchandises",
        numberParent: 2,
        accounts: [607]
    },
    {
        number: 22,
        label: "Variation de stocks",
        numberParent: 2,
        accounts: [6037]
    },
    {
        number: 23,
        label: "Achats de matières premières et autres approvisionnements",
        numberParent: 2,
        accounts: [601, 602, 6021, 6022, 60221, 60222, 60223, 60224, 60225, 6026, 60261, 60262, 60265, 60267]
    },
    {
        number: 24,
        label: "Variation de stocks",
        numberParent: 2,
        accounts: [6031, 6032]
    },
    {
        number: 25,
        label: "Autres achats et charges externes",
        numberParent: 2,
        accounts: [604, 605, 606, 6061, 6063, 6064, 6068, 608, 609, 6098, 611, 6122, 6125, 613, 6132, 6135, 614, 615, 6152, 6155, 6156, 616, 6161, 6162, 6163, 61636, 61637, 61638, 6164, 6165, 617, 618, 6181, 6183, 6185, 619, 621, 6211, 6214, 622, 6221, 6222, 6224, 6225, 6226, 6227, 6228, 623, 6231, 6232, 6233, 6234, 6235, 6236, 6237, 6238, 624, 6241, 6242, 6243, 6244, 6247, 6248, 625, 6251, 6255, 6256, 6257, 626, 627, 6271, 6272, 6275, 6276, 6278, 628, 6281, 6284, 629]
    },
    {
        number: 26,
        label: "Impôts, taxes et versements assimilés",
        numberParent: 2,
        accounts: [631, 6311, 6314, 6318, 633, 6331, 6332, 6333, 6334, 6335, 6338, 635, 6351, 63511, 63512, 63513, 63514, 6352, 6353, 6354, 63541, 6358, 637, 6371, 6372, 6374, 6378, 638]
    },
    {
        number: 27,
        label: "Salaires",
        numberParent: 2,
        accounts: [641, 6411, 6412, 6413, 6414, 6415, 648, 649]
    },
    {
        number: 28,
        label: "Cotisations sociales",
        numberParent: 2,
        accounts: [645, 6451, 6452, 6453, 6454, 6458, 647, 6471, 6472, 6474, 6475, 648, 649]
    },
    {
        number: 29,
        label: "Dotations aux amortissements et aux dépréciations",
        numberParent: 2,
        accounts: []
    },
    {
        number: 291,
        label: "Sur immobilisations : dotations aux amortissements",
        numberParent: 29,
        accounts: [6811, 68111, 68112]
    },
    {
        number: 292,
        label: "Sur immobilisations : dotations aux dépréciations",
        numberParent: 29,
        accounts: [6816, 68161, 68162]
    },
    {
        number: 293,
        label: "Sur actif circulant : dotations aux dépréciations",
        numberParent: 29,
        accounts: [6817, 68173, 68174]
    },
    {
        number: 210,
        label: "Dotations aux provisions",
        numberParent: 2,
        accounts: [6815]
    },
    {
        number: 211,
        label: "Valeurs comptables des immobilisations incorporelles et corporelles cédées",
        numberParent: 2,
        accounts: [657]
    },
    {
        number: 212,
        label: "Autres charges",
        numberParent: 2,
        accounts: [651, 6511, 6516, 6518, 653, 654, 6541, 6544, 656, 658, 6581, 6582, 6583, 6584, 6588]
    },
    {
        number: 3,
        label: "Quotes-part de résultat sur opérations faites en commun (Bénéfice attribué ou perte transférée)",
        numberParent: undefined,
        accounts: [755, 7551, 7555]
    },
    {
        number: 4,
        label: "Quotes-part de résultat sur opérations faites en commun (Perte attribuée ou bénéfice transféré)",
        numberParent: undefined,
        accounts: [655, 6551, 6555]
    },
    {
        number: 5,
        label: "Produits financiers",
        numberParent: undefined,
        accounts: []
    },
    {
        number: 51,
        label: "De participation",
        numberParent: 5,
        accounts: [761, 7611, 7612, 7616, 7617]
    },
    {
        number: 52,
        label: "D'autres valeurs mobilières et créances de l'actif immobilisé",
        numberParent: 5,
        accounts: [762, 7621, 7626, 7627, 764]
    },
    {
        number: 53,
        label: "Autres intérêts et produits assimilés",
        numberParent: 5,
        accounts: [763, 7631, 7638, 765, 768, 7683]
    },
    {
        number: 54,
        label: "Reprises sur déprécations et provisions",
        numberParent: 5,
        accounts: [786, 7865, 7866, 78662, 78665]
    },
    {
        number: 55,
        label: "Différences positives de change",
        numberParent: 5,
        accounts: [766]
    },
    {
        number: 56,
        label: "Produits des cessions d'immobilisations financières",
        numberParent: 5,
        accounts: [7671, 7672]
    },
    {
        number: 57,
        label: "Produits nets sur cessions de valeurs mobilières de placement et d'instruments de trésorerie",
        numberParent: 5,
        accounts: [7673, 7674]
    },
    {
        number: 6,
        label: "Charges financières",
        numberParent: undefined,
        accounts: []
    },
    {
        number: 61,
        label: "Dotations aux amortissements, aux dépréciations et aux provisions",
        numberParent: 6,
        accounts: [686, 6861, 6862, 6865, 6866, 68662, 68665]
    },
    {
        number: 62,
        label: "Intérêts et charges assimilés",
        numberParent: 6,
        accounts: [661, 6611, 66116, 66117, 6612, 6615, 6616, 6617, 6618, 66181, 66188, 664, 665]
    },
    {
        number: 63,
        label: "Différences négatives de change",
        numberParent: 6,
        accounts: [666]
    },
    {
        number: 64,
        label: "Valeurs comptables des immobilisations financières cédées",
        numberParent: 6,
        accounts: [6671, 6672]
    },
    {
        number: 65,
        label: "Charges nettes sur cessions de valeurs mobilières de placement",
        numberParent: 6,
        accounts: [6673, 6674]
    },
    {
        number: 7,
        label: "Produits exceptionnels",
        numberParent: undefined,
        accounts: [772, 778, 7872, 78725, 7873, 7874, 7875, 7876]
    },
    {
        number: 8,
        label: "Charges exceptionnelles",
        numberParent: undefined,
        accounts: [672, 678, 6871, 6872, 68725, 6873, 6874, 6875, 6876]
    },
    {
        number: 9,
        label: "Participation des salariés aux résultats de l'entreprise",
        numberParent: undefined,
        accounts: [691]
    },
    {
        number: 10,
        label: "Impôts sur les bénéfices",
        numberParent: undefined,
        accounts: [695, 6951, 6952, 6954, 696, 6981, 6989, 699]
    }
]
