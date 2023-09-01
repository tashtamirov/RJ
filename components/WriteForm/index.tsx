import React from 'react'
import { Button, Input } from '@mui/material'
import { TextsmsOutlined as MessageIcon } from '@mui/icons-material';

import styles from './WriteForm.module.scss'
import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('../Editor').then(m => m.Editor) as any, { ssr: false })

interface WriteFormProps {
    title?: string
}

const WriteForm: React.FC<WriteFormProps> = ({ title }) => {

    return (
        <div>
            <Input classes={{ root: styles.titleField }} placeholder='Заголовок' defaultValue='' />
            <div className={styles.editor}>
                {/* <Editor /> */}
            </div>
            <Button variant="contained" >
                <MessageIcon className="mr-10" />
                Опубликовать
            </Button>
        </div>
    )
}

export default WriteForm
