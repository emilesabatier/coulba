import { ComponentProps } from 'react'
import { FormatBase } from '..'
import { Editor } from './editor'


type FormatEditor = {
    value?: string | null
    className?: ComponentProps<'div'>['className']
}

export function FormatEditor(props: FormatEditor) {

    function input(value: string | undefined | null) {
        if (!value) return undefined
        return value
    }

    return (
        <FormatBase className={props.className}>
            <Editor value={input(props.value)} />
        </FormatBase>
    )
}
