import { NextRequest, NextResponse } from "next/server";
import connectedDB from "@/configs/DB";
import SoftSkillsModel from "@/model/SoftSkills";

export async function DELETE(req: NextRequest , { params }: { params: { id:string } }): Promise<NextResponse> {
  try {
    await connectedDB();

    const id = params.id

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    await SoftSkillsModel.findByIdAndDelete(id);

    return NextResponse.json({ message: "SoftSkills deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete Softskills" }, { status: 500 });
  }
}
