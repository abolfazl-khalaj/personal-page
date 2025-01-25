"use client"

import exp from "constants";
import { SocialResponseType } from "../template/SocialMediaP";


export default function SocialMediaP ({social}:{social:SocialResponseType}) {

    const deleteSocial = async (id:string) => {

        await fetch(`http://localhost:3000/api/socialmedia/${id}`,{
            method:"DELETE",
            headers: {
                "Content-Type":"application/json"
            }
        }).then(res => {
            if(res.ok){
                alert('سوشال حذف شد')
                document.location.reload()
            }
        })

    }


    return (
        <tr className="hover:bg-gray-100 transition">
        <td className="py-3 px-4">{social.name}</td>
        <td className="py-3 px-4 md:text-sm">
            {social.url}                                
        </td>
        <td className="py-3 px-4 md:text-sm">
            <p className="text-sm w-8 line-clamp-1">
            {social.cover}
            </p>
        </td>
        <td className="py-3 px-4 text-center">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
            onClick={()=>deleteSocial(social._id)}>
                حذف
            </button>
        </td>
        </tr>
    )
}