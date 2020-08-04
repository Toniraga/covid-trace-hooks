import React, {Fragment} from 'react'
import classes from './NavLinks.module.css';

import Modal from '../../../UI/Modal/Modal';

const NavLinks = (props) => {
	const {
		onShowFaqModal,
		showAboutModal,
		showFaqModal,
		onShowAboutModal,
	} = props;

	const { NavLinks, faq, about } = classes;


    const aboutLoad = {
			name: "ABOUT",
			titleOne: (
				<div>
					<h3>
						COVID TRACE is a resource that helps you conveniently monitor the
						spread of the COVID virus.
					</h3>
                    <p>Data is sourced from the <strong>John Hopkins' CSSE.</strong></p>
                    <p>My Name Is Eraga Tony and I'm Behind Covid Trace.</p>
				</div>
			)
		};

    const faqLoad = {
			name: "FAQ",
			titleOne: (
				<Fragment>
					<div>
						<h3>What Is This?</h3>
						<p>A Resource For Live Updated Information Regarding Covid 19.</p>
					</div>
					<div>
						<h3>Can I Only See My Country?</h3>
						<p>No, but by default it is set to your country.</p>
					</div>
					<div>
						<h3>Can I See Stats From Other Countries?</h3>
						<p>
							Of course, Just input your prefered country in the input field.
						</p>
					</div>
					<div>
						<h3>What If I Have Questions Or Suggestions?</h3>
						<p>Fantastic! You can email eragatony@gmail.com.</p>
					</div>
				</Fragment>
			),
		};

    return (
			<div className={NavLinks}>
				<div className={faq} onClick={onShowFaqModal} >
					FAQ
					{showFaqModal && faq ? (
						<Modal closeModal={showFaqModal} payload={faqLoad} />
					) : null}
				</div>
				<div className={about} onClick={onShowAboutModal}>
					ABOUT
					{showAboutModal ? (
						<Modal closeModal={showAboutModal} payload={aboutLoad} />
					) : null}
				</div>
			</div>
		);
}

export default NavLinks;
