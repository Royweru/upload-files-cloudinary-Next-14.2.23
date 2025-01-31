'use client'

//Uploading with the client is way much simpler and faster than uploading with the server
//This is because the client is directly uploading to the cloudinary server
//Whereas the server is uploading to the cloudinary server through the client


import { CldUploadWidget } from 'next-cloudinary'// Start by importing the CldUploadWidget from NextCloudinary
import React from 'react'

export const SimpleUploaderClient = () => {
  return (
    <div className='max-w-4xl mx-auto p-4 border-2 rounded-xl  border-dashed
     border-slate-500/95 flex flex-col items-center justify-center'>
        {/* Make sure to include the uploadPreset in your .env file */}
        <CldUploadWidget uploadPreset={process.env.CLOUDINARY_UPLOAD_PRESET as string}>
            {({open})=>{
                return(
                    <button onClick={()=>open?.()} className='bg-blue-500 px-6 py-4 
                    font-semibold text-white p-2 rounded-md'>
                        Upload
                    </button>
                )
            }}
        </CldUploadWidget>
    </div>
  )
}
