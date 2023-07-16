import React from "react";
import "./header.css";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Button,
  Link,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";
const Header = () => {
  return (
    <div className="port__header sections__padding">
      <Box
        flex={1}
        display={"flex"}
        justifyContent={"center"}
        alignItems={{ base: "center", md: "flex-start" }}
        flexDirection={"column"}
        mr={"5rem"}
        ml={"5rem"}
        color={"#81AFDD"}
      >
        <Box alignSelf={"center"}>
          <Center
            color="white"
            fontSize={{ base: "18px", sm: "22px", md: "34px", lg: "54px" }}
            fontWeight={{ base: "450", md: " 500", lg: "650" }}
            lineHeight={{ base: "40px", md: "80px" }}
            letterSpacing="-0.32px"
          >
            Hi I'm
            <Center className="gradient__text" ml={"12px"}>
              Bandi Revanth
            </Center>
          </Center>{" "}
          <Center
            fontSize={{ base: "18px", sm: "28px", md: "36px", lg: "36px" }}
            fontWeight={{ base: " 620", md: " 630", lg: "700" }}
            lineHeight={{ base: "30px", sm: "40px", md: "80px" }}
            letterSpacing="-0.32px"
            color={"white"}
          >
            <ReactTypingEffect
              speed={70}
              eraseSpeed={100}
              text={[
                "FrontEnd Developer",
                "Blockchain Developer",
                "Competitive Programmer",
              ]}
            />
          </Center>
          <Center
            fontSize={{ base: "12px", sm: "14px", md: "16px", lg: "18px" }}
            lineHeight={{ base: "30px", md: "40px" }}
            letterSpacing="-0.32px"
            mb={{ base: "20px", md: "30px" }}
            alignSelf={"center"}
            textAlign={"center"}
            textColor="whiteAlpha.800"
          >
            Revanth, a passionate web developer, possesses a strong commitment
            to writing clean code and developing exceptional websites. With a
            keen eye for detail and a focus on delivering high-quality results,
            my goal is to transform design concepts into fully functional
            websites that not only meet your expectations but also provide an
            optimal user experience. I stay updated with modern web development
            technologies and frameworks, ensuring that your website is
            responsive, accessible, and optimized for performance. With my
            dedication to continuous learning and problem-solving mindset, I
            approach each project as an opportunity to grow and improve my
            skills, delivering outstanding websites tailored to your specific
            needs.
          </Center>
          <Center display={"flex"} flexDirection={"row"}>
            <Link
              label={"Linkedin"}
              href={"https://www.linkedin.com/in/bandi-revanth-9819701ba/"}
              _hover={{
                cursor: "pointer",
              }}
              mr={{ base: "20px", md: "30px" }}
              color={"white"}
              target="blank"
            >
              <FaLinkedin />
            </Link>
           
            <Link
              label={"Instagram"}
              href={"https://instagram.com/_netha_revanth_007?igshid=ZDc4ODBmNjlmNQ=="}
              _hover={{
                cursor: "pointer",
              }}
              mr={{ base: "20px", md: "30px" }}
              color={"white"}
              target="blank"
            >
              <FaInstagram height={"100px"} width={"100px"} />
            </Link>
            <Link
              label={"Github"}
              href={"https://github.com/revanthnetha"}
              _hover={{
                cursor: "pointer",
              }}
              color={"white"}
              target="blank"
            >
              <FaGithub />
            </Link>
          </Center>
        </Box>
      </Box>
    </div>
  );
};

export default Header;
