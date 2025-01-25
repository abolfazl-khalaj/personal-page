"use client"
import { ProjectsResponseType } from "../template/ProjectsP";

export default function ProjectP ({project}: {project:ProjectsResponseType}) {

    console.log(project._id);
    
    const deleteProject = async (id:string) => {

        await fetch(`http://localhost:3000/api/project/${id}`,{
            method:"DELETE",
            headers: {
                "Content-Type":"application/json"
            }
        }).then(res => {
            if(res.ok){
                alert('پروژه حذف شد')
                document.location.reload()
            }
        })

    }

    return (
        <tr className="hover:bg-gray-100 transition">
        <td className="py-3 px-4">{project.name}</td>
        <td className="py-3 px-4">
            {project.cover}                                
        </td>
        <td className="py-3 px-4">
            {project.url}
        </td>
        <td className="py-3 px-4">
            <p className="text-sm line-clamp-[8]">
                {project.description}
            </p>
        </td>
        <td className="py-3 px-4 text-center">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
            onClick={()=>deleteProject(project._id)}>
                حذف
            </button>
        </td>

    </tr>
    )
}