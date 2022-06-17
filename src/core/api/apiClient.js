import { fetcher } from "core/fetch/fetcher";

// const postRequest = (url) => (body) => fetcher(url, "POST", body);
const getRequest = (url,params) => fetcher(url, "GET", null, params);

// mock
export const getContactById=() => null;
export const getContactsByParams=() => null;

export const createApiClient = async() => {
	//const apiUrl = getEnvVar("API_URL");
	const apiUrl="https://datacollection-management-api.dev.insee.io"
	
	return {
		getContactById: (id) => getRequest(`${apiUrl}/contacts/${id}`),
		getContacts: (searchParams) => getRequest(`${apiUrl}/contacts`,searchParams)
	};
};
