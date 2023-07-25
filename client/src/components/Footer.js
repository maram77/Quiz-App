import React from 'react';

function Footer() {
  const footerStyle = {
    background: 'linear-gradient(90deg, #182099, #2F22A7, #7F2BD5, #8E2CDE, #3E24AF)',
    color: 'white',
    fontFamily: 'sans-serif',
    fontWeight: 300,
    padding: '20px',
    height: '80px',
    bottom: 0,
    left: 0,
    width: '100%',
    position: 'fixed',
    textAlign: 'center',
  };

  return (
    <footer style={footerStyle}>
      <div>
        <p>Tous droits réservés © 2023. Créée par Mekni Maram.</p>
      </div>
    </footer>
  );
}

export default Footer;
