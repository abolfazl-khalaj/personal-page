'use client'
import { SoftSkillsResponseType } from "../template/SoftSkillsP";


export default function SoftSkillsP ({softSkill}:{softSkill : SoftSkillsResponseType}) {

    const deleteSoftSkill = async (id:string) => {

        await fetch(`http://localhost:3000/api/softskills/${id}`,{
            method:"DELETE",
            headers: {
                "Content-Type":"application/json"
            }
        }).then(res => {
            if(res.ok){
                alert('مهارت نرم حذف شد')
                document.location.reload()
            }
        })

    }


    return (
        <tr className="hover:bg-gray-100 transition">
        <td className="py-3 px-4">{softSkill.name}</td>
        <td className="py-3 px-4">
               {softSkill.mastery}
        </td>
        <td className="py-3 px-4 text-center">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
            onClick={()=>deleteSoftSkill(softSkill._id)}>
                حذف
            </button>
        </td>
    </tr>
    )
}