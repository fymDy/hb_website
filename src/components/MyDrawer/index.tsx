import React, { useState } from 'react';
import './MyDrawer.css'; // 引入样式

const Popup = ({ isOpen, onClose, children }:any) => {
  if (!isOpen) return null; // 如果 Popup 未打开，返回 null 不渲染

  return (
    <>
      <div className="popup-overlay" onClick={onClose}></div>
      <div className="popup">
        <button className="popup-close-btn" onClick={onClose}>
          &times;
        </button>
        <div className="popup-content">
          {children}
        </div>
      </div>
    </>
  );
};

export default Popup;
