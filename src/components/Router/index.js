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
import { SurveyList } from "../SurveyList";
import { UserAccount } from "../UserAccount";

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/portail" />} />
				<Route
					path="/portail"
					element={
						<>
							<Header />
							<Menu />
							<Outlet />
							<Footer />
						</>
					}
				>
					<Route path="mes-enquetes" element={<SurveyList />} />
					<Route path="mon-compte" element={<UserAccount />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
