import React from "react";
import { Center, Text } from "@chakra-ui/react";
import Buttons from "./Buttons.jsx";
import "./About.css";

const AboutMe = () => {
  return (
    <div id="aboutme" className="container home_container">
      <h2>
        <Center
          color="white"
          fontSize={{ base: "22px", sm: "28px", md: "36px", lg: "44px" }}
          fontWeight={{ base: "450", md: " 500", lg: "650" }}
          lineHeight={{ base: "40px", md: "100px" }}
          letterSpacing="-0.32px"
        >
          About{" "}
          <Center className="gradient__text" ml={"12px"}>
            Me
          </Center>
        </Center>{" "}
        <br />
        <Center
          fontSize={{ base: "12px", sm: "14px", md: "16px", lg: "18px" }}
          lineHeight={{ base: "30px", md: "40px" }}
          letterSpacing="-0.32px"
          mb={{ base: "20px", md: "20px" }}
          alignSelf={"center"}
          textAlign={"center"}
          textColor="whiteAlpha.800"
        >
          I am currently studying Electronics and Communication Engineering at
          Gokaraju Rangaraju Institute of Engineering and Technology. I find joy
          in exploring various programming languages and technologies,
          constantly seeking opportunities to enhance my skills. Additionally, I
          have a keen interest in competitive programming. Participating in
          coding competitions and solving algorithmic problems under time
          constraints not only strengthens my technical knowledge but also
          sharpens my analytical thinking.
          <br></br>
           Apart from coding, I prioritize a
          healthy lifestyle with regular workouts to stay fit and maintain
          focus. Cooking is a genuine passion of mine, allowing me to explore
          flavors and find relaxation. This well-rounded approach brings balance
          and fulfillment to my life.
        </Center>
      </h2>
      <Buttons />
    </div>
  );
};

export default AboutMe;
