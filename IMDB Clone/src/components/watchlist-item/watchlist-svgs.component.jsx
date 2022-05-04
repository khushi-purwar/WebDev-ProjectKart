import React from "react";

export const WatchlistRibbonSvg = ({ selectedToggle }) => (
  <svg
    className="watchlist-ribbon__bg"
    width="24px"
    height="34px"
    viewBox="0 0 24 34"
    xmlns="http://www.w3.org/2000/svg"
    role="presentation"
    fill={`${selectedToggle ? "#f5cf18" : null}`}
  >
    <polygon
      className="watchlist-ribbon__bg-ribbon"
      fill="#fff"
      points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
    ></polygon>
    <polygon
      className="watchlist-ribbon__bg-hover"
      points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"
    ></polygon>
    <polygon
      className="watchlist-ribbon__bg-shadow"
      points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"
    ></polygon>
  </svg>
);
