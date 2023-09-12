import { useState } from "react";
import './Toggol.css'
const Toggol = () => {
    const [status , setStatus] = useState(true)
    return (
        <div className="first-container">
            <div className="container">
                {
                   status ? <p>hi i am naim Sheikh</p>: null
                }
               
            </div>
             {/* <button onClick={()=>setStatus(false)}>Hide</button>
                <button onClick={()=>setStatus(true)} >Show</button> */}
            <button onClick={()=>setStatus(!status)}>{status ? "Hide" :"Show"}</button>
        </div>
    );
};

export default Toggol;