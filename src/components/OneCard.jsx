import React, { useState } from 'react';
import { cardImages } from '../models/cardImages'; // import the array of image URLs

function OneCard() {
  const [card, setCard] = useState(null);
  const [error, setError] = useState(null);
  const [isReversed, setIsReversed] = useState(false);

  const fetchCards = async () => {
    try {
      const response = await fetch('https://tarot-api-3hv5.onrender.com/api/v1/cards/');
      const data = await response.json();
      const randomCard = data.cards[Math.floor(Math.random() * data.cards.length)];
      setCard(randomCard);
      setIsReversed(Math.random() < 0.5); // 50% chance of being reversed
    } catch (error) {
      setError(error);
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;  // basic error message here
  }

  if (!card) {
    return (
      <div>
        <div className="oneCardIntro">
          <h1>Try a Single-Card Reading!</h1>
          <br></br>
          <p>Readings using a single card are best for simple YES/NO questions. They will provide some context for your question, but remember that it is ultimately up to you to interpret the results.</p>
          <p>Also, note that cards can be dealt either upright (the way you would normally read them) or reversed (upsidedown). In the event that you've been dealt a reversed card, you will be provided with that meaning.</p>
          <div className="drawBtn" onClick={fetchCards}>Draw a Card</div>
        </div>
      </div>
    );
  }

  const image = cardImages.find((image) => image.name_short === card.name_short);

  return (

    <div>
      <div className="fullDeckIntro">
        <h1>Try a Single-Card Reading!</h1>
        <br></br>
        <p>Readings using a single card are best for simple YES/NO questions. They will provide some context for your question, but remember that it is ultimately up to you to interpret the results.</p>
        <p>Also, note that cards can be dealt either upright (the way you would normally read them) or reversed (upsidedown). In the event that you've been dealt a reversed card, you will be provided with that meaning.</p>
        <div className="drawBtn" onClick={fetchCards}>Draw Again</div>
      </div>
      <div>
      <div className="oneCardContainer">
        <div className="push"><h2 className="cardName">{card.name}</h2></div>
        <div className="flexer"><img src={image.URL} alt={card.name_short} />
        {isReversed ? (
          <div className="singledescriptionContainer">
            <p><strong>Reversed:</strong></p>
            <p>{card.meaning_rev}</p>
            <p><strong>Upright Meaning for Reference:</strong></p>
            <p>{card.meaning_up}</p>
          </div>
        ) : (
          <p className="singledescriptionContainer">{card.meaning_up}</p>
        )}</div>
      </div>
    </div>
  </div>
  );
}

export default OneCard;