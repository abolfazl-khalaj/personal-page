import Image from "next/image";
import Link from "next/link";
import { BlogsResponseType } from "../template/BlogsP";


export default function Article ({blog}:{blog:BlogsResponseType}){
    console.log(blog);
    
    return (
        <div className="w-[45%] p-3 border rounded-md">
            <div >
                <Image width={800} height={300} className="rounded" src={`${blog.cover.trimEnd()}`} alt={`${blog.title}`} />
            </div>
            <div>
                <h5 className="font-DanaMedium my-2 line-clamp-1 text-lg">
                    {blog.title}
                </h5>
                <p className="line-clamp-5 text-gray-500">
                    {blog.description}
                </p>
            </div>
            <div className="text-center my-2">
                <Link href={`/blog/${blog._id}`} className="hover:text-blue-300 text-lg">ادامه مقاله ..</Link>
            </div>
        </div>
    )
}