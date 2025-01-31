import { uploadFile } from "@/lib/cloudinary";
import { NextResponse,NextRequest } from "next/server";


export async function POST(
    req:NextRequest
){
  const formData = await req.formData()
  const file = formData.get('file') as File

  if(!file) return NextResponse.json("File not found",{status:400})

try {
    const buffer = Buffer.from(await file.arrayBuffer())
    const res = await uploadFile(buffer,'fileUploader') as {
        secure_url: string,
        public_id: string,
        format: string
    }
    return NextResponse.json({
        url:res.secure_url,
        publicId:res.public_id,
        format:res.format
    })
} catch (error) {
    console.error(error)
    return NextResponse.json("Internal server error",{status:500})
}
  
}