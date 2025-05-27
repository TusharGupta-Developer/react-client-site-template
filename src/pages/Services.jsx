import React from "react";
import { siteConfig } from "../config/siteConfig";
import "./Services.css"; // Optional: Add your CSS here

const iconMap = {
    "Individual Therapy": "ri-user-heart-line",
    "Couples Counseling": "ri-heart-line",
    "Anxiety & Stress Management": "ri-mind-map",
    "Depression Support": "ri-emotion-unhappy-line",
    "Confidence Building": "ri-sparkling-line",
    "Meditation Guidance": "ri-heart-pulse-line",
    "Grief & Loss Counseling": "ri-emotion-sad-line",
    "Work & Career Counseling": "ri-briefcase-line",
};

const Services = () => {
    return (
        <section className="services section" id="services">
            <h2 className="section__title">SERVICES</h2>

            <div className="services__container container grid">
                {siteConfig.services.map((service, index) => (
                    <article className="services__card" key={index}>
                        <i className={`${iconMap[service.title]} services__icon`}></i>
                        <h3 className="services__title">{service.title}</h3>
                        <p className="services__description">{service.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Services;
