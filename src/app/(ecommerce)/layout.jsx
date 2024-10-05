import React from 'react'
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import { Toaster } from '@/components/ui/toaster'

const EcommerceLayout = ({children}) => {
  return (
    <div>
      <Toaster/>
      <NavBar/>
      <Header/>
      {children}
    </div>
  )
}

export default EcommerceLayout
