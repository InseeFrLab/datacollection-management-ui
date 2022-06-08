import React from "react";
import { ContactsForm } from "../ContactsSearchForm";
import { ContactsList } from "../ContactsSearchResults";

export const Contacts = () => {
	return (
		<>
			<ContactsForm />
			<ContactsList />
		</>
	);
};
