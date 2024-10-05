import { UsersList } from '@/components/UsersList'
import prisma from '@/utils/connection'
import React from 'react'

const Users = async () => {
    const users = await prisma.user.findMany()
    return (
        <div className='w-full'>
            <UsersList users={users}/>
        </div>
    )
}

export default Users
