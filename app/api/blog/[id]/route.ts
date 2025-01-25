import { NextRequest, NextResponse } from "next/server";
import connectedDB from "@/configs/DB";
import ProjectModel from "@/model/Project";
import BlogModel from "@/model/Blog";

export async function DELETE(req: NextRequest , { params }: { params: { id:string } }): Promise<NextResponse> {
  try {
    await connectedDB();

    const id = params.id

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

     await BlogModel.findByIdAndDelete(id);

    return NextResponse.json({ message: "delete blog succes fully .."});
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete blog" }, { status: 500 });
  }
}
