import "./About.css";
import React,{ useEffect } from "react";

// const toggle = document.querySelector(".main_img");
// toggle.addEventListener("click", () => {
//   toggle.classList.toggle("active");
// });
function About() {
  useEffect(() => {
    const toggle = document.querySelector(".main_img");
    if (toggle) {
      toggle.addEventListener("click", () => {
        toggle.classList.toggle("active");
      });
    }
  }, []);
  return (
    
    <div className="container home_container" >
       {/* <img className="main_img" src="path/to/image.jpg" alt="Main Image" /> */}
      <div className="logo">
        <div className="main_img">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>
        <img
          src="https://res.cloudinary.com/dvcksw7qc/image/upload/v1685947913/Portfolio/photo-1519681393784-d120267933ba_hdnayh.avif"
          alt=""
        />
        
      </div>
      
      
    </div>
  );
}

export default About;
