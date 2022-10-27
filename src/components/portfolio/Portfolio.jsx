import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Simon game developed by HTML and vanilla javascript",
    github: "https://github.com/K-Rashad/Simon-Game",
    demo: "https://k-rashad.github.io/Simon-Game/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Drum kit operable by moth mouse and keyboard",
    github: "https://github.com/K-Rashad/Drum-KIt-Game",
    demo: "https://k-rashad.github.io/Drum-KIt-Game/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Dual player dice game played by page refresh ",
    github: "https://github.com/K-Rashad/Dice-Game",
    demo: "https://k-rashad.github.io/Dice-Game/",
  },
  {
    id: 4,
    image: IMG4,
    title: "A responsive tinder like website for dogs using bootstrap ",
    github: "https://github.com/K-Rashad/Tinder-Dog",
    demo: "https://k-rashad.github.io/Tinder-Dog/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Holygrail frontend mentor challenge by Zack Gollwitzer",
    github:
      "https://github.com/K-Rashad/the-holy-grail-front-end-mentor-challenge",
    demo: "https://k-rashad.github.io/the-holy-grail-front-end-mentor-challenge/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Charts templates & infographics in Figma using dribbble",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
