import React, { useState } from 'react'
import { connect } from 'react-redux';

import NavigationItems from '../../components/NavigationItems/NavigationItems';
import SkewArea from '../../components/SkewArea/SkewArea'
import StatsArea from '../../containers/StatsArea/StatsArea'

import classes from './Layout.module.css'

const Layout = () => {
	const [showFaqModal, setShowFaqModal] = useState(false)
	const [showAboutModal, setShowAboutModal ] = useState(false);

	const onShowFaqModal = () => {
		setShowFaqModal(!showFaqModal)
	};

	const onShowAboutModal = () => {
		setShowAboutModal(!showAboutModal)
	};

		let layout = (
			<div className={classes.Layout}>
				<NavigationItems
					showFaqModal={showFaqModal}
					showAboutModal={showAboutModal}
					onShowFaqModal={onShowFaqModal}
					onShowAboutModal={onShowAboutModal}
				/>
				<SkewArea />
				<StatsArea
					style={{
						position: "absolute",
					}}
				/>
			</div>
		);

		return layout;
}

const mapStateToProps = (state) => {
	return {
		requestStart: state.requestStart,
	};
};

export default connect(mapStateToProps)(Layout);
