import React from "react";
import "./Work.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Center } from "@chakra-ui/react";

const Work = () => {
  return (
    <div id="work">
      <div className="container">
        <Center
          color="white"
          fontSize={{ base: "22px", sm: "28px", md: "36px", lg: "44px" }}
          fontWeight={{ base: "450", md: " 500", lg: "650" }}
          lineHeight={{ base: "40px", md: "100px" }}
          letterSpacing="-0.32px"
          mt={{ base: "20px", md: "40px" }}
        >
          My{" "}
          <Center className="gradient__text" ml={"12px"}>
            Works
          </Center>
        </Center>{" "}
        <div className="work-list">
          <div className="work">
            <img
              src="https://res.cloudinary.com/dvcksw7qc/image/upload/v1689538573/Portfolio/Screenshot_243_kyti57.png"
              alt=""
            />
            <div className="layer">
              <h3>AAC WEBSITE</h3>
              <p>
                Developed an full fledged website for the AAC student
                body--GRIET. Designed the website using React framework and with
                the Content Management System.
              </p>
              <a href="https://www.aacgriet.com/">
                <Center mt={"20px"}>
                  <FaExternalLinkAlt />
                </Center>
              </a>
            </div>
          </div>
          <div className="work">
            <img
              src="https://res.cloudinary.com/dvcksw7qc/image/upload/v1689538576/Portfolio/Screenshot_242_ewt1ds.png"
              alt=""
            />
            <div className="layer">
              <h3>USK SOLUTIONS</h3>
              <p>
                Developed an website for Interior Designs.Designed the website
                using the react framework and vite.js .
              </p>
              <a href="https://usksolutions.netlify.app/">
                {" "}
                <Center mt={"20px"}>
                  <FaExternalLinkAlt />
                </Center>
              </a>
            </div>
          </div>
          <div className="work">
            <img
              src="https://res.cloudinary.com/dvcksw7qc/image/upload/v1689537850/Portfolio/Screenshot_238_zmzaec.png"
              alt=""
            />
            <div className="layer">
              <h3>UBIQ ACADEMEY</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus, vel sunt tempora accusantium, numquam
                perspiciatis incidunt velit quisquam nam accusamus quod in
                impedit reiciendis dolor suscipit. Voluptas velit qui
                voluptatem.
              </p>
              <a href="https://ubiqlanding.netlify.app/">
                {" "}
                <Center mt={"20px"}>
                  <FaExternalLinkAlt />
                </Center>
              </a>
            </div>
          </div>
        </div>
        <a href="#" className="btn">
          See More
        </a>
      </div>
    </div>
  );
};

export default Work;
