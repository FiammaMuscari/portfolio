import React  from "react";
import {useEffect} from 'react';
import "./Footer.css";
import Aos from 'aos'
import ScrollService from "../../../utilities/ScrollService";
export default function Footer() {
  useEffect(() =>{
    Aos.init({duration:4000 });
}, []);
  return (
    
    <div className="scroll-container" data-aos='fade-up'>
      <button
        className="btn-scroll"
        onClick={() => ScrollService.scrollHandler.scrollToHome()}
      >
        {" "}
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}
