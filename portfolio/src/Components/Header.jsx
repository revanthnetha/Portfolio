import React from 'react'
import './header.css'
import { Box, Center,Heading,Text,Stack,Button } from '@chakra-ui/react'
import {
	FaInstagram,
	FaLinkedin,
	FaGithub,
    FaYoutube
} from "react-icons/fa";
const Header = () => {
  return (
    <div className='port__header sections__padding'>
      <Box 
     flex={1}
    display={"flex"}
    justifyContent={"center"}
    alignItems={{base : "center", md : "flex-start"}}
    flexDirection={"column"}
    mr={"5rem"}
    ml={"5rem"} 
    color={"#81AFDD"}
    >
        <Box alignSelf={"center"}>
        
        <Heading 
         fontSize={{ base: "25px", sm: "30px", md: "42px", lg: "54px" }}
         fontWeight={{ base: " 650", md: " 650", lg: "750" }}
         lineHeight={{ base: "40px", md: "100px" }}
         letterSpacing="-0.32px"
        className="gradient__text" >Hi I'm Bandi Revanth </Heading>
        
        
        <Text 
         fontSize={{ base: "25px", sm: "28px", md: "36px", lg: "36px" }}
         fontWeight={{ base: " 620", md: " 630", lg: "700" }}
         lineHeight={{ base: "40px", md: "60px" }}
         letterSpacing="-0.32px"
         color={"white"} 
        > FrontEnd Developer</Text>
        
        </Box>
        <Text
        fontSize={{ base: "12px", sm: "14px", md: "16px", lg: "18px" }}
         lineHeight={{ base: "30px", md: "40px" }}
         letterSpacing="-0.32px"
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur distinctio officia corrupti facilis debitis odit! Accusantium incidunt repellendus, atque autem nisi vero sequi ipsam distinctio temporibus, totam, aperiam nihil dolor.</Text>
        <div className='port__header-content__input'>
          <input type={"email"} placeholder="Your email"/>
          <button type='button'>Get Started</button>
         
        </div>
       
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
        
    </div>
  )
}

export default Header