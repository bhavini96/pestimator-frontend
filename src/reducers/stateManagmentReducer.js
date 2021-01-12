import userConstants from '../constants/userConstants';

export function stateManagmentReducer(state = {}, action) {
	switch (action.type) {
		/*GET STATE LIST*/
		case userConstants.GET_STATE_REQUEST: {
			return {
				request:userConstants.GET_STATE_REQUEST,
			};
		}
		case userConstants.GET_STATE_SUCCESS: {
			return {
				request: userConstants.GET_STATE_SUCCESS,
				stateData: action.data.data
			};
		}
		case userConstants.GET_STATE_FAILURE: {
			return {
				request: userConstants.GET_STATE_FAILURE,
				error: action.data
			};
		}

		/*GET COUNTY LIST*/
		case userConstants.GET_COUNTY_REQUEST: {
			return {
				request:userConstants.GET_COUNTY_REQUEST,
			};
		}
		case userConstants.GET_COUNTY_SUCCESS: {
			return {
				request: userConstants.GET_COUNTY_SUCCESS,
				countyData: action.data.data
			};
		}
		case userConstants.GET_COUNTY_FAILURE: {
			return {
				request: userConstants.GET_COUNTY_FAILURE,
				error: action.data
			};
		}
	
		/*GET ZIP LIST*/
		case userConstants.GET_ZIP_REQUEST: {
			return {
				request:userConstants.GET_ZIP_REQUEST,
			};
		}
		case userConstants.GET_ZIP_SUCCESS: {
			return {
				request: userConstants.GET_ZIP_SUCCESS,
				zipData: action.data.data
			};
		}
		case userConstants.GET_ZIP_FAILURE: {
			return {
				request: userConstants.GET_ZIP_FAILURE,
				error: action.data
			};
		}
		default:
			return state
	}
}