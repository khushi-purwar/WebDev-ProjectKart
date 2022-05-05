/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import course from "../../../assests/svg/agenda.svg";
import community from "../../../assests/svg/chat-group.svg";
import price from "../../../assests/svg/dollar.svg";
import home from "../../../assests/svg/home.svg";
import book from "../../../assests/svg/book.svg";
import userPhoto from "../../../assests/img/images.jpg";

const DropDownItems = () => {
	return (
		<>
			<a href="#">
				<img src={home} alt="home icon" className="navbar__icon--md" />
				My Home
			</a>

			<a href="#">
				<img
					src={course}
					alt="course icon"
					className="navbar__icon--md"
				/>
				Course Catalog
			</a>

			<a href="#">
				<img src={book} alt="book icon" className="navbar__icon--md" />
				Resources
			</a>

			<a href="#">
				<img
					src={community}
					alt="community icon"
					className="navbar__icon--md"
				/>
				Community
			</a>

			<a href="#">
				<img
					src={price}
					alt="price icon"
					className="navbar__icon--md"
				/>
				Plans + Pricing
			</a>

			<a href="#">
				<img
					src={userPhoto}
					alt="User"
					className="navbar__icon--md user-photo"
				/>
				Shanoy Sinclair
			</a>
		</>
	);
};

export default DropDownItems;
