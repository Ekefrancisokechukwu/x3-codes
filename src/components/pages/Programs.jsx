import React from "react";
import ProgramsHero from "../hero/ProgramsHero";
import ProgramsHandle from "../programs/Programs";

const Programs = () => {
  return (
    <React.Fragment>
      <ProgramsHero />
      <main className="main">
        <ProgramsHandle />
      </main>
    </React.Fragment>
  );
};

export default Programs;
