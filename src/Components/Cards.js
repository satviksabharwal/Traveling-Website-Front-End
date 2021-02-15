import React from "react";
import CardItem from "./CardItem";
import "../Styles/Cards.css";
import cardImageOne from "../images/img-9.jpg";
import cardImageTwo from "../images/img-2.jpg";
import cardImageThree from "../images/img-3.jpg";
import cardImageFour from "../images/img-4.jpg";
import cardImageFive from "../images/img-8.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
            src={cardImageOne}
            text="Explore the hidden waterfall deep inside the Amazon Jungle"
            label="Adventure"
            path="/services"
            />
            <CardItem 
            src={cardImageTwo}
            text="Travel through the Islands of Bali in a private Cruise"
            label="Luxury"
            path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem 
            src={cardImageThree}
            text="Set Sail in teh Atlantic Ocean visiting uncharted Waters"
            label="Mystery"
            path="/services"
            />
            <CardItem 
            src={cardImageFour}
            text="Experience Football on Top of the Himalayan Mountains"
            label="Adventure"
            path="/products"
            />
            <CardItem 
            src={cardImageFive}
            text="Ride through the Sahara Desert on a guided camel tour"
            label="Adrenaline"
            path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
