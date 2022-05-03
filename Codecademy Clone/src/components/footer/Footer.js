import React from "react";
import CompanyInfo from "./CompanyInfo/CompanyInfo";
import CourseCatalog from "./CourseCatalog/CourseCatalog";
import CopyWriteInfo from "./copyWriteInfo/CopyWriteInfo";
const Footer = () => {
	return (
		<div className="footerContainer__outer">
			<div className="footerContainer__inner">
				<div className="footerGrid">
					<CompanyInfo />
					<CourseCatalog />
				</div>

				<CopyWriteInfo />
			</div>
		</div>
	);
};

export default Footer;
