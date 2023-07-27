import React from "react";
import Common from  "./Common"
import Main_img from "../Assets/Main_img.png"

const Home = () => {
  return (
    <>
      <Common name='Welcome Home' imgsrc={Main_img} visit="/contact" btname='Get Started'/>
    </>
  )
}

export default Home;
