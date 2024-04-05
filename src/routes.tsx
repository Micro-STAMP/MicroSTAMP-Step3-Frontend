import Home from "@pages/Home";
import Layout from "@pages/Layout";
import Project from "@pages/Project";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="project" element={<Project />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;
