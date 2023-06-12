import db from "@/utils/conectMongo";
import Test from "@/model/Test";
export async function GET(req){
    await  db.connect()
    try {
        const testr = await Test.find()
        return new Response(JSON.stringify(testr))
    } catch (error) {
        return new Response(JSON.stringify(null))
    }
}
export async function POST (req){
    await db.connect()
    try {
        // console.log(req)
        const getData = await req.json()
        await Test.create({...getData})
        return new Response(JSON.stringify(getData))
    } catch (error) {
        return new Response(JSON.stringify(error))
    }
}