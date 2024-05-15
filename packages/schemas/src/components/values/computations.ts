

export type DefaultComputation = {
    number: number
    label: string
    statements: {
        number: number
        operation: "plus" | "minus"
    }[]
}

export const defaultComputations: DefaultComputation[] = [
    {
        number: 1,
        label: "Résultat d'exploitation",
        statements: [
            {
                number: 1,
                operation: "plus"
            },
            {
                number: 2,
                operation: "minus"
            }
        ]
    },
    {
        number: 2,
        label: "Résultat financier",
        statements: [
            {
                number: 3,
                operation: "plus"
            },
            {
                number: 4,
                operation: "minus"
            },
            {
                number: 5,
                operation: "plus"
            },
            {
                number: 6,
                operation: "minus"
            }
        ]
    },
    {
        number: 3,
        label: "Résultat courant avant impôts",
        statements: [
            {
                number: 1,
                operation: "plus"
            },
            {
                number: 2,
                operation: "minus"
            },
            {
                number: 3,
                operation: "plus"
            },
            {
                number: 4,
                operation: "minus"
            },
            {
                number: 5,
                operation: "plus"
            },
            {
                number: 6,
                operation: "minus"
            }
        ]
    },
    {
        number: 4,
        label: "Résultat exceptionnel",
        statements: [
            {
                number: 7,
                operation: "plus"
            },
            {
                number: 8,
                operation: "minus"
            }
        ]
    },
    {
        number: 5,
        label: "Total des produits",
        statements: [
            {
                number: 1,
                operation: "plus"
            },
            {
                number: 3,
                operation: "plus"
            },
            {
                number: 5,
                operation: "plus"
            },
            {
                number: 7,
                operation: "plus"
            },
        ]
    },
    {
        number: 6,
        label: "Total des charges",
        statements: [
            {
                number: 2,
                operation: "plus"
            },
            {
                number: 4,
                operation: "plus"
            },
            {
                number: 6,
                operation: "plus"
            },
            {
                number: 8,
                operation: "plus"
            },
            {
                number: 10,
                operation: "plus"
            }
        ]
    },
    {
        number: 7,
        label: "Résultat net",
        statements: [
            {
                number: 1,
                operation: "plus"
            },
            {
                number: 2,
                operation: "minus"
            },
            {
                number: 3,
                operation: "plus"
            },
            {
                number: 4,
                operation: "minus"
            },
            {
                number: 5,
                operation: "plus"
            },
            {
                number: 6,
                operation: "minus"
            },
            {
                number: 7,
                operation: "plus"
            },
            {
                number: 8,
                operation: "minus"
            },
            {
                number: 9,
                operation: "minus"
            },
            {
                number: 10,
                operation: "minus"
            }
        ]
    }
]
