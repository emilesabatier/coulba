// import { toast } from "@coulba/design/overlays"
// import { DashboardSupport, dashboardSchema } from "@coulba/schemas/routes"
// import { ReactElement, forwardRef } from "react"
// import { CreateTicketForm } from "./createTicketForm"
// import { contactSupport } from "../../../../services/routes/dashboard/support/contactSupport"
// import { Create } from "../../../layouts/actions/create"


// type CreateTicket = {
//     children: ReactElement
// }

// export const CreateTicket = forwardRef<HTMLButtonElement, CreateTicket>(
//     function (props, ref) {

//         const create = async (data: DashboardSupport.ContactSupportBody) => {
//             const response = await contactSupport({ body: data })
//             if (!response.status) return false


//             toast({ title: "Message envoyé, nous vous recontacterons au plus vite.", variant: "success" })
//             return true
//         }

//         return (
//             <Create<DashboardSupport.ContactSupportBody>
//                 fRef={ref}
//                 triggerElement={props.children}
//                 title="Nous contacter"
//                 submitLabel="Envoyer"
//                 onSubmit={(data) => create(data)}
//                 zodSchema={dashboardSchema.support.contactSupportBody}
//                 children={<CreateTicketForm />}
//             />

//         )
//     })
