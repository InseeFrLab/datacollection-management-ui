import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

export const Menu = () => {
	return (
		<div className="navigation">
			<NavLink to="/pilotage/accueil">Accueil</NavLink>
			<NavLink to="/pilotage/enquetes">Gérer des enquêtes</NavLink>
			<NavLink to="/pilotage/utilisateurs">
				Gérer des utilisateurs internes
			</NavLink>
			<NavLink to="/pilotage/contacts">Gérer des contacts</NavLink>
		</div>
	);
};
