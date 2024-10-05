import { Heart } from 'lucide-react'
import React from 'react'

const Favorite = () => {
  return (
    <div className='bg-slate-300 rounded-full p-3 flex justify-center items-center cursor-pointer'>
      <Heart size={20}/>
    </div>
  )
}

export default Favorite
