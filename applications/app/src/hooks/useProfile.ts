// import { DashboardProfile, dashboardSchema } from '@coulba/schemas/routes'
// import useSWR from 'swr'


// export const profileKey = "/dashboard/profile"

// export function useProfile() {
//     const { data, error, isLoading, isValidating } = useSWR<DashboardProfile.ReadProfileReturn, Error>(profileKey)

//     const parsedData = dashboardSchema.profile.readProfileReturn.safeParse(data)
//     if (!parsedData.success) {
//         return {
//             data: undefined,
//             error: new Error("Les données du profil sont invalides."),
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
