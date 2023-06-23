import React from "react";
import GradHero from "../hero/GradHero";
import GraduatesHandle from "../gradutes/GraduatesHandle";

const Gradutes = () => {
  return (
    <React.Fragment>
      {/* <Header/> */}
      <GradHero />
      <main className="main">
        <GraduatesHandle />
      </main>
      {/* <Footer/> */}
    </React.Fragment>
  );
};

export default Gradutes;
