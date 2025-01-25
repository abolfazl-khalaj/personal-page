import CartProject from "@/components/module/Project";
import connectedDB from "@/configs/DB";
import ProjectModel from "@/model/Project";


export interface ProjectResponseTypeProps {
    _id:string,
    name:string ,
    description:string,
    cover:string,
    url:string,
    createdAt :string
}

export default async function Projects () { 

    await connectedDB()
    const projects : ProjectResponseTypeProps[] = await ProjectModel.find().select('-__v -updatedAt')    


    return (
        <div className="p-20 flex flex-wrap justify-center items-center gap-5">
            {
                projects?.map(project => (
                    <CartProject project={project} key={project._id}/>
                ))
            }
        </div>
    )

}