// "use client"
import Image from "next/image"
// import { usePathname } from "next/navigation"
import styles from "./page.module.css"
export default async function blogpage({params,searchParams}){
    console.log(params,searchParams)
    return(
        <div className={styles.container}>
            <div className={styles.imagec}>
            {/* <div className={styles.logo}><img src={`https://media.chicmi.com/${searchParams.l}-logo.jpg`} alt="img" /></div> */}
            <img src={`https://media.chicmi.com/${searchParams.i}-preview.jpg`} alt="img" />
            </div>
            <div className={styles.content}>
            <h2>{searchParams.an}</h2>
            <div className={styles.logocontent}><h2>{searchParams.n}</h2></div>
            <h5>{searchParams.h}</h5>
            <p>{searchParams.s} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}