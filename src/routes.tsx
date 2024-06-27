import ControlAction from "@pages/ControlAction";
import Controller from "@pages/Controller";
import Home from "@pages/Home";
import Layout from "@pages/Layout";
import Login from "@pages/Login";
import Project from "@pages/Project";
import Projects from "@pages/Projects";
import UCAs from "@pages/UCAs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="projects" element={<Projects />} />
					<Route path="project/:id" element={<Project />} />
					<Route path="controller/:id" element={<Controller />} />
					<Route path="control-action/:id" element={<ControlAction />} />
					<Route path="controller/:id/uca" element={<UCAs />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;
