import React, { useState, useEffect,useContext } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import { Button } from "@mui/material";
import { AppContext } from "ui/appContext";

const defaultValues = {
	contactId: "",
	lastName: "",
	firstName: "",
	gender: "",
	email: "",
	phone: "",
	comment: "",
	function:"",
};

export const ContactsUpdateForm = ({ idec }) => {
	const [formValues, setFormValues] = useState(defaultValues);
	const [contact, setContact] = useState(null);
	const [contactUpdated, setContactUpdated] = useState(false);
	const {getContactById} = useContext(AppContext);
	
	useEffect(() => {
		getContactById(idec).then(r=>{	setContact(r);
			setFormValues(r);});
	}, []);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const updateContact = () => {
		setContactUpdated(true);
	};

	const resetForm = () => {
		setFormValues(defaultValues);
	};

	return (
		<>
			{contactUpdated && <div>Contact mis à jour</div>}
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
					<InputLabel htmlFor="component-simple">Civilité</InputLabel>
					<Input
						id="component-simple"
						name="gender"
						value={formValues.gender}
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
					<InputLabel htmlFor="component-simple">Fonction</InputLabel>
					<Input
						id="component-simple"
						name="function"
						value={formValues.function}
						onChange={handleChange}
					/>
				</FormControl>
				<FormControl variant="standard">
					<InputLabel htmlFor="component-simple">Mail</InputLabel>
					<Input
						id="component-simple"
						name="email"
						value={formValues.email}
						onChange={handleChange}
					/>
				</FormControl>
			</Box>
			<Button
				variant="outlined"
				color="primary"
				type="submit"
				onClick={updateContact}
			>
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
