import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useRef } from "react";
import "./Modal.css"
import { useContextData } from "./Context";
function Modal() {
  const modalRef=useRef(null);
  const {closeModal,showModal}=useContextData();
  useEffect(()=>{
    if(showModal){
      modalRef.current.style.display = "block";;
    }
    else{
      modalRef.current.style.display="none";
    }
  },[showModal])
  return (
    <>
      <div className="modal" ref={modalRef}>
        <AiOutlineClose className="close" onClick={closeModal}/>
      </div>
    </>
  );
}
export default Modal;
