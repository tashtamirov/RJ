import React from 'react'
import { TextField, Button } from '@mui/material'
import { useForm, FormProvider } from "react-hook-form"
import { RegisterFormSchema } from '@/utils/validations'
import { yupResolver } from "@hookform/resolvers/yup";
import FormField from '@/components/FormField';

interface RegisterProps {
    onOpenRegister: () => void,
    onOpenLogin: () => void
}

interface FormData {
    email: string,
    password: string
}

export const Register: React.FC<RegisterProps> = ({ onOpenRegister, onOpenLogin }) => {
    const form = useForm<FormData>({
        mode: 'onBlur',
        resolver: yupResolver(RegisterFormSchema)
    })

    const onSubmit = (data: any) => console.log(data)

    return (
        <div>
            <FormProvider {...form}>
                <FormField name='fullname' label='Имя и фамилия' />
                <FormField name='email' label='Почта' />
                <FormField name='password' label='Пароль' />
                <form onSubmit={form.handleSubmit(onSubmit)} className='mt-20'>
                    <div className='d-flex align-center'>
                        <Button disabled={!form.formState.isValid} onClick={onOpenRegister} className='mr-10' style={{ textTransform: 'inherit', color: 'white' }} variant="contained">
                            Зарегистрироваться
                        </Button>
                        <Button onClick={onOpenLogin} style={{ textTransform: 'inherit', color: '#1565c0' }} variant="text">
                            Войти
                        </Button>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default Register




/*import { TextField, Button } from '@mui/material'
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

export default Register*/
