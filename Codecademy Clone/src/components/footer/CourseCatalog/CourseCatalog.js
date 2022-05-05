/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const CourseCatalog = () => {
	return (
		<div className="courseContainer__outer">
			<h3>COURSE CATALOG</h3>
			<div className="courseContainer__inner">
				<div className="footerItems">
					<h3 className="footerItems__title">Languages</h3>
					<div className="footerItems__items courseItems">
						<a href="#">HTML & CSS</a>
						<a href="#">Python</a>
						<a href="#">JavaScript</a>
						<a href="#">Java</a>
						<a href="#">SQL</a>
						<a href="#">Bash/Shell</a>
						<a href="#">Ruby</a>
						<a href="#">C++</a>
						<a href="#">R</a>
						<a href="#">C#</a>
						<a href="#">PHP</a>
						<a href="#">Go</a>
						<a href="#">Swift</a>
						<a href="#">Kotlin</a>
					</div>
				</div>
				<div className="footerItems">
					<h3 className="footerItems__title">Subjects</h3>
					<div className="footerItems__items courseItems">
						<a href="#">Web Development</a>
						<a href="#">Data Science</a>
						<a href="#">Computer Science</a>
						<a href="#">Developer Tools</a>
						<a href="#">Machine Learning</a>
						<a href="#">Code Foundations</a>
						<a href="#">Web design </a>
						<a href="#">Full Catalog</a>
						<a href="#">Beta Content Roadmap</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseCatalog;
