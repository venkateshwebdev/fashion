"use client"
import styles from "./page.module.css"
import useSWR from 'swr'
export default function blogpage({params}){
    const id = params.id
    const fetcher= async(url)=>{
        const response = await fetch(url);
        return response.json()
    }
    const url = `/api/blog/${id}`
    const {data,error} = useSWR(url,fetcher)
    const d = data?.[0]
    console.log(d)
    return(
        <div className={styles.container}>
            <div className={styles.imagec}>
            {/* <div className={styles.logo}><img src={`https://media.chicmi.com/${searchParams.l}-logo.jpg`} alt="img" /></div> */}
            <img src={d?.event_hero_url} alt="img" />
            </div>
            <div className={styles.content}>
            <h2>{d?.address_business_name}</h2>
            <div className={styles.logocontent}><h2>{d?.event_name_en}</h2></div>
            <h5>{d?.event_name}</h5>
            <div><p>{d?.summary_en}</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid?.data?t non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupid?.data?t non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>
            {/* <div>Full details at <link to={d?.detail_url}>{d?.detail_url}</link></div> */}
            </div>
        </div>
    )
}