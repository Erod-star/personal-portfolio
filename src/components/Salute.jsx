import React from "react";

// ? Images
import background from "../assets/salute/saluteImgBackground.svg";
import developer from "../assets/salute/edson-photo-no-bg.png";

const Salute = () => {
  return (
    <div className="salute__main" data-aos="fade-right">
      <div className="info-container">
        <div className="text-container">
          <span>Hello,</span>
          <h1>I'm Edson Rodríguez</h1>
          <p>I am a Software Engineer</p>
        </div>
        <div className="media-container flex f-jsb">
          <a href="https://www.instagram.com/edson_gov/?hl=es">
            <i className="fa-brands fa-instagram fa-3x" />
          </a>
          <a href="https://www.linkedin.com/in/edson-r-govea">
            <i className="fa-brands fa-linkedin fa-3x" />
          </a>
          <a href="https://github.com/Erod-star">
            <i className="fa-brands fa-github fa-3x" />
          </a>
          <a href="mailto:erodstardev@gmail.com">
            <i className="fa-solid fa-envelope fa-3x" />
          </a>
        </div>
      </div>
      {/* <div className="images-container">
        <img className="image-background" src={background} alt="Background" />
        <img className="image-dev" src={developer} alt="Developer" />
      </div> */}
    </div>
  );
};

export default Salute;
