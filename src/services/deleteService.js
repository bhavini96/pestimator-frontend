import axios from 'axios';
export default async function deleteService(url) {
	try {
		var apiheaders = { "Content-Type": "application/json" }
		var apiUrl = url;

		const response = await axios({
			method: 'DELETE',
			url: apiUrl,
			timeout: 100000,
			headers: apiheaders
		});

		console.log("delete response - successs", response)
		
		return response;
	} catch (error) {
		return error;
	}
}



