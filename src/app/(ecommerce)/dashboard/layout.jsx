import SideBar from '@/components/SideBar'
import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div className='flex h-screen gap-2'>
      <SideBar/>
      {children}
    </div>
  )
}

export default DashboardLayout
