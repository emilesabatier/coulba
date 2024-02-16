// import { DashboardAccount, dashboardSchema } from '@coulba/schemas/routes'
// import useSWR from 'swr'


// export const accountsKey = "/dashboard/account"

// export function useAccounts() {
//     const { data, error, isLoading, isValidating } = useSWR<DashboardAccount.ReadAllAccountsReturn, Error>(accountsKey)

//     const parsedData = dashboardSchema.account.readAllAccountsReturn.safeParse(data)
//     if (!parsedData.success) {
//         return {
//             data: undefined,
//             error: new Error("Les données des comptes sont invalides."),
//             isLoading,
//             isValidating
//         }
//     }

//     return ({
//         data: parsedData.data,
//         error,
//         isLoading,
//         isValidating
//     })
// }
