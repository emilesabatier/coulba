import { ChangeEvent, InputHTMLAttributes, forwardRef, useImperativeHandle, useRef } from 'react'
import { FieldError } from 'react-hook-form'
import { Button } from '../../buttons'


type InputFile = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> & {
    error?: FieldError
    value?: File | null
    onChange?: (value?: File | null | undefined) => void
    type?: "image"
}

export const InputFile = forwardRef<HTMLInputElement, InputFile>(
    function (props, ref) {
        const inputRef = useRef<HTMLInputElement | null>(null)

        useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

        const handleClick = () => {
            inputRef.current?.click()
        }


        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            if (!props.onChange) return
            if (event.target.files) {
                props.onChange(event.target.files[0])
            }
        }


        return (
            <div className="border border-neutral/25 border-dashed bg-background/50 rounded-sm flex justify-center items-center">
                <input
                    ref={inputRef}
                    type="file"
                    onChange={handleChange}
                    accept={!props.type ? "*" : "image/*"}
                    className="hidden w-full h-full"
                />
                <Button
                    onClick={handleClick}
                    className="cursor-pointer w-full h-full p-2 md:p-4 flex justify-center items-center"
                >
                    <span>
                        {props.value?.name ?? props.placeholder ?? "Veuillez ajouter un fichier"}
                    </span>
                </Button>
            </div>
        )
    }
)
