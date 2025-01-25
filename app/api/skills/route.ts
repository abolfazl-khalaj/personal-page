import connectedDB from "@/configs/DB";
import SkillsModel, { SkillsType } from "@/model/Skills";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest):Promise<NextResponse>{


    try {
        connectedDB()

        const body : SkillsType = await req.json()

        if (
            !body.name.length &&
            !body.cover.length &&
            !body.mastery
        ){
            return NextResponse.json({message : 'data not valid ...'})
        }
        
        await SkillsModel.create(body)

        return NextResponse.json({message : 'crate skills success fully ...'})
    } catch (error){
        return NextResponse.json({message : error})
    }

}

export async function GET(req:NextRequest):Promise<NextResponse> {
    
    try {
        connectedDB()
        const skills = await SkillsModel.find()
        return NextResponse.json(skills)
    } catch (error) {
        return NextResponse.json({message : error})
    }
}