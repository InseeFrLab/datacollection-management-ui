import React, { useState } from "react";
import { ContactsSearchForm } from "../searchForm";
import { ContactsSearchResults } from "../searchResults";

export const ContactsSearch = () => {
	const [formValues, setFormValues] = useState(null);

	const handleOnClickSearchButton = (formValues) => {
		setFormValues(formValues);
	};

	const handleOnClickCancelButton = (formValues) => {
		setFormValues(formValues);
	};
	return (
		<>
			<ContactsSearchForm
				handleOnClickSearchButton={handleOnClickSearchButton}
				handleOnClickCancelButton={handleOnClickCancelButton}
			/>
			{formValues ? <ContactsSearchResults formValues={formValues} /> : null}
		</>
	);
};
