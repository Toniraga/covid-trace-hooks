import React from 'react'


import classes from './NavigationItems.module.css'
import Logo from './Logo/Logo'
import SearchBox from './SearchBox/SearchBox';
import NavLinks from './NavLinks/NavLinks'

const NavigationItems = (props) => {
	const {
		showFaqModal,
		showAboutModal,
		onShowFaqModal,
		onShowAboutModal,
	} = props;
  
    return (
			<div className={classes.NavItems}>
				<Logo />
				<div className={classes.flex}>
					<SearchBox />
                    <NavLinks 
						showFaqModal={showFaqModal}
						showAboutModal={showAboutModal}
						onShowFaqModal={onShowFaqModal}
						onShowAboutModal={onShowAboutModal} />
				</div>
			</div>
		);
}


export default NavigationItems
