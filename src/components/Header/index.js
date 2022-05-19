import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
	return (
		<div className="header">
			<img src={`${process.env.PUBLIC_URL}/logo-proto.png`} alt="alt" />

			<h1>Portail de réponse aux enquêtes de la statistique publique</h1>
			<div className="kfc">
				<Link to="/portail">Aide en ligne</Link>
				<Link to="/portail">Contacter l'assistance</Link>
				<Link to="/portail">Se déconnecter</Link>
			</div>
		</div>
	);
};
