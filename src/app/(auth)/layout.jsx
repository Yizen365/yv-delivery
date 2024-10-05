import { getSession } from '@/utils/actions'
import { redirect } from 'next/dist/server/api-utils'
import React from 'react'

const AuthLayout = async ({ children }) => {
    const session = await getSession()

    if (!session.isLoggedn) {
        redirect("/")
    }

    return (
        <div>
            {children}
        </div>
    )
}

export default AuthLayout
