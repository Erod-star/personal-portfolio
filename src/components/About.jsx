import React from "react";

// ? Images
import developer from "../assets/salute/myself.jpg";

const About = () => {
  const handleDownload = () => {
    fetch("Resumé - Edson Arturo Rodríguez Govea.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resumé - Edson Arturo Rodríguez Govea.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="about__main" data-aos="fade-left">
      <div className="about-container">
        <div className="about-image-background">
          <img className="about-image" src={developer} alt="Dev image" />
        </div>
        <div className="about-info">
          <p> About Me! &#9996;</p>
          <p>Frontend & Mobile developer &#128526;</p>
          <p>
            Hi! My name is Edson Arturo Rodríguez Govea, I am a Software
            front-end developer who loves to learn something new and create
            simple and complex web pages for process and/or problem improvement
          </p>
          <div className="abilities-wrapper mt-4 mb-4 flex">
            <div className="aptitudes-list">
              <h2 className="mb-2">Aptitudes</h2>
              <ul>
                <li>Intermediate level developer</li>
                <li>Front-end frameworks managment</li>
                <li>Willingness to learn</li>
                <li>Commitment to teamwork</li>
                <li>English B2 </li>
              </ul>
            </div>
            <div className="interests-list">
              <h2 className="mb-2">Interests</h2>
              <ul>
                <li>Web development</li>
                <li>Mobile development</li>
                <li>Single Page Application</li>
                <li>Work with the best practices</li>
              </ul>
            </div>
          </div>
          <div className="buttons-wrapper">
            <button className="mt-4 btn-primary" onClick={handleDownload}>
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
