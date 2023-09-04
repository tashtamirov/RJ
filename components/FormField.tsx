import  {useFormContext } from "react-hook-form"
import React from 'react'
import { TextField } from "@mui/material"

interface FormFieldProps {
    name: string,
    label: string
}

const FormField: React.FC<FormFieldProps> = ({ name, label }) => {
    const { register, formState} = useFormContext()
    return (
        <>
            <TextField
                {...register(name)}
                name={name}
                helperText={formState.errors[name]?.message}
                error={ !!formState.errors[name]?.message}
                className='mb-15'
                fullWidth size='small'
                label={label}
                variant='outlined'>
            </TextField>
        </>
    )
}

export default FormField
