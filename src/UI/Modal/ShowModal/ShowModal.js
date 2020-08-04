import React, { Fragment } from "react";
import classes from "./ShowModal.module.css";
import DarkOverlay from "../DarkOverlay/DarkOverlay";

const ShowModal = (props) => {
	const { closeModal, payload } = props;
	const { ShowModal, header, btn, main } = classes;


	return (
		<Fragment>
			<DarkOverlay closeModal={() => closeModal} />
			<div className={ShowModal}>
				<div className={header}>
					<button className={btn} onClick={() => closeModal}>
						x
					</button>
					<h3> {payload.name} </h3>
				</div>
				<div className={main}>
                    {payload.titleOne}
                </div>
			</div>
		</Fragment>
	);
};

export default ShowModal;
