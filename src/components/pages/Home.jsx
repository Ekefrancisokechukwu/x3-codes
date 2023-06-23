import React from "react";

import Header from "../header/Header";
import Hero from "../hero/Hero";
import About from "../about/About";
import Story from "../story/Story";
import Course from "../course/Course";
import Feature from "../feature/Feature";
import StartUp from "../start-up/StartUp";
import Review from "../review/Review";
import Career from "../career-slideShow/Career";
import Questions from "../accordion/Questions";
import Form from "../form/Form";
import Footer from "../footer/Footer";

// icons
import { RiArrowUpLine } from "react-icons/ri";

const Home = () => {
  return (
    <React.Fragment>
      {/* <Header/> */}
      <Hero />
      <main className="main">
        <About />
        <Story />
        <Course />
        <Feature />
        <StartUp />
        <Career />
        <Review />
        <Questions />
        <Form />
      </main>
      {/* <Footer/> */}
    </React.Fragment>
  );
};

export default Home;
