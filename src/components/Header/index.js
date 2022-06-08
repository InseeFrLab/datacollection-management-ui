import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
	return (
		<div className="header">
			<img src={`${process.env.PUBLIC_URL}/logo-proto.png`} alt="alt" />

			<h1>Pilotage de la collecte et des contacts - Accueil</h1>
			<div className="kfc">
				<Link to="/portail">Se déconnecter</Link>
			</div>
		</div>
	);
};
