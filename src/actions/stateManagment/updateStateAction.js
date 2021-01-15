import userConstants  from '../../constants/userConstants';
import updateStateService from '../../services/stateManagment/updateStateService';

export default function updateStateAction(requestData) {
		
	return dispatch => {

		dispatch(request(requestData));

		updateStateService(requestData)
			.then(data => {
					dispatch(success(data,requestData));
				},
				error => {
					dispatch(failure(error));
				}
			);
	};

	function request(data) {
    return { type: userConstants.UPDATE_STATE_REQUEST,data }
	}

	function success(data,requestData) {
		return { type: userConstants.UPDATE_STATE_SUCCESS, data,requestData }
	}

	function failure(data) {
		return { type: userConstants.UPDATE_STATE_FAILURE, data }
    }
    
}
