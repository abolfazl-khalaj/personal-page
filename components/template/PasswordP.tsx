"use client"

import { useState } from "react"


export default function PasswordP({ text }: { text: string }):React.JSX.Element{

    const [password , setPassword] = useState<string|null>()

    const updataPassword = async () => {
    
        await fetch('http://localhost:3000/api/aboutme',{
            method:"PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({password,type:'Password'})
        }).then(res => {
            if(res.ok){
                alert('پسورد من تغیر کرد')
                document.location.reload()
            }
        })

    }

    return (
        <div className="flex flex-col gap-y-3 pb-8 border-b">
        <div className="pb-1 border-b border-gray-600">
            <h4>پسورد</h4>
        </div>
        <div>
            <p>
                {text}
            </p>
        </div>
        <div className="w-full">
            <input className="w-full text-black p-2 " placeholder="برای تغییر معرفی میتونید اقدام کنید ..."
            onBlur={(e)=>setPassword(e.target.value)}/>
        </div>
        <div className="flex justify-end">
            <button className="py-1 px-8 bg-blue-400 rounded "
            onClick={updataPassword}>
                ثبت
            </button>
        </div>
    </div>
    )
}