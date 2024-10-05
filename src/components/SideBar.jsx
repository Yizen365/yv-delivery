import { sidebarRoutes } from '@/utils/data'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <aside className='bg-gradient-to-b from-white to-slate-200'>
      <div className='flex items-center justify-center w-60 h-10 border-b-4'>
        <h1>Admin Panel</h1>
      </div>
      <ul>
        {sidebarRoutes.map((item, index)=> (
            <li key={item.id} className='flex items-center h-10 pl-6 hover:bg-slate-300 cursor-pointer'>
                <Link className='flex space-x-4 items-center w-full h-full' href={item.route}>
                    {item.icon}
                    <span>{item.name}</span>
                </Link>
            </li>
        ))}
      </ul>
    </aside>
  )
}

export default SideBar
