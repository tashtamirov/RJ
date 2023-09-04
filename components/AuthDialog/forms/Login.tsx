import React from 'react'
import { TextField, Button } from '@mui/material'
import { useForm, FormProvider } from "react-hook-form"
import { LoginFormSchema } from '@/utils/validations'
import { yupResolver } from "@hookform/resolvers/yup";
import FormField from '@/components/FormField';

interface LoginProps {
    onOpenRegister: () => void,
}

interface FormData {
    email: string,
    password: string
}

export const Login: React.FC<LoginProps> = ({ onOpenRegister }) => {
    const form = useForm<FormData>({
        mode: 'onBlur',
        resolver: yupResolver(LoginFormSchema)
    })

    const onSubmit = (data: any) => console.log(data)

    return (
        <div>
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='mt-20'>
                    <FormField name='email' label='Почта' />
                    <FormField name='password' label='Пароль' />
                    <div className='d-flex align-center'>
                        <Button disabled={!form.formState.isValid} className='mr-10' style={{ textTransform: 'inherit', color: 'white' }} variant="contained">
                            Войти
                        </Button>
                        <Button onClick={onOpenRegister} style={{ textTransform: 'inherit', color: '#1565c0' }} variant="text">
                            Регистрация
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default Login
