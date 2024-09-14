import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppChat = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-16 md:bottom-8 right-4 z-50">
      {/* WhatsApp icon and hover effect */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Popup Message */}
        {isHovered && (
          <div className="absolute bottom-14 right-0 w-64 bg-green-200 rounded-md shadow-md p-4 text-center">
            <p className="text-green-900 font-bold">WhatsApp Chat</p>
            <p className="text-green-700">Welcome to PrakritiOils</p>
            <p className="bg-green-100 mt-2 p-2 rounded">I'd like to order ....</p>
          </div>
        )}

        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/8951936369?text=Hii! I was redirected from the website" // Replace with your WhatsApp link
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-green-500 text-5xl cursor-pointer hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default WhatsAppChat;
