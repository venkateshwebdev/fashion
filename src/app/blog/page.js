"use client"
import Image from "next/image"
import Link from "next/link"
import styles from  './page.module.css'
import { useEffect, useState } from "react"
// import { useEffect, useState } from "react"
// import Button from "../../../Components/Button"
// import { useState } from "react"

const Blog = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        getData()
    },[])
    const getData = async()=>{
        const url = 'https://chicmi.p.rapidapi.com/calendar_in_city/?city=london&days=25&max_results=20/';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '4b5b07691cmsh45886b25375dff4p165ee9jsn166279667ef0',
                'X-RapidAPI-Host': 'chicmi.p.rapidapi.com'
            }
        };
        const data = await fetch(url,options)
        const full = await data.json()
        console.log(full)
        setData(full.values?.events)
    }
    return (
        <div>
        <div className={styles.heading}>Our Recent Blogs</div>
        {/* <Button /> */}
        {data?.map((e,i)=>
        <Link href={`/blog/${i}?i=${e.event_hero}&n=${e.event_name}&h=${e.headliner_copy_en}&s=${e.summary_en}&l=${e.event_logo}&an=${e.address_business_name}`} key={e.event_id}>
            <div className={styles.blogContainer}>
                <div className={styles.content}><h3 className={styles.title}>{e.address_business_name}</h3><p className={styles.event}>{e.event_name}</p><p>{e.headliner_copy}</p></div>
                <Image style={{borderRadius:"10px"}} src={e.event_hero_url} height={200} width={200} alt="image"/>
            </div>
            <div className={styles.hr}></div>
            </Link>
        )}
        </div>
    );
}
 
export default Blog;