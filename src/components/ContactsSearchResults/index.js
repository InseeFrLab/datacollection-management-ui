import React, { useEffect, useState } from "react";
import { DataGrid, frFR } from "@mui/x-data-grid";
import { mockGetFilteredContacts } from "../../utils/api";
import { Typography } from "@mui/material";

const columns = [
	{ field: "id", headerName: "Idec", width: 200 },
	{ field: "lastName", headerName: "Nom", width: 400 },
	{ field: "firstName", headerName: "Prénom", width: 300 },
	{ field: "email", headerName: "Email", width: 300 },
	{
		field: "campaign",
		headerName: "Campagne / Unité enquêtée",
		width: 30,
		renderCell: (cellValues) => {
			return (
				<a href={`${cellValues.row.access}`} target="_blank" rel="noreferrer">
					Lien
				</a>
			);
		},
	},
];

export const ContactsSearchResults = ({ formValues }) => {
	const [contactsList, setContactsList] = useState(null);

	useEffect(() => {
		const load = async () => {
			const { data, error } = await mockGetFilteredContacts()()();
			if (!error) setContactsList(data);
		};
		if (!contactsList) load();
	}, [contactsList]);

	return (
		<>
			<h2>Résultats</h2>
			<p>
				Cliquez sur l'identifiant du contact pour consulter ou modifier ses
				coordonnées.
			</p>
			<div style={{ height: 400, width: "80%" }}>
				{contactsList && (
					<DataGrid
						localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
						rows={contactsList}
						columns={columns}
						getRowId={(row) => contactsList.indexOf(row)}
					/>
				)}
				{!contactsList && <Typography>Chargement en cours ...</Typography>}
			</div>
		</>
	);
};
