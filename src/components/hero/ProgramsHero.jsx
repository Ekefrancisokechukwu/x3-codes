import React from "react";

import Header from "../header/Header";

const ProgramsHero = () => {
  return (
    <>
      <section className="section-hero programs__hero">
        <Info />
      </section>
    </>
  );
};

const Info = () => {
  return (
    <div className="hero_info">
      <h1 className="heading-primary">
        <span>events</span> and free workspace
      </h1>

      <p className="hero_text">
        Lorem ipsum dolor sit amet consectetur. Orci vestibulum proin massa eget
        laoreet in. At faucibus aliquam facilisi mi consequat consectetur
        lobortis massa a. Iaculis faucibus sed eget velit malesuada
      </p>
    </div>
  );
};

export default ProgramsHero;
