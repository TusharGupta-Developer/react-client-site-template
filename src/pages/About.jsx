import React from "react";
import { siteConfig } from "../config/siteConfig";
import profileImg from "../assets/img/About.png"; // Adjust path if needed
import "./About.css"; // Optional: you can define styles here

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">My Info</h2>

      <div className="about__container container grid">
        <div className="grid">
          <div className="about__content grid">
            <h3 className="info__title">About Me</h3>
            <p className="about__description">
              Hi, I'm a <span>dedicated therapist</span> here to support you on your path to <span>healing</span> and <span>self-discovery</span>. I offer a <span>safe</span>, <span>understanding</span> space where you can feel <span>heard</span>, <span>valued</span>, and <span>empowered</span>. Let’s take the first step toward <span>peace</span> and <span>growth</span> together.

            </p>
            <a href={siteConfig.bookingLink} className="button">
              Book a Session
            </a>
          </div>
          <img src={profileImg} alt="Therapist" className="about__img" />
        </div>


        {/* EXPERIENCE */}
        <div className="experience grid">
          <h3 className="info__title">EXPERIENCE</h3>

          <div className="experience__content grid">
            <div className="experience__data grid">
              <h2 className="experience__company">Years of Practice / Background</h2>
              <div>
                <h3 className="experience__profession">Years of Practice / Background</h3>
                <span className="experience__date"></span>
                <p className="experience__description">
                  Full-stack web development training covering front-end and back-end technologies.
                </p>
              </div>
            </div>

            <div className="experience__data grid">
              <h2 className="experience__company">E-Commerce Certification</h2>
              <div>
                <h3 className="experience__profession">FulL Stack Project</h3>
                <span className="experience__date"></span>
                <p className="experience__description">
                  Earned certification in building E-commerce solutions project using the MERN stack.
                </p>
              </div>
            </div>

            <div className="experience__data grid">
              <h2 className="experience__company">SoftPro India</h2>
              <div>
                <h3 className="experience__profession">WorkShop Completion Certificate</h3>
                <span className="experience__date"></span>
                <p className="experience__description">
                  Completed a workshop on Python, covering essential programming skils & applications.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section >
  );
};

export default About;
