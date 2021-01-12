import axios from 'axios';
export default async function get(url) {
	try {
		var apiheaders = { "Content-Type": "application/json" }
		var apiUrl = url;

		const response = await axios({
			method: 'GET',
			url: apiUrl,
			timeout: 100000,
			headers: apiheaders
		});

		console.log("get response - successs ", response);
		return response;

	} catch (error) {
		console.log("get response - err", error);
		return error;
	}
}



