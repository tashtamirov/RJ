import { TextField, Button } from '@mui/material'
import React from 'react'

interface RegisterProps {
    onOpenRegister: () => void,
    onOpenLogin: () => void
}

export const Register:React.FC<RegisterProps> = ({ onOpenRegister, onOpenLogin }) => {
    return (
        <div>
            <form className='mt-20'>
            <TextField
                    className='mb-15'
                    fullWidth size='small'
                    required
                    label='Имя и фамилия' variant='outlined'>
                </TextField>
                <TextField
                    className='mb-15'
                    fullWidth size='small'
                    required
                    label='Почта' variant='outlined'>
                </TextField>
                <TextField
                    type='password'
                    className='mb-15'
                    fullWidth size='small'
                    required
                    label='Пароль' variant='outlined'>
                </TextField>
            </form>
            <div className='d-flex align-center'>
                <Button className='mr-10' style={{ textTransform: 'inherit', color: 'white' }} variant="contained">
                    Зарегистрироваться
                </Button>
                <Button onClick={onOpenLogin} style={{ textTransform: 'inherit', color: '#1565c0' }} variant="text">
                    Войти
                </Button>
            </div>
        </div>
    )
}

export default Register
