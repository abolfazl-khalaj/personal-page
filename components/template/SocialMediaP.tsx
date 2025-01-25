"use client"

import { SocialMediaType } from "@/model/SocialMedia";
import SocialMediaP from "../module/SocialMediaP";
import { useState } from "react";

export interface SocialResponseType extends SocialMediaType {
    _id: string;
}

export default function SocialMedia({socials}:{socials:SocialResponseType[]}){

    const [name , setName] = useState<string|null>()
    const [cover , setCover] = useState<string|null>()
    const [url , setUrl] = useState<string|null>()

    const createSocialMedia = async () => {

        const data = {
            name ,
            cover ,
            url
        }

        await fetch('http://localhost:3000/api/socialmedia',{
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        }).then(res => {
            if(res.ok){
                alert('سوشال ثبت شد')
                document.location.reload()
            }
        })
    }

    return (
        <div className="flex flex-col gap-y-3 pb-8 border-b">
        <div className="pb-1 border-b border-gray-600">
            <h4>فضای مجازی</h4>
        </div>
        <div className=" p-6 rounded-lg shadow-md">
            <table className="w-full border-collapse bg-white shadow-sm rounded-lg">
                <thead className="bg-gray-200 text-gray-700 uppercase text-sm font-semibold">
                    <tr>
                        <th className="py-3 px-4 text-right">نام</th>
                        <th className="py-3 px-4 text-right">لینک</th>
                        <th className="py-3 px-4 text-right">آدرس عکس</th>
                        <th className="py-3 px-4 text-center">حذف</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 text-black">
                    {
                        socials?.map(social => (
                            <SocialMediaP social={social} key={social._id}/>
                        ))
                    }
                </tbody>
            </table>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full mx-auto text-black">
            <div className="mb-4">
                <input 
                    type="text" 
                    placeholder="نام فضا" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onBlur={(e)=>setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <input 
                    type="text" 
                    placeholder="ادرس" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onBlur={(e)=>setUrl(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <input 
                    type="text" 
                    placeholder="ادرس عکس" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onBlur={(e)=>setCover(e.target.value)}
                />
            </div>
            <div className="text-center">
            <button className="py-1 px-8 bg-blue-400 rounded "
            onClick={createSocialMedia}>
                ثبت
            </button>
        </div>
        </div>

    </div>
    )
}