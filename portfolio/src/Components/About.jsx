import { Center, Text } from "@chakra-ui/react";
import "./About.css";
import Buttons from "./Buttons.jsx";
import React from "react";

const toggle = document.querySelector(".main_img");
toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
});
function About() {
  return (
    <div id="aboutme" className="container home_container">
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
          src="https://res.cloudinary.com/dvcksw7qc/image/upload/v1668760642/cld-sample-4.jpg"
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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nemo
          distinctio eveniet laudantium omnis architecto quia, dolore rem
          provident nesciunt blanditiis ea amet eos. Hic doloribus fugiat
          dolores unde incidunt.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default About;
