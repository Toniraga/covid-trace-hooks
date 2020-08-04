import * as actionTypes from '../actions/actionTypes';

const initialState = {
    covidData: null,
	error: null,
	countryCode: null
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
			case actionTypes.START_REQUEST:
				return {
					...state,
					requestStart: true,
				};

			case actionTypes.REQUEST_SUCCESS:
				const res = action.response;
				const country = action.value;
				let newRes;
				if (!Array.isArray(res)) {
					newRes = null
				} 
				if (Array.isArray(res) && res.length > 1) {
					newRes = res.slice(Math.max(res.length - 10, 0));
				}
				return {
					...state,
					covidData: newRes,
					countryCode: country,
				};

			case actionTypes.REQUEST_FAIL:
				return {
					...state,
					error: action.error,
				};

			default:
				return state;
		}
}


export default reducer;