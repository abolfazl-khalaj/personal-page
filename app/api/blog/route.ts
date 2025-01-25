import connectedDB from "@/configs/DB";
import BlogModel, { BlogType } from "@/model/Blog";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest):Promise<NextResponse>{


    try {
        connectedDB()

        const body: BlogType = await req.json()

        if(
            !body.body.length &&
            !body.cover.length &&
            !body.title &&
            !body.description.length
        ){
            return NextResponse.json({message : 'data not valid ..'})
        }

        await BlogModel.create(body)

        return NextResponse.json({message : 'create blog success fully ..'})
    } catch (error){
        return NextResponse.json({message : error})
    }
}

export async function GET(req:NextRequest):Promise<NextResponse> {
    
    try {
        connectedDB()
        const blog = await BlogModel.find()
        return NextResponse.json(blog)
    } catch (error) {
        return NextResponse.json({message : error})
    }
}