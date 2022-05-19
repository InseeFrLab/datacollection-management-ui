import React, { useEffect, useState } from "react";
import { Welcome } from "../Welcome";
import { DataGrid, frFR } from "@mui/x-data-grid";
import { getMySurveys } from "../../utils/api";
import { Typography } from "@mui/material";

const columns = [
	{ field: "surveyUnitId", headerName: "Référence unité enquêtée", width: 200 },
	{ field: "surveyName", headerName: "Nom de l'enquête", width: 400 },
	{ field: "reporting", headerName: "Suivi", width: 300 },
	{
		field: "access",
		headerName: "Accès",
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

export const SurveyList = () => {
	const [mySurveys, setMySurveys] = useState(null);

	useEffect(() => {
		const load = async () => {
			const { data, error } = await getMySurveys()()();
			if (!error) setMySurveys(data);
		};
		if (!mySurveys) load();
	}, [mySurveys]);

	return (
		<>
			<Welcome />
			<h2>La liste des mes enquêtes à moi</h2>
			<div style={{ height: 400, width: "80%" }}>
				{mySurveys && (
					<DataGrid
						localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
						rows={mySurveys}
						columns={columns}
					/>
				)}
				{!mySurveys && <Typography>Chargement en cours ...</Typography>}
			</div>
		</>
	);
};
