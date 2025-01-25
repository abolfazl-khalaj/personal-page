"use client"
import { BlogsResponseType } from "../template/BlogsP";
import { ProjectsResponseType } from "../template/ProjectsP";

export default function BlogsP ({blog}: {blog:BlogsResponseType}) {

    
    const deleteProject = async (id:string) => {

        await fetch(`http://localhost:3000/api/blog/${id}`,{
            method:"DELETE",
            headers: {
                "Content-Type":"application/json"
            }
        }).then(res => {
            if(res.ok){
                alert('مقاله حذف شد')
                document.location.reload()
            }
        })

    }

    return (
        <tr className="hover:bg-gray-100 transition">
        <td className="py-3 px-4">{blog.title}</td>
        <td className="py-3 px-4">
            {blog.cover}                                
        </td>
        <td className="py-3 px-4">
            <p className="text-sm line-clamp-[8]">
                {blog.description}
            </p>
        </td>
        <td className="py-3 px-4">
            <p className="text-sm line-clamp-[8]">
                {blog.body}
            </p>
        </td>
        <td className="py-3 px-4 text-center">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
            onClick={()=>deleteProject(blog._id)}>
                حذف
            </button>
        </td>
    </tr>
    )
}