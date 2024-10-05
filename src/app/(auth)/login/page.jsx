"use client"

import FormInput from '@/components/FormInput'
import FormSubmit from '@/components/FormSubmit'
import { toast } from '@/hooks/use-toast'
import { login } from '@/utils/actions'
import React from 'react'

const Login = () => {

  const onSubmit = async (formData) => {
    const res = await login(formData)
    if (res?.error) {
      toast({title: res?.error})
    }
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className='h-screen bg-cyan-100'></div>
      <div className='p-[15%] bg-white'>
        <h1 className='text-2xl font-medium'>Login to YV Delivery</h1>
        <form action={onSubmit}>
          <FormInput
            id="email"
            label="Email Address"
            placeholder="Enter your email"
            type="email"
            className="h-10 mb-2"
          />
          <FormInput
            id="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            className="h-10 mb-2"
          />
          <FormSubmit className="mt-2 w-full bg-red-500 text-white h-12 hover:bg-red-400">
            Login
          </FormSubmit>
        </form>
      </div>
    </div>
  )
}

export default Login
