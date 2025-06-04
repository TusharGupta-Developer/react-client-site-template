import React from "react";
import { siteConfig } from "../config/siteConfig";
import profileImg from "../assets/img/About.png"; // Adjust path if needed
import "./About.css"; // Optional: you can define styles here
import Button from "../components/common/Button";


const About = () => {
  return (
    <section className="info section" id="about">
      <h2 className="section__title">My Info</h2>

      <div className="about__container container grid">
        <div className="about grid">
          <div className="about__content grid">
            <h3 className="info__title">About Me</h3>
            <p className="about__description">
              Hi, I'm a <span>dedicated therapist</span> here to support you on your path to <span>healing</span> and <span>self-discovery</span>. I offer a <span>safe</span>, <span>understanding</span> space where you can feel <span>heard</span>, <span>valued</span>, and <span>empowered</span>. Let’s take the first step toward <span>peace</span> and <span>growth</span> together.

            </p>
            <Button className ="about_button"/>
          </div>
          <img src={profileImg} alt="Therapist" className="about__img" />
        </div>


        {/* EXPERIENCE */}

        <div className="about__experience grid">
          <h3 className="info__title">Experience</h3>
          <ul className="experience__list grid">
            <li>
              <strong>Licensed Therapist</strong> — 5+ years providing compassionate therapy focused on healing, personal growth, and empowerment.
            </li>
            <li>
              Specialized in <span>trauma-informed care</span>, helping clients safely process and overcome past experiences.
            </li>
            <li>
              Skilled in building a <span>trusting therapeutic relationship</span> with individuals from diverse backgrounds.
            </li>
            <li>
              Expertise in individual and group therapy sessions that foster self-awareness and resilience.
            </li>
            <li>
              Committed to ongoing professional development to provide the best evidence-based support.
            </li>
          </ul>
        </div>
     
      </div>

    </section >
  );
};

export default About;
