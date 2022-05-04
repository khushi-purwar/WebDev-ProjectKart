/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import userPhoto from "../../../assests/img/images.jpg";

const navBarItems = () => {
	return (
		<>
			<a href="#">My Home</a>

			<a href="#">Course Catalog</a>

			<a href="#">Resources</a>

			<a href="#">Community</a>

			<a href="#">Plans + Pricing</a>
			<img
				src={userPhoto}
				alt="User"
				className="navbarItems__icon user-photo"
			/>
			<button className="navbarItems__btn btn">Try pro for free</button>
		</>
	);
};

export default navBarItems;
