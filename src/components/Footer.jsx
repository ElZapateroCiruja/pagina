// components/Footer.jsx
import React from 'react';

const Footer = ({ contact }) => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Contacto:</strong> {contact.email} | Teléfono: {contact.phone}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
