
import get from "../getService"
import URL from  "../../constants/apiUrls";

async function getCountyService(urlParameters) {
	var url = URL.BASE + URL.GET_COUNTY +urlParameters

    var result = await get(url);
    
	return result;
}
export default getCountyService

