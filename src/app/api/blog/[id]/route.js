import { NextRequest, NextResponse } from "next/server";

export const GET = async(request,{params})=>{
    const {id} = params
    console.log(id)
    const url = 'https://chicmi.p.rapidapi.com/calendar_in_city/?city=london&days=25&max_results=25/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4b5b07691cmsh45886b25375dff4p165ee9jsn166279667ef0',
            'X-RapidAPI-Host': 'chicmi.p.rapidapi.com'
        }
    };
    const rawData = await fetch(url,options)
    const orgData = await rawData.json()
    const data = orgData.values.events.map((e,i)=>Object.assign(e))
    const sendData=data.filter((e)=>e.event_id==id)
    return new NextResponse(JSON.stringify(sendData))
}