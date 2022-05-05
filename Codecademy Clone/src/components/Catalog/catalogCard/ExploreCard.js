/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const ExploreCard = ({ title, svg }) => {
	return (
		<a href="#" className="catalogCard exploreCard">
			<img src={svg} alt="" />
			<h3>{title}</h3>
		</a>
	);
};

export default ExploreCard;
