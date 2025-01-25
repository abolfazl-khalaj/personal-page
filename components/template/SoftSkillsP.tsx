"use client"

import { SoftSkillsType } from "@/model/SoftSkills";
import SoftSkill from "../module/SoftSkill";
import SoftSkillsP from "../module/SoftSkillsP";
import connectedDB from "@/configs/DB";
import { useState } from "react";


export interface SoftSkillsResponseType extends SoftSkillsType {
    _id : string
}


export default function SoftSkills({softSkills}:{softSkills:SoftSkillsResponseType[]}){

    const [name , setName] = useState<string|null>()
    const [mastery , setMastery] = useState<string|null>()


    const createSoftSkill = async () => {
        await fetch('http://localhost:3000/api/softskills',{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({name , mastery})
        }).then(res => {
            if(res.ok){
                alert('مهارت نرم ساخته شد')
                document.location.reload()
            }
        })
    }

    return (
        <div className="flex flex-col gap-y-3 pb-8 border-b">
        <div className="pb-1 border-b border-gray-600">
            <h4>مهارت های نرم</h4>
        </div>
        <div className=" p-6 rounded-lg shadow-md">
            <table className="w-full border-collapse bg-white shadow-sm rounded-lg">
                <thead className="bg-gray-200 text-gray-700 uppercase text-sm font-semibold">
                    <tr>
                        <th className="py-3 px-4 text-right">نام</th>
                        <th className="py-3 px-4 text-right">درصد تسلط</th>
                        <th className="py-3 px-4 text-right">حذف</th>

                        
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 text-black">
                    {
                        softSkills?.map(softSkill => (
                            <SoftSkillsP softSkill={softSkill} key={softSkill._id}/>
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
                    type="number" 
                    placeholder="درصد تسلط " 
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    onBlur={(e)=>setMastery(e.target.value)}
                />
            </div>
            <div className="text-center">
            <button className="py-1 px-8 bg-blue-400 rounded "
            onClick={createSoftSkill}
            >
                ثبت
            </button>
        </div>
        </div>

    </div>
    )
}