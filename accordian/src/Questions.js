import { useState } from "react"
import data from "./data"
import "./Questions.css"
import SingleQuestion from "./SingleQuestion";
function Questions(){
    const [questions,setQuestions]=useState(data);
    return(
        <>
            <section className="question-section">
                <div className="title">
                    <h2>Please ans the questions to login</h2>
                </div>
                <div className="questions">
                    {questions.map((question)=>{
                        return (
                            <SingleQuestion {...question}/>
                        )
                    })}
                </div>
            </section>
        </>
    )
}
export default Questions
