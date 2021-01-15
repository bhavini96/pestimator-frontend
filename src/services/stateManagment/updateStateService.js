
import put from "../putService"
import URL from  "../../constants/apiUrls";

async function updateStateService(requestData) {
	var url = URL.BASE + URL.UPDATE_STATE 

    var result = await put(url,requestData);
    
	return result;
}
export default updateStateService

