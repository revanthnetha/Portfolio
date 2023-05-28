import React from "react";
import { Box, Flex,Center } from "@chakra-ui/layout";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../Components/hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <Center display={"flex"} flexDirection={"row"} flexWrap={"wrap"} gap={{base : 1,md : 4}}  >
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </Center>
   
   
  );
};

export default SectionWrapper(Tech, "");