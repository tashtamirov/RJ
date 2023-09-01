import { MainLayout } from '@/Layouts/MainLayout'
import { Button, Divider, Paper, TextField, Typography } from '@mui/material'
import React from 'react'

const Settings = () => {
    return (
        <MainLayout hideComments>
            <Paper className='p-20' elevation={0}>
                <Typography variant='h6'>Основные настройки</Typography>
                <Divider className='mt-20 mb-20' />
                <form className='mt-20'>
                    <TextField 
                        className='mb-15' 
                        fullWidth size='small' 
                        required label='Никнейм' 
                        variant='outlined'
                    >
                    </TextField>
                    <TextField 
                        className='mb-15' 
                        fullWidth size='small' 
                        required 
                        label='Эл. почта ' variant='outlined'></TextField
                    >
                    <TextField 
                        className='mb-15' 
                        fullWidth size='small' 
                        required 
                        label='Пароль ' variant='outlined'></TextField
                    >
                </form>
                <Button variant="contained">Сохранить изменения</Button>
            </Paper>
        </MainLayout>
    )

}
export default Settings
