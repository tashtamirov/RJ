'use client'
import React, { useState } from 'react'
import { Divider, Paper, Tab, Tabs, Typography } from '@mui/material'
import Comment from '../Comment'
import AddCommentForm from '../AddCommentForm'
import data from '../../data'

const PostComments: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0)
    const comments = data.comments[activeTab === 0 ? 'popular' : 'new']

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
            comments.map((obj) => <Comment key={obj.id} user={obj.user}  text={obj.text} createdAt={obj.createdAt}/>)
        }
        </div>
    </Paper>
    )
}

export default PostComments
