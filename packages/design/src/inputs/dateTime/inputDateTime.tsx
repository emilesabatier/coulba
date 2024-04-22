import { InputHTMLAttributes, forwardRef } from "react"
import { FieldError } from "react-hook-form"
import { IMask, IMaskInput } from 'react-imask'
import { cn } from "../../services/cn"


type InputDateTime = Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue" | "value" | "onChange"> & {
    error?: FieldError
    defaultValue?: string | undefined | null
    value?: string | undefined | null
    onChange: (value: string | undefined) => void
}

export const InputDateTime = forwardRef<HTMLInputElement, InputDateTime>(
    function (props, ref) {

        function isDateValid(date: string) {
            return !isNaN(new Date(date).getTime())
        }

        function input(value: string | undefined | null) {
            if (!value) return undefined
            if (!isDateValid(value)) return undefined

            let date = new Date(value)
            let day = String(date.getDate())
            let month = String(date.getMonth() + 1)
            let year = String(date.getFullYear())
            let hour = String(date.getHours())
            let minute = String(date.getMinutes())

            if (date.getDate() < 10) day = "0" + day
            if ((date.getMonth() + 1) < 10) month = "0" + month
            if ((date.getHours()) < 10) hour = "0" + hour
            if ((date.getMinutes()) < 10) minute = "0" + minute

            return `${[day, month, year].join(' / ')}  ${[hour, minute].join(':')}`
        }

        function output(value: string | undefined) {
            if (!value) return undefined

            const datetime = value.split("  ")
            const yearMonthDay = datetime[0]?.split(' / ')
            const hourMinute = datetime[1]?.split(' : ')

            if (!yearMonthDay || !hourMinute) return undefined

            return new Date(Number(yearMonthDay[2]), Number(yearMonthDay[1]) - 1, Number(yearMonthDay[0]), Number(hourMinute[0]), Number(hourMinute[1]), 0)?.toISOString()
        }

        return (
            <IMaskInput
                inputRef={ref}
                mask="D{ / }`M{ / }`Y{  }`h{ : }`m"
                blocks={{
                    D: {
                        mask: IMask.MaskedRange,
                        from: 1,
                        to: 31,
                        maxLength: 2,
                        placeholderChar: "J"
                    },
                    M: {
                        mask: IMask.MaskedRange,
                        from: 1,
                        to: 12,
                        maxLength: 2,
                        placeholderChar: "M"
                    },
                    Y: {
                        mask: IMask.MaskedRange,
                        from: 1930,
                        to: 2100,
                        maxLength: 4,
                        placeholderChar: "Y"
                    },
                    h: {
                        mask: IMask.MaskedRange,
                        from: 0,
                        to: 23,
                        maxLength: 2,
                        placeholderChar: "h"
                    },
                    m: {
                        mask: IMask.MaskedRange,
                        from: 0,
                        to: 59,
                        maxLength: 2,
                        placeholderChar: "m"
                    }
                }}
                autofix={false}
                lazy={false}
                overwrite={true}
                eager="append"
                unmask={"typed"}
                placeholder={"JJ / MM / YYYY  hh : mm"}
                onComplete={(value: string) => props.onChange(output(value))}
                value={input(props.value)}
                className={cn(
                    "relative w-full flex flex-row justify-start items-center p-2 border border-solid rounded-sm",
                    "focus:border-neutral/20 focus:shadow-inner focus:bg-neutral/5",
                    (!props.error) ? "border-neutral/20" : "border-error",
                    props.className
                )}
                inputMode="decimal"
            />
        )
    }
)


// import { InputHTMLAttributes, forwardRef } from "react"
// import { FieldError } from "react-hook-form"
// import { IMask, IMaskInput } from 'react-imask'
// import { cn } from "../../services/cn"


// type InputDateTime = Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue" | "value" | "onChange"> & {
//     error?: FieldError
//     defaultValue?: string | undefined | null
//     value?: string | undefined | null
//     onChange: (value: string | undefined) => void
// }

// export const InputDateTime = forwardRef<HTMLInputElement, InputDateTime>(
//     function (props, ref) {

