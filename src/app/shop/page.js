"use client"
import ShopCard from "../../../Components/ShopCard"
import styles from './page.module.css'
import useSWR from 'swr'
// const getData = async() =>{
//     const rawData = await fetch("https://api.empathy.co/search/v1/query/zara/search?query=shoes&lang=en_GB&start=0&rows=36&section=MAN&store=11744&scope=default&contextualizeEnabled=true&filter=searchSection:MAN&hideOptionalProducts=false&catalogue=37051&warehouse=28551&session=4193873f-142f-4bda-9e17-6dd5cd2b34f8&ajax=true")
//     const data = rawData.json()
//     return data
// }

const shop =()=>{
    const shoes = "https://api.nike.com/cic/browse/v2?queryid=products&anonymousId=C6B59B33A7885FC71E1C604865F828BB&country=in&endpoint=%2Fproduct_feed%2Frollup_threads%2Fv2%3Ffilter%3Dmarketplace(IN)%26filter%3Dlanguage(en-GB)%26filter%3DemployeePrice(true)%26filter%3DattributeIds(16633190-45e5-4830-a068-232ac7aea82c%2C0f64ecc7-d624-4e91-b171-b83a03dd8550)%26anchor%3D72%26consumerChannelId%3Dd9a5bc42-4b9c-4976-858a-f159cf99c647%26count%3D24&language=en-GB&localizedRangeStr=%7BlowestPrice%7D%E2%80%94%7BhighestPrice%7D"
    const slippers = "https://api.nike.com/cic/browse/v2?queryid=products&anonymousId=C6B59B33A7885FC71E1C604865F828BB&country=in&endpoint=%2Fproduct_feed%2Frollup_threads%2Fv2%3Ffilter%3Dmarketplace(IN)%26filter%3Dlanguage(en-GB)%26filter%3DemployeePrice(true)%26filter%3DattributeIds(0f64ecc7-d624-4e91-b171-b83a03dd8550%2C568f7ffc-ee7f-49ed-98eb-0b94708d6e88%2C7baf216c-acc6-4452-9e07-39c2ca77ba32)%26searchTerms%3Dslides%26anchor%3D24%26consumerChannelId%3Dd9a5bc42-4b9c-4976-858a-f159cf99c647%26count%3D24&language=en-GB&localizedRangeStr=%7BlowestPrice%7D%E2%80%94%7BhighestPrice%7D"
    const fetcher= async(url)=>{
        const response = await fetch(url);
        return response.json()
    }
    const {data,error} = useSWR(shoes,fetcher)
    console.log(data)
    return(
        <div className={styles.shopContainer}>
        {data?.data?.products?.products.map((e)=><ShopCard data={e} key={e.id} />)}
        </div>
    )
}


export default shop