import { rows, sleep } from "../mock/surveys";
import { fetcher, fetcherFile } from "./fetcher";

const getRequest = (url) => (token) => fetcher(url, token, "GET", null);
const putRequest = (url) => (token) => (body) =>
	fetcher(url, token, "PUT", body);
const postRequest = (url) => (token) => (body) =>
	fetcher(url, token, "POST", body);
const deleteRequest = (url) => (token) => (body) =>
	fetcher(url, token, "DELETE", body);

export const mockGetMySurveys = (apiUrl) => (id) => async (token) => {
	await sleep(2000);
	return { data: rows, status: 200, statusText: "ok", error: false };
};

export const getMySurveys = (apiUrl) => (id) => async (token) => {
	return getRequest(
		"https://datacollection-management-api.dev.insee.io/my-surveys/toto"
	)();
};
