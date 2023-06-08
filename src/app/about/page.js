"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import imageData from "@/Components/aboutData";
import styles from './page.module.css'
const AboutPage = () => {
    return (
        <div className={styles.container}>
        <div className={styles.heading}>Our Fashio Infulencers.</div>
        <div className={styles.cont}>
        <div className={styles.content}>
        <div className={styles.imageContent}>{imageData.map((e)=><div className={styles.dive} key={e.id}><Image src={e.url} width={550} height={550} alt={"img"} /></div>)}</div>
        </div>
        <div className={styles.quote}>
        <p>&quot;</p>
        <div>Fashion Fades, Styles Eternal</div>
        <span>- Lorem Ipsum dearmit. "</span>
        </div>
        </div>

        </div>
    );
}
 
export default AboutPage ;