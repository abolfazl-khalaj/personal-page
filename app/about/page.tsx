import connectedDB from "@/configs/DB"
import AboutMeModel from "@/model/AboutMe"


export default async function About (){

    await connectedDB()
    const about = await AboutMeModel.find()
    
    return (
        <div className="flex justify-center items-center m-auto min-h-screen">
            
            <p className="w-2/3 font-DanaMedium text-center">
                {
                    about[0].descriptionMe
                }
            </p>

        </div>
    )
}