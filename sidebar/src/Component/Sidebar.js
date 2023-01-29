import { AiOutlineClose } from "react-icons/ai";
import { useContextData } from "./Context";
import "./Sidebar.css"
function Sidebar(){
    const {linkList,closeSidebar,showSidebar}=useContextData();
    return (
      <>
        <div className={showSidebar?"sidebar show-sidebar":"sidebar"}>
          <div className="sidebar-header">
            <p className="header">
              Coding <span>Era</span>
            </p>
            <AiOutlineClose className="close-sidebar" onClick={closeSidebar} />
          </div>
          <div className="link-container">
            <ul className="links">
              {linkList.map((link) => {
                const { icon, id, text, url } = link;
                return (
                  <li key={id}>
                    <a href="#">
                      <span id="icon">{icon}</span>
                      <span className="link-text">{text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </>
    );
}
export default Sidebar