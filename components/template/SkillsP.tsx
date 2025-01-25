"use client"

import { SkillsType } from "@/model/Skills";
import SkillP from "../module/SkillP";
import { useState } from "react";

export interface SkillsResponseType extends SkillsType {
    _id: string;
}

export default function Skills({skills}:{skills:SkillsResponseType[]}){

    const [name , setName] = useState<string|null>()
    const [cover , setCover] = useState<string|null>()
    const [mastery , setMastery] = useState<string|null>()


    const createSkill = async () => {

        const data = {
            name , 
            cover , 
            mastery
        }

        await fetch('http://localhost:3000/api/skills',{
            method: 'POST',
            headers: {
                "Content-Type" : 'application/json'
            },
            body:JSON.stringify(data)
        }).then(res  => {
            if(res.ok){
                alert('مهارت اضافه شد')
                document.location.reload()
            }
        })

    }

    return (
        <div className="flex flex-col gap-y-3 pb-8 border-b">
        <div className="pb-1 border-b border-gray-600">
            <h4>مهارت های اصلی</h4>
        </div>
        <div className=" p-6 rounded-lg shadow-md">
            <table className="w-full border-collapse bg-white shadow-sm rounded-lg">
                <thead className="bg-gray-200 text-gray-700 uppercase text-sm font-semibold">
                    <tr>
                        <th className="py-3 px-4 text-right">نام</th>
                        <th className="py-3 px-4 text-right"> لینک عکس </th>
                        <th className="py-3 px-4 text-right">درصد تسلط</th>
                        <th className="py-3 px-4 text-right"> حذف</th>

                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 text-black">
                    {
                        skills?.map(skill => (
                            <SkillP skill={skill} key={skill._id}/>
                        ))
                    }
                </tbody>
            </table>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full mx-auto text-black">
            <div className="mb-4">
                <input 
                    type="text" 
                    placeholder="نام مهارت" 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onBlur={(e)=>setName(e.target.value)}
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
            <div className="mb-4">
                <input 
                    type="number" 
                    placeholder="درصد تسلط " 
                    onBlur={(e)=>setMastery(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
            </div>
            <div className="text-center">
            <button className="py-1 px-8 bg-blue-400 rounded "
            onClick={createSkill}>
                ثبت
            </button>
        </div>
        </div>

    </div>
    )
}