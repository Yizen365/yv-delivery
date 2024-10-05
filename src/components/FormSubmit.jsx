import React from 'react'
import { Button } from './ui/button'
import { useFormState } from 'react-dom'
import { cn } from '@/lib/utils'

const FormSubmit = ({ children, disabled, className }) => {
    const { pending } = useFormState()
    return (
        <Button
            disabled={pending || disabled}
            className={cn(className)}
            type="submit"
            varient="secondary"
            size="sm"

        >
            {children}
        </Button>
    )
}

export default FormSubmit
