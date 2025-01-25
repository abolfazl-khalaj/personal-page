import connectedDB from "@/configs/DB";
import SocialMediaModel, { SocialMediaType } from "@/model/SocialMedia";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest):Promise<NextResponse>{


    try {
        connectedDB()

        const body: SocialMediaType = await req.json()

        if(
            !body.name.length &&
            !body.cover.length &&
            !body.url.length
        ){
            return NextResponse.json({message : 'data not valid ...'})
        }

        await SocialMediaModel.create(body)

        return NextResponse.json({message : 'crate social media success fully...'})
    } catch (error){
        return NextResponse.json({message : error})
    }

}

export async function GET(req:NextRequest):Promise<NextResponse> {
    
    try {
        connectedDB()
        const socialMedia = await SocialMediaModel.find()
        return NextResponse.json(socialMedia)
    } catch (error) {
        return NextResponse.json({message : error})
    }
}