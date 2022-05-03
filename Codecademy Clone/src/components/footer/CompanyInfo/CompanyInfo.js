/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import GooglePlayIcon from "../../../assests/svg/googleplay.svg";
import AppleStoreIcon from "../../../assests/svg/applestore.svg";

// import Info from "./Info";
const CompanyInfo = () => {
	return (
		<div className="infoContainer">
			<div className="footerItems">
				<h3 className="footerItems__title">Company</h3>
				<div className="footerItems__items">
					<a href="#">About</a>
					<a href="#">We're Hiring</a>
					<a href="#">Shop</a>
				</div>
			</div>
			<div className="footerItems">
				<h3 className="footerItems__title">Resources</h3>
				<div className="footerItems__items">
					<a href="#">Blog</a>
					<a href="#">CheatSheets</a>
					<a href="#">Articles</a>
				</div>
			</div>

			<div className="footerItems">
				<h3 className="footerItems__title">Support</h3>
				<div className="footerItems__items">
					<a href="#">Help Center</a>
				</div>
			</div>
			<div className="footerItems">
				<h3 className="footerItems__title">Community</h3>
				<div className="footerItems__items">
					<a href="#">forums</a>
					<a href="#">Chapter</a>
					<a href="#">Events</a>
				</div>
			</div>

			<div className="footerItems">
				<h3 className="footerItems__title">Individual plans</h3>
				<div className="footerItems__items">
					<a href="#">Pro membership</a>
					<a href="#">pro students</a>
				</div>
			</div>
			<div className="footerItems">
				<h3 className="footerItems__title">Enterprise plans</h3>
				<div className="footerItems__items">
					<a href="#">for business</a>
					<a href="#">for education</a>
				</div>
			</div>

			<div className="footerItems">
				<h3 className="footerItems__title">Mobile</h3>
				<div className="footerItems__items mobileIcon">
					<a href="#">
						<img
							src={GooglePlayIcon}
							alt="googleplay icon"
							className="googleplayIcon"
						/>
					</a>
					<a href="#">
						<img src={AppleStoreIcon} alt="applestore icon" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default CompanyInfo;
