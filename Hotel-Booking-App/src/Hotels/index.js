import React from "react";
import Hotel from "./Hotel.js";
import { hotels } from "../data.js";

const renderHotel = (hotel) => <Hotel key={hotel.id} hotel={hotel} />;

const HotelsList = (props) => {
  /* see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter to learn how the .filter array method works

  see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every to learn how the .every array method works
  */
  const filterCallback = (hotel) => {
    const everyCallback = (filter) => hotel[filter];
    return props.selectedFilters.every(everyCallback);
  };
  const filteredHotels = hotels.filter(filterCallback);

  const hotelListElements = filteredHotels.map(renderHotel);
  return <ul className="hotels-list">{hotelListElements}</ul>;
};

export default HotelsList;
