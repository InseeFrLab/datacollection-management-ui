import { fetcher } from "core/fetch/fetcher";

// const postRequest = (url) => (body) => fetcher(url, "POST", body);
const getRequest = (url, params) => fetcher(url, "GET", null, params);
const putRequest = (url, body) => fetcher(url, "PUT", body);

export const createApiClient = async() => {
	//const apiUrl = getEnvVar("API_URL");
	const apiUrl="https://datacollection-management-api.dev.insee.io"
	
	return {
		getContactById: (id) => getRequest(`${apiUrl}/contacts/${id}`),
		getContacts: (searchParams) => getRequest(`${apiUrl}/contacts/search`,searchParams),
		updateContact: (id, contactInfos) => putRequest(`${apiUrl}/contacts/${id}`,contactInfos)
	};
};
