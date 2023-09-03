/* eslint-disable */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./globalStyles.css";
import MainDash from "./components/MainDash/MainDash";
import EntryForm from "./EntryForm";
import Login from "./components/LoginandReg/Login";
import Signup from "./components/LoginandReg/Signup";
import { PrivateRoute } from "./Hooks/CustomRoute";
import UserProfile from "./components/userProfile/UserProfile";
import PredectionChart from "./components/PredectionChart/PredectionChart";
import { useState, useEffect  } from "react";
import ProfilePage from "./components/userProfile/UserProfile";
import RightSide from "./components/RigtSide/RightSide";

function App() {
	const allRoute = [
		{
			path: "/",
			component: MainDash,
			roles: ["admin", "user"],
		},
		{
			path: "/entryform",
			component: EntryForm,
			roles: ["admin", "user"],
		},
		{
			path: "/profile",
			component: ProfilePage,
			roles: ["admin", "user"],
		},

		{
			path: "/advchart",
			component: PredectionChart,
			roles: ["admin", "user"],
		},
		{
			path: "/right",
			component: RightSide,
			roles: ["admin", "user"],
		},
		// Add more admin routes as needed
	];
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>

				<Routes>
					{allRoute.map((route, index) => (
						<Route
							key={index}
							path={route.path}
							element={
								<PrivateRoute
									roles={route.roles}
									component={route.component}
								/>
							}
						/>
					))}
				</Routes>
			</BrowserRouter>
			
		</>
	);
}

export default App;
