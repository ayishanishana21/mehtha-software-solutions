// src/FloatingWhatsApp.jsx
import React from 'react';
import { COMPANY } from './config';

function FloatingWhatsApp() {
  if (!COMPANY.phoneDigits) return null;

  const message = encodeURIComponent(
    'Hi Mehtha Software Solutions! I have a question about your internship programs.'
  );
  const url = `https://wa.me/${COMPANY.phoneDigits}?text=${message}`;

  return (
    <a
      className="floating-whatsapp"
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16.004 3C9.383 3 4 8.383 4 15.004c0 2.127.557 4.127 1.535 5.86L4 29l8.34-1.492A11.94 11.94 0 0 0 16.004 27C22.625 27 28 21.617 28 15.004 28 8.383 22.625 3 16.004 3zm0 21.818a9.78 9.78 0 0 1-5.03-1.393l-.36-.215-4.95.885.9-4.826-.235-.375a9.77 9.77 0 0 1-1.51-5.213c0-5.41 4.4-9.81 9.81-9.81 5.41 0 9.81 4.4 9.81 9.81 0 5.41-4.4 9.81-9.81 9.81zm5.38-7.34c-.295-.147-1.744-.86-2.015-.96-.27-.098-.467-.147-.664.148-.197.295-.762.96-.934 1.157-.172.197-.345.22-.64.073-.295-.147-1.246-.46-2.373-1.465-.877-.782-1.47-1.748-1.642-2.043-.172-.295-.018-.455.13-.602.132-.132.295-.345.443-.517.147-.172.197-.295.295-.492.098-.197.05-.37-.025-.517-.074-.147-.664-1.6-.91-2.19-.24-.577-.484-.5-.664-.51-.172-.008-.37-.01-.567-.01-.197 0-.517.074-.787.37-.27.295-1.033 1.01-1.033 2.46 0 1.45 1.057 2.85 1.205 3.047.147.197 2.08 3.18 5.04 4.46.705.305 1.255.487 1.684.624.708.225 1.353.193 1.862.117.567-.084 1.744-.713 1.99-1.402.246-.69.246-1.28.172-1.402-.074-.123-.27-.197-.567-.344z" />
      </svg>
    </a>
  );
}

export default FloatingWhatsApp;