import userConstants  from '../../constants/userConstants';
import getStateService from '../../services/stateManagment/getStateService';

export default function getStateAction(urlParameters) {
		
	return dispatch => {

		dispatch(request(urlParameters));

		getStateService(urlParameters)
			.then(data => {
					dispatch(success(data));
				},
				error => {
					dispatch(failure(error));
				}
			);
	};

	function request(data) {
    return { type: userConstants.GET_STATE_REQUEST,data }
	}

	function success(data) {
		return { type: userConstants.GET_STATE_SUCCESS, data }
	}

	function failure(data) {
		return { type: userConstants.GET_STATE_FAILURE, data }
    }
    
}
