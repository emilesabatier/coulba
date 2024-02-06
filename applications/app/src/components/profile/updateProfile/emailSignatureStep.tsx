// import { FormField } from "@monassosportive/design/forms"
// import { FormField, FormRoot } from "@monassosportive/design/forms"
// import { EditorControlledInput } from "../../components/inputs/components/editorInput/editorControlledInput"
// import { UpdateStep } from "../../components/overlays/modals/updateModal/updateModal"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { ReadUserReturn, dashboardSchema } from "@monassosportive/schemas/routes"
// import { useEffect } from "react"
// import { useForm } from "react-hook-form"


// type T = Pick<ReadUserReturn, "emailSignature">
// type EmailSignatureStep = UpdateStep<T>


// export function EmailSignatureStep(props: EmailSignatureStep) {

//     const {
//         control,
//         trigger,
//         getValues,
//         getFieldState,
//         formState: { isDirty, dirtyFields, errors, isValid, isValidating, isSubmitSuccessful }
//     } = useForm<T>({
//         mode: "onSubmit",
//         criteriaMode: "all",
//         shouldFocusError: true,
//         defaultValues: props.defaultValues,
//         values: props.values,
//         resetOptions: {
//             keepDirty: true,
//             keepDirtyValues: true,
//             keepDefaultValues: true,
//         },
//         resolver: zodResolver(dashboardSchema.user.updateUser.body.pick({
//             emailSignature: true
//         })),
//     })

//     useEffect(() => {
//         if (!props.onDirty) return
//         props.onDirty(1, isDirty)
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [isDirty])

//     if (!props.stepCount || !props.onCancel || !props.onSubmit) return null
//     return (
//         <FormRoot
//             previousLabel="Retour"
//             previousCallback={async () => {
//                 if (!props.onCancel) return
//                 await props.onCancel(getValues())
//             }}
//             nextLabel="Mettre à jour le profil"
//             nextCallback={async () => {
//                 if (!props.onSubmit) return

//                 const triggerResponse = await trigger()
//                 if (!triggerResponse) return

//                 const submitResponse = await props.onSubmit(getValues())
//                 if (!submitResponse) return
//             }}
//         >
//             <FormField
//                 label="Signature de message"
//                 tooltip="La signature qui sera ajoutée aux emails envoyés depuis la plateforme."
//                 error={getFieldState("emailSignature").error?.message}
//             >
//                 <EditorControlledInput<T>
//                     control={control}
//                     name="emailSignature"
//                 />
//             </FormField>
//         </FormRoot>
//     )
// }
