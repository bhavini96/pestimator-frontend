import userConstants  from '../../constants/userConstants';
import getCountyService from '../../services/stateManagment/getCountyService';

export default function getCountyAction(urlParameters) {
		
	return dispatch => {

		dispatch(request(urlParameters));

		getCountyService(urlParameters)
			.then(data => {
					dispatch(success(data));
				},
				error => {
					dispatch(failure(error));
				}
			);
	};

	function request(data) {
    return { type: userConstants.GET_COUNTY_REQUEST,data }
	}

	function success(data) {
		return { type: userConstants.GET_COUNTY_SUCCESS, data }
	}

	function failure(data) {
		return { type: userConstants.GET_COUNTY_FAILURE, data }
    }
    
}
