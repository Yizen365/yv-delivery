import CategoriesList from '@/components/CategoriesList'
import prisma from '@/utils/connection'
import React from 'react'

const page = async () => {
    const query = {
        take: 10,
        skip: 0
    }
    const categories = await prisma?.category?.findMany(query)
  return (
    <div className='w-full'>
      <CategoriesList categories={categories}/>
    </div>
  )
}

export default page
