import React from "react";

// ? Images
import reactLogo from "../assets/education/react-logo.png";

const Education = () => {
  return (
    <div
      className="education__main"
      data-aos="flip-down"
      data-aos-duration="800"
    >
      <div className="education-title">
        <h1>My Education &#127891;</h1>
      </div>
      <div className="flex mb-5 education-container">
        <div className="education-card-background">
          <div className="education-card">
            <div className="education-card-content">
              <h2> Bachillerato #1, University of Colima</h2>
              <span>From 2017 to 2019</span>
              <ul className="mt-5">
                <li>Acquired basic knowledge for professional life</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="education-card-background">
          <div className="education-card">
            <div className="education-card-content">
              <h2>School of Telematics, University of Colima</h2>
              <span>From 2019 to 2023</span>
              <ul className="mt-5">
                <li>Currently studying the software engineering major</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 
      Aquí esta el bugazo del overflow
      <div
        className="courses-container"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="courses-title mb-5">
          <p>Other preparation! &#128170;</p>
        </div>

        <div className="flex f-jsa">
          <div className="course-card-background">
            <div className="course-card">
              <h2>React: De cero a experto (Hooks y Mern)</h2>
              <img src={reactLogo} alt="course image" />
              <span>2021</span>
              <p>Fernando Herrera</p>
              <p>Developer & teacher</p>
            </div>
          </div>
          <div className="course-card-background">
            <div className="course-card">
              <h2>Vue.js: De cero a experto</h2>
              <img src="" alt="course image" />
              <span>2021</span>
              <p>Fernando Herrera</p>
              <p>Developer & teacher</p>
            </div>
          </div>
          <div className="course-card-background">
            <div className="course-card">
              <h2>
                Flutter: Tu guía completa de desarrollo para IOS y Android
              </h2>
              <img src="" alt="course image" />
              <span>2021</span>
              <p>Fernando Herrera</p>
              <p>Developer & teacher</p>
            </div>
          </div>
        </div>

        <div className="flex f-jsa mb-3">
          <div className="course-card-background">
            <div className="course-card">
              <h2>React PRO: Lleva tus bases al siguiente nivel</h2>
              <img src={reactLogo} alt="course image" />
              <span>2021</span>
              <p>Fernando Herrera</p>
              <p>Developer & teacher</p>
            </div>
          </div>
          <div className="course-card-background">
            <div className="course-card">
              <h2>React PRO: Lleva tus bases al siguiente nivel</h2>
              <img src="" alt="course image" />
              <span>Udemy(2021)</span>
              <p>Fernando Herrera</p>
              <p>Developer & teacher</p>
            </div>
          </div>
          <div className="course-card-background">
            <div className="course-card">
              <h2>React PRO: Lleva tus bases al siguiente nivel</h2>
              <img src="" alt="course image" />
              <span>Udemy(2021)</span>
              <p>Fernando Herrera</p>
              <p>Developer & teacher</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Education;
