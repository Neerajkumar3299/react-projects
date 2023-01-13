import './App.css';
import { useState,useEffect } from 'react';
import Tours from './Components/Tours';
import Loading from './Components/Loading';
const url="https://course-api.com/react-tours-project"
function App() {
  const [loading,setLoading]=useState(true)
  const [tours,setTours]=useState([])

  // Delete any tour
  const deleteTours=(id)=>{
    const newTours=tours.filter((tour)=>tour.id!=id);
    setTours(newTours);
  }

  // Fetch user from API
  const fetchTours=async()=>{
    try{
      setLoading(true);
      const response=await fetch(url);
      const data=await response.json();
      setTours(data);
      setLoading(false)
    }
    catch(err){
      setLoading(false)
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchTours();
  },[])
  if(loading){
    return <main>
      <Loading/>
    </main>
  }
  return (
    <>
      <main>
        <Tours tours={tours} deleteTours={deleteTours} fetchTours={fetchTours}/>
      </main>
    </>
  );
}

export default App;
