import React from "react";
import { Link, useLocation } from "react-router-dom";
import {} from "react-router-dom";
import "./header.css";
import { getRouteLabel } from "../../../../utils/utils.js";

export const Header = () => {
	return (
		<div className="header">
			<Link to="/pilotage/accueil">
				<img src={`${process.env.PUBLIC_URL}/logo-proto.png`} alt="alt" />
			</Link>
			<h1>
				Pilotage de la collecte et des contacts - {getRouteLabel(useLocation())}
			</h1>
			<div className="kfc">
				<Link to="/pilotage/accueil">Se déconnecter</Link>
			</div>
		</div>
	);
};
