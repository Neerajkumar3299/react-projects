import Tour from "./Tour"
import "./Tours.css"
function Tours(props){
    const {tours,deleteTours,fetchTours}=props;
    if(tours.length==0){
        return(
            <>
                <h1>No Tours Available</h1>
                <button className="refresh-btn" onClick={fetchTours}>refresh</button>
            </>
        )
    }
    return(
        <>
            <section>
                <h1>Fantastic Tours</h1>
                <div className="underline"></div>
                <div className="tours">
                    {tours.map((tour)=>{
                        return <Tour {...tour} deleteTours={deleteTours}/>;
                    })}
                </div>
            </section>
        </>
    )
}
export default Tours