// import { toast } from "@coulba/design/overlays"
// import { DashboardProfile, dashboardSchema } from "@coulba/schemas/routes"
// import { ReactElement, forwardRef } from "react"
// import { mutate } from "swr"
// import { UpdateEmailForm } from "./updateEmailForm"
// import { profileKey } from "../../../hooks/useProfile"
// import { sendEmailValidation } from "../../../services/routes/dashboard/profile/sendEmailValidation"
// import { updateEmail } from "../../../services/routes/dashboard/profile/updateEmail"
// import { CreateOne } from "../../layouts/actions/createOne"


// type UpdateEmail = {
//     children: ReactElement
//     profile?: DashboardProfile.UpdateEmailBody
// }

// export const UpdateEmail = forwardRef<HTMLButtonElement, UpdateEmail>(
//     function (props, ref) {

//         const update = async (data: DashboardProfile.UpdateEmailBody) => {
//             const updateResponse = await updateEmail({ body: data })
//             if (!updateResponse.status) return false

//             const sendResponse = await sendEmailValidation()
//             if (!sendResponse.status) return false

//             mutate(profileKey)
//             toast({ title: "Email de validation envoyé à la nouvelle adresse.", variant: "information" })
//             return true
//         }

//         return (
//             <CreateOne<DashboardProfile.UpdateEmailBody>
//                 fRef={ref}
//                 triggerElement={props.children}
//                 title="Mettre à jour l'email"
//                 submitLabel="Mettre à jour"
//                 defaultValues={props.profile}
//                 onSubmit={(data) => update(data)}
//                 zodSchema={dashboardSchema.profile.updateEmailBody}
//                 children={<UpdateEmailForm />}
//             />
//         )
//     }
// )
