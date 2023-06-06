import React from 'react'
import './header.css'
import { Box, Center,Heading,Text,Stack,Button, Link } from '@chakra-ui/react'
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
        
        <Center
          color="white"
          fontSize={{ base: "18px", sm: "22px", md: "34px", lg: "54px" }}
          fontWeight={{ base: "450", md: " 500", lg: "650" }}
          lineHeight={{ base: "40px", md: "80px" }}
          letterSpacing="-0.32px"
        >
          Hi I'm
          <Center
            className="gradient__text"
            ml={"12px"}
          >
            Bandi Revanth
          </Center>
        </Center>{" "}
        
        
        <Center 
         fontSize={{ base: "18px", sm: "28px", md: "36px", lg: "36px" }}
         fontWeight={{ base: " 620", md: " 630", lg: "700" }}
         lineHeight={{ base: "30px",sm : "40px", md: "80px" }}
         letterSpacing="-0.32px"
         color={"white"} 
        > FrontEnd Developer</Center>
        
       
        <Center
        fontSize={{ base: "12px", sm: "14px", md: "16px", lg: "18px" }}
         lineHeight={{ base: "30px", md: "40px" }}
         letterSpacing="-0.32px"
         mb={{base : "20px",md : "30px"}}
          alignSelf={"center"}
          textAlign={"center"}
         textColor="whiteAlpha.800"
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur distinctio officia corrupti facilis debitis odit! Accusantium incidunt repellendus, atque autem nisi vero sequi ipsam distinctio temporibus, totam, aperiam nihil dolor.</Center>
        
       
        
        <Center display={"flex"} flexDirection={"row"} >
							<Link label={"Linkedin"} href={"#"} 
                            _hover={{
                                cursor : 'pointer'
                            }}
                        mr={{base : "20px",md : "30px"}}
                            >
								<FaLinkedin />
							</Link>
							<Link label={"YouTube"} href={"https://www.youtube.com/"}
                             _hover={{
                                cursor : 'pointer'
                            }}
                            mr={{base : "20px",md : "30px"}}
                            >
								<FaYoutube />
							</Link>
							<Link label={"Instagram"} href={"#"}
                             _hover={{
                                cursor : 'pointer'
                            }}
                            mr={{base : "20px",md : "30px"}}
                            
                            >
								<FaInstagram height={"100px"} width={"100px"} />
							</Link>
							<Link label={"Github"} href={"#"}
                             _hover={{
                                cursor : 'pointer'
                            }}
                            >
								<FaGithub />
							</Link>
						</Center>
            </Box>
        </Box>
        
    </div>
  )
}

export default Header