//         function isDateValid(date: string) {
//             return !isNaN(new Date(date).getTime())
//         }

//         function input(value: string | undefined | null) {
//             if (!value) return undefined
//             if (!isDateValid(value)) return undefined

//             let date = new Date(value)
//             let day = String(date.getDate())
//             let month = String(date.getMonth() + 1)
//             let year = String(date.getFullYear())
//             let hour = String(date.getHours())
//             let minute = String(date.getMinutes())

//             if (date.getDate() < 10) day = "0" + day
//             if ((date.getMonth() + 1) < 10) month = "0" + month
//             if ((date.getHours()) < 10) hour = "0" + hour
//             if ((date.getMinutes()) < 10) minute = "0" + minute

//             return `${[day, month, year].join(' / ')}  ${[hour, minute].join(':')}`
//         }

//         function output(value: string | undefined) {
//             if (!value) return undefined

//             const datetime = value.split("  ")
//             const yearMonthDay = datetime[0].split(' / ')
//             const hourMinute = datetime[1].split(' : ')

//             return new Date(Number(yearMonthDay[2]), Number(yearMonthDay[1]) - 1, Number(yearMonthDay[0]), Number(hourMinute[0]), Number(hourMinute[1]), 0)?.toISOString()
//         }

//         return (
//             <IMaskInput
//                 inputRef={ref}
//                 pattern="D{ / }`M{ / }`Y{  }`h{ : }`m"
//                 blocks={{
//                     D: {
//                         mask: IMask.MaskedRange,
//                         from: 1,
//                         to: 31,
//                         maxLength: 2,
//                         placeholderChar: "J"
//                     },
//                     M: {
//                         mask: IMask.MaskedRange,
//                         from: 1,
//                         to: 12,
//                         maxLength: 2,
//                         placeholderChar: "M"
//                     },
//                     Y: {
//                         mask: IMask.MaskedRange,
//                         from: 1900,
//                         to: 9999,
//                         maxLength: 4,
//                         placeholderChar: "Y"
//                     },
//                     h: {
//                         mask: IMask.MaskedRange,
//                         from: 0,
//                         to: 23,
//                         maxLength: 2,
//                         placeholderChar: "h"
//                     },
//                     m: {
//                         mask: IMask.MaskedRange,
//                         from: 0,
//                         to: 59,
//                         maxLength: 2,
//                         placeholderChar: "m"
//                     }
//                 }}
//                 format={(date: Date) => {
//                     let day = String(date.getDate())
//                     let month = String(date.getMonth() + 1)
//                     let year = String(date.getFullYear())
//                     let hour = String(date.getHours())
//                     let minute = String(date.getMinutes())

//                     if (date.getDate() < 10) day = "0" + day
//                     if ((date.getMonth() + 1) < 10) month = "0" + month
//                     if ((date.getHours()) < 10) hour = "0" + hour
//                     if ((date.getMinutes()) < 10) minute = "0" + minute

//                     return `${[day, month, year].join(' / ')}  ${[hour, minute].join(':')}`
//                 }}
//                 parse={(str) => {
//                     const datetime = str.split("  ")
//                     const yearMonthDay = datetime[0].split(' / ')
//                     const hourMinute = datetime[1].split(' : ')

//                     return new Date(Number(yearMonthDay[2]), Number(yearMonthDay[1]) - 1, Number(yearMonthDay[0]), Number(hourMinute[0]), Number(hourMinute[1]), 0)?.toISOString()
//                 }}
//                 autofix={false}
//                 lazy={false}
//                 overwrite={true}
//                 eager="append"
//                 unmask={"typed"}
//                 placeholder={"JJ / MM / YYYY  hh : mm"}
//                 onAccept={(value) => props.onChange(value)}
//                 value={props.value ?? undefined}
//                 className={cn(
//                     "relative w-full flex flex-row justify-start items-center p-2 border border-solid rounded-sm",
//                     "focus:border-neutral/20 focus:shadow-inner focus:bg-neutral/5",
//                     (!props.error) ? "border-neutral/20" : "border-error",
//                     props.className
//                 )}
//                 inputMode="decimal"
//             />
//         )
//     }
// )
