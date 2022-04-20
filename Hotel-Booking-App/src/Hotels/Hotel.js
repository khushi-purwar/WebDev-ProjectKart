import React from "react";
import Perk from "./Perk.js";
import RoomsLeft from "./RoomsLeft.js";
import BestsellerFlag from "./BestsellerFlag.js";

const Hotel = (props) => (
  <li className="hotel">
    <img
      src={props.hotel.imageSrc}
      alt="hotel main entrance"
      className="hotel__image"
    />
    <div className="hotel__text">
      <div className="hotel__header">
        <h3 className="hotel__name">{props.hotel.name}</h3>
        <span className="hotel__rating">{props.hotel.rating}</span>
      </div>
      <div className="hotel__main">
        <div>
          <span>{props.hotel.reviewCount} reviews</span>
          <Perk
            perk="Free cancellation"
            hasPerk={props.hotel.hasFreeCancellation}
          />
          <Perk
            perk="Breakfast included"
            hasPerk={props.hotel.includesBreakfast}
          />
          <Perk perk="Onsite parking" hasPerk={props.hotel.hasParking} />
          <Perk perk="Pet friendly building" hasPerk={props.hotel.allowsPets} />
          <Perk
            perk="Order food to your room"
            hasPerk={props.hotel.hasRoomService}
          />
          <Perk
            perk="Fitness center access"
            hasPerk={props.hotel.hasFitnessCenter}
          />
          <RoomsLeft roomsRemaining={props.hotel.roomsRemaining} />
        </div>
        <div className="hotel__main--right">
          <span>
            <span className="hotel__price">${props.hotel.pricePerNight}</span>{" "}
            per night
          </span>
          <span>Includes taxes and charges</span>
          <button className="hotel__see-rooms">
            See our last available rooms 
          </button>
        </div>
      </div>
    </div>
    <BestsellerFlag isBestseller={props.hotel.isBestSeller} />
  </li>
);

export default Hotel;
