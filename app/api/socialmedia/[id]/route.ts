import { NextRequest, NextResponse } from "next/server";
import connectedDB from "@/configs/DB";
import SocialMediaModel from "@/model/SocialMedia";

export async function DELETE(req: NextRequest , { params }: { params: { id:string } }): Promise<NextResponse> {
  try {
    await connectedDB();

    const id = params.id

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    await SocialMediaModel.findByIdAndDelete(id);

    return NextResponse.json({ message: "socialmedia deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Failed to delete socialmedia" }, { status: 500 });
  }
}
