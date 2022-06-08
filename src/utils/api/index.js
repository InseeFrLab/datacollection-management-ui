import { rows, filteredRows, sleep } from "../mock/contacts";
import { fetcher } from "./fetcher";

/*const putRequest = (url) => (token) => (body) =>
	fetcher(url, token, "PUT", body);
const postRequest = (url) => (token) => (body) =>
	fetcher(url, token, "POST", body);
const deleteRequest = (url) => (token) => (body) =>
	fetcher(url, token, "DELETE", body);
*/
const getRequest = (url) => (token) => fetcher(url, token, "GET", null);

export const mockGetContacts = (apiUrl) => (id) => async (token) => {
	await sleep(2000);
	return { data: rows, status: 200, statusText: "ok", error: false };
};

export const mockGetFilteredContacts = (apiUrl) => (id) => async (token) => {
	await sleep(2000);
	return { data: filteredRows, status: 200, statusText: "ok", error: false };
};

export const getContacts = (apiUrl) => (params) => (id) => async (token) => {
	return getRequest(
		`https://datacollection-management-api.dev.insee.io/contacts`
	)();
};

export const getFilteredContacts =
	(apiUrl) => (params) => (id) => async (token) => {
		return getRequest(
			`https://datacollection-management-api.dev.insee.io/contacts/search`,
			{ survey: "", name: "", idec: "" }
		)();
	};
