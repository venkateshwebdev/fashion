// "use client"
import Image from "next/image"
import Link from "next/link"
import styles from  './page.module.css'
// import { useEffect, useState } from "react"
// import Button from "../../../Components/Button"
// import { useState } from "react"
const getData = async()=>{
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const full = await data.json()
    console.log("data is rendered")
    return full
}
const Blog = async() => {
    const data = await getData()
    console.log("Blog rendered")
    return (
        <>
        <div className={styles.heading}>Our Recent Blogs About Fashion.</div>
        {/* <Button /> */}
        {data?.map((e)=>
        <Link href={`/blog/${e.id}`} key={e.id}>
            <div className={styles.blogContainer}>
                <h4>{e.id}.</h4>
                <div style={{width:"70%"}}><h3>{e.title}</h3><p>{e.body}</p></div>
                {/* <Image src={e.url} height={200} width={200} alt="image"/> */}
            </div>
            </Link>
        )}
        </>
    );
}
 
export default Blog;