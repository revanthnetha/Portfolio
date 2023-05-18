import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";
import { Box, Center, Link, Text,Stack } from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <Box px={{base : "100px",md : "180px"}} color={"white"}>
      <Center
        fontSize={{ base: "25px", sm: "30px", md: "42px", lg: "54px" }}
        fontWeight={{ base: " 650", md: " 650", lg: "750" }}
        lineHeight={{ base: "40px", md: "100px" }}
        letterSpacing="-0.32px"
        mb={"40px"}
      >
        <Box >Get In</Box>{" "}
        <Text className="gradient__text">Touch!</Text>
      </Center>

      <Box>
        <Box
        maxWidth={{base :"300px",md : "600px"}}
        >
        <Text
         fontSize={{ base: "22px", sm: "28px", md: "36px", lg: "40px" }}
         fontWeight={{ base: "450", md: " 500", lg: "650" }}
         lineHeight={{ base: "40px", md: "100px" }}
         letterSpacing="-0.32px"
        >Ping Me!</Text>
        <Text
         fontSize={{ base: "16px", sm: "18px", md: "18px", lg: "20px" }}
         fontWeight={{ base: " 400", md: "450", lg: "450" }}
         lineHeight={{ base: "20px", md: "40px" }}
         letterSpacing="-0.32px"
        >
          Feel Free to get in touch with me.I am always open to discussing new
          Projects, creative ideas or opportunities to be part of your visions.
        </Text>

        <Box display={"flex"} flexDirection={"row"} my={"10px"}>
            <Center mr={"14px"}>
                <FaEnvelopeOpen color="white" width={"22px"} height={"22px"}/>
            </Center>
            <Box>
                <Text>Mail me </Text>
                <Link href="#" _hover={{cursor : "pointer"}}>bandirevanth143@gmail.com</Link></Box>
        </Box>
        <Box display={"flex"} flexDirection={"row"} my={"10px"}>
            <Center mr={"14px"}>
                <FaPhoneSquareAlt color="white" width={"22px"} height={"22px"}/>
            </Center>
            <Box>
                <Text>Call me </Text>
                <Link href="#" _hover={{cursor : "pointer"}}>8919785216</Link></Box>
        </Box>

        
        <Stack direction={"row"} spacing={6}>
							<Box label={"Linkedin"} href={"#"} 
                            _hover={{
                                cursor : 'pointer'
                            }}

                            >
								<FaLinkedin />
							</Box>
							<Box label={"YouTube"} href={"https://www.youtube.com/"}
                             _hover={{
                                cursor : 'pointer'
                            }}
                            >
								<FaYoutube />
							</Box>
							<Box label={"Instagram"} href={"#"}
                             _hover={{
                                cursor : 'pointer'
                            }}
                            >
								<FaInstagram />
							</Box>
							<Box label={"Github"} href={"#"}
                             _hover={{
                                cursor : 'pointer'
                            }}
                            >
								<FaGithub />
							</Box>
						</Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
