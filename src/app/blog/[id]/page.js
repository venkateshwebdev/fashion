"use client"

const getData = async(id)=>{
    const rawData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await rawData.json()
    return data
}
export default async function blogpage({params}){
    const data = await getData(params.id)
    return(
        <div>{data.title}</div>
    )
}