// import { toast } from "@coulba/design/overlays"
// import { DashboardProfile, dashboardSchema } from "@coulba/schemas/routes"
// import { ReactElement, forwardRef } from "react"
// import { UpdatePasswordForm } from "./updatePasswordForm"
// import { updatePassword } from "../../../services/routes/dashboard/profile/updatePassword"
// import { Update } from "../../layouts/actions/update"


// type UpdatePassword = {
//     children: ReactElement
// }

// export const UpdatePassword = forwardRef<HTMLButtonElement, UpdatePassword>(
//     function (props, ref) {

//         const update = async (data: DashboardProfile.UpdatePasswordBody) => {
//             const response = await updatePassword({ body: data })
//             if (!response.status) return false

//             toast({ title: "Mot de passe mis à jour.", variant: "success" })
//             return true
//         }

//         return (
//             <Update<DashboardProfile.UpdatePasswordBody>
//                 fRef={ref}
//                 triggerElement={props.children}
//                 title="Mettre à jour le mot de passe"
//                 submitLabel="Mettre à jour"
//                 defaultValues={{}}
//                 onSubmit={(data) => update(data)}
//                 zodSchema={dashboardSchema.profile.updatePasswordBody}
//                 children={<UpdatePasswordForm />}
//             />
//         )
//     }
// )
