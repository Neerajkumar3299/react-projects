import { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
function SingleQuestion({id,title,info}){
    const [showMore, setShowMore] = useState(false);
    return (
      <div className="question" key={id}>
        <div className="question-title">
          <h4>{title}</h4>
          {
            <h6 onClick={() => setShowMore(!showMore)}>
              {showMore ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
            </h6>
          }
        </div>
        <div className="question-info">
          <p>{showMore ? info : ""}</p>
        </div>
      </div>
    );
}
export default SingleQuestion