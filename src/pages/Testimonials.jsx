import React from 'react'
import './Testimonials.css'
import { siteConfig } from '../config/siteConfig'

function Testimonials() {
  const individual = siteConfig.testimonials.Individual;
  const couple = siteConfig.testimonials.Couple;

  return (
    <>
      {individual.map((individualTestimonials, index) => (
        <div className="testimonial-card">
          <div key={index} className="single-testimonial">
            <img
              src={individualTestimonials.image}
              alt="Client"
              className="testimonial-image"
            />
            <h3 className="testimonial-name">{individualTestimonials.name}</h3>
            <p className="testimonial-title">{individualTestimonials.title}</p>
            <p className="testimonial-text">
              {individualTestimonials.message}
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

export default Testimonials
