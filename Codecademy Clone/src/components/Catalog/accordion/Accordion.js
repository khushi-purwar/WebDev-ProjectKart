/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";
import UpArrow from "../../../assests/svg/up-arrow.svg";
import DownArrow from "../../../assests/svg/down-arrow.svg";

const Accordion = ({ Links, title }) => {
	const accordionBtn = useRef(null);
	const arrowIcon = useRef(null);

	const closeAccordion = () => {
		const isVisible = accordionBtn.current.style.display !== "none";

		if (isVisible) {
			accordionBtn.current.style.display = "none";
			arrowIcon.current.src = UpArrow;
		} else {
			accordionBtn.current.style.display = "flex";
			arrowIcon.current.src = DownArrow;
		}
	};

	return (
		<>
			<button className="accordion" onClick={closeAccordion}>
				<span>{title}</span>{" "}
				<img
					src={DownArrow}
					alt="arrow icon"
					className="arrow-icon"
					ref={arrowIcon}
				/>
			</button>
			<div className="panel" ref={accordionBtn}>
				{Links.map((link, index) => (
					<a href="#" key={index}>
						{link}
					</a>
				))}
			</div>
		</>
	);
};

export default Accordion;
