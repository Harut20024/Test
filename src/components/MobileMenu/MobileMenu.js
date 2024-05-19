import React from "react";
import { FaTimes } from "react-icons/fa";
import "./MobileMenu.css";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="mobile-menu-header" onClick={(e) => e.stopPropagation()}>
        <FaTimes size={30} color="#fff" onClick={onClose} />
      </div>
      <ul onClick={(e) => e.stopPropagation()}>
        <li>
          <a href="#home" onClick={onClose}>
            Demos
          </a>
        </li>
        <li>
          <a href="#about" onClick={onClose}>
            Post
          </a>
        </li>
        <li>
          <a href="#services" onClick={onClose}>
            Features
          </a>
        </li>
        <li>
          <a href="#contact" onClick={onClose}>
            Categories
          </a>
        </li>
        <li>
          <a href="#shop" onClick={onClose}>
            Shop
          </a>
        </li>
        <li>
          <a href="#buy" onClick={onClose}>
            Buy Now
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
