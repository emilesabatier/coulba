import { FormProvider } from "react-hook-form"


export const FormRoot = FormProvider

// type Form<T> = FormSubmit<T> & {
//     children: JSX.Element | JSX.Element[]
// }

// export function Form<T>(props: Form<T>) {
//     return (
//         <FormProvider
//         <form noValidate className="w-full flex flex-col justify-start items-stretch gap-8 md:gap-8">
//             <ol className="mx-auto w-full flex flex-col justify-start items-stretch gap-3 max-w-[442px]">
//                 {props.children}
//             </ol>
//             <Submit<T>
//                 previousLabel={props.previousLabel}
//                 previousCallback={props.previousCallback}
//                 nextLabel={props.nextLabel}
//                 nextCallback={props.nextCallback}
//                 stepCount={props.stepCount}
//                 stepName={props.stepName}
//             />
//         </form>
//     )
// }
