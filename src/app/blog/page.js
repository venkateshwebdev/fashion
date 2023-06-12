"use client"
import Image from "next/image"
import Link from "next/link"
import styles from  './page.module.css'
import { useEffect, useState } from "react"
import useSWR from "swr"
const Blog = () => {
    const [form,setform] = useState(true)
    const [image,setImage] = useState("")
    const [title,setTitle] = useState("")
    const [event,setEvent] = useState("")
    const [mainCopy,setMainCopy] = useState("")

    const handleSubmit =async(e)=>{
        e.preventDefault();
        const bodyData = {
            title,
            event,
            mainCopy,
            image
        }
        const sentData = await fetch('/api/blog',{method:'POST',headers: { 'Content-Type': 'application/json' },body:JSON.stringify(bodyData)})
        console.log(image,title,mainCopy,event)
        setEvent("")
        setImage("")
        setMainCopy("")
        setTitle("")
    }
    const url = "/api/blog"
    const fetcher= async(url)=>{
        const response = await fetch(url);
        return response.json()
    }
    const {data,error} = useSWR(url,fetcher)
    // console.log(data)
    return (
        <div>
        <div className={styles.heading}>Our Recent Blogs & News</div>
        <div className={styles.formEnable} onClick={()=>setform(prev=>!prev)}>Want to write a Fasion Blog?</div>
        <div className={form&&styles.formList}>
            <div className={styles.formBars}>
            <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} placeholder="title" />
            <input type="text" onChange={(e)=>setEvent(e.target.value)} value={event} placeholder="event name" />
            <input type="text" onChange={(e)=>setMainCopy(e.target.value)} value={mainCopy} placeholder="HeadLine" />
            <input type="text" onChange={(e)=>setImage(e.target.value)} value={image} placeholder="image url" />
            <button>Send</button>
            </form>
            </div>
        </div>
        {data?.map((e,i)=>
        <Link href={`/blog/${e.event_id}`} key={e.event_id}>
            <div className={styles.blogContainer}>
                <div className={styles.content}><h3 className={styles.title}>{e.address_business_name}</h3><p className={styles.event}>{e.event_name}</p><p>{e.mainCopyr_copy}</p></div>
                <Image style={{borderRadius:"10px"}} src={e.event_hero_url} height={200} width={200} alt="image"/>
            </div>
            <div className={styles.hr}></div>
            </Link>
        )}
        </div>
    );
}
 
export default Blog;