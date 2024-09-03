import React from 'react';

const WelcomeEmail = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', margin: '0', padding: '0' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', padding: '20px 30px', textAlign: 'center' }}>
        <h1 style={{ color: '#333333' }}>Welcome to Redress</h1>
      </div>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#ffffff', padding: '40px 30px' }}>
        <p style={{ color: '#333333', fontSize: '18px', lineHeight: '1.6' }}>
          Hey there!
        </p>
        <p style={{ color: '#333333', fontSize: '18px', lineHeight: '1.6' }}>
          Thank you for joining the Redress waitlist! You’re now one step closer to discovering a smarter way to shop and finding clothes that truly match your style and needs.
        </p>
        <p style={{ color: '#333333', fontSize: '18px', lineHeight: '1.6' }}>
          We’ll be in touch as soon as your exclusive access is ready. In the meantime, follow us on <a href="https://www.instagram.com" style={{ color: '#333333', textDecoration: 'none' }}>Instagram</a> for the latest updates.
        </p>
        <p style={{ color: '#333333', fontSize: '18px', lineHeight: '1.6' }}>
          Looking forward to helping you find the clothes you need!
        </p>
        <p style={{ color: '#333333', fontSize: '18px', lineHeight: '1.6' }}>
          - Your Redress team
        </p>
      </div>
    </div>
  );
};

export default WelcomeEmail;
