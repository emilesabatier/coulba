import { ButtonPlain, ButtonSubtle } from "../buttons"


export type FormSubmit<T> = {
    previousLabel?: string
    previousCallback?: (data?: T) => Promise<void>
    nextLabel: string
    nextCallback: (data?: T) => Promise<void>
    stepCount?: string
    stepName?: string
}


export function FormSubmit<T>(props: FormSubmit<T>) {
    let handleNext = async () => {
        await props.nextCallback()
    }

    let handlePrevious = () => {
        if (props.previousCallback === undefined) return undefined
        props.previousCallback()
    }

    return (
        <div className="w-full mt-auto flex flex-col justify-start items-stretch gap-2">
            <div className="w-full flex flex-row justify-end items-center gap-2">
                {
                    (props.previousCallback === undefined) ? null : (
                        <ButtonSubtle
                            text={props.previousLabel}
                            onClick={handlePrevious}
                        />
                    )
                }
                <ButtonPlain
                    text={props.nextLabel}
                    onClick={handleNext}
                    loader
                />
            </div>
            {(!props.stepCount && !props.stepName) ? null :
                <div className="w-full flex flex-row justify-end items-center gap-1">
                    {(!props.stepCount) ? null : <span className="text-sm text-neutral/50">{props.stepCount}</span>}
                    {(!props.stepName) ? null : <span className="text-sm text-neutral/50">{props.stepName}</span>}
                </div>
            }
        </div>
    )
}
