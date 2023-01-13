import { useState } from "react"
import "./Tour.css"
function Tour({id,name,info,image,price,deleteTours}){
    const [showMore,setShowMore]=useState(false);
    return(
        <>
        <div className="single-tour">
            <img src={image} alt="" />
            <footer>
                <div className="info">
                    <h3>{name}</h3>
                    <h3 style={{color:"blue"}}>${price}</h3>
                </div>
                <p>{showMore?info:info.substring(0,200)}...
                    <button id="show-more" onClick={()=>setShowMore(!showMore)}>{showMore?"show-less":"show-more"}</button>
                </p>
                <button className="delete-btn" onClick={()=>deleteTours(id)}>Not Interested</button>
            </footer>
        </div>
        </>
    )
}
export default Tour