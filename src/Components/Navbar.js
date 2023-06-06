import Link from "next/link";

const Navbar = () => {
    const jsObj = [{name:"Home",url:"/"},{name:"Shop",url:"/shop"},{name:"About",url:"/about"},{name:"Blog",url:"/blog"}]
    return ( 
        <div className="navbar-container">
            <div className="navbar-title">Fashion-ed.</div>
            <div className="navbar-links">
                {jsObj.map((e,i)=><Link href={e.url} key={i}>{e.name}</Link>)}
            </div>
        </div>
     );
}
 
export default Navbar;