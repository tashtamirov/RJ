'use client'
import React, { useState } from 'react'
import { Divider, Paper, Tab, Tabs, Typography } from '@mui/material'
import Comment from '../comment'
import AddCommentForm from '../AddCommentForm'

type CommentObj = {
    text: string,
    id: number,
    createdAt: string,
    user: {
        fullname: string,
        avatarUrl: string
    }
}

interface PostCommentsProps {
    items: CommentObj[]
}

const PostComments: React.FC<PostCommentsProps> = ({ items }) => {

    const [activeTab, setActiveTab] = useState(0)

    return (
        <Paper elevation={0} className='mt-40 p-30'>
        <div className='container'>
        <Typography variant='h6' className='mb-20'>42 комментария</Typography>
        <Tabs 
            value={activeTab} 
            onChange={(_, newValue) => setActiveTab(newValue)} 
            className="mt-20"  
            indicatorColor="primary" 
            textColor="primary"
        >
            <Tab label="Популярные" />
            <Tab label="По порядку" />
        </Tabs>
        <Divider />
        <AddCommentForm />
        {
            items.map((obj) => <Comment key={obj.id} user={obj.user}  text={obj.text} createdAt={obj.createdAt}/>)
        }
        </div>
    </Paper>
    )
}

export default PostComments
