import React from "react";
import ME from "/home/rashad_k/Desktop/My-React-Projects/my-portfolio/src/assets/me-about1.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>10+ Clients</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            I am a 25 year old React developer with over one year experience and
            completed more than 10 projects. Currently, I am working as an
            associate software developer in Tarento Technologies, Banglore.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
