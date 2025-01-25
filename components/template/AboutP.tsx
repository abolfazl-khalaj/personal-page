"use client"

import connectedDB from "@/configs/DB";
import AboutMeModel from "@/model/AboutMe";
import { useEffect, useState } from "react";

export default  function About({text}:{text:string}){

    const [descriptionMe , setAboutMe ] = useState<string | null>()


    const updataDescriptionMe = async () => {

        await fetch('http://localhost:3000/api/aboutme', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', // تنظیم هدر Content-Type
            },
            body: JSON.stringify({descriptionMe,type:"Description"}), // اصلاح JSON.stringify
        }).then(res => {
            console.log(res.ok);
            if(res.ok){
                alert("اپدیت انجام شد")
                document.location.reload()
            }
            
        })
    }


    return (
        <div className="flex flex-col gap-y-3 pb-8 border-b">
        <div className="pb-1 border-b border-gray-600">
            <h4>درباره من </h4>
        </div>
        <div>
            <p>
                {text}
            </p>
        </div>
        <div className="w-full">
            <textarea className="w-full text-black p-2 min-h-44" name="" placeholder="برای تغییر معرفی میتونید اقدام کنید ..." id=""
            onBlur={(e)=>setAboutMe(e.target.value)}></textarea>
        </div>
        <div className="flex justify-end">
            <button className="py-1 px-8 bg-blue-400 rounded"
            onClick={updataDescriptionMe}>
                ثبت
            </button>
        </div>
    </div>
    )
}