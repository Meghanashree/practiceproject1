import React from "react";
import Common from  "./Common"
import Main_img from "../Assets/Main_img.png"

const About = () => {
  return (
    <>
      <Common name='Welcome to About' imgsrc={Main_img} visit="/contact" btname='Contact now'/>
    </>
  )
}

export default About;
