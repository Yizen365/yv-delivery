import ProductsList from '@/components/ProductsList'
import prisma from '@/utils/connection'
import React from 'react'

const Products = async () => {
    const query = {
        take: 10,
        skip: 0
    }
    const products = await prisma?.product?.findMany(query)
    const categories = await prisma?.category?.findMany()
  return (
    <div className='w-full'>
      <ProductsList products={products} categories={categories}/>
    </div>
  )
}

export default Products
