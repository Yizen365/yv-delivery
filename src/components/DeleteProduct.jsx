import React from 'react'
import { Button } from './ui/button'
import { deleteProduct } from '@/services/productsCRUD'
import { toast } from '@/hooks/use-toast'

const DeleteProduct = ({ id }) => {
  const handleDelete = async () => {
    const res = await deleteProduct(id)
    console.log(id)
    if (res?.error) {
      toast({ title: res.error })
    } else {
      toast({ title: res.message })
    }
  }
  return (
    <div>
      <Button className="bg-red-500" onClick={handleDelete}>Delete</Button>
  
    </div>
  )
}

export default DeleteProduct
