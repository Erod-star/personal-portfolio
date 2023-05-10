import React from "react";

//  ? Images
import graphqlIcon from "../assets/stack/graphql-icon.svg";
import flutterIcon from "../assets/stack/flutter-icon.svg";
import cypressIcon from "../assets/stack/cypress-icon.svg";
import postgresIcon from "../assets/stack/postgresql-icon.svg";

const MyStack = () => {
  return (
    <div
      id="my-stack"
      className="stack__main"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <div className="stack-container">
        <h1>My Stack &#128206;</h1>
        <p className="mt-3">Some of the technologies I work with!</p>
        <div className="technologies-container">
          <i className="fa-brands fa-html5 fa-3x" />
          <i className="fa-brands fa-css3-alt fa-3x" />
          <i className="fa-brands fa-js fa-3x" />
          <i className="fa-brands fa-vuejs fa-3x" />
          <i className="fa-brands fa-react fa-3x" />
          <i className="fa-brands fa-sass fa-3x" />
          <i className="fa-brands fa-figma fa-3x " />
          <i className="fa-brands fa-bootstrap fa-3x" />
          <i className="fa-brands fa-git-alt fa-3x " />
          <i className="fa-brands fa-github fa-3x " />
          <i className="fa-brands fa-gitlab fa-3x " />
          <img src={flutterIcon} alt="F" />
          <i class="fa-brands fa-aws fa-3x" />
          <i class="fa-brands fa-node-js fa-3x" />
          <img src={graphqlIcon} alt="G" />
          <img src={cypressIcon} alt="Cy" />
          <img src={postgresIcon} alt="Cy" />
        </div>
      </div>
    </div>
  );
};

export default MyStack;
