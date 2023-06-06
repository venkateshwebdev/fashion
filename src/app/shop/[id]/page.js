"use client"
import Image from "next/image";
import styles from './page.module.css'
import { useRouter } from "next/navigation";
const productPage = ({params,searchParams}) => {
    const cont = params.id.slice(36)
    const id = params.id.slice(0,36)
    console.log(params)
    console.log(searchParams)
    return (
        <>
        <div className={styles.container}>
            {/* this is working.{params.id}
            <h1>{cont}</h1>
            <h1>{id}</h1> */}
            <div className={styles.productImage}>
            <Image className={styles.sarada} src={`https://static.nike.com/a/images/t_default/${id}/${cont}.png`} width={500} height={500}/>
            </div>
            <div className={styles.content}>
                <div className={styles.title}>{searchParams.t}</div>
                <div className={styles.price}>₹ {searchParams.p}.00</div>
                <div className={styles.button}>Buy Now</div>
            </div>
        </div>
        <div className={styles.underline}></div>
        <div className={styles.details}>
            <div className={styles.title}>About {searchParams.t}</div>
            <div className={styles.cont}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque id diam vel quam elementum pulvinar etiam. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Ullamcorper malesuada proin libero nunc consequat. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Lectus urna duis convallis convallis tellus id interdum. Netus et malesuada fames ac. Habitant morbi tristique senectus et. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Donec et odio pellentesque diam volutpat commodo sed egestas. Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Libero volutpat sed cras ornare arcu dui vivamus.

A condimentum vitae sapien pellentesque. Sed viverra tellus in hac habitasse platea. Ac auctor augue mauris augue. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Augue eget arcu dictum varius. Massa tempor nec feugiat nisl pretium fusce id velit. Elementum pulvinar etiam non quam lacus suspendisse. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Id venenatis a condimentum vitae sapien pellentesque habitant. Posuere sollicitudin aliquam ultrices sagittis. Sed tempus urna et pharetra pharetra. Platea dictumst vestibulum rhoncus est. Volutpat diam ut venenatis tellus.

Ut sem nulla pharetra diam sit amet. At urna condimentum mattis pellentesque id nibh tortor. Fermentum dui faucibus in ornare quam viverra orci sagittis eu. Vitae justo eget magna fermentum iaculis eu non. Sed adipiscing diam donec adipiscing tristique. Nisi porta lorem mollis aliquam ut porttitor leo a diam. Tincidunt vitae semper quis lectus nulla at volutpat diam. Sagittis orci a scelerisque purus. Nibh tellus molestie nunc non blandit massa enim nec dui. Nunc mattis enim ut tellus elementum sagittis vitae. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. In nibh mauris cursus mattis molestie a iaculis at. At imperdiet dui accumsan sit amet nulla facilisi. Cursus sit amet dictum sit amet justo donec enim. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. At tellus at urna condimentum mattis pellentesque id nibh. Nibh venenatis cras sed felis. Sed adipiscing diam donec adipiscing tristique risus nec. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Dolor morbi non arcu risus quis varius.

Tristique senectus et netus et malesuada fames ac turpis egestas. Egestas maecenas pharetra convallis posuere. Pellentesque nec nam aliquam sem. Consectetur a erat nam at lectus urna. Non blandit massa enim nec dui nunc mattis enim ut. Id nibh tortor id aliquet. Nisl tincidunt eget nullam non nisi est. Eget nulla facilisi etiam dignissim. In eu mi bibendum neque egestas congue quisque. Pellentesque eu tincidunt tortor aliquam. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Orci ac auctor augue mauris augue neque gravida in fermentum.

Eu nisl nunc mi ipsum faucibus vitae. Congue nisi vitae suscipit tellus mauris a diam. Donec ultrices tincidunt arcu non sodales neque sodales. Id leo in vitae turpis massa sed elementum tempus egestas. Scelerisque purus semper eget duis at tellus at urna. Risus nullam eget felis eget. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Gravida in fermentum et sollicitudin ac orci phasellus egestas. Fermentum et sollicitudin ac orci phasellus egestas. Netus et malesuada fames ac turpis egestas integer eget aliquet. Risus nec feugiat in fermentum posuere urna. Nisi lacus sed viverra tellus in hac. Diam maecenas sed enim ut sem viverra aliquet eget. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Condimentum vitae sapien pellentesque habitant.
            </div>
        </div>
        </>
    );
}
 
export default productPage;