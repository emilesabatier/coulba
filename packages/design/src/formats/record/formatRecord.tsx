import { ComponentProps, ReactElement, forwardRef } from "react"
import { Button } from "../../buttons"
import { FormatBase } from "../formatBase"
import { FormatRecordContent } from "./formatRecordContent"


type FormatRecord = {
    icon: ReactElement
    disabled?: boolean
    textValue: string
    onClick?: () => void
    className?: ComponentProps<'div'>['className']
}

export const FormatRecord = forwardRef<HTMLButtonElement, FormatRecord>(
    function (props, ref) {
        return (
            <FormatBase className={props.className}>
                <Button
                    ref={ref}
                    onClick={props.onClick}
                    className="w-fit h-fit items-center overflow-auto group"
                >
                    <FormatRecordContent
                        icon={props.icon}
                        textValue={props.textValue}
                        className={props.className}
                        disabled={props.disabled}
                    />
                </Button>
            </FormatBase>
        )
    }
)
