import React, { useState, useEffect } from 'react';
import { cardImages } from '../models/cardImages';

const CardCarousel = () => {
  const [cards, setCards] = useState([]); // empty array for the cards when matched up
  const [error, setError] = useState(null); // error handling
  const [currentIndex, setCurrentIndex] = useState(0); // need this for the navigation

// fetching the data from the api. no key required
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch('https://tarotapi.dev/api/v1/cards/');
        const data = await response.json();
        setCards(data.cards);
      } catch (error) {
        setError(error);
      }
    };
    fetchCards();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;  // basic error message here
  }

  if (!cards.length) {
    return <div>Loading...</div>;
  }

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % cards.length); // navigating through the array (forward)
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + cards.length) % cards.length); // navigating through the array (back)
  };

   return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel-inner">  
        {/* mapping through the array to populate the carousel parts*/}
          {cards.map((card, index) => (
            <div key={index} className={`carousel-item ${index === currentIndex ? "active" : ""}`}>  
              <img src={cardImages.find((image) => image.name_short === card.name_short).URL} alt={card.name} />
              {/* had to match up the short name from the json objects with my own list of images to get the img src */}
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" onClick={handlePrev}> 
          {/* reverse */}
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" onClick={handleNext}>
          {/* forward */}
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <div className="carousel-caption-container">
        <h3>{cards[currentIndex].name}</h3>
        <hr />
        <h5>Meaning</h5>
        <p>{cards[currentIndex].meaning_up}</p>
        <h5>Reversed Meaning</h5>
        <p>{cards[currentIndex].meaning_rev}</p>
      </div>
    </div>
  );
};

export default CardCarousel;