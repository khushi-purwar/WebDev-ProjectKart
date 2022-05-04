import React from "react";
import GetInspireLink from "./GetInspireLink";
import InspireLinkWithImg from "./InspireLinkWithImg";
import resourseImg from "../../../assests/img/resources.png";
import blogImg_1 from "../../../assests/svg/blog-1.svg";
import blogImg_2 from "../../../assests/svg/blog-2.svg";
import blogImg_3 from "../../../assests/svg/blog-3.svg";
import videoSvg from "../../../assests/svg/video.svg";
const GetInspire = () => {
	return (
		<div className="getInspireContainer">
			<h2>Get Inspired</h2>
			<div className="getInspire">
				<div className="getInspire__grid--1">
					<GetInspireLink
						contentType={"Video"}
						title={"What is a Programming Language?"}
					/>
					<GetInspireLink
						contentType={"BLOG"}
						title={"Our First Mobile Development Path Has Arrived"}
					/>
					<GetInspireLink
						contentType={"video"}
						title={"How to Think Like a Programmer"}
					/>
					<GetInspireLink
						contentType={"video"}
						title={"How Long Does it Take to Learn to Code?"}
					/>

					<InspireLinkWithImg
						img={resourseImg}
						contentType={"resources"}
						title={"Our best resources for students"}
						spanCol={"span-2-Col"}
					/>
				</div>

				<div className="getInspire__grid--2">
					<InspireLinkWithImg
						img={blogImg_2}
						contentType={"blog"}
						title={"How to stay motivated when learning to code"}
					/>
					<InspireLinkWithImg
						img={blogImg_3}
						contentType={"BLOG"}
						title={"What does a Data Scientist do?"}
					/>
					<InspireLinkWithImg
						img={videoSvg}
						contentType={"video"}
						title={"What Programming Language Should You Learn?"}
					/>
					<div className="getInspire__subgrid-col-3">
						<InspireLinkWithImg
							img={blogImg_1}
							contentType={"Article"}
							title={"Consider Design While You Build"}
							spanCol={"span-2-Col"}
						/>

						<div className="getInspire__subgrid-col-1">
							<GetInspireLink
								contentType={"article"}
								title={"What is programming?"}
							/>
							<GetInspireLink
								contentType={"video"}
								title={
									"Learn From Home Day: Intro to JavaScript—the Language of the Internet!"
								}
							/>
							<GetInspireLink
								contentType={"video"}
								title={"What is Front-End?"}
							/>
							<GetInspireLink
								contentType={"Blog"}
								title={"Myspace and the Coding Legacy"}
							/>
						</div>
					</div>

					<InspireLinkWithImg
						img={videoSvg}
						contentType={"Video"}
						title={"What is Back-End?"}
						spanCol={"span-1-Col"}
					/>
				</div>
			</div>

			<button className="getInspire--btn btn">See Full Catalog</button>
		</div>
	);
};

export default GetInspire;
