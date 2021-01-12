import userConstants  from '../../constants/userConstants';
import getZipService from '../../services/stateManagment/getZipService';

export default function getZipAction(urlParameters) {
		
	return dispatch => {

		dispatch(request(urlParameters));

		getZipService(urlParameters)
			.then(data => {
					dispatch(success(data));
				},
				error => {
					dispatch(failure(error));
				}
			);
	};

	function request(data) {
    return { type: userConstants.GET_ZIP_REQUEST,data }
	}

	function success(data) {
		return { type: userConstants.GET_ZIP_SUCCESS, data }
	}

	function failure(data) {
		return { type: userConstants.GET_ZIP_FAILURE, data }
    }
    
}
