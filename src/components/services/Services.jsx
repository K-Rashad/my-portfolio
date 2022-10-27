import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile App UX and UI Design Services.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cross-platform Experiences Design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom Web Design & Development..</p>
            </li>
            {/* <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li> */}
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom Website Development.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>E-commerce Website Development .</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Blog Customization or Management.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Full Stack Development(Mainly PERN or MERN).</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Static Web Service.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Maintenance.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Technical Content Writing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Blog and Articles Writing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Football Content Writing.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cricket Content Writing.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
