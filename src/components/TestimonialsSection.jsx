// components/TestimonialsSection.jsx
import React from 'react';

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Testimonios</h2>
        <div className="columns">
          {testimonials.map((testimonial, index) => (
            <div className="column is-one-third" key={index}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={testimonial.photo} alt={testimonial.name} />
                  </figure>
                </div>
                <div className="card-content">
                  <p className="title">{testimonial.name}</p>
                  <p>{testimonial.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
