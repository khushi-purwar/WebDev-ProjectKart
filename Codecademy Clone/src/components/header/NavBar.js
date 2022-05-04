/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logo from "../../assests/svg/codecademy-logo.com.svg";
import notification from "../../assests/svg/notification.svg";
import menu from "../../assests/svg/menu.svg";
import DropDownItems from "./toggleComponent/DropDownItems";
import NotificationItems from "./toggleComponent/NotificationItems";
import NavbarItems from "./navbarItems/NavBarItems";

const NavBar = () => {
	const [showNotification, setShowNotification] = useState(false);
	const [showDropdownItems, setShowDropdownItems] = useState(false);

	const notifToggleHandler = () => {
		const toggle = document.getElementById("navbar__toggle");
		const navbar = document.querySelector(".navbar");
		const browserWidth = document.body.offsetWidth;
		if (toggle.style.display === "block") {
			toggle.style.display = "none";
			setShowNotification(() => false);
			navbar.style.bottom = null;
		} else if (browserWidth < 1200) {
			setShowNotification(() => true);
			toggle.style.display = "block";
			navbar.style.bottom = "70%";
		}
	};
	const menuToggleHandler = () => {
		const toggle = document.getElementById("navbar__toggle");
		const notificationBtn = document.querySelector(
			".navbar__toggleNofi-btn"
		);
		const navbar = document.querySelector(".navbar");

		setShowNotification(() => false);

		if (toggle.style.display === "block") {
			toggle.style.display = "none";
			notificationBtn.style.display = "";

			navbar.style.bottom = null;
			setShowDropdownItems(() => false);
		} else {
			setShowDropdownItems(() => true);
			notificationBtn.style.display = "none";
			toggle.style.display = "block";
			navbar.style.bottom = 0;
		}
	};

	return (
		<div className="navbar">
			<img src={logo} alt="logo" className="navbar__logo" />
			<div className="navbarItems">
				<NavbarItems />
			</div>

			<div className="navbar__icons">
				<button
					onClick={notifToggleHandler}
					className="navbar__toggleNofi-btn"
				>
					<img
						src={notification}
						alt="notification"
						className=" navbar__icon--sml"
					/>
				</button>

				<button
					onClick={menuToggleHandler}
					className="navbar__toggleMenu-btn"
				>
					<img src={menu} alt="menu" className="navbar__icon--sml" />
				</button>
			</div>

			<div id="navbar__toggle">
				{showNotification ? <NotificationItems /> : null}
				{showDropdownItems ? (
					<>
						<div className="navbar__mobile-list">
							<DropDownItems />
							<button className="dropdown-mobile-btn btn">
								Try pro for free
							</button>
						</div>
					</>
				) : null}
			</div>
		</div>
	);
};

export default NavBar;
