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
          <span>Frontend development (8 months (August))</span>
          <p>
            HMH Sistemas is Non nostrud magna elit voluptate nulla aliqua elit
            veniam. Est mollit quis laborum pariatur et occaecat ipsum. Ut magna
            aute exercitation aliqua Lorem eiusmod consectetur cillum sint nisi
            nostrud. Velit eiusmod eiusmod in eiusmod cillum deserunt irure enim
            mollit. Exercitation sit proident ad nulla sunt aliqua. Adipisicing
            aute ut aute et. Commodo nisi commodo sit eiusmod.
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
          <h2>Freeway App &#128667;</h2>
          <span>Mobile development (6 months (december))</span>
          <p>
            FreeWay is Non nostrud magna elit voluptate nulla aliqua elit
            veniam. Est mollit quis laborum pariatur et occaecat ipsum. Ut magna
            aute exercitation aliqua Lorem eiusmod consectetur cillum sint nisi
            nostrud. Velit eiusmod eiusmod in eiusmod cillum deserunt irure enim
            mollit. Exercitation sit proident ad nulla sunt aliqua. Adipisicing
            aute ut aute et. Commodo nisi commodo sit eiusmod.
          </p>
          <div className="buttons-wrapper">
            <button className="mt-4 btn-primary">Visit web site!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaboralExperience;
