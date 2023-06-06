"use client"
import { useEffect, useState } from "react";

const AboutPage = () => {
    const [data,setData] = useState()
    useEffect(()=>{
        getData()
    },[])
    const getData = async()=>{
        const rawData = await fetch("./api/test")
        // const data = await rawData.json()
        setData(rawData)
        console.log(rawData)
    }
    return (
        <>
        <div>HEllo</div>
        </>
    );
}
 
export default AboutPage ;