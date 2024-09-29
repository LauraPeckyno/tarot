import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect } from "react";
import { cardImages } from "../models/cardImages";
import CardCarousel from "./CardCarousel";

function Explore() {
  return (
    <>
    
    <div className="homeIntro"> <h1 className='spacer'>Explore All Cards! </h1>
    <hr width="70%"></hr>
    <div className="contentContainer">
    <div className="left">
    <p>There are many different Tarot decks available. The deck we use at Tarot Home is the Rider Waite Tarot, which was originally published in 1909. You can learn more about this deck <a href="https://en.wikipedia.org/wiki/Rider%E2%80%93Waite_Tarot" target="_blank">here</a>.</p>
    <p>Below, you can explore all of the cards in this tarot deck. The traditional meaning for each car is displayed to the right of the card image.</p></div>
    <div className="right"><img src="/images/cardfront.png" width="150px"/></div>
    </div></div>
      <CardCarousel />
    
    </>
  );
}

export default Explore;
