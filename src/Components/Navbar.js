"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const path = usePathname()
    console.log(path)
    const jsObj = [{name:"Home",url:"/"},{name:"Shop",url:"/shop"},{name:"About",url:"/about"},{name:"Blog",url:"/blog"}]
    return ( 
        <div className="navbar-container">
            <div className="navbar-title">Fashion-ed.</div>
            {/* <button>mode</button> */}
            <div className="navbar-links">
                {jsObj.map((e,i)=><Link href={e.url} className={`${path===e.url&&`navPath`}`} key={i}>{e.name}</Link>)}
            </div>
        </div>
     );
}
 
export default Navbar;