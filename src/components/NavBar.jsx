import { getSession } from '@/utils/actions'
import React from 'react'

const NavBar = async () => {
  const session = await getSession()

  console.log(session)
  
  return (
    <div className='text-center p-2 bg-black text-white'>
      Winter Sale! Get your warm Jumpers and get cozy for Christmas! 
      <span className='font-bold'>Shop Now!</span>
    </div>
  )
}

export default NavBar
