import React from "react";

// ? Images
import hmhLogo from "../assets/experience/hmh-logo.png";
import freewayLogo from "../assets/experience/FreeWay.JPG";

const LaboralExperience = () => {
  const navigation = (url) => {
    window.location.href = url;
  };

  return (
    <div className="experience__main" data-aos="fade-right">
      <h1 className="experience-title">My laboral experience! &#128203; </h1>
      <div className="experience-section" data-aos="flip-right">
        <div className="company-card">
          <img src={hmhLogo} alt="hmh" />
        </div>
        <div className="experience-details">
          <h2>HMH - Sistemas &#128187;</h2>
          <span>
            Worked as Frontend development (from august 2019 to current date)
          </span>
          <p>
            Software company specialized in web development using React.js and
            Vue.js.
          </p>
          <br />
          <ul>
            <li>
              Planned, designed and developed 2+ software projects from zero to
              deploy using agil methodologies
            </li>
            <li>
              Implemented reusavle compontents in order to reduce the project
              development time
            </li>
          </ul>
          <p>
            <strong>Technologies implemented:</strong> HTML5, CSS, Sass,
            React.js, Vue.js (Options and Composition API), Buefy, Bootstrap,
            Gitlab, Git, i18n.
          </p>
          <div className="buttons-wrapper">
            <button
              className="mt-4 btn-primary"
              onClick={() => navigation("https://www.hmhsistemas.com.mx/es")}
            >
              Visit web site!
            </button>
          </div>
        </div>
      </div>
      <div className="experience-section" data-aos="flip-left">
        <div className="company-card">
          <img src={freewayLogo} alt="freeway" />
        </div>
        <div className="experience-details">
          <h2>Freeway Company &#128667;</h2>
          <span>
            Worked as mobile developer and team lead (from November 2021 to
            current date)
          </span>
          <p>
            FreeWay is a startup company focused on the development of mobile
            applications for freight transport solutions.
          </p>
          <br />
          <ul>
            <li>
              Participated in the creation of the first project coding the main
              structure.
            </li>
            <li>
              Helped to introduce new developers to the enviroment of the
              projects, creating solutions and managing a good internal code
              structure
            </li>
          </ul>
          <p>
            <strong>Technologies implemented:</strong> Flutter, Graphql, Zeplin,
            GitHub, Git.
          </p>
          <div className="buttons-wrapper">
            <button
              className="mt-4 btn-primary"
              onClick={() => navigation("https://freeway.mx/")}
            >
              Visit web site!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaboralExperience;
