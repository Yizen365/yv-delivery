import React from 'react'
import { Button } from './ui/button'
import { staticTime } from '@/utils/data'

const Enhancement = () => {
  return (
    <div className='bg-black px-5'>
      <div className='grid grid-cols-1 lg:grid-cols-2 sm:gap-10'>
        <div className='text-white flex flex-col justify-center gap-4'>
            <h2 className='text-green-500 font-medium text-lg'>Categories</h2>
            <h1 className='text-3xl font-bold'>Enhance your Time Management</h1>
            <div className='flex gap-3'>     
                {
                    staticTime.map((i, index)=> (
                        <div key={index} className='p-5 rounded-full bg-white w-24 text-black text-center'>
                            <div>{i.count}</div>
                            <div>{i.time}</div>
                        </div>
                    ))
                }
            </div>
            <Button className="bg-green-500">Buy Now</Button>
        </div>
        <div className='flex justify-center items-center'>
            <img width="230px" src="./banner3.png" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Enhancement
