function Menu({menu}){
    return (
      <>
        <div className="menu">
            {menu.map((m)=>{
                const {id,title,category,price,img,desc}=m;
                return (
                  <div className="menu-item" key={id}>
                    <div className="image">
                        <img src={img} alt="" />
                    </div>
                    <div className="menu-item-info">
                      <div className="menu-item-title">
                        <h3>{title}</h3>
                        <h3 className="price">Rs.{price}</h3>
                      </div>
                      <div className="line"></div>
                      <p>
                        {desc}
                      </p>
                    </div>
                  </div>
                );
            })}
        </div>
      </>
    );
}
export default Menu