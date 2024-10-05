import React from 'react'
import { Label } from './ui/label'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"



const SelectForm = (
    {
        label, id, lists, form
    }) => {
    return (
        <div>
            <div>
                {label ? (
                    <Label htmlFor={id}
                        className="text-xs font-semibold text-neutral-700">
                        {label}
                    </Label>
                ) : null}
                <FormField
                    control={form.control}
                    name={id}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{label}</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {lists?.map((item,index)=> (
                                        <SelectItem key={index} value={item.id}>{item.name}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </FormItem>
                    )}
                />
            </div>
        </div>
    )
}

export default SelectForm
