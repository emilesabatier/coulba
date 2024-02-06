import {
    $convertFromMarkdownString,
    TRANSFORMERS
} from '@lexical/markdown'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin'
import { LexicalEditor } from "lexical"
import { useCallback } from 'react'


type EditorProps = {
    value?: string
}

export function Editor(props: EditorProps) {

    const initEditor = useCallback((_editor: LexicalEditor) => {
        if (!props.value) return
        $convertFromMarkdownString(props.value, TRANSFORMERS)
    }, [props.value])

    const initialConfig = {
        editorState: initEditor,
        namespace: 'Editor',
        editable: false,
        onError: (error: Error) => console.log(error)
    }

    return (
        <LexicalComposer initialConfig={initialConfig} key={Math.random()}>
            <PlainTextPlugin
                contentEditable={<ContentEditable className="w-full h-fit max-h-full min-h-[300px] text-base min-w-full" />}
                placeholder={<></>}
                ErrorBoundary={LexicalErrorBoundary}
            />
        </LexicalComposer>
    )
}
