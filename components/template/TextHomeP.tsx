"use client"

import { useState } from "react"


export default function TextHome({ text }: { text: string }):React.JSX.Element{

    const [introduction , setValue] = useState<string|null>()

    const updataTextHome = async () => {
    
        await fetch('http://localhost:3000/api/aboutme',{
            method:"PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({introduction,type:'Introduction'})
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
            <h4>متن صفحه اصلی</h4>
        </div>
        <div>
            <p>
                {text}
            </p>
        </div>
        <div className="w-full">
            <textarea className="w-full text-black p-2 min-h-44" name="" placeholder="برای تغییر معرفی میتونید اقدام کنید ..." id=""
            onBlur={(e)=>setValue(e.target.value)}></textarea>
        </div>
        <div className="flex justify-end">
            <button className="py-1 px-8 bg-blue-400 rounded "
            onClick={updataTextHome}>
                ثبت
            </button>
        </div>
    </div>
    )
}