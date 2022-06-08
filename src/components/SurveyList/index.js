import React, { useEffect, useState } from "react";
import { Welcome } from "../Welcome";
import { DataGrid, frFR } from "@mui/x-data-grid";
import { getMySurveys } from "../../utils/api";
import { Typography } from "@mui/material";

const columns = [
	{ field: "surveyUnitId", headerName: "Référence unité enquêtée", width: 200 },
	{ field: "surveyWording", headerName: "Nom de l'enquête", width: 400 },
	{ field: "monitoringDate", headerName: "Suivi", width: 300 },
	{
		field: "access",
		headerName: "Accès",
		width: 30,
		renderCell: (cellValues) => {
			return (
				// <a href={`${cellValues.row.access}`} target="_blank" rel="noreferrer">
				// 	Lien
				// </a>
				<a
					href={
						"https://stromae-v2.dev.insee.io/visualize?questionnaire=https%3A%2F%2Fpogues-back-office.dev.insee.io%2Fapi%2Fpersistence%2Fquestionnaire%2Fjson-lunatic%2Fkzqsw3qa-q-0-1647855585412"
					}
					target="_blank"
					rel="noreferrer"
				>
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
			const { data, error } = await getMySurveys()("Z9ZURE2")();
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
						getRowId={(row) => row.surveyUnitId}
					/>
				)}
				{!mySurveys && <Typography>Chargement en cours ...</Typography>}
			</div>
		</>
	);
};
