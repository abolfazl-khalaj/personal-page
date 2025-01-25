import connectedDB from "@/configs/DB";
import ProjectModel, { ProjectType } from "@/model/Project";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest):Promise<NextResponse>{


    try {
        connectedDB()

        const body : ProjectType = await req.json()

        if(
            !body.name.length &&
            !body.cover.length &&
            !body.description.length &&
            !body.url.length
        ){
            return NextResponse.json({message : 'data not valid ...!'})
        }
        
        await ProjectModel.create(body)

        return NextResponse.json({message : 'crate project success fully ...'})
    } catch (error){
        return NextResponse.json({message : error})
    }

}

export async function GET(req:NextRequest):Promise<NextResponse> {
    
    try {
        connectedDB()
        const project = await ProjectModel.find()
        return NextResponse.json(project)
    } catch (error) {
        return NextResponse.json({message : error})
    }
}

export async function DELETE(req:NextRequest):Promise<NextResponse> {
    
    try {
        connectedDB()
        const id = await req
        
        const project = await ProjectModel.find()
        return NextResponse.json(project)
    } catch (error) {
        return NextResponse.json({message : error})
    }
}