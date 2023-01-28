import { useState,useRef, useEffect } from "react";
import { links,social } from "../data";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
function Navbar(){
    const [showLink,setShowLink]=useState(false);
    const [screenWidth,setScreenWidth]=useState(window.innerWidth);
    const linksRef=useRef(null);
    const linkContainerRef=useRef(null);
    const navbarRef=useRef(null);
    useEffect(()=>{
            if(showLink){
              let linkHeight=linksRef.current.offsetHeight
              linkContainerRef.current.style.height=linkHeight+"px";
            }
            else{
              linkContainerRef.current.style.height ="0px";
            }
    },[showLink])
    useEffect(()=>{
      if(screenWidth>812){
        linkContainerRef.current.style.height="auto";
      }
      else if(!showLink){
        linkContainerRef.current.style.height = "0px";
      }
    },[screenWidth])
    useEffect(()=>{
      function handleResize(){
        let width=window.innerWidth;
        setScreenWidth(width);
      }
      window.addEventListener("resize",handleResize)
    })
    return (
      <>
        <nav className="navbar" ref={navbarRef}>
          <div className="nav-header">
            <p>
              Coding <span>Era</span>
            </p>
          </div>
          <div className="link-container" ref={linkContainerRef}>
            <ul className="links" ref={linksRef}>
                {links.map((link)=>{
                    const {id,url,text}=link;
                    return (
                      <li key={id}>
                        <a href="#">{text.toUpperCase()}</a>
                      </li>
                    );
                })}
            </ul>
          </div>
          <ul className="social-icons">
            {
                social.map((s)=>{
                    const {id,url,icon}=s;
                    return (
                      <li key={id}>
                        <a href="#">
                          {icon}
                        </a>
                      </li>
                    );
                })
            }
          </ul>
          <AiOutlineMenu className="menu" onClick={()=>setShowLink(!showLink)}/>
        </nav>
      </>
    );
}
export default Navbar