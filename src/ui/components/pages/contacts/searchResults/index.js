import React, { useEffect, useState,useContext} from "react";
import { DataGrid, frFR } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";
//import {filteredRows} from "core/mock/contacts"
import {AppContext} from "ui/appContext"


const columns = [
	{
		field: "identifier",
		headerName: "Idec",
		width: 200,
		renderCell: (cellValues) => {
			return (
				<a href={`/pilotage/contacts/${cellValues.row.identifier}`} rel="noreferrer">
					{cellValues.row.identifier}
				</a>
			);
		},
	},
	{ field: "lastName", headerName: "Nom", width: 300 },
	{ field: "firstName", headerName: "Prénom", width: 300 },
	{ field: "email", headerName: "Email", width: 300 },
	{
		field: "campaign",
		headerName: "Campagne / Unité enquêtée",
		width: 100,
		renderCell: (cellValues) => {
			return (
				<a href={`/${cellValues.row.access}`} target="_blank" rel="noreferrer">
					Lien
				</a>
			);
		},
	},
];

export const ContactsSearchResults = ({ formValues }) => {
	const [contactsList, setContactsList] = useState(null);
	const {getContacts} = useContext(AppContext);

	const searchParams={...formValues, pageNo:0,pageSize:10}

	useEffect(() => {
		getContacts(searchParams).then(r=>
			setContactsList(r.content));	
			// eslint-disable-next-line
	}, []);

	return (
		<>
			<h2>Résultats</h2>
			<p>
				Cliquez sur l'identifiant du contact pour consulter ou modifier ses
				coordonnées.
			</p>
			<div style={{ height: 400, width: "90%" }}>
				{contactsList && (
					<DataGrid
						localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
						rows={contactsList}
						columns={columns}
						getRowId={(row) => contactsList.indexOf(row)}
					/>
				)}
				{!contactsList && <><Typography>Chargement en cours ...</Typography><CircularProgress /></>}
			</div>
		</>
	);
};
