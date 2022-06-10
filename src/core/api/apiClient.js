import { fetcher } from "core/fetch/fetcher";
import { getEnvVar } from "core/env";

// const postRequest = (url) => (body) => fetcher(url, "POST", body);
const getRequest = (url) => fetcher(url, "GET", null);

// mock
export const getContactById=() => null;
export const getContactsByParams=() => null;

export const createApiClient = async() => {
	//const apiUrl = getEnvVar("API_URL");
	const apiUrl="https://datacollection-management-api.dev.insee.io"
	
	return {
		getFunctions: async () => getRequest(`${apiUrl}/function/all`),
		getFunctionById: async (id) => getRequest(`${apiUrl}/function/${id}`),
		getHierarchies: async () => getRequest(`${apiUrl}/hierarchy/all`),
		getHierarchyById: async (id) => getRequest(`${apiUrl}/hierarchy/${id}`),
		getContactById: (id) => getRequest(`${apiUrl}/contacts/${id}`),
		getContacts: (id) => getRequest(`${apiUrl}/contacts`)
	};
};
