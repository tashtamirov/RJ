import { MainLayout } from '../../../Layouts/MainLayout'
import React from 'react'
import FullPost from '@/components/FullPost'
import PostComments from '@/components/PostComments'
import { comments } from '@/components/SideComments'

const Post = () => {
    return (
        <MainLayout className='mb-50' contentFullWidth>
            <FullPost />
            <PostComments items={comments} />
        </MainLayout>
    )
}

export default Post