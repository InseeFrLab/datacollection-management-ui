import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event) {
	event.preventDefault();
	console.info("You clicked a breadcrumb.");
}

export const BreadCrumbs = ({ linkLabel }) => {
	return (
		<div role="presentation" onClick={handleClick}>
			<Breadcrumbs aria-label="breadcrumb">
				<Link underline="hover" color="inherit" href="/pilotage">
					Accueil
				</Link>
				<Typography color="text.primary">Gérer des contacts</Typography>
			</Breadcrumbs>
		</div>
	);
};
