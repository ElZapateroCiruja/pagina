// src/App.jsx

import React, { useState } from "react";
import "./index.css";

function App() {
  const [comments, setComments] = useState([
    { id: 1, text: "¡Excelente trabajo!", author: "Anónimo 1" },
    { id: 2, text: "Muy bien hecho, me encanta el proyecto.", author: "Anónimo 2" },
  ]);

  const handleAddComment = (e) => {
    e.preventDefault();
    const newComment = e.target.comment.value;
    if (newComment) {
      setComments([...comments, { id: comments.length + 1, text: newComment, author: `Anónimo ${comments.length + 1}` }]);
      e.target.reset();
    }
  };

  return (
    <div>
      <header className="header">
        <h1>Proyecto de Robótica</h1>
      </header>

      <section className="main-section">
        <div className="media-container">
          <img src="/src/fotos/img5.jpeg" alt="Imagen 5" className="media-item media-image" />
          <video src="/src/fotos/video1.mp4" controls className="media-item media-video" />
          <img src="/src/fotos/img6.jpeg" alt="Imagen 6" className="media-item media-image" />
        </div>
        <p className="description">
          Un emocionante proyecto de robótica que explora la integración de la tecnología avanzada para soluciones innovadoras.
        </p>
      </section>

      <section className="team-section">
        <div className="team-member">
          <img src="/src/fotos/img1.jpeg" alt="Gabriel des Rotours" />
          <p className="team-member-name">Gabriel des Rotours</p>
        </div>
        <div className="team-member">
          <img src="/src/fotos/img2.jpeg" alt="Alma Sorbera" />
          <p className="team-member-name">Alma Sorbera</p>
        </div>
        <div className="team-member">
          <img src="/src/fotos/img3.jpeg" alt="Avril Duran" />
          <p className="team-member-name">Avril Duran</p>
        </div>
        <div className="team-member">
          <img src="/src/fotos/img4.jpeg" alt="Ana Martínez" />
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
          <form onSubmit={handleAddComment} className="comment-box">
            <textarea name="comment" placeholder="Escribe tu comentario aquí..." />
            <button type="submit">Enviar</button>
          </form>
          {comments.map(comment => (
            <div key={comment.id} className="comment">
              <p>{comment.text}</p>
              <p className="comment-author">{comment.author}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>Contacto: contacto@proyecto.com</p>
      </footer>
    </div>
  );
}

export default App;
