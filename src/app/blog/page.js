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
        const data = await fetch("http://localhost:3000/api/blog")
        const full = await data.json()
        console.log(full)
        setData(full)
    }
    return (
        <div>
        <div className={styles.heading}>Our Recent Blogs & News</div>
        {/* <Button /> */}
        {data?.map((e,i)=>
        <Link href={`/blog/${e.event_id}`} key={e.event_id}>
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