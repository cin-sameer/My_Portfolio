import React, { useState, useEffect } from 'react';
import { FaHome, FaUser, FaCode, FaLaptopCode } from 'react-icons/fa';
import './BottomNav.css';

export default function BottomNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav when scrolled down 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`bottom-nav ${isVisible ? 'visible' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-item">
          <FaHome className="nav-icon" />
          <span className="nav-label">Home</span>
        </a>
        <a href="#about" className="nav-item">
          <FaUser className="nav-icon" />
          <span className="nav-label">About</span>
        </a>
        <a href="#projects" className="nav-item">
          <FaCode className="nav-icon" />
          <span className="nav-label">Projects</span>
        </a>
        <a href="#learning" className="nav-item">
          <FaLaptopCode className="nav-icon" />
          <span className="nav-label">Learning</span>
        </a>
      </div>
    </div>
  );
}
