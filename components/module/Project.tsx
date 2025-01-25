import Image from "next/image";
import { ProjectResponseTypeProps } from "@/app/projects/page";
import Link from "next/link";

export default function CartProject ({project}: {project:ProjectResponseTypeProps}) {     
    
    return (

            <Link href={project.url} className="w-[45%] h-96 border rounded-md p-2 cursor-pointer">
                <div>
                    <Image width={500} height={100}  className=" rounded-md" src={`${project.cover.trimEnd()}`} alt={project.name}
                    quality={100} />
                </div>
                <div className="p-1">
                    <h5 className="font-DanaMedium my-1">
                        {project.name}
                    </h5>
                    <p className="text-gray-400 line-clamp-4 text-xs">
                        {project.description}
                    </p>
                </div>
            </Link>
    )
}