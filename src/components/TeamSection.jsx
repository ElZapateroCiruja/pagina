// src/App.jsx

import React from "react";
import "./index.css";
import img1 from "./fotos/img1.jpeg";
import img2 from "./fotos/img2.jpeg";
import img3 from "./fotos/img3.jpeg";
import img4 from "./fotos/img4.jpeg";
import video1 from "./fotos/video1.mp4";
import img5 from "./fotos/img5.jpeg";
import img6 from "./fotos/img6.jpeg";

function App() {
  return (
    <div>
      <header className="header">
        <h1>Proyecto de Robótica</h1>
      </header>

      <section className="main-section">
        <div className="media-container">
          <img src={img5} alt="Imagen 5" className="media-item media-image" />
          <video src={video1} controls className="media-item media-video" />
          <img src={img6} alt="Imagen 6" className="media-item media-image" />
        </div>
        <p className="description">
          Un emocionante proyecto de robótica que explora la integración de la tecnología avanzada para soluciones innovadoras.
        </p>
      </section>

      <section className="team-section">
        <div className="team-member">
          <img src={img1} alt="Gabriel des Rotours" />
          <p className="team-member-name">Gabriel des Rotours</p>
        </div>
        <div className="team-member">
          <img src={img2} alt="Alma Sorbera" />
          <p className="team-member-name">Alma Sorbera</p>
        </div>
        <div className="team-member">
          <img src={img3} alt="Avril Duran" />
          <p className="team-member-name">Avril Duran</p>
        </div>
        <div className="team-member">
          <img src={img4} alt="Ana Martínez" />
          <p className="team-member-name">Ana Martínez</p>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="testimonial-card">
          <p>"Este proyecto ha sido un gran avance en el campo de la robótica. ¡Estoy impresionado!"</p>
          <p className="testimonial-author">Anónimo 1</p>
        </div>
        <div className="testimonial-card">
          <p>"Una iniciativa innovadora que muestra el potencial de la tecnología avanzada."</p>
          <p className="testimonial-author">Anónimo 2</p>
        </div>
        <div className="comments-section">
          <div className="comment-box">
            <textarea placeholder="Escribe tu comentario aquí..." />
            <button>Enviar</button>
          </div>
          <div className="comment">
            <p>"¡Excelente trabajo!"</p>
            <p className="comment-author">Anónimo 3</p>
          </div>
          <div className="comment">
            <p>"Muy bien hecho, me encanta el proyecto."</p>
            <p className="comment-author">Anónimo 4</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Contacto: contacto@proyecto.com</p>
      </footer>
    </div>
  );
}

export default App;
