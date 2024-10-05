"use client"

import FormInput from '@/components/FormInput'
import FormSubmit from '@/components/FormSubmit'
import { toast } from '@/hooks/use-toast'
import { UploadButton } from '@/lib/uploadthing'
import { register } from '@/utils/actions'
import React, { useState } from 'react'

const SignUp = () => {
  const [image, setImage] = useState("")

  const onSubmit = async (formData) => {
    const res = await register(formData, image)
    if (res?.error) {
      toast({title: res?.error})
    } else toast({title: res?.message})
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className='h-screen bg-cyan-100'></div>
      <div className='p-[15%] bg-white'>
        <h1 className='text-2xl font-medium'>Create an account</h1>
        <form action={onSubmit}>
          <FormInput
            id="name"
            label="Full Name"
            placeholder="Enter your name"
            type="text"
            className="h-10 mb-2"
          />
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
          <UploadButton
            endpoint="imageUploader"
            appearance={{
              button: "ut-uploading:cursor-not-allowed bg-slate-600 w-full after:bg-orange-400 max-w-[700px]",
              allowedContent: "hidden",
            }}
            onClientUploadComplete={(res) => {
              setImage(res[0].url)
            }}
            onUploadError={(error) => {
              alert(`Error: ${error.message}`)
            }}
          />
          <FormSubmit className="mt-2 w-full bg-red-500 text-white h-12 hover:bg-red-400">
            Create
          </FormSubmit>
        </form>
      </div>
    </div>
  )
}

export default SignUp
