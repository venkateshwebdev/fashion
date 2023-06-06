import Link from "next/link";

const ShopCard = ({data}) => {
    const image = data.images.squarishURL.slice(43,79)
    const idata = data.images.squarishURL.slice(80,-4)
    return (
        <Link href={`shop/${image+idata}?t=${data.title}&p=${data.price.currentPrice}`}>
        <div className="shop-card-container">
            <div className="shop-card-image"><img src={data.images.squarishURL} /></div>
            <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
            <h4>{data.title}</h4>
            <p style={{fontSize:"14px"}}>{data.subtitle}</p>
            </div>
            <p>INR. {data.price.currentPrice}</p>
            {/* <p>{data.id}</p> */}
            {/* <p>{image}</p> */}
        </div>
        </Link>
    );
}
 
export default ShopCard;