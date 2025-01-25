import Article from "@/components/module/Article";
import CartProject from "@/components/module/Project";
import { BlogsResponseType } from "@/components/template/BlogsP";
import connectedDB from "@/configs/DB";
import BlogModel from "@/model/Blog";



export default async function Projects () { 

    await connectedDB()
    const articles:BlogsResponseType[] = await BlogModel.find()    

    return (
        <div className="flex justify-center gap-2 flex-wrap">
            {
                articles?.map(blog => (
                    <Article blog={blog} key={blog._id}/>
                ))
            }
        </div>
    )

}

export async function generateStaticParams() {
    await connectedDB();
    const blogs = await BlogModel.find({}, "_id");
    return blogs.map((blog) => ({ id: blog._id.toString() }));
  }
  