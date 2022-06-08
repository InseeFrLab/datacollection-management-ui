import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
	Outlet,
	Navigate,
} from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Menu } from "../Menu";
import { Users } from "../Users";
import { ContactsSearch } from "../ContactsSearch";
import { ContactsDetail } from "../ContactsDetail";
import { Surveys } from "../Surveys";
import { BreadCrumbs } from "../BreadCrumbs";

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/pilotage" />} />
				<Route
					path="/pilotage"
					element={
						<>
							<Header />
							<Menu />
							<BreadCrumbs />
							<Outlet />
							<Footer />
						</>
					}
				>
					<Route path="enquetes" element={<Surveys />} />
					<Route path="utilisateurs" element={<Users />} />
					<Route path="contacts" element={<ContactsSearch />} />
					<Route path="contacts/:idec" element={<ContactsDetail />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
