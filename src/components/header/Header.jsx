import React, { useState, useEffect } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [leftBgImage, setLeftBgImage] = useState('/bg-left1.avif'); 
  const descriptions = [
    "At Foodezy, every dish is more than just a meal—it's an experience crafted with care. From the freshest ingredients to your plate, we bring you flavors that tell a story of passion and tradition.",
    "Craving something special? Whether it’s a classic favorite or a new flavor to explore, Foodezy delivers the magic of gourmet cuisine right to your doorstep. Because great food isn’t just about taste—it’s about moments shared and memories created.",
    "Discover a world of flavors with Foodezy, where the love for food meets convenience. From hand-picked ingredients to expertly crafted dishes, we make every order a culinary journey you’ll want to embark on again and again."
  ];

  const updateImageClass = () => {
    if (currentIndex === 0) return 'image1';
    if (currentIndex === 1) return 'image2';
    if (currentIndex === 2) return 'image3';
  };

  const handleNext = () => {
    setIsActive(true); 
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); 
      updateLeftBackgroundImage((currentIndex + 1) % 3); 
      setIsActive(false); 
    }, 400); 
  };

  const handlePrev = () => {
    setIsActive(true); 
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
      updateLeftBackgroundImage((currentIndex - 1 + 3) % 3); 
      setIsActive(false); 
    }, 400);
  };

  const updateLeftBackgroundImage = (newIndex) => {
    if (window.innerWidth <= 580) {
      const bgImages = ['/bg-left1.avif','/bg-left2.avif', '/bg-left3.jpg'];
      setLeftBgImage(bgImages[newIndex]);
    }
  };

 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 580) {
        setLeftBgImage('/bg-left1.avif'); 
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="container">
      <div className="imageHolder">
        <div className="left">
          <h1>WELCOME TO FOODEZY</h1>
          <h4 id="description">{descriptions[currentIndex]}</h4>
          <img loading='lazy' src={leftBgImage} alt="" />
        </div>
        <div className={`right ${updateImageClass()} ${isActive ? 'active' : ''}`} >
          <img loading='lazy' src="./bg-right.jpg" alt="" />
        </div>
      </div>
      <div className="btn">
        <button id="prev" onClick={handlePrev}> <FontAwesomeIcon icon={faChevronLeft} /></button>
        <button id="next" onClick={handleNext}> <FontAwesomeIcon icon={faChevronRight} /></button>
      </div>
    </div>
  );
};

export default Header;
