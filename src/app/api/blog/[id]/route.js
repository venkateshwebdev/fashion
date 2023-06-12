import mongoose from "mongoose";

export async function GET(req,{params}){
    const url = 'https://chicmi.p.rapidapi.com/calendar_in_city/?city=london&days=30&max_results=25';
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
    const sendData = data.filter((e)=>e.event_id==params.id)
    console.log(sendData)
    return new Response(JSON.stringify(sendData),{status:200})
}