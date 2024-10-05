import { verifyEmail } from '@/utils/actions'
import React from 'react'

const Verification = async ({params}) => {
    const res = await verifyEmail(params?.verificationId)

    return (
        <div className='text-3xl place-content-center h-screen bg-black text-white font-bold'>
            {res?.error || "Loading"}
        </div>
    )
}

export default Verification