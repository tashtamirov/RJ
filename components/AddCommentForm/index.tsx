'use client'
import React, { useState } from 'react'
import { Input, Button } from '@mui/material'
import styles from './AddCommentForm.module.scss'

export const AddCommentForm = () => {

    const [clicked, setClicked] = useState(false)
    const [text, setText] = useState('')

    const onAddComment = () => {
        setClicked(false)
        setText('')
    }

    return (
        <div className={styles.form}>
            <Input 
                classes={{ root: styles.fieldRoot }} 
                value={text} 
                onChange={e => setText(e.target.value)} 
                placeholder='Написать комментарий...' 
                onFocus={() => setClicked(true)} 
                minRows={clicked ? 5 : 1} 
                fullWidth 
                multiline 
            />
            {clicked && (
                <Button 
                    onClick={onAddComment} 
                    className={text ? styles.addButton : styles.addButtonOpacity} 
                    size='small' 
                    variant='contained'
                >
                    Отправить
                </Button>
                )
            }
        </div>
    )
}

export default AddCommentForm
