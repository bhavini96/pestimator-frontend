import userConstants from '../constants/userConstants';

export function stateManagmentReducer(state = {}, action) {
	switch (action.type) {
		/*GET STATE LIST*/
		case userConstants.GET_STATE_REQUEST: {
			return {
				request:userConstants.GET_STATE_REQUEST,
				...state
			};
		}
		case userConstants.GET_STATE_SUCCESS: {
			return {
				request: userConstants.GET_STATE_SUCCESS,
				stateData: action.data.data,
				...state
			};
		}
		case userConstants.GET_STATE_FAILURE: {
			return {
				request: userConstants.GET_STATE_FAILURE,
				error: action.data,
				...state
			};
		}

		/*GET COUNTY LIST*/
		case userConstants.GET_COUNTY_REQUEST: {
			return {
				request:userConstants.GET_COUNTY_REQUEST,
				...state
			};
		}
		case userConstants.GET_COUNTY_SUCCESS: {
			return {
				request: userConstants.GET_COUNTY_SUCCESS,
				countyData: action.data.data,
				...state
			};
		}
		case userConstants.GET_COUNTY_FAILURE: {
			return {
				request: userConstants.GET_COUNTY_FAILURE,
				error: action.data,
				...state
			};
		}
	
		/*GET ZIP LIST*/
		case userConstants.GET_ZIP_REQUEST: {
			return {
				request:userConstants.GET_ZIP_REQUEST,
				...state
			};
		}
		case userConstants.GET_ZIP_SUCCESS: {
			return {
				request: userConstants.GET_ZIP_SUCCESS,
				zipData: action.data.data,
				...state
			};
		}
		case userConstants.GET_ZIP_FAILURE: {
			return {
				request: userConstants.GET_ZIP_FAILURE,
				error: action.data,
				...state
			};
		}

		/*Update State list*/
		case userConstants.UPDATE_STATE_REQUEST: {
			console.log("in userConstants.UPDATE_STATE_REQUEST")
			return {
				...state,
				type:userConstants.UPDATE_STATE_REQUEST,
				
			};
		}
		case userConstants.UPDATE_STATE_SUCCESS: {
			console.log("in userConstants.UPDATE_STATE_SUCCESS")
			let index =state.stateData.data.findIndex(x=>x._id == action.requestData.state_id);
		
			state.stateData.data[index].state_tax_rate = action.requestData.state_tax_rate
			return {
				...state,
				type: userConstants.UPDATE_STATE_SUCCESS,
				stateData: state.stateData
				
			};
		}
		case userConstants.UPDATE_STATE_FAILURE: {
			return {
				...state,
				type: userConstants.UPDATE_STATE_FAILURE,
				error: action.data,
				
			};
		}
		default:
			return state
	}
}