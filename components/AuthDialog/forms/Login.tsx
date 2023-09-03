import React from 'react'
import { TextField, Button } from '@mui/material'
import { useForm, Controller } from "react-hook-form"
import { LoginFormSchema } from '@/utils/Schemas/loginValidation'
import { yupResolver } from "@hookform/resolvers/yup";

interface LoginProps {
    onOpenRegister: () => void
}

export const Login:React.FC<LoginProps> = ({ onOpenRegister }) => {
    const form = useForm<FormData>({
        mode: 'onBlur',
        resolver: yupResolver(LoginFormSchema)
    })

    const onSubmit = (data: any) => console.log(data)

    return (
        <div>
            <form onSubmit={form.handleSubmit(onSubmit)} className='mt-20'>
                <TextField
                    {...form.register("email")}
                    name='email'
                    className='mb-15'
                    fullWidth size='small'
                    required
                    label='Почта ' variant='outlined'>
                </TextField>
                <TextField
                    name='password'
                    type='password'
                    className='mb-15'
                    fullWidth size='small'
                    required
                    label='Пароль' variant='outlined'>
                </TextField>
            </form>
            <div className='d-flex align-center'>
                <Button className='mr-10' style={{ textTransform: 'inherit', color: 'white'}} variant="contained">
                    Войти
                </Button>
                <Button onClick={onOpenRegister} style={{ textTransform: 'inherit', color: '#1565c0' }} variant="text">
                    Регистрация
                </Button>
            </div>
        </div>
    )
}

export default Login
