// import { toast } from "@coulba/design/overlays"
// import { DashboardProfile, dashboardSchema } from "@coulba/schemas/routes"
// import { ReactElement, forwardRef } from "react"
// import { mutate } from "swr"
// import { UpdateProfileForm } from "./updateProfileForm"
// import { profileKey } from "../../../hooks/useProfile"
// import { capitalize } from "../../../services/capitalize.service"
// import { updateProfile } from "../../../services/routes/dashboard/profile/updateProfile"
// import { UpdateOne } from "../../layouts/actions/updateOne"


// type UpdateProfile = {
//     children: ReactElement
//     profile: DashboardProfile.ReadProfileReturn
// }

// export const UpdateProfile = forwardRef<HTMLButtonElement, UpdateProfile>(
//     function (props, ref) {

//         const updateOne = async (data: DashboardProfile.UpdateProfileBody) => {
//             const response = await updateProfile({ body: data })
//             if (!response.status) return false

//             mutate(profileKey)
//             toast({ title: "Profil mis à jour.", variant: "success" })
//             return true
//         }

//         return (
//             <UpdateOne<DashboardProfile.UpdateProfileBody>
//                 fRef={ref}
//                 triggerElement={props.children}
//                 title="Mettre à jour le profil"
//                 submitLabel="Mettre à jour"
//                 defaultValues={{
//                     ...props.profile,
//                     contact: {
//                         ...props.profile.contact,
//                         surname: capitalize(props.profile.contact.surname),
//                         forename: capitalize(props.profile.contact.forename),
//                         phone: {
//                             prefix: props.profile.contact.phonePrefix,
//                             number: props.profile.contact.phoneNumber
//                         }
//                     }
//                 }}
//                 onSubmit={(data) => updateOne(data)}
//                 zodSchema={dashboardSchema.profile.updateProfileBody}
//                 children={<UpdateProfileForm />}
//             />
//         )
//     }
// )
