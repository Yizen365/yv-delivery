import React from 'react'
import { Button } from './ui/button'
import { deleteCategory } from '@/services/categoriesCRUD'
import { toast } from '@/hooks/use-toast'

const DeleteCategory = ({ id }) => {
    const handleDelete = async () => {
        const res = await deleteCategory(id)
        if (res?.error) {
            toast({ title: res.error })
        } else {
            toast({ title: res?.message })
        }
    }
    return (
        <div>
            <Button onClick={handleDelete} className="bg-red-500">Delete</Button>
        </div>
    )
}

export default DeleteCategory
