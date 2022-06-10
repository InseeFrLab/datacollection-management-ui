import { rows, filteredRows, sleep } from "../../core/mock/contacts";
import { fetcher } from "./fetcher";

/*const putRequest = (url) => (token) => (body) =>
	fetcher(url, token, "PUT", body);
const postRequest = (url) => (token) => (body) =>
	fetcher(url, token, "POST", body);
const deleteRequest = (url) => (token) => (body) =>
	fetcher(url, token, "DELETE", body);
*/
const getRequest = (url) => (params) => (token) =>
	fetcher(url, params, token, "GET", null);

export const mockGetContacts = (apiUrl) => (id) => async (token) => {
	await sleep(2000);
	return { data: rows, status: 200, statusText: "ok", error: false };
};

export const mockGetFilteredContacts = (apiUrl) => (id) => async (token) => {
	await sleep(2000);
	return { data: filteredRows, status: 200, statusText: "ok", error: false };
};

export const getContacts = (apiUrl) => (params) => (id) => (token) => {
	return getRequest(apiUrl)(params);
};

export const getContact = (apiUrl) => (params) => (id) => (token) => {
	return getRequest(`${apiUrl}/${id}`)();
};

export const getFilteredContacts = (apiUrl) => (params) => (id) => (token) => {
	return getRequest(
		`https://datacollection-management-api.dev.insee.io/contacts/search`,
		params
	)();
};
