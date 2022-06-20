import React, { useEffect, useState,useContext} from "react";
import { DataGrid, frFR } from "@mui/x-data-grid";
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
	const {getContacts} = useContext(AppContext);

	const [pageState, setPageState] = useState({
		isLoading: false,
		data: [],
		total: 0,
		page: 1,
		pageSize: 5
	  })
		
	  useEffect(() => {
		setPageState(old => ({ ...old, isLoading: true }))
		getContacts({...formValues,pageNo:pageState.page-1,pageSize:pageState.pageSize}).then(r=>setPageState(old => ({ ...old, isLoading: false, data: r.content, total: r.totalElements })
		))
	  // eslint-disable-next-line react-hooks/exhaustive-deps
	  }, [pageState.page, pageState.pageSize])

	return (
		<>
			<h2>Résultats</h2>
			<p>
				Cliquez sur l'identifiant du contact pour consulter ou modifier ses
				coordonnées.
			</p>
			<div style={{ height: 400, width: "90%" }}>
					<DataGrid
						localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
						columns={columns}
						getRowId={(row) => pageState.data.indexOf(row)}
						rows={pageState.data}
						rowCount={pageState.total}
						loading={pageState.isLoading}
						rowsPerPageOptions={[5, 10, 50]}
						pagination
						page={pageState.page - 1}
						pageSize={pageState.pageSize}
						paginationMode="server"
						onPageChange={(newPage) => {
						  setPageState(old => ({ ...old, page: newPage + 1 }))
						}}
						onPageSizeChange={(newPageSize) => setPageState(old => ({ ...old, pageSize: newPageSize }))}
					/>
			</div>
		</>
	);
};
