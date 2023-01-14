import { useState } from "react";
import data from "../data";
import "./Reviews.css"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsFillChatQuoteFill } from "react-icons/bs";
function Reviews(){
    const [reviews, setReviews] = useState(data);
    const [index,setIndex]=useState(0);
    const checkIndex=(number)=>{
        if(number==data.length){
            return 0;
        }
        if(number==-1){
            return data.length-1;
        }
        else{
            return number
        }
    }
    const handleNext=()=>{
        // index+=1;
        // setIndex(checkIndex(index))
        setIndex((index)=>{
            index+=1;
            return checkIndex(index);   
        })
    }
    const handlePrev=()=>{
        setIndex((index)=>{
            index-=1;
            return checkIndex(index);
        })
    }
    const getRandomReview=(prev)=>{
        let number=Math.floor(Math.random()*data.length)
        if(number!=prev){
            setIndex(number);
        }
        else{
            if(number==(data.length)){
                number=0;
            }
            else{
                number+=1
            }
            setIndex(number)
        }
    }
    const {id,name,job,image,text}=reviews[index]
    return (
      <>
        <main className="review">
          <h1>My Reviews</h1>
          <div className="underline"></div>
          <section className="review-section">
            <div className="review-image">
                <div className="quote">
                    <BsFillChatQuoteFill/>
                </div>
              <img src={image} alt="" />
            </div>
            <h3>{name}</h3>
            <h3 className="job-role">{job}</h3>
            <p>{text}</p>
            <div className="review-btn">
              <button className="prev-btn" onClick={handlePrev}>
                <FiChevronLeft />
              </button>
              <button className="next-btn" onClick={handleNext}>
                <FiChevronRight />
              </button>
            </div>
            <button className="surprise-me-btn" onClick={(index)=>getRandomReview(index)}>Surprise me</button>
          </section>
        </main>
      </>
    );
}
export default Reviews