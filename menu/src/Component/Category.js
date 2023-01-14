function Category({category,filterItem}){
    return (
      <>
        <div className="btn-container">
          {
            category.map((cat,index)=>{
              return <div className="filter-btn" key={index}>
                <button onClick={()=>filterItem(cat)}>{cat}</button>
              </div>;
            })
          } 
        </div>
      </>
    );
}
export default Category