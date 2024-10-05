import React, { forwardRef } from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'
import {useFormStatus} from 'react-dom'
import { cn } from '@/lib/utils'


const FormInput = forwardRef(
    (
        {
            label, id, type, defaultValue = "", placeholder, required, disabled, className, onBlur,
        },
        ref
    ) => {
            const {pending} = useFormStatus()
            return (
                <div>
                <div>
                    {label ? (
                        <Label htmlFor={id}
                        className="text-xs font-semibold text-neutral-700">
                            {label}
                        </Label>
                    ) : null}
                    <Input
                        onBlur={onBlur}
                        defaultValue={defaultValue}
                        ref={ref}
                        required={required}
                        placeholder={placeholder}
                        id={id}
                        name={id}
                        type={type}
                        disabled={pending || disabled}
                        className={cn(("text-sm px-2 py-lh-7 mb-2", className))}
                    />
                </div>
                </div>
            )
})

export default FormInput
