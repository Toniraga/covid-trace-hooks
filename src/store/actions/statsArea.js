import * as actionTypes from './actionTypes';

export const startRequest = () => {
	return {
		type: actionTypes.START_REQUEST
	};
};

export const requestSuccess = (response, value) => {
	return {
        type: actionTypes.REQUEST_SUCCESS,
        response: response,
        value: value
	};
};

export const requestFail = (error) => {
	return {
        type: actionTypes.REQUEST_FAIL,
        error: error
	};
};

export const defaultCountry = () => {
    return {
        type: actionTypes.DEFAULT_COUNTRY
    }
}

export const request = (country, value) => {
	return dispatch => {
        if (country) {
            const requestOptions = {
            method: "GET",
            redirect: "follow",
        };
        fetch(
            `https://api.covid19api.com/total/country/${country}`,
            requestOptions
        )
        .then((response) => response.json())
        .then( result => {
            if (result) {
                dispatch(requestSuccess(result, value)) 
            }
        })
        .catch( error => dispatch(requestFail(error.message)));
        }
    }
};