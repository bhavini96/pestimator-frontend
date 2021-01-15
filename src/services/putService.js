import axios from 'axios';
export default async function put(url, requestData, contentType = 'application/json', responseType = 'json') {
	try {
		var apiUrl = url
		var apiheaders = { "Content-Type": contentType };
		
		var requestObject = {
			method: 'PUT',
			url: apiUrl,
			data: requestData,
			responseType: responseType,
			headers: apiheaders
		}

		const response = await axios(requestObject);

		console.log("put response - successs", response)
		
		return response;


	} catch (error) {

		return error;
	}

}