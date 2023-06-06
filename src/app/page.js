import Image from 'next/image'
import styles from './page.module.css'
import jordan from "../../public/jordan.png"
import hero from "../../public/heroMain.svg"
export default function Home() {
  return (
   <div className={styles.container}>
    <div className={styles.heroContent}>
      <div>Hello ,</div>
      <div className={styles.title}>Let &apos;s get Fashion-ed .</div>
      <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    {/* <div className={styles.heroImage}><Image src={hero} height={400} width={400} /></div> */}
        <div className={styles.heroImage}><img src={"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"} /></div>
    
   </div>
  )
}
