import React from "react";
import { Box, Flex,Center } from "@chakra-ui/layout";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../Components/hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
    <Center
          color="white"
          fontSize={{ base: "22px", sm: "28px", md: "36px", lg: "44px" }}
          fontWeight={{ base: "450", md: " 500", lg: "650" }}
          lineHeight={{ base: "40px", md: "80px" }}
          letterSpacing="-0.32px"
          mb={{base : "40px",md : "60px"}}
        >
          I'm{" "}
          <Center
            className="gradient__text"
            ml={"12px"}
          >
           good at 
          </Center>
        </Center>{" "}
    <Center display={"flex"} flexDirection={"row"} flexWrap={"wrap"} gap={{base : 1,md : 4}}  >
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </Center>
    </>
   
  );
};

export default SectionWrapper(Tech, "");