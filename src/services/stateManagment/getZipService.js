
import get from "../getService"
import URL from  "../../constants/apiUrls";

async function getZipService(urlParameters) {
	var url = URL.BASE + URL.GET_ZIP +urlParameters

    var result = await get(url);
    
	return result;
}
export default getZipService

