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
	lastName: "",
	firstName: "",
	mail: "",
	surveyUnitId: "",
	siren: "",
	companyName: "",
	source: "",
	year: "",
	period: "",
};

export const ContactsUpdateForm = ({ idec }) => {
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
			<h3>Détail du contact</h3>
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
						id="filled-read-only-input"
						name="contactId"
						value={idec}
						onChange={handleChange}
						InputProps={{
							readOnly: true,
						}}
					/>
				</FormControl>
				<FormControl variant="standard">
					<InputLabel htmlFor="component-simple">Nom</InputLabel>
					<Input
						id="component-simple"
						name="lastName"
						value={formValues.lastName}
						onChange={handleChange}
					/>
				</FormControl>
				<FormControl variant="standard">
					<InputLabel htmlFor="component-simple">Prenom</InputLabel>
					<Input
						id="component-simple"
						name="firstName"
						value={formValues.firstName}
						onChange={handleChange}
					/>
				</FormControl>
				<FormControl variant="standard">
					<InputLabel htmlFor="component-simple">Fonction</InputLabel>
					<Input
						id="component-simple"
						name="position"
						value={formValues.position}
						onChange={handleChange}
					/>
				</FormControl>
				<FormControl variant="standard">
					<InputLabel htmlFor="component-simple">Mail</InputLabel>
					<Input
						id="component-simple"
						name="mail"
						value={formValues.mail}
						onChange={handleChange}
					/>
				</FormControl>
			</Box>
			<Button variant="outlined" color="primary" type="submit">
				Valider
			</Button>
			<Button
				variant="outlined"
				color="secondary"
				type="submit"
				onClick={resetForm}
			>
				Annuler
			</Button>
		</>
	);
};
