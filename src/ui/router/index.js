import React from "react";
import {
	BrowserRouter,
	Routes,
	Route,
	Outlet,
	Navigate,
} from "react-router-dom";
import { Header } from "ui/components/shared/header";
import { Footer } from "ui/components/shared/footer";
import { Menu } from "ui/components/shared/menu";
import { BreadCrumbs } from "ui/components/shared/breadCrumbs";
import { Users } from "ui/components/pages/users/users";
import { ContactsSearch } from "ui/components/pages/contacts/search";
import { ContactsDetail } from "ui/components/pages/contacts/detail";
import { Surveys } from "ui/components/pages/surveys";
import { Home } from "ui/components/pages/home";

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/pilotage/accueil" />} />
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
					<Route path="accueil" element={<Home />} />
					<Route path="utilisateurs" element={<Users />} />
					<Route path="enquetes" element={<Surveys />} />
					<Route path="contacts/:idec" element={<ContactsDetail />}></Route>
					<Route path="contacts" element={<ContactsSearch />} />
			
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
