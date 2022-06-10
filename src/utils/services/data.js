import { getContact, getContacts } from "../api";

export const getContactById = (id) => {
	return getContact(
		`https://datacollection-management-api.dev.insee.io/contacts`
	)()(id)();
};

export const getContactsByParams = (params) => {
	return getContacts(
		`https://datacollection-management-api.dev.insee.io/contacts/search`
	)({ ...params, pageSize: 10 })()();
};
