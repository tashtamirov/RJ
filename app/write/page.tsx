import WriteForm from '@/components/WriteForm'
import { MainLayout } from '@/Layouts/MainLayout'
import { NextPage } from 'next'
import React from 'react'

// interface WritePageProps {

// }

const WritePage: NextPage = () => {
    return (
        <MainLayout className='main-layout-white' hideComments hideMenu>
            <WriteForm />
        </MainLayout>
    )
}

export default WritePage
