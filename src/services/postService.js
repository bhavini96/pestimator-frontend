import axios from 'axios';
export default async function post(url, requestData, contentType = 'application/json',responseType="json") {

	try {		
		var apiUrl = url;
		var apiheaders = { "Content-Type": contentType }
		
		const response = await axios({
			method: 'POST',
			url: apiUrl,
			data: requestData,
			responseType: responseType,
			headers: apiheaders
		});

		console.log("post response - successs", response)
		
		return response;

	} catch (error) {

		console.log("post - err", error);
     	return error;
	}

}

		