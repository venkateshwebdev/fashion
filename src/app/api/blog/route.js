import Blog from "@/model/blogSchema";
import db from "@/utils/conectMongo";
import mongoose from "mongoose";
export async function GET(req){
    await db.connect()
    const ownData = await Blog.find()
    const url = 'https://chicmi.p.rapidapi.com/calendar_in_city/?city=london&days=5&max_results=5';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4b5b07691cmsh45886b25375dff4p165ee9jsn166279667ef0',
            'X-RapidAPI-Host': 'chicmi.p.rapidapi.com'
        }
    };
    const rawData = await fetch(url,options);
    const resData = await rawData.json()
    const data = resData?.values.events.map((e)=>e)
    const sendData = [...ownData.reverse(),...data]
    return new Response(JSON.stringify(sendData),{status:200})
}


export async function POST(req){
    await db.connect()
    const {title,event,mainCopy,image} = await req.json()
    await Blog.create({
        address_business_name:title,
        event_name:event,
        headliner_copy:mainCopy,
        event_hero_url:image,
        event_id:event
    }) 
    // console.log(title,event,image,heading)
    return new Response(JSON.stringify({title,event,mainCopy,image}),{status:200})
}


// address_business_name : String,
// headliner_copy:String,
// event_name:String,
// event_hero_url:String,
// summary:String