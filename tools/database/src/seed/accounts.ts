

type DefaultAccount = {
    number: number
    label: string
    children?: DefaultAccount[]
}

export const defaultAccounts: DefaultAccount[] = [
    {
        number: 1,
        label: "Capitaux"
    },
    {
        number: 2,
        label: "Immobilisations"
    },
    {
        number: 3,
        label: "Stocks et en-cours"
    }
]
