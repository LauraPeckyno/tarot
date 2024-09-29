import React, { useState, useEffect } from 'react';
import { cardImages } from '../models/cardImages'; // import the array of image URLs

function ThreeCard() {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [drawnCards, setDrawnCards] = useState([]);
  const [drawn, setDrawn] = useState(false);

  const fetchCards = async () => {
    try {
      const response = await fetch('https://tarot-api-3hv5.onrender.com/api/v1/cards/');
      const data = await response.json();
      setCards(data.cards);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const drawThreeCards = () => {
    const randomCards = [];
    const remainingCards = [...cards]; // create a copy of the cards array
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * remainingCards.length);
      randomCards.push({
        ...remainingCards[randomIndex],
        isReversed: Math.random() < 0.5,
      });
      remainingCards.splice(randomIndex, 1);
    }
    setDrawnCards(randomCards);
    setDrawn(true);
  };

  if (error) {
    return <div>Error: {error.message}</div>;  // basic error message here
  }

  if (!drawn) {
    return (
      <div>
        <div className="threeCardIntro">
          <h1>Try a Three-Card Reading!</h1>
          <br></br>
          <p>Three card readings present your Tarot as the PAST (the left card), PRESENT (the center card), and FUTURE (the right card).</p>
          <p>Remember that it is ultimately up to you to interpret the results.</p>
          <p>Also, note that cards can be dealt either upright (the way you would normally read them) or reversed (upsidedown). In the event that you've been dealt a reversed card, you will be provided with that meaning.</p>
          <div className="drawBtn" onClick={drawThreeCards}>Draw Cards</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="threeCardIntro">
        <h1>Try a Three-Card Reading!</h1>
        <p>Three card readings present your Tarot as the PAST (the left card), PRESENT (the center card), and FUTURE (the right card).<br></br>
        Remember that it is ultimately up to you to interpret the results.<div className="drawBtn" onClick={() => {
  setDrawn(false);
  setDrawnCards([]);
  fetchCards();
}}>Draw Again</div></p>
      </div>
        
      <div className="threeCardContainer">
        {drawnCards.map((card, index) => (
          <div key={index} className="cardContainer">
            <h2>{card.name}</h2>
            <img src={cardImages.find((image) => image.name_short === card.name_short).URL} alt={card.name_short} />
            {card.isReversed ? (
  <div className="descriptionContainer">
    <p><strong>Reversed:</strong></p>
    <p>{card.meaning_rev}</p>
    <p><strong>Upright Meaning for Reference:</strong></p>
    <p>{card.meaning_up}</p>
  </div>
) : (
  <div className="descriptionContainer">
    <p>{card.meaning_up}</p>
  </div>
)}
            {index === 0 && <h1>PAST</h1>}
            {index === 1 && <h1>PRESENT</h1>}
            {index === 2 && <h1>FUTURE</h1>}
              </div>
        ))}
      </div>
    </div>
  );
}

export default ThreeCard;