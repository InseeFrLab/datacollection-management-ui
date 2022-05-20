import { rows, sleep } from "../mock/surveys";
import { fetcher } from "./fetcher";

/*const putRequest = (url) => (token) => (body) =>
	fetcher(url, token, "PUT", body);
const postRequest = (url) => (token) => (body) =>
	fetcher(url, token, "POST", body);
const deleteRequest = (url) => (token) => (body) =>
	fetcher(url, token, "DELETE", body);
*/
const getRequest = (url) => (token) => fetcher(url, token, "GET", null);

export const mockGetMySurveys = (apiUrl) => (id) => async (token) => {
	await sleep(2000);
	return { data: rows, status: 200, statusText: "ok", error: false };
};

export const getMySurveys = (apiUrl) => (id) => async (token) => {
	return getRequest(
		`https://datacollection-management-api.dev.insee.io/mySurveys/${id}`
	)();
};
