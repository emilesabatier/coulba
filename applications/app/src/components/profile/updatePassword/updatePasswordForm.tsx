// import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
// import { InputPassword } from "@coulba/design/inputs"
// import { DashboardProfile } from "@coulba/schemas/routes"
// import { Fragment } from "react"
// import { useFormContext } from "react-hook-form"


// export function UpdatePasswordForm() {
//     const form = useFormContext<DashboardProfile.UpdatePasswordBody>()
//     return (
//         <Fragment>
//             <FormField
//                 control={form.control}
//                 name="currentPassword"
//                 render={({ field }) => (
//                     <FormItem>
//                         <FormLabel
//                             label="Mot de passe actuel"
//                             tooltip="Le mot de passe qui sert à actuellement à vous connecter."
//                             isRequired
//                         />
//                         <FormControl>
//                             <InputPassword
//                                 value={field.value}
//                                 onChange={field.onChange}
//                                 autoFocus
//                             />
//                         </FormControl>
//                         <FormError />
//                     </FormItem>
//                 )}
//             />
//             <FormField
//                 control={form.control}
//                 name="newPassword"
//                 render={({ field }) => (
//                     <FormItem>
//                         <FormLabel
//                             label="Nouveau mot de passe"
//                             tooltip="Le nouveau mot de passe souhaité."
//                             isRequired
//                         />
//                         <FormControl>
//                             <InputPassword
//                                 value={field.value}
//                                 onChange={field.onChange}
//                             />
//                         </FormControl>
//                         <FormError />
//                     </FormItem>
//                 )}
//             />
//             <FormField
//                 control={form.control}
//                 name="newPasswordCheck"
//                 render={({ field }) => (
//                     <FormItem>
//                         <FormLabel
//                             label="Saisir le nouveau mot de passe à nouveau"
//                             tooltip="Le nouveau mot de passe souhaité (encore une fois)."
//                             isRequired
//                         />
//                         <FormControl>
//                             <InputPassword
//                                 value={field.value}
//                                 onChange={field.onChange}
//                             />
//                         </FormControl>
//                         <FormError />
//                     </FormItem>
//                 )}
//             />
//         </Fragment>
//     )
// }
