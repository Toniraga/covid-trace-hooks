import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';

import Select from "react-select";
import countryList from "react-select-country-list";
import * as actions from '../../../store/actions/statsArea' ;

const SearchBox = (props) => {
	const options = countryList().getData();

	const [state, setState] = useState({
		options: options,
		value: null,
		country: null,
	});
	const { country } = state
	const { onChooseCountry, onRequestFail } = props

	const changeHandler = (value) => {
		if (value) {
			setState(prevState => ({ ...prevState, value }));
			const lowerValue = value.label.toLowerCase().split(" ").join("-");
			const newCode = value.value.toUpperCase().split(" ").join("-");
			onChooseCountry(lowerValue, newCode);
		}
	}


	useEffect(() => {
		const sendRequest = async () => {
			let countri = null;
			await fetch("https://ipapi.co/json")
				.then((res) => res.json())
				.then((response) => {
					countri = response.country_name;
					setState(prevState => ({
						...prevState,
						country: countri,
					}));
					onChooseCountry(country, response.country_code);
				})
				.catch((err) => {
					onRequestFail(err);
				});
		}
		sendRequest()
	}, [country, onChooseCountry, onRequestFail])

	
	function customTheme(theme) {
		return {
			...theme,
			colors: {
				...theme.colors,
				primary25: '#077b8a',
				primary: 'transparent',
				neutral0: '#a2d5c6'
			}
		}
	}

	return (
		<div style={{width: '250px'}}>
			<Select
				theme={customTheme}
				options={state.options}
				value={state.value}
				onChange={changeHandler}
				placeholder="Choose a Country"
				isSearchable
			/>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		requestStart: state.requestStart,
	};
}

const mapDispatchToProps = dispatch => {
	return {
		onChooseCountry: (country, value) => dispatch(actions.request(country, value)),
		onRequestFail: (error) => dispatch(actions.requestFail(error))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);