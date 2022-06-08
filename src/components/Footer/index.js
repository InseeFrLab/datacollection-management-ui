import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
	return (
		<nav className="footer">
			<ul>
				<li>Version x.y.z</li>
				<li>
					<Link to="/mentions-legales">Mentions légales</Link>
				</li>
			</ul>
		</nav>
	);
};
