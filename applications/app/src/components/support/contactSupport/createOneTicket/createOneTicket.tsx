// import { toast } from "@coulba/design/overlays"
// import { DashboardSupport, dashboardSchema } from "@coulba/schemas/routes"
// import { ReactElement, forwardRef } from "react"
// import { CreateOneTicketForm } from "./createOneTicketForm"
// import { contactSupport } from "../../../../services/routes/dashboard/support/contactSupport"
// import { CreateOne } from "../../../layouts/actions/createOne"


// type CreateOneTicket = {
//     children: ReactElement
// }

// export const CreateOneTicket = forwardRef<HTMLButtonElement, CreateOneTicket>(
//     function (props, ref) {

//         const createOne = async (data: DashboardSupport.ContactSupportBody) => {
//             const response = await contactSupport({ body: data })
//             if (!response.status) return false


//             toast({ title: "Message envoyé, nous vous recontacterons au plus vite.", variant: "success" })
//             return true
//         }

//         return (
//             <CreateOne<DashboardSupport.ContactSupportBody>
//                 fRef={ref}
//                 triggerElement={props.children}
//                 title="Nous contacter"
//                 submitLabel="Envoyer"
//                 onSubmit={(data) => createOne(data)}
//                 zodSchema={dashboardSchema.support.contactSupportBody}
//                 children={<CreateOneTicketForm />}
//             />

//         )
//     })
