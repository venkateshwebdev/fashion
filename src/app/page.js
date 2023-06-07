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
        <div className={styles.heroImage}><img src={"https://th.bing.com/th/id/OIG.GE.klpyB2Bf0vH.CHaQY?pid=ImgGn"} /></div>
    
   </div>
  )
}
