

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
        accounts: [707, 7071, 7072, 7097]
    },
    {
        number: 12,
        label: "Production vendue (biens et services)",
        numberParent: 1,
        accounts: [701, 7011, 7012, 702, 703, 704, 7041, 7042, 705, 706, 708, 7081, 7082, 7083, 7084, 7085, 7086, 7087, 7088, 7091, 7092, 7094, 7095, 7096, 7098]
    },
    {
        number: 13,
        label: "Production stockée",
        numberParent: 1,
        accounts: [71, 713, 7133, 71331, 71335, 7134, 71341, 71345, 7135, 71351, 71355, 71358]
    },
    {
        number: 14,
        label: "Production immobilisée",
        numberParent: 1,
        accounts: [72, 721, 722]
    },
    {
        number: 15,
        label: "Subventions d'exploitation",
        numberParent: 1,
        accounts: [74]
    },
    {
        number: 16,
        label: "Autres produits",
        numberParent: 1,
        accounts: [75, 751, 7511, 7516, 7518, 752, 753, 754, 755, 7551, 7555, 756, 758, 781, 7811, 78111, 78112, 7815, 7816, 78161, 78162, 7817, 78173, 78174, 791]
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
        accounts: [607, 6071, 6072, 6097]
    },
    {
        number: 22,
        label: "Variation de stock (marchandises)",
        numberParent: 2,
        accounts: [6037]
    },
    {
        number: 23,
        label: "Achats d'approvisionnements",
        numberParent: 2,
        accounts: [601, 6011, 6012, 6017, 602, 6021, 60211, 60212, 6022, 60221, 60222, 60223, 60224, 60225, 6026, 60261, 60265, 60267, 6091, 6092]
    },
    {
        number: 24,
        label: "Variation de stock d'approvisionnements",
        numberParent: 2,
        accounts: [6031, 6032]
    },
    {
        number: 25,
        label: "Autres charges externes",
        numberParent: 2,
        accounts: [604, 605, 606, 6061, 6063, 6064, 6068, 608, 6094, 6095, 6096, 6098, 61, 611, 612, 6122, 6125, 613, 6132, 6135, 6136, 614, 615, 6152, 6155, 6156, 616, 6161, 6162, 6163, 61636, 61637, 61638, 6164, 6165, 617, 618, 6181, 6183, 6185, 619, 62, 621, 6211, 6214, 622, 6221, 6222, 6224, 6225, 6226, 6227, 6228, 623, 6231, 6232, 6233, 6234, 6235, 6236, 6237, 6238, 624, 6241, 6242, 6243, 6244, 6247, 6248, 625, 6251, 6255, 6256, 6257, 626, 627, 6271, 6272, 6275, 6276, 6278, 628, 6281, 6284, 629]
    },
    {
        number: 26,
        label: "Impôts, taxes et versements assimilés",
        numberParent: 2,
        accounts: [63, 631, 6311, 6312, 6313, 6314, 6318, 633, 6331, 6332, 6333, 6334, 6335, 6338, 635, 6351, 63511, 63512, 63513, 63514, 6352, 6353, 6354, 63541, 637, 6371, 6372, 6374, 6378]
    },
    {
        number: 27,
        label: "Rémunérations du personnel",
        numberParent: 2,
        accounts: [641, 6411, 6412, 6413, 6414, 6415, 644, 6481]
    },
    {
        number: 28,
        label: "Charges sociales",
        numberParent: 2,
        accounts: [645, 6451, 6452, 6453, 6454, 6458, 646, 647, 6471, 6472, 6473, 6474, 6475, 6482]
    },
    {
        number: 29,
        label: "Dotations aux amortissements",
        numberParent: 2,
        accounts: [6811, 68111, 68112, 6812]
    },
    {
        number: 210,
        label: "Dotations aux dépréciations",
        numberParent: 2,
        accounts: [6816, 68161, 68162, 6817, 68173, 68174]
    },
    {
        number: 211,
        label: "Dotations aux provisions",
        numberParent: 2,
        accounts: [6815]
    },
    {
        number: 212,
        label: "Autres charges",
        numberParent: 2,
        accounts: [651, 6511, 6516, 6518, 653, 654, 6541, 6544, 656, 658]
    },
    {
        number: 3,
        label: "Produits financiers",
        numberParent: undefined,
        accounts: []
    },
    {
        number: 31,
        label: "Participations",
        numberParent: 3,
        accounts: [761, 7611, 7612, 7616, 7617]
    },
    {
        number: 32,
        label: "Autres valeurs mobilières et créances de l'actif immobilisé",
        numberParent: 3,
        accounts: [762, 7621, 7626, 7627]
    },
    {
        number: 33,
        label: "Autres intérêts et produits assimilés",
        numberParent: 3,
        accounts: [763, 7631, 7638, 764, 765, 768]
    },
    {
        number: 34,
        label: "Reprises sur provisions et transferts de charges",
        numberParent: 3,
        accounts: [786, 7865, 7866, 78662, 78665, 796]
    },
    {
        number: 35,
        label: "Différences positives de change",
        numberParent: 3,
        accounts: [766]
    },
    {
        number: 36,
        label: "Produits nets sur cessions de valeurs mobilières de placement",
        numberParent: 3,
        accounts: [767]
    },
    {
        number: 4,
        label: "Charges financières",
        numberParent: undefined,
        accounts: []
    },
    {
        number: 41,
        label: "Dotations aux amortissements et aux provisions",
        numberParent: 4,
        accounts: [686, 6861, 6865, 6866, 68662, 68665, 6868]
    },
    {
        number: 42,
        label: "Intérêts et charges assimilés",
        numberParent: 4,
        accounts: [661, 6611, 66116, 66117, 6612, 6615, 6616, 6617, 6618, 66181, 66188, 664, 665, 668]
    },
    {
        number: 43,
        label: "Différences négatives de change",
        numberParent: 4,
        accounts: [666]
    },
    {
        number: 44,
        label: "Charges nettes sur cessions de valeurs mobilières de placement",
        numberParent: 4,
        accounts: [667]
    },
    {
        number: 5,
        label: "Quotes-part de résultat sur opérations faites en commun",
        numberParent: undefined,
        accounts: []
    },
    {
        number: 51,
        label: "Bénéfice transféré et perte supportée",
        numberParent: 5,
        accounts: [755]
    },
    {
        number: 52,
        label: "Perte transférée et bénéfice attribué",
        numberParent: 5,
        accounts: [655, 6551, 6555]
    },
    {
        number: 6,
        label: "Produits exceptionnels",
        numberParent: undefined,
        accounts: []
    },
    {
        number: 61,
        label: "Sur opérations de gestion",
        numberParent: 6,
        accounts: [771, 7711, 7713, 7714, 7715, 7717, 7718]
    },
    {
        number: 62,
        label: "Sur opérations de capital",
        numberParent: 6,
        accounts: [775, 7751, 7752, 7756, 7758, 777, 778, 7781, 7782, 7783, 7788]
    },
    {
        number: 63,
        label: "Reprises sur provisions et transferts de charges",
        numberParent: 6,
        accounts: [787, 7872, 78725, 78726, 78727, 7873, 7874, 7875, 7876, 797]
    },
    {
        number: 7,
        label: "Charges exceptionnelles",
        numberParent: undefined,
        accounts: []
    },
    {
        number: 71,
        label: "Sur opérations de gestion",
        numberParent: 7,
        accounts: [671, 6711, 6712, 6713, 6714, 6715, 6717, 6718]
    },
    {
        number: 72,
        label: "Sur opérations de capital",
        numberParent: 7,
        accounts: [675, 6751, 6752, 6756, 6758, 678, 6781, 6782, 6783, 6788]
    },
    {
        number: 73,
        label: "Dotations aux amortissements et aux provisions",
        numberParent: 7,
        accounts: [687, 6871, 6872, 68725, 6873, 6874, 6875, 6876]
    },
    {
        number: 8,
        label: "Participation des salariés aux résultats de l'entreprise",
        numberParent: undefined,
        accounts: [691]
    },
    {
        number: 9,
        label: "Impôts sur les bénéfices",
        numberParent: undefined,
        accounts: [695, 6951, 6952, 6954, 696, 698, 6981, 6989, 699]
    }
]
