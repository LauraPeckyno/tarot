import React from "react";


// cards.map((card) => {
//   const isReversed = Math.random() < 0.5; // 50% chance of being reversed
//   const meaning = isReversed ? card.meaning_rev : card.meaning_up;

//   // Render the card component with the determined meaning
//   return (
//     <div key={card.name}>
//       <h2>{card.name}</h2>
//       <p>{meaning}</p>
//     </div>
//   );
// });

function OneCard() {
  return (
    <>
<div className="fullDeckIntro"> <h1>Try a Single-Card Reading! </h1></div>
    </>
  );
}

export default OneCard;
