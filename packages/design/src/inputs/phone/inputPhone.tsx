import { IconCheck, IconSelector } from '@tabler/icons-react'
import { InputHTMLAttributes, cloneElement, forwardRef, useRef, useState } from 'react'
import { FieldError } from 'react-hook-form'
import { IMaskInput } from 'react-imask'
import { FlagBE } from '../../assets/svg/flags/flagBE'
import { FlagCH } from '../../assets/svg/flags/flagCH'
import { FlagFR } from '../../assets/svg/flags/flagFR'
import { FlagGP } from '../../assets/svg/flags/flagGP'
import { FlagGY } from '../../assets/svg/flags/flagGY'
import { FlagLU } from '../../assets/svg/flags/flagLU'
import { FlagMQ } from '../../assets/svg/flags/flagMQ'
import { FlagNC } from '../../assets/svg/flags/flagNC'
import { FlagPF } from '../../assets/svg/flags/flagPF'
import { FlagRE } from '../../assets/svg/flags/flagRE'
import { FlagWF } from '../../assets/svg/flags/flagWF'
import { Button } from '../../buttons'
import { Popover, PopoverContent, PopoverTrigger } from '../../overlays'
import { cn } from "../../services/cn"


type Country = {
    key: string
    icon: JSX.Element
    name: string
    prefix: number
    digits: number
    mask: string
}
const countries: Country[] = [
    {
        key: "fr",
        icon: <FlagFR />,
        name: "France métropolitaine",
        prefix: 33,
        digits: 9,
        mask: "0`{ }00`{ }00`{ }00`{ }00",
    },
    {
        key: "gp",
        icon: <FlagGP />,
        name: "Guadeloupe, Saint-Martin, Saint-Barthélemy",
        prefix: 590,
        digits: 9,
        mask: "0`{ }00`{ }00`{ }00`{ }00",
    },
    {
        key: "gy",
        icon: <FlagGY />,
        name: "Guyane",
        prefix: 594,
        digits: 9,
        mask: "0`{ }00`{ }00`{ }00`{ }00",
    },
    {
        key: "mq",
        icon: <FlagMQ />,
        name: "Martinique",
        prefix: 596,
        digits: 9,
        mask: "0`{ }00`{ }00`{ }00`{ }00",
    },
    {
        key: "re",
        icon: <FlagRE />,
        name: "La Réunion, Mayotte",
        prefix: 262,
        digits: 9,
        mask: "0`{ }00`{ }00`{ }00`{ }00",
    },
    {
        key: "pm",
        icon: <FlagRE />,
        name: "Saint-Pierre-et-Miquelon",
        prefix: 508,
        digits: 9,
        mask: "0`{ }00`{ }00`{ }00`{ }00",
    },
    {
        key: "wf",
        icon: <FlagWF />,
        name: "Wallis-et-Futuna",
        prefix: 681,
        digits: 9,
        mask: "0`{ }00`{ }00`{ }00`{ }00",
    },
    {
        key: "nc",
        icon: <FlagNC />,
        name: "Nouvelle-Calédonie",
        prefix: 687,
        digits: 9,
        mask: "000`{ }000",
    },
    {
        key: "pf",
        icon: <FlagPF />,
        name: "Polynésie française",
        prefix: 689,
        digits: 9,
        mask: "0`{ }00`{ }00`{ }00`{ }00",
    },
    {
        key: "be",
        icon: <FlagBE />,
        name: "Belgique",
        prefix: 32,
        digits: 9,
        mask: "0`{ }00`{ }00`{ }00`{ }00",
    },
    {
        key: "ch",
        icon: <FlagCH />,
        name: "Suisse",
        prefix: 41,
        digits: 9,
        mask: "0`{ }00`{ }00`{ }00`{ }00",
    },
    {
        key: "lu",
        icon: <FlagLU />,
        name: "Luxembourg",
        prefix: 352,
        digits: 9,
        mask: "0`{ }00`{ }00`{ }00`{ }00",
    }
]


type Phone = {
    prefix?: string | null
    number?: string | null
}

type InputPhone = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> & {
    error?: FieldError
    value: Phone | undefined | null
    onChange: (value: Phone | undefined | null) => void
}

export const InputPhone = forwardRef<HTMLInputElement, InputPhone>(
    ({ className, type, ...props }, _ref) => {
        const currentCountry = countries.find(x => x.prefix.toString() === props.value?.prefix) ?? countries[0]

        const inputRef = useRef<HTMLInputElement>(null)
        const [open, setOpen] = useState(false)

        return (
            <div
                className={cn(
                    "w-full h-[40px] flex flex-row justify-start items-center gap-1",
                    (!props.error) ? "border-neutral/25" : "border-error"
                )}
            >
                <Popover open={open} onOpenChange={() => setOpen(!open)}>
                    <PopoverTrigger asChild>
                        <Button
                            onClick={() => setOpen(!open)}
                            data-open={open}
                            className={cn(
                                "w-fit group"
                            )}
                        >
                            <div className={cn(
                                "h-[40px] w-full flex justify-between items-center gap-2 p-2 border border-solid rounded-sm text-base placeholder:text-neutral/50",
                                "group-focus:border-neutral/50 group-focus:shadow-outer group-focus:bg-neutral/5",
                                "group-data-[state=open]:border-neutral/50 group-data-[state=open]:bg-neutral/5 group-data-[state=open]:shadow-outer",
                                (!props.error) ? "border-neutral/25" : "border-error",
                                className
                            )}>
                                <div className="rounded-sm min-h-[24px] h-[24px] w-auto min-w-max p-1">
                                    {cloneElement(currentCountry.icon, { className: "w-full h-full" })}
                                </div>
                                <IconSelector className="stroke-neutral/50" />
                            </div>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent
                        align="start"
                        avoidCollisions={true}
                        className="overflow-hidden"
                    >
                        <ol className='max-h-[300px] flex-col justify-start items-stretch overflow-auto'>
                            {
                                [...countries].sort((a, b) => a.name.localeCompare(b.name)).map((country) => (
                                    <div
                                        key={country.key}
                                        onClick={() => {
                                            props.onChange({
                                                ...props.value,
                                                prefix: country.prefix.toString(),
                                            })
                                            setOpen(false)
                                        }}
                                        className={cn(
                                            "h-[40px] relative flex justify-between overflow-hidden w-full cursor-default select-none items-center p-3 gap-3 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                                            (country.key === currentCountry.key) ? "bg-primary/10" : "bg-none hover:bg-neutral/5"
                                        )}
                                    >
                                        <div className="flex flex-row justify-between items-center gap-2">
                                            <div className="rounded-sm h-[24px] min-h-[24px] p-1">
                                                {cloneElement(country.icon, { className: "w-full h-full" })}
                                            </div>
                                            <span className={cn(
                                                "text-neutral",
                                                (country.key === currentCountry.key) ? "text-primary" : ""
                                            )}>
                                                {country.name}
                                            </span>
                                            <span className={cn(
                                                "italic text-neutral/50",
                                                (country.key === currentCountry.key) ? "text-primary/50" : ""
                                            )}>
                                                ({country.prefix < 100 ? `+${country.prefix}` : `+${country.prefix}`})
                                            </span>
                                        </div>
                                        <IconCheck
                                            className={cn(
                                                "h-4 w-4 stroke-primary",
                                                (country.key === currentCountry.key) ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                    </div>
                                ))
                            }
                        </ol>
                    </PopoverContent>
                </Popover>
                <div
                    tabIndex={0}
                    className={cn(
                        "w-full flex justify-start items-stretch gap-1 p-2 border border-neutral/25 rounded-sm",
                        "focus-within:border-neutral/50 focus-within:shadow-inner focus-within:bg-neutral/5",
                    )}
                    onFocus={() => inputRef?.current?.focus()}
                >
                    <span className="">+{currentCountry.prefix}</span>
                    <IMaskInput
                        inputRef={inputRef}
                        // mask={currentCountry.mask}
                        mask={/^\d{1,12}$/}
                        autofix={false}
                        lazy={false}
                        overwrite={true}
                        eager="append"
                        unmask="typed"
                        onAccept={(value: string | undefined) => {
                            if (!value) return props.onChange(null)
                            const newValue = value.replaceAll(" ", "").replace(/^0/, '')
                            props.onChange({
                                prefix: currentCountry.prefix.toString(),
                                number: newValue,
                            })
                        }}
                        value={props.value?.number ?? undefined}
                        className="bg-transparent"
                        inputMode="tel"
                    />
                </div>
            </div>
        )
    }
)
