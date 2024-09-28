import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useEffect } from "react";
import { cardImages } from "../models/cardImages";
import CardCarousel from "./CardCarousel";

function Explore() {
  return (
    <>
      <div>Explore </div>
      <CardCarousel />
    </>
  );
}

export default Explore;
