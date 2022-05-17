import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css";

export const Menu = () => {
	return (
		<div className="navigation">
			<NavLink to="/portail/mes-enquetes">Mes enquêtes</NavLink>
			<NavLink to="/portail/mon-compte">Mon compte</NavLink>
		</div>
	);
};
