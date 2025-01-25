import { SkillsResponseType } from "../template/SkillsP";


export default function SkillP ({skill}:{skill:SkillsResponseType}){

    const deleteSkill = async (id:string) => {

        await fetch(`http://localhost:3000/api/skills/${id}`,{
            method:"DELETE",
            headers: {
                "Content-Type":"application/json"
            }
        }).then(res => {
            if(res.ok){
                alert('مهارت حذف شد')
                document.location.reload()
            }
        })

    }

    return (
        <tr className="hover:bg-gray-100 transition">
            <td className="py-3 px-4">{skill.name}</td>
            <td className="py-3 px-4">
                {skill.cover}                
            </td>
            <td className="py-3 px-4">
                {skill.mastery}                
            </td>
            <td className="py-3 px-4 text-center">
                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                onClick={()=>deleteSkill(skill._id)}>
                    حذف
                </button>
            </td>
            <td className="py-3 px-4 text-center">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    ویرایش
                </button>
            </td>
        </tr>
    )
}