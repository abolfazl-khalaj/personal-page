import connectedDB from "@/configs/DB";
import SoftSkillsModel, { SoftSkillsType } from "@/model/SoftSkills";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest):Promise<NextResponse>{


    try {
        connectedDB()

        const body : SoftSkillsType = await req.json()

        if (
            !body.name.length &&
            !body.mastery
        ){
            return NextResponse.json({message : 'data not valid ...'})
        }
        
        await SoftSkillsModel.create(body)

        return NextResponse.json({message : 'crate softskills success fully ...'})
    } catch (error){
        return NextResponse.json({message : error})
    }

}

export async function GET(req:NextRequest):Promise<NextResponse> {
    
    try {
        connectedDB()
        const softskills = await SoftSkillsModel.find()
        return NextResponse.json(softskills)
    } catch (error) {
        return NextResponse.json({message : error})
    }
}