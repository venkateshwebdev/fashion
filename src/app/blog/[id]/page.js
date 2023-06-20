"use client"
import Image from "next/image"
import styles from "./page.module.css"
import useSWR from 'swr'
import { useState } from "react"
export default function Blogpage({params}){
    const id = params.id
    console.log(id)
    const url =`/api/blog/${id}`
    const fetcher= async(url)=>{
        const response = await fetch(url);
        return response.json()
    }
    const {data,error} = useSWR(url,fetcher)
    console.log(data)
    const datad = data?.[0]
    return(
        <div className={styles.container}>
            <div className={styles.imagec}>
            <img src={datad?.event_hero_url} alt="img" />
            </div>
            <div className={styles.content}>
            <h2>{datad?.address_business_name}</h2>
            <div className={styles.logocontent}><h2>{datad?.event_name}</h2></div>
            <h5>{datad?.headliner_copy}</h5>
            <div><p>{datad?.summary}</p></div>
            {datad?.location&&<h5>at {datad?.location}</h5>}
            {datad?.detail_url&&<div>Full details at <a style={{color:"blue",textDecoration:"underline"}} href={datad?.detail_url}>{datad?.detail_url}</a></div>}
            </div>
            {/* <button>Delete Blog</button> */}
            {/* hey */}
        </div>
    )
}