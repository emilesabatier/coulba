// import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
// import { InputArea, InputSelect } from "@coulba/design/inputs"
// import { DashboardSupport } from "@coulba/schemas/routes"
// import { Fragment } from "react"
// import { useFormContext } from "react-hook-form"
// import { ticketTypeOptions } from "../../ticketOptions"


// export function CreateTicketForm() {
//     const form = useFormContext<DashboardSupport.ContactSupportBody>()
//     return (
//         <Fragment>
//             <FormField
//                 control={form.control}
//                 name="type"
//                 render={({ field }) => (
//                     <FormItem>
//                         <FormLabel
//                             label="Catégorie"
//                             tooltip="Pour nous renseigner sur le type de problème que vous avez."
//                         />
//                         <FormControl>
//                             <InputSelect
//                                 value={field.value}
//                                 onChange={field.onChange}
//                                 placeholder="Choisir la catégorie"
//                                 options={ticketTypeOptions}
//                                 autoFocus
//                             />
//                         </FormControl>
//                         <FormError />
//                     </FormItem>
//                 )}
//             />
//             <FormField
//                 control={form.control}
//                 name="message"
//                 render={({ field }) => (
//                     <FormItem>
//                         <FormLabel
//                             label="Message"
//                             tooltip="Le message que vous souhaitez nous envoyer."
//                         />
//                         <FormControl>
//                             <InputArea
//                                 value={field.value}
//                                 onChange={field.onChange}
//                             />
//                         </FormControl>
//                         <FormError />
//                     </FormItem>
//                 )}
//             />
//             <p className="text-sm text-neutral">
//                 Si jamais l'envoi ne fonctionne pas, vous pouvez nous contacter directement ici: <a href="mailto:support@coulba.fr" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:no-underline">support@coulba.fr</a>
//             </p>
//         </Fragment>
//     )
// }
