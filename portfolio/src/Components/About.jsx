import { Center, Text } from "@chakra-ui/react";
import "./About.css";
import Buttons from "./Buttons.jsx";
import React from "react";

// const toggle = document.querySelector(".main_img");
// toggle.addEventListener("click", () => {
//   toggle.classList.toggle("active");
// });
function About() {
  return (
    
    <div id="aboutme" className="container home_container" >
      
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
      <h2>
        <Center
          color="white"
          fontSize={{ base: "22px", sm: "28px", md: "36px", lg: "44px" }}
          fontWeight={{ base: "450", md: " 500", lg: "650" }}
          lineHeight={{ base: "40px", md: "100px" }}
          letterSpacing="-0.32px"
        >
          About{" "}
          <Center
            className="gradient__text"
            ml={"12px"}
          >
            Me
          </Center>
        </Center>{" "}
        <br />
        <Center
        fontSize={{ base: "12px", sm: "14px", md: "16px", lg: "18px" }}
         lineHeight={{ base: "30px", md: "40px" }}
         letterSpacing="-0.32px"
         mb={{base : "20px",md : "20px"}}
          alignSelf={"center"}
          textAlign={"center"}
         textColor="whiteAlpha.800"
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur distinctio officia corrupti facilis debitis odit! Accusantium incidunt repellendus, atque autem nisi vero sequi ipsam distinctio temporibus, totam, aperiam nihil dolor.</Center>
        
      </h2>

      <Buttons />
    </div>
  );
}

export default About;
