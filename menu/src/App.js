import { useState } from 'react';
import './App.css';
import Category from './Component/Category';
import Menu from './Component/Menu';
import data from './data';
function App() {
  const [menu,setMenu]=useState(data);
  const [category,setCategory]=useState([])

  const filterItem=(category)=>{
    if(category==="all"){
      setMenu(data);
      return
    }
    const newMenu=data.filter((item)=>{
      if(item.category===category){
        return item;
      }
    })
    setMenu(newMenu)
  }
  return (
    <>
    <main className="container">
      <div className="title">
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </div>
      <Category category={category}/>
      <Menu menu={menu}/>
    </main>
    </>
  );
}

export default App;
