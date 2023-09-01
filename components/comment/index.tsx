"use client"
import React, { useState } from 'react'
import { IconButton, Typography } from '@mui/material'
import MoreIcon from '@mui/icons-material/MoreHorizOutlined';
import styles from './Comment.module.scss'

interface CommentPostProps {
    user: {
        fullname: string,
        avatarUrl: string 
    }
    text: string
    createdAt: string
}

const Comment: React.FC<CommentPostProps> = ({ user, text, createdAt }) => {
    const [anchorEL, setAnchorEl] = useState(null)

    // const handlelick = (event) => {
    //     setAnchorEl(event.currentTarget)
    // }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <div className={styles.comment}>
            <div className={styles.userInfo}>
                <img src={user.avatarUrl} alt='avatar' />
                <b>{user.fullname}</b>
                <span>{createdAt}</span>
            </div>
            <Typography className={styles.text}>
                {text}
            </Typography>
            <span className={styles.replyBtn}>Ответить</span>
            <IconButton>
                <MoreIcon />
            </IconButton>
        </div>
    )
}

export default Comment
