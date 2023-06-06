import { useState } from "react";

const Button = () => {
    const [inc,setInc] = useState(0)
    return (
        <button onClick={()=>setInc(inc+1)}>{inc}</button>
     );
}
 
export default Button;