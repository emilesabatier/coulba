// import { Action, Resource } from "@coulba/schemas/components"
// import { useProfile } from "./useProfile"


// export function useAuth(resource: Resource, action?: Action) {

//     const profile = useProfile()

//     if (profile.error || !profile.data) return [false, profile.isLoading]

//     if (profile.data.isAdmin) return [true, profile.isLoading]

//     if (!action) {
//         if (!profile.data?.role?.permissionRoles.find(x => (x.permission.resource === resource))) return [false, profile.isLoading]
//         return [true, profile.isLoading]
//     }

//     const permissionRole = profile.data?.role?.permissionRoles.find(x => (x.permission.resource === resource) && ((x.permission.action === action)))
//     if (!permissionRole) return [false, profile.isLoading]


//     return [true, profile.isLoading]
// }
