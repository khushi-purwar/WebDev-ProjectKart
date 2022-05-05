/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const CourseCard = ({ title }) => {
	return (
		<a href="#" className="catalogCard courseCard">
			<p>Course</p>
			<h3>{title}</h3>

			<div className="courseCard--progress">
				<p className="courseCard--motivate-1">In Progress. . .</p>
				<p className="courseCard--motivate-2">Keep going</p>
			</div>
		</a>
	);
};

export default CourseCard;
