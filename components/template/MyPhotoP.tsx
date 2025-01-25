"use client"

import { useState } from "react"


export default function MyPhotoP({ text }: { text: string }):React.JSX.Element{

    const [photoMe , setPhotoMe] = useState<string|null>()

    const updatePhotoMy = async () => {
    
        await fetch('http://localhost:3000/api/aboutme',{
            method:"PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({photoMe,type:"PhotoMy"})
        }).then(res => {
            if(res.ok){
                alert('درباره من تغیر کرد')
                document.location.reload()
            }
        })

    }

    return (
        <div className="flex flex-col gap-y-3 pb-8 border-b">
        <div className="pb-1 border-b border-gray-600">
            <h4>عکس من</h4>
        </div>
        <div>
            <p>
                {text}
            </p>
        </div>
        <div className="w-full">
            <input className="w-full text-black p-2"placeholder="برای تغییر عکس میتونید اقدام کنید ..."
            onBlur={(e)=>setPhotoMe(e.target.value)}></input>
        </div>
        <div className="flex justify-end">
            <button className="py-1 px-8 bg-blue-400 rounded "
            onClick={updatePhotoMy}>
                ثبت
            </button>
        </div>
    </div>
    )
}