import mongoose from "mongoose";
import db from "@/utils/conectMongo";
import Our from "@/model/OurProducts";

export async function GET(req){

    try {
        await db.connect()
        const data = await Our.find()
        return new Response(JSON.stringify(data),{status:200})
    } catch (error) {
        return new Response(JSON.stringify("null"),{status:200})
    }
}
