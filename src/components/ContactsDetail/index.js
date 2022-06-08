import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { ContactsUpdateForm } from "../ContactsUpdateForm";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}
function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		"aria-controls": `simple-tabpanel-${index}`,
	};
}

export const ContactsDetail = () => {
	let { idec } = useParams();
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<>
			<Box sx={{ width: "100%" }}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="basic tabs example"
					>
						<Tab label="Mettre à jour le contact" {...a11yProps(0)} />
						<Tab label="Renouveler le mot de passe" {...a11yProps(1)} />
						<Tab label="Associer / dissocier des droits" {...a11yProps(2)} />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<ContactsUpdateForm idec={idec} />
				</TabPanel>
				<TabPanel value={value} index={1}>
					Renouveler le mot de passe de {idec}
				</TabPanel>
				<TabPanel value={value} index={2}>
					Associer / dissocier des droits
				</TabPanel>
			</Box>
		</>
	);
};
