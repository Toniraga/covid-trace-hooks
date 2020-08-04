import React from "react";
import classes from "./DarkOverlay.module.css";

const DarkOverlay = (props) => {
	return (
		<div className={classes.DarkOverlay} onClick={props.closeModal}>
			{props.children}
		</div>
	);
};

export default DarkOverlay;