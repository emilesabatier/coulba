import {
    $convertFromMarkdownString,
    $convertToMarkdownString,
    TRANSFORMERS
} from '@lexical/markdown'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin'
import { EditorState, LexicalEditor } from "lexical"
import { useCallback, useEffect, useMemo } from 'react'
import { cn } from '../../services'
import { ToolbarPlugin } from './ToolbarPlugin'

// function UpdatePlugin(props: EditorProps) {
//     const [editor] = useLexicalComposerContext()
//     const isFirstRender = useRef(true)

//     useEffect(() => {
//         if (isFirstRender.current) {
//             isFirstRender.current = false
//             editor.update(() => {

//                 // In the browser you can use the native DOMParser API to parse the HTML string.
//                 const parser = new DOMParser()

//                 let dom
//                 if (!props.value) {
//                     if (!props.defaultValue) return
//                     else dom = parser.parseFromString(props.defaultValue, "text/html")
//                 }
//                 else dom = parser.parseFromString(props.value, "text/html")

//                 // Once you have the DOM instance it's easy to generate LexicalNodes.
//                 const nodes = $generateNodesFromDOM(editor, dom)

//                 // Insert them at a selection.
//                 $insertNodes(nodes)
//             })
//         }
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [isFirstRender.current])

//     return null
// }

function OnChangePlugin({ onChange }: { onChange: (editorState: EditorState, editor: LexicalEditor) => void }) {
    // Access the editor through the LexicalComposerContext
    const [editor] = useLexicalComposerContext()
    // Wrap our listener in useEffect to handle the teardown and avoid stale references.
    useEffect(() => {
        // most listeners return a teardown function that can be called to clean them up.
        return editor.registerUpdateListener(({ editorState }) => {
            // call onChange here to pass the latest state up to the parent.
            onChange(editorState, editor)
        })
    }, [editor, onChange])

    return null
}

type EditorProps = {
    value?: string
    defaultValue?: string
    onChange?: ((value: string) => void)
}

export function Editor(props: EditorProps) {

    const initEditor = useCallback((_editor: LexicalEditor) => {
        if (!props.value) return

        // In the browser you can use the native DOMParser API to parse the HTML string.
        // const parser = new DOMParser()
        // const dom = parser.parseFromString(props.value, "text/html")

        // Once you have the DOM instance it's easy to generate LexicalNodes.
        $convertFromMarkdownString(props.value, TRANSFORMERS)
        return
        // $insertNodes(nodes)

    }, [props.value])

    const initialConfig = useMemo(() => ({
        editorState: initEditor,
        namespace: 'Editor',
        onError: (error: Error) => console.log(error),
    }), [props.value])

    function onChange(editorState: EditorState, _editor: LexicalEditor) {
        editorState.read(() => {
            if (!props.onChange) return

            const newValue = $convertToMarkdownString(TRANSFORMERS)

            if (newValue === props.value) return
            props.onChange(newValue)
        })
    }

    return (
        <LexicalComposer initialConfig={initialConfig}>
            <div className='w-full h-full grid grid-rows-[min-content_min-content_auto]'>
                <ToolbarPlugin />
                <PlainTextPlugin
                    contentEditable={<ContentEditable className={cn(
                        "w-full h-full min-h-[300px] text-base outline-none min-w-full p-2 border border-neutral/25 rounded-b-sm",
                        "focus-within:border-neutral/50 focus-within:shadow-inner focus-within:bg-neutral/5",
                    )} />}
                    placeholder={<></>}
                    ErrorBoundary={LexicalErrorBoundary}
                />
                {/* <MarkdownShortcutPlugin transformers={TRANSFORMERS} /> */}
                <HistoryPlugin />
                <OnChangePlugin onChange={onChange} />
            </div>
        </LexicalComposer>

    )
}
