import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const FloatingContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 1000;

  a {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: #25D366;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-decoration: none;
    font-size: 24px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transition: transform 0.3s ease;
  }

  a.email {
    background-color: #0072C6;
  }

  a:hover {
    transform: translateY(-5px);
  }
`;

const FloatingContacts = () => {
  return (
    <FloatingContainer>
      <a
        href="https://alvo.chat/6hdD"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Chat"
      >
        <FaWhatsapp />
      </a>
      <a
        href="mailto:info.lumenxo@gmail.com"
        className="email"
        aria-label="Send Email"
      >
        <FaEnvelope />
      </a>
    </FloatingContainer>
  );
};

export default FloatingContacts;
