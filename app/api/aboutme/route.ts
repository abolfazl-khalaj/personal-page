import connectedDB from "@/configs/DB";
import AboutMeModel, { AboutMeType } from "@/model/AboutMe";
import next from "next";
import { NextRequest, NextResponse } from "next/server";
 

export async function POST(req:NextRequest):Promise<NextResponse>{


    try {
        connectedDB()

        const body : AboutMeType = await req.json()

        if(
            !body.descriptionMe.length &&
            !body.introduction.length && 
            !body.photoMe.length
         ){
            return NextResponse.json({message : 'data not valid ..'},{status:401})
         }

        await AboutMeModel.create(body)  

        return NextResponse.json({message : '....'})
    } catch (error){
        return NextResponse.json({message : error},{status:500})
    }

}

export async function GET(req:NextRequest):Promise<NextResponse> {
    
    try {
        connectedDB()
        const about = await AboutMeModel.find()
        return NextResponse.json(about)
    } catch (error) {
        return NextResponse.json({message : error})
    }
}

export async function PUT(req:NextRequest):Promise<NextResponse> {

    try {

        await connectedDB()
        const body = await req.json()
        const aboutMy = await AboutMeModel.find()

        
        const { type } = body 

        switch (type) {

            case 'Password':

                if(!body.password.length){
                    return NextResponse.json({message : 'data not valid ...'})
                }
        
                await AboutMeModel.findByIdAndUpdate(aboutMy[0]._id , {
                    password : body.password
                })               
                break;

            case 'PhotoMy':

                if(!body.photoMe.length){
                    return NextResponse.json({message : 'data not valid ...'})
                }
                await AboutMeModel.findByIdAndUpdate(aboutMy[0]._id , {
                    photoMe : body.photoMe
                })

                break

            case 'Introduction':

                if(!body.introduction.length){
                    return NextResponse.json({message : 'data not valid ...'})
                }

                await AboutMeModel.findByIdAndUpdate(aboutMy[0]._id , {
                    introduction : body.introduction
                })              // Expected output: "Mangoes and papayas are $2.79 a pound."
                break;

            case 'Description':

                if(!body.descriptionMe.length){
                    return NextResponse.json({message : 'data not valid ...'})
                }
        
                await AboutMeModel.findByIdAndUpdate(aboutMy[0]._id , {
                    descriptionMe : body.descriptionMe
                })
                
                break
            default:
              console.log(`Sorry, we are out of .`);
          }
          




        return NextResponse.json({message: 'updated success fully ..'})
    } catch (error) {
        return NextResponse.json({message : error})
    }
    
}