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

export const ContactsSearchForm = ({
	handleOnClickSearchButton,
	handleOnClickCancelButton,
}) => {
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
				<div className="form-contact">
					<FormControl variant="standard">
						<InputLabel htmlFor="component-simple">Idec</InputLabel>
						<Input
							id="component-simple"
							name="contactId"
							value={formValues.contactId}
							onChange={handleChange}
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
						<InputLabel htmlFor="component-simple">Email</InputLabel>
						<Input
							id="component-simple"
							name="mail"
							value={formValues.mail}
							onChange={handleChange}
						/>
					</FormControl>
				</div>
				<div className="form-ue">
					<FormControl variant="standard">
						<InputLabel htmlFor="component-simple">
							Identifiant unité enquêtée
						</InputLabel>
						<Input
							id="component-simple"
							name="surveyUnitId"
							value={formValues.surveyUnitId}
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl variant="standard">
						<InputLabel htmlFor="component-simple">Siren</InputLabel>
						<Input
							id="component-simple"
							name="siren"
							value={formValues.siren}
							onChange={handleChange}
						/>
					</FormControl>
					<FormControl variant="standard">
						<InputLabel htmlFor="component-simple">Raison sociale</InputLabel>
						<Input
							id="component-simple"
							name="companyName"
							value={formValues.companyName}
							onChange={handleChange}
						/>
					</FormControl>
				</div>
				<div className="form-source">
					<FormControl>
						<FormControl variant="standard">
							<InputLabel htmlFor="component-simple">Source</InputLabel>
							<Select
								name="source"
								value={formValues.source}
								onChange={handleChange}
							>
								{sourceItems.map((item) => (
									<MenuItem key={item.key} value={item.value}>
										{item.label}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</FormControl>
					<FormControl>
						<FormControl variant="standard">
							<InputLabel htmlFor="component-simple">
								Période de collecte
							</InputLabel>
							<Select
								name="period"
								value={formValues.period}
								onChange={handleChange}
							>
								{periodItems.map((item) => (
									<MenuItem key={item.key} value={item.value}>
										{item.label}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</FormControl>
					<FormControl>
						<FormControl variant="standard">
							<InputLabel htmlFor="component-simple">
								Année de collecte
							</InputLabel>
							<Select
								name="year"
								value={formValues.year}
								onChange={handleChange}
							>
								{yearItems.map((item) => (
									<MenuItem key={item.key} value={item.value}>
										{item.label}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</FormControl>
				</div>
			</Box>
			<Button
				variant="outlined"
				color="primary"
				type="submit"
				onClick={() => handleOnClickSearchButton(formValues)}
			>
				Lancer la recherche
			</Button>
			<Button
				variant="outlined"
				color="secondary"
				type="submit"
				onClick={() => {
					resetForm();
					handleOnClickCancelButton();
				}}
			>
				Annuler
			</Button>
			<Button variant="outlined" color="primary" type="submit">
				Ajouter un contact
			</Button>
		</>
	);
};
