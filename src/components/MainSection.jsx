// components/MainSection.jsx
import React from 'react';

const MainSection = ({ description }) => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Sobre el Proyecto</h2>
        <p>{description}</p>
        <img src="https://via.placeholder.com/600x300" alt="Imagen del Proyecto" />
      </div>
    </section>
  );
};

export default MainSection;
