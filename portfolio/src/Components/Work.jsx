import React from 'react'
import "./Work.css"
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Center } from '@chakra-ui/react'

const Work = () => {
  return (
    <div id="work" >
        <div className="container">
        <Center
          color="white"
          fontSize={{ base: "22px", sm: "28px", md: "36px", lg: "44px" }}
          fontWeight={{ base: "450", md: " 500", lg: "650" }}
          lineHeight={{ base: "40px", md: "100px" }}
          letterSpacing="-0.32px"
          mt={{base : "20px",md : "40px"}}
        >
          My{" "}
          <Center
            className="gradient__text"
            ml={"12px"}
          >
           Works
          </Center>
        </Center>{" "}
            <div className="work-list">
                <div className="work">
                   
                    <img src="https://res.cloudinary.com/dvcksw7qc/image/upload/v1668942146/photo-1612817288484-6f916006741a_xv98az.avif" alt="" />
                    <div className="layer">
                        <h3>Social Media App</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, vel sunt tempora accusantium, numquam perspiciatis incidunt velit quisquam nam accusamus quod in impedit reiciendis dolor suscipit. Voluptas velit qui voluptatem.</p>
                        <a href="#">
                            <Center mt={"20px"}><FaExternalLinkAlt/></Center></a>
                    </div>
                </div>
                <div className="work">
                    <img src="https://res.cloudinary.com/dvcksw7qc/image/upload/v1668942146/photo-1612817288484-6f916006741a_xv98az.avif" alt="" />
                    <div className="layer">
                        <h3>Social Media App</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, vel sunt tempora accusantium, numquam perspiciatis incidunt velit quisquam nam accusamus quod in impedit reiciendis dolor suscipit. Voluptas velit qui voluptatem.</p>
                        <a href="#"> <Center mt={"20px"}><FaExternalLinkAlt/></Center></a>
                    </div>              
                </div>
                <div className="work">
                    <img src="https://res.cloudinary.com/dvcksw7qc/image/upload/v1668942146/photo-1612817288484-6f916006741a_xv98az.avif" alt="" />
                    <div className="layer">
                        <h3>Social Media App</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, vel sunt tempora accusantium, numquam perspiciatis incidunt velit quisquam nam accusamus quod in impedit reiciendis dolor suscipit. Voluptas velit qui voluptatem.</p>
                        <a href="#"> <Center mt={"20px"}><FaExternalLinkAlt/></Center></a>
                    </div>
                </div>

            </div>
            <a href="#" className='btn'>See More</a>
        </div>
      
    </div>
  )
}

export default Work
