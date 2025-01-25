import { NextRequest, NextResponse } from "next/server";
import connectedDB from "@/configs/DB";
import ProjectModel from "@/model/Project";

export async function DELETE(req: NextRequest , { params }: { params: { id:string } }): Promise<NextResponse> {
  try {
    await connectedDB();

    const id = params.id

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    await ProjectModel.findByIdAndDelete(id);

    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete project" }, { status: 500 });
  }
}
