import React from "react";
import { siteConfig } from "../config/siteConfig";
import profileImg from "../assets/img/About.png"; // Adjust path if needed
import "./About.css"; // Optional: you can define styles here

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <img src={profileImg} alt="Therapist" className="about__img" />

        <div className="about__content">
          <h2 className="section__title">About Me</h2>
          <p className="about__description">
            {siteConfig.about.shortDescription}
          </p>
          <a href={siteConfig.bookingLink} className="button">
            Book a Session
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
