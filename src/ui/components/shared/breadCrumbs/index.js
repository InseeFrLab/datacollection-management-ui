import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export const BreadCrumbs = ({ linkLabel }) => {
	return (
		
			<Breadcrumbs aria-label="breadcrumb">
				<Link underline="hover" color="inherit" href="/pilotage">
					Accueil
				</Link>
				<Typography color="text.primary">Gérer des contacts</Typography>
			</Breadcrumbs>
	
	);
};
