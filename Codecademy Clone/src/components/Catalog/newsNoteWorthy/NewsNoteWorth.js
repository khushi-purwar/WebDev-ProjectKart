/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import ProgrammingLangCard from "../catalogCard/ProgrammingLangCard";
import CourseCard from "../catalogCard/CourseCard";

const NewsNoteWorth = () => {
	return (
		<div className="newsNoteWorth">
			<h2>New + Noteworthy</h2>
			<div className="newsGrid">
				<a href="#" className="newsGrid__link">
					<h3>Pro student</h3>
					<h1>Students can join Pro for 35% less</h1>
					<p>
						With new Codecademy Pro Student memberships, eligible
						college students can get all the benefits of Pro for
						more than 35% off the regular price. Study, practice,
						and apply the coding skills you need to develop your own
						future.
					</p>
				</a>
				<ProgrammingLangCard
					title={"design database with PostgreSQL"}
				/>
				<ProgrammingLangCard
					title={"create a professional website with wiz"}
				/>
				<CourseCard title={"learn react"} />
			</div>
		</div>
	);
};

export default NewsNoteWorth;
