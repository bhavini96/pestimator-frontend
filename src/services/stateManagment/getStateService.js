
import get from "../getService"
import URL from  "../../constants/apiUrls";

async function getStateService(urlParameters) {
	var url = URL.BASE + URL.GET_STATE +urlParameters

    var result = await get(url);
    
	return result;
}
export default getStateService

