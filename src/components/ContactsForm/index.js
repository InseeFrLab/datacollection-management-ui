import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import {
	yearItems,
	periodItems,
	sourceItems,
} from "../../utils/mock/select-items";
const defaultValues = {
	contactId: "",
	lastName: "Doe",
	firstName: "",
	mail: "",
	surveyUnitId: "",
	siren: "",
	companyName: "",
	source: "",
	year: "",
	period: "",
};

export const ContactsForm = () => {
	const [formValues, setFormValues] = useState(defaultValues);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({
			...formValues,
			[name]: value,
		});
	};
	const resetForm = () => {
		setFormValues(defaultValues);
	};
	return (
		<>
			<Box
				component="form"
				sx={{
					"& > :not(style)": { m: 1 },
				}}
				noValidate
				autoComplete="off"
			>
				<FormControl variant="standard">
					<InputLabel htmlFor="component-simple">Idec</InputLabel>
					<Input
						id="component-simple"
						name="contactId"
						value={formValues.contactId}
						onChange={handleChange}
					/>
				</FormControl>

				<FormControl>
					<FormControl variant="standard">
						<InputLabel htmlFor="component-simple">Source</InputLabel>
						<Select name="year" value={formValues.year} onChange={handleChange}>
							{yearItems.map((item) => (
								<MenuItem key={item.key} value={item.value}>
									{item.label}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</FormControl>
			</Box>
			<Button variant="outlined" color="primary" type="submit">
				Lancer la recherche
			</Button>
			<Button
				variant="outlined"
				color="secondary"
				type="submit"
				onClick={resetForm}
			>
				Annuler
			</Button>
			<Button variant="outlined" color="primary" type="submit">
				Ajouter un contact
			</Button>
		</>
	);
};
