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
      <>
      <div>
        <div className="oneCardIntro">
          <h1>Try a Three-Card Reading!</h1>
          <br></br>
          <hr width="70%"></hr>
          <div className="contentContainer">
          <div className="left">
            <p>
            <p>Three card readings present your Tarot as the PAST (the left card), PRESENT (the center card), and FUTURE (the right card). Remember that it is ultimately up to you to interpret the results. Also, note that cards can be dealt either upright (the way you would normally read them) or reversed (upsidedown). In the event that you've been dealt a reversed card, you will be provided with that meaning.</p>
            </p>
            <div className="center">
            <div className="drawBtn" onClick={drawThreeCards}>Draw Cards</div>
            </div>
          </div>
          <div className="right">
            <img src="/images/mystic1.png" />
          </div>
        </div>
      </div>
      </div>
    </>);
  } // This bracket was missing

  return (
    <>
    <div>
    <div className="oneCardIntro">
      <h1>Try a Three-Card Reading!</h1>
      <br></br>
      <hr width="70%"></hr>
      <div className="contentContainer">
      <div className="left">
        <p>
        <p>Three card readings present your Tarot as the PAST (the left card), PRESENT (the center card), and FUTURE (the right card). Remember that it is ultimately up to you to interpret the results. Also, note that cards can be dealt either upright (the way you would normally read them) or reversed (upsidedown). In the event that you've been dealt a reversed card, you will be provided with that meaning.</p>
        </p>
        <div className="center">
        <div className="drawBtn" onClick={() => {
  setDrawn(false);
  setDrawnCards([]);
  fetchCards();
}}>Draw Again</div>
        </div>
      </div>
      <div className="right">
        <img src="/images/mystic1.png" />
      </div>
    </div>
  </div>
  </div>
        
      <div className="threeCardContainer">
        {drawnCards.map((card, index) => (
          <div key={index} className="cardContainer">
            <h2>{card.name}</h2>
            <img src={cardImages.find((image) => image.name_short === card.name_short).URL} alt={card.name_short} />
            {card.isReversed ? (
  <div className="descriptionContainer">
    <h3>Reversed:</h3>
    <p>{card.meaning_rev}</p>
    <h5>Upright Meaning for Reference:</h5>
    <p>{card.meaning_up}</p>
  </div>
) : (
  <div className="descriptionContainer">
    <p>{card.meaning_up}</p>
  </div>
)}
            {index === 0 && <h2>PAST</h2>}
            {index === 1 && <h2>PRESENT</h2>}
            {index === 2 && <h2>FUTURE</h2>}
              </div>
        ))}
      </div>
    </>
  );
}

export default ThreeCard;