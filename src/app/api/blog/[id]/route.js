import Blog from "@/model/blogSchema";
import db from "@/utils/conectMongo";
import mongoose from "mongoose";

export async function GET(req,{params}){
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
    const allData = [...ownData,...data]
    const sendData = allData.filter((e)=>e.event_id==params.id||e.event_id===parseInt(params.id))
    console.log(sendData)
    return new Response(JSON.stringify(sendData),{status:200})
}