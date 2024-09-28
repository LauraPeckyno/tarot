import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect } from "react";
import { cardImages } from "../models/cardImages";
import CardCarousel from "./CardCarousel";

function Explore() {
  return (
    <>
    <div className="fullDeckIntro"> <h1>Explore All Cards! </h1>
      <p>Below, you can explore all of the cards in this tarot deck. The traditional meaning for each car is displayed to the right of the card image.</p></div>
      <CardCarousel />
    </>
  );
}

export default Explore;
