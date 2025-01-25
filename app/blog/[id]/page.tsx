import connectedDB from "@/configs/DB";
import BlogModel from "@/model/Blog";

export const revalidate = 60; 

export default async function Article({ params }: { params: { id: string } }) {
  try {
    const { id } = params;
    await connectedDB();
    const blog = await BlogModel.findById(id, "body");

    if (!blog) {
      return <div>مقاله یافت نشد</div>;
    }

    return (
      <div className="p-8">
        <p>{blog.body}</p>
      </div>
    );
  } catch (error) {
    console.error(error);
    return <div>خطا در بارگذاری مقاله</div>;
  }
}

