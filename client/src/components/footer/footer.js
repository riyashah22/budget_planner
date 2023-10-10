import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; 2023 MoneyMate</p>
        </footer>
    );
};

const footerStyle = {
    background: '#f0f0f0',
    color: '#333',
    textAlign: 'center',
    padding: '10px',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',

};

export default Footer;
