import { AiOutlineMenu } from "react-icons/ai";
import { useContextData } from "./Context";
function Home(){
    const {openSidebar,openModal}=useContextData();
    return(
        <>
            <AiOutlineMenu className="menu" onClick={openSidebar}/>
            <button className="open-modal-btn" onClick={openModal}>Open Modal</button>
        </>
    )
}
export default Home