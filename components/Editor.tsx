import React from 'react'
import EditorJS from '@editorjs/editorjs'

export const Editor: React.FC = () => {

    React.useEffect(() => {
        const editor = new EditorJS({
            holder: 'editorjs',
            placeholder: 'Введите текст вашей статьи'
        })

        return () => {
            editor.isReady
            .then(() => {
                editor.destroy()
            })
            .catch(e => e.console.error('Error editor clean up', e))
        }

    }, [])

    return (
        <div id='editorjs' />
    )
}


