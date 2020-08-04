import React from "react";

import classes from "./Logo.module.css";

const Logo = (props) => {
	const curday = function (sp) {
	  	const today = new Date();
		let dd = today.getDate();
		let mm = today.getMonth() + 1; //As January is 0.
		let yyyy = today.getFullYear();

		if (dd < 10) dd = "0" + dd;
		if (mm < 10) mm = "0" + mm;
		return mm + sp + dd + sp + yyyy;
	};


	return (
		<div className={classes.dateLogo}>
			<div className={classes.date}> {curday("/")} </div>
			<div className={classes.logoTitle}>
				<span style={{fontSize: '20px'}}>COVID</span>TRACE
			</div>
		</div>
	);
};

export default Logo;
