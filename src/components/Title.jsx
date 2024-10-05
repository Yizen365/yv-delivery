import React from 'react'

const Title = ({title, heading}) => {
  return (
    <div>
      <div className='h-6 w-4 bg-red-600 rounded-full'></div>
      <div className='font-bold text-3xl'>{title}</div>
      <div className='font-bold text-red-600 text-3xl'>{heading}</div>
    </div>
  )
}

export default Title